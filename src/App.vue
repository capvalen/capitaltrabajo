<template>
	<!-- <nav>
		<router-link to="/">Inicio</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view/> -->
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand ms-4" to="/"><img src="/images/logo.png" alt="" width="150"  /></router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="#">Inicio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Blog</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Soy empresa</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="#">Publicar gratis</a>
					</li>
					<button class="btn btn-sm btn-outline-info px-4" id="btnIngresar" type="button">INGRESAR</button>
				</ul>
			</div>
		</div>
	</nav>
	<div class="container-fluid" id="contenedorBuscador">
		<div class="container ">
			<div class="row">
				<div class="col position-relative">
					<div class="input-group my-2 ">
						<input type="text" class="form-control" id="txtBuscadorPrincipal" placeholder="Puesto, empresa o palabra clave" v-model="texto" @keyup.enter="buscarGlobal()">
						<button class="btn btn-primary dropdown-toggle px-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnTodoPais"><i class="bi bi-geo-alt-fill"></i> Todo el país</button>
						<ul class="dropdown-menu dropdown-menu-end">
							<li @click="cambiarDepartamento(-1)"><a class="dropdown-item" href="#"><i class="bi bi-geo-alt-fill"></i> Todo el país</a></li>
							<li v-for="(departamento, index) in departamentosSolos" @click="cambiarDepartamento(index)"><a class="dropdown-item" href="#">{{capitalizar(departamento.departamento)}}</a></li>
						</ul>
						<button class="btn btn-primary px-4" @click="buscarGlobal()" id="btnBuscarTrabajo" type="button">Buscar trabajo</button>
					</div>
					<span class="position-absolute top-0 start-0 ms-4 mt-3 text-secondary" id="spanLupa"><i class="bi bi-search"></i></span>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
			<div class="row">
			<div class="col-md-4 col-lg-3 col-xl-2 px-0">
				<div class="encabezado py-2 px-3"> Bolsa de trabajo </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" to="/buscador">Buscar empleo</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'listaEmpresas'}">Lista de empleadores y empresas</router-link></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><router-link class="text-decoration-none" :to="{name: 'PreguntasPostulante'}">Preguntas frecuentes</router-link></p>
				</div>
				<div class="encabezado py-2 px-3"> Candidatos </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'loginCandidato'}">Ingresar / Registrarse</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'crearCV'}">Mi currículum</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'verDondePostule'}">Mis postulaciones</router-link></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Eliminar currículum</a></p>
					
				</div>
				<div class="encabezado py-2 px-3"> Envío de ofertas </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'publicarComplejo'}">Oferta nueva</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'misOfertas'}">Ver ofertas</router-link></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Mejorar alcance</a></p>
				</div>
				<div class="encabezado py-2 px-3"> Empleadores y empresas </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem d-none"><a class="text-decoration-none" href="#">Registrese como empresa</a></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'loginEmpresa'}">Ingrese como empresa</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'verPanel'}">Panel de control</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'buscarCV'}">Buscar currículos</router-link></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><router-link class="text-decoration-none" :to="{name: 'PreguntasPostulante'}">Preguntas frecuentes</router-link></p>
				</div>
			</div>
			<div class="col-md-8 col-lg-9 col-xl-10 p-3">
				
				<router-view :variable1='variable1' :refTodos="refTodos" :departamentos="departamentos" :refUsuario='refUsuario' :usuario="nuevo" :logueado='logueado'></router-view>

				<footer>
				<div class="row mt-5 p-4">
					<div class="col">
						<p>INSTITUCIONAL</p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">¿Quiénes somos?</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Contacto para personas</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Aviso legal y privacidad</a></p>
					</div>
					<div class="col">
						<p>CANDIDATOS</p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Preguntas frecuentes</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Empleos por categoría</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Empleos por departamento</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Empleos por industria</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Prueba de aptitudes</a></p>
					</div>
					<div class="col">
						<p>RECLUTADORES</p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Preguntas frecuentes de empresa</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Contacto para empresas</a></p>
						<p class="mb-0"><a href="#" class="text-decoration-none text-secondary">Buscar candidatos</a></p>

					</div>
					<div class="col">
						<div class=" d-flex ">
							<div class="redondeo mx-2"><a href="#"><i class="bi bi-facebook"></i></a></div>
							<div class="redondeo mx-2"><a href="#"><i class="bi bi-twitter"></i></a></div>
							<div class="redondeo mx-2"><a href="#"><i class="bi bi-instagram"></i></a></div>
						</div>
						<div class="w-50 mt-3 text-center">
							<img src="../public/images/google-play.svg" alt="">
						</div>
					</div>
						
				</div>
				<hr>
				<p class="text-center">Copyright 2023</p>
			</footer>
			</div>
		</div>
			
	</div>
	
</template>

