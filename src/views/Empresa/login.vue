<template>

	<div class="row row-cols-2">
		<div class="col text-center">
			<img src="../../../public/images/loginLeft_empresas.png" alt="">
		</div>
		<div class="col-4 p-5">
			<h2>Inicie sesión como empleador o empresa</h2>
			<p>Ingrese los datos de su cuenta</p>
			<label for="">Correo</label>
			<input type="text" class="form-control mb-3" v-model="usuario">
			<label for="">Contraseña</label>
			<input type="password" class="form-control mb-3" v-model="clave">
			<button class="btn btn-primary" @click="ingresar()">Entrar a la plataforma</button>
			<hr>
			<h2>Regístrese su empresa</h2>
			<p>Si no dispone de una cuenta, puede crearse una acá:</p>
			<label for="">Razón social</label>
			<input type="text" class="form-control mb-3">
			<label for="">RUC</label>
			<input type="text" class="form-control mb-3">
			<label for="">Correo</label>
			<input type="text" class="form-control mb-3">
			<label for="">Contraseña</label>
			<input type="password" class="form-control mb-3">
			<label for="">Repita su contraseña</label>
			<input type="password" class="form-control mb-3">
			<button class="btn btn-primary">Entrar a la plataforma</button>
			<hr>
			<p>Si Ud. es una persona natural puede ingresar desde <a href="#">acá</a></p>
			<hr>
			<p>También puede utilizar la app en:</p>
			<center><img src="../../../public/images/google-play.svg" alt=""></center>
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
		mounted() {
			this.salir()
			this.comprobarLogin();
		},
		methods:{
			comprobarLogin(){
				const auth = getAuth();
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						const uid = user.uid;
						//console.log('que Usuario Es ' + uid)
						sessionStorage.setItem('uid', uid);
						sessionStorage.setItem('level', 2);//1 para empresa
						
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
						this.nuevo.uid = user.uid
						sessionStorage.setItem('uid', user.uid )
						sessionStorage.setItem('level', 2 )
						this.$router.push({ name: 'verPanel'});

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
			salir(){
				const auth = getAuth();
				signOut(auth).then(() => {
					this.limpiarCampos()
					
					//console.log('salio');
				}).catch((error) => {
					// An error happened.
				});
				sessionStorage.removeItem('uid');
				sessionStorage.removeItem('level');
				sessionStorage.removeItem('nombres');
				sessionStorage.removeItem('apellidos');
				sessionStorage.removeItem('correo');
				this.nuevo.uid=null
				this.nuevo.level=null
			},
			limpiarCampos(){
				document.getElementById('txtNombres').classList.remove('is-invalid')
				document.getElementById('txtApellidos').classList.remove('is-invalid')
				document.getElementById('txtCorreo').classList.remove('is-invalid')
				document.getElementById('txtClave1').classList.remove('is-invalid')
				document.getElementById('txtClave2').classList.remove('is-invalid')
			},
		}
	}
</script>

<style scoped>

</style>