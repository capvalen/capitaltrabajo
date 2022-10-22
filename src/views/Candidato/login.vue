<template>

	<div class="row row-cols-2">
		<div class="col text-center">
			<img src="../../../public/images/loginLeft.png" alt="">
		</div>
		<div class="col-4 p-5" v-if="!logueado">
			<h2>Inicie sesión</h2>
			<p>Ingrese los datos de su cuenta</p>
			<label for="">Correo</label>
			<input type="text" class="form-control mb-3" v-model="usuario">
			<label for="">Contraseña</label>
			<input type="password" class="form-control mb-3" v-model="clave">
			<button class="btn btn-primary" @click="ingresar"><i class="bi bi-box-arrow-right"></i> Entrar a la plataforma</button>
			<hr>
			<h2>Regístrese</h2>
			<p>Si no dispone de una cuenta, puede crearse una acá:</p>
			<form >
				<label for="">Nombres</label>
				<div class="has-validation">
					<input type="text" class="form-control " id="txtNombres" v-model="nuevo.nombres">
				</div>
				<label class="mt-3" for="">Apellidos</label>
				<div class="has-validation">
					<input type="text" class="form-control" id="txtApellidos" v-model="nuevo.apellidos">
				</div>
				<label class="mt-3" for="">Correo electrónico</label>
				<input type="email" class="form-control mt-3" id="txtCorreo" v-model="nuevo.correo" required>
				<label class="mt-3" for="">Contraseña</label>
				<input type="password" class="form-control 	" id="txtClave1" v-model="nuevo.clave1">

				<label class="mt-3" for="">Repita su contraseña</label>
				<div class="input-group has-validation">
					<input type="password" class="form-control " id="txtClave2" v-model="nuevo.clave2">
					<div id="validationServer" class="invalid-feedback">
						Revise que ambas claves coincidan
					</div>
				</div>
				<button class="btn btn-outline-primary mt-3" @click="guardarUsuario()"><i class="bi bi-person-plus"></i> Registrarse en la plataforma</button>
			</form>
			<hr>
			<p>Si Ud. es empresa puede ingresar desde <a href="#">acá</a></p>
			<hr>
			<p>También puede utilizar la app en:</p>
			<div class="text-center"><img src="../../../public/images/google-play.svg" alt=""></div>
		</div>
		<div class="col-4 p-5" v-else>
			<h2>Gracias por utilizar la plataforma</h2>
			<p>Actualmente ya estas logueado con este usuario: <span></span> </p>
			<p>Nombres: <span>{{nuevo.nombres}} {{nuevo.apellidos}}</span></p>
			<p>Correo: <span>{{nuevo.correo}}</span></p>
			<p>Puedes hacer uso de tu plataforma desde acá</p>
			<button class="btn btn-outline-primary"><i class="bi bi-columns-gap"></i> Ir a mi panel</button>
			<hr>
			<p>Si no eres tú, puedes salir de la cuenta actual</p>
			<div class="d-md-flex justify-content-md-end" @click="salir()"><button class="btn btn-outline-secondary"><i class="bi bi-door-open"></i> Cerrar sesión</button></div>

		</div>

	</div>
</template>