<script>
import firebase from "./firebaseInit";
import {collection, getDocs, query, where, orderBy, startAt, endAt } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default{
	data(){
		return {
			departamentoId:-1,
			departamentos:['Extranjero', 'Cualquier departamento', 'Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Cusco', 'El Callao', 'Huancavelica','Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno','San Martín', 'Tacna', 'Tumbes', 'Ucayali' ], departamentosSolos:[],
			variable1:'cont-variable', refTodos:null, refUsuario:null, logueado:false, nuevo:{nombres:'', apellidos:'', uid:'', level:1, }, texto:''
		}
	},
	mounted(){
		if(sessionStorage.getItem('uid')) this.extraerDatosLocal()
		else this.comprobarLoginFireBase();
		this.cargarDatos();
	},
	methods:{
		cargarDatos(){
			if(this.$route.params.filtro){
				let texto = this.$route.params.filtro;
				this.busqueda.texto = texto
				this.buscarEmpleos();
			}
		
			this.axios.post(this.servidor+'Ubigeo.php',{pedir: 'departamentos'})
			.then(resp=> this.departamentosSolos = resp.data )
		},
		comprobarLoginFireBase(){
				const auth = getAuth();
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						const uid = user.uid;
						//console.log('que Usuario Es ' + uid)
						sessionStorage.setItem('uid', uid);
						sessionStorage.setItem('level', 1);//1 para candidato
						this.logueado=true;
						
						const q = query( this.refUsuario , where('id', '==', uid));
						const qSnapshot = await getDocs(q);
						qSnapshot.forEach(doc =>{
							const usuario = doc.data();
							sessionStorage.setItem('uid', user.uid )
							sessionStorage.setItem('nombres', usuario.nombres )
							sessionStorage.setItem('apellidos', usuario.apellidos )
							this.nuevo.uid = user.uid;
							this.nuevo.nombres = usuario.nombres
							this.nuevo.apellidos = usuario.apellido
							this.nuevo.level = 1 //1 para candidato
						})
						
					} else {
						this.logueado=false;
						this.nuevo.uid='';
						this.nuevo.nombres='';
						this.nuevo.apellidos='';
						this.nuevo.level=1;
						sessionStorage.removeItem('uid');
						sessionStorage.removeItem('level');
						sessionStorage.removeItem('nombres');
						sessionStorage.removeItem('apellidos');
					}
				});
			},
		extraerDatosLocal(){
			this.nuevo.uid = sessionStorage.getItem('uid')
			this.nuevo.nombres = sessionStorage.getItem('nombres')
			this.nuevo.apellidos = sessionStorage.getItem('apellidos')
			this.nuevo.level = sessionStorage.getItem('level')
			this.logueado = true;
		},
		async cargarFirebase(){
			this.refTodos = collection(firebase.db, "todos");
			this.refUsuario = collection(firebase.db, "usuarios");
			
			const departamentos = await getDocs( query( collection(firebase.db, "departamentos"), orderBy('nombre', 'asc') ) );
			departamentos.docs.map(doc => {
				const departamento = doc.data();
				departamento.id = doc.id
				this.departamentos.push( departamento )
			});
			//console.log(this.departamentos);

			//todos forma google
			/* const querySnapshot = await getDocs( this.refTodos );
			querySnapshot.forEach((doc) => {
				 console.log(doc.id, " => ", doc.data());
				//console.log(doc.data().text);
			}); */

			//todos forma separada
			/* const citiesCol = collection(db, 'todos')
			const cityCaptura = await getDocs(citiesCol);
			const cityList = cityCaptura.docs.map(doc => doc.data());
			console.log(cityList); */

			//todos con where
			/* const q = query(collection(db, "todos"), where("text", ">=", 'mundo'));
			//const q = query(refTodos, orderBy('text'), startAt('mundo') );

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
			}); */

		},
		buscarGlobal(){
			this.$router.push({ name: 'buscarTexto', params:{filtro: this.texto}});
		},
		cambiarDepartamento(index){
			this.departamentoId=index;
			if(index==-1){
				document.getElementById('btnTodoPais').innerHTML = '<i class="bi bi-geo-alt-fill"></i> Todo el país';
			}else{
				document.getElementById('btnTodoPais').innerHTML = '<i class="bi bi-house"></i> '+ this.capitalizar(this.departamentosSolos[index].departamento);
			}
		},
		capitalizar(text) { return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); },
	}
}
</script>

<style>
#btnIngresar{
	font-weight: bold;
}
#btnIngresar:hover{
	color:white;
}
.active{
	font-weight: bold;
	color: #0dcaf0!important;
}
 #txtBuscadorPrincipal{
padding-left: 35px;
}
#spanLupa{z-index:6}
#contenedorBuscador{
	background: rgb(35,102,255);
background: linear-gradient(69deg, rgba(35,102,255,1) 0%, rgba(0,212,255,1) 100%);
}
#btnTodoPais{
	border: 1px solid #ced4da;
	color:#0042fd;
	background-color: white;
}
#btnBuscarTrabajo{
	background-color: #0042fd;
	color:white;
}
.encabezado{
	background-color: #3452FE;
	color:white;
	font-weight: bold;
}
.subItem{background-color: #AFC4F9;}
.subItem>a{
	color:#3452FE!important;
	font-weight: bold;
}
.btn-primary{
	background-color:#3452FE;
}
footer a:hover{
	color: #354242!important;
}
footer i{font-size: 1.4rem;}
.redondeo{border: 1px solid #cdcdcd;
	width: 40px;
	height: 40px;
	display: flex;
	align-content: center;
	justify-content: center;
	border-radius: 50%;
	align-items: center;
}
.redondeo>a{color: #6c6c6c!important;}
hr{color:#545454}
.navbar-brand{cursor:pointer;}
</style>
