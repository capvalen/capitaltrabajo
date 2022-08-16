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
						<input type="text" class="form-control" id="txtBuscadorPrincipal" placeholder="Puesto, empresa o palabra clave">
						<button class="btn btn-primary dropdown-toggle px-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnTodoPais"><i class="bi bi-geo-alt-fill"></i> Todo el país</button>
						<ul class="dropdown-menu dropdown-menu-end">
							<li @click="cambiarDepartamento(-1)"><a class="dropdown-item" href="#"><i class="bi bi-geo-alt-fill"></i> Todo el país</a></li>
							<li v-for="(departamento, index) in departamentos" @click="cambiarDepartamento(index)"><a class="dropdown-item" href="#">{{departamento}}</a></li>
						</ul>
						<button class="btn btn-primary px-4" id="btnBuscarTrabajo" type="button">Buscar trabajo</button>
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
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'listaEmpresas'}">Lista de empresas</router-link></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><router-link class="text-decoration-none" :to="{name: 'PreguntasPostulante'}">Preguntas frecuentes</router-link></p>
				</div>
				<div class="encabezado py-2 px-3"> Candidatos </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'loginCandidato'}">Registrarse</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'crearCV'}">Ingresar currículum</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Modificar currículum</a></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Eliminar currículum</a></p>
				</div>
				<div class="encabezado py-2 px-3"> Envío de ofertas </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><router-link class="text-decoration-none" :to="{name: 'publicar'}">Oferta nueva</router-link></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Modificar oferta</a></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Eliminar oferta</a></p>
				</div>
				<div class="encabezado py-2 px-3"> Empresas </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Registre su empresa</a></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Entrar al sistema</a></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Panel de control</a></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Buscar currículos</a></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Pregutnas frecuentes</a></p>
				</div>
			</div>
			<div class="col-md-8 col-lg-9 col-xl-10 p-3">
				<router-view></router-view>
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
						<div class="w-50 mt-3">
							<center><img src="../public/images/google-play.svg" alt=""></center>
						</div>
					</div>
						
				</div>
				<hr>
				<p class="text-center">Copyright 2022</p>
			</footer>
			</div>
		</div>
			
	</div>
	
</template>

<script>
export default{
	data(){
		return {
			departamentoId:-1,
			departamentos:['Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Cusco', 'El Callao', 'Huancavelica','Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno','San Martín', 'Tacna', 'Tumbes', 'Ucayali' ],
		}
	},
	methods:{
		cambiarDepartamento(index){
			this.departamentoId=index;
			if(index==-1){
				document.getElementById('btnTodoPais').innerHTML = '<i class="bi bi-geo-alt-fill"></i> Todo el país';
			}else{
				document.getElementById('btnTodoPais').innerHTML = '<i class="bi bi-house"></i> '+this.departamentos[index];
			}
		}
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