<script>
import firebase from "../../firebaseInit";
import { doc, setDoc, collection, addDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

	export default {
		data() {
			return {
				usuario:'', clave:'',
				nuevo:{correo:'', nombres:'', apellidos:'', clave1:'', clave2:''},
			}
		},
		mounted(){
			//this.salir()
			this.comprobarLogin();
		},
		props:['refUsuario', 'logueado'],
		methods:{
			comprobarLogin(){
				
				const auth = getAuth();
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						const uid = user.uid;
						//console.log('que Usuario Es ' + uid)
						sessionStorage.setItem('uid', uid);
						sessionStorage.setItem('level', 1);//1 para candidato
						
						const q = query( this.refUsuario , where('id', '==', uid));
						const qSnapshot = await getDocs(q);
						qSnapshot.forEach(doc =>{
							
							
							const usuario = doc.data();
							sessionStorage.setItem('nombres', usuario.nombres )
							sessionStorage.setItem('apellidos', usuario.apellidos )
							sessionStorage.setItem('correo', usuario.correo )
							this.nuevo.nombres = usuario.nombres
							this.nuevo.apellidos = usuario.apellidos
							this.nuevo.correo = usuario.correo
						})
						
					} else {
						this.logueado=false;
						this.nuevo.nombres='';
						this.nuevo.apellidos='';
						sessionStorage.removeItem('uid');
						sessionStorage.removeItem('level');
						sessionStorage.removeItem('nombres');
						sessionStorage.removeItem('apellidos');
						sessionStorage.removeItem('correo');
					}
				});
			},
			async ingresar(){
				if(this.usuario!='' && this.clave!=''){
					const auth = getAuth();
					signInWithEmailAndPassword(auth, this.usuario, this.clave)
					.then((userCredential) => {
						const user = userCredential.user;
					})
					.catch((error) => {
						
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(errorMessage);
						this.nuevo.correo = this.usuario
						
						if (errorMessage =='Firebase: Error (auth/invalid-email).'){
							alert('Correo o contraseña inválida')
						}
					});
				}
			},
			limpiarCampos(){
				document.getElementById('txtNombres').classList.remove('is-invalid')
				document.getElementById('txtApellidos').classList.remove('is-invalid')
				document.getElementById('txtCorreo').classList.remove('is-invalid')
				document.getElementById('txtClave1').classList.remove('is-invalid')
				document.getElementById('txtClave2').classList.remove('is-invalid')
			},
			async guardarUsuario(){
				event.preventDefault();
				this.limpiarCampos();
				if(this.nuevo.nombres=='' || this.nuevo.apellidos==''){
					document.getElementById('txtNombres').classList.add('is-invalid')
					document.getElementById('txtApellidos').classList.add('is-invalid')

				}else if(this.nuevo.clave1 != this.nuevo.clave2 || ( this.nuevo.clave1=='' || this.nuevo.clave1=='')){
					document.getElementById('txtClave1').classList.add('is-invalid')
					document.getElementById('txtClave2').classList.add('is-invalid')


				}else{
					const auth = getAuth();
					const user = auth.currentUser;
					if (!user){
						this.crearUsuario();
					}
				}
			},
			crearUsuario(){
				createUserWithEmailAndPassword(firebase.auth, this.nuevo.correo, this.nuevo.clave1)
						.then((userCredential) => {
							const user = userCredential.user;
							//forma 1
							//await setDoc( doc(collection(firebase.db, 'usuarios')), {nombre: 'opa'} )
							//Forma 2
							//addDoc(collection(firebase.db, 'tasks'), {titulo: 'no1'});
				
							addDoc( this.refUsuario , {
								nombres: this.nuevo.nombres,
								apellidos: this.nuevo.apellidos,
								correo: this.nuevo.correo,
								id: user.uid,
							});
							sessionStorage.setItem('nombres', this.nuevo.nombres);
							sessionStorage.setItem('apellidos', this.nuevo.apellidos);
							sessionStorage.setItem('correo', this.nuevo.correo);
							console.log('usuario registrado con éxito');
							
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							console.log(errorMessage);
							switch (errorMessage) {
								case 'Firebase: Error (auth/email-already-in-use).':
									document.getElementById('txtCorreo').classList.add('is-invalid')
									alert('El correo ya fue registrado');
									break;
								case 'Firebase: Error (auth/invalid-email).':
									alert('Correo electrónico inválido');break;
								case 'Firebase: Error (auth/missing-email).':
									document.getElementById('txtCorreo').classList.add('is-invalid')
									alert('Campo de correo faltante');break;
								case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
									document.getElementById('txtClave1').classList.add('is-invalid')
									document.getElementById('txtClave2').classList.add('is-invalid');
									alert('La contraseña debe ser mínimo de 6 caracteres');break;
							}
						})
			},
			salir(){
				const auth = getAuth();
				signOut(auth).then(() => {
					this.limpiarCampos()
					sessionStorage.removeItem('uid');
					sessionStorage.removeItem('level');
					sessionStorage.removeItem('nombres');
					sessionStorage.removeItem('apellidos');
					sessionStorage.removeItem('correo');
					//console.log('salio');
				}).catch((error) => {
					// An error happened.
				});
			}
		}
	}
</script>

<style scoped>

</style>