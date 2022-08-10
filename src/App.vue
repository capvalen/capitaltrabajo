<template>
	<!-- <nav>
		<router-link to="/">Inicio</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view/> -->
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="/images/logo.png" alt="" width="150"  />
			</a>
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
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Buscar empleo</a></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Lista de empresas</a></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Preguntas frecuentes</a></p>
				</div>
				<div class="encabezado py-2 px-3"> Candidatos </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Ingresar currículum</a></p>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Modificar currículum</a></p>
					<p class="py-1 ps-4 m-0 subItem pb-4"><a class="text-decoration-none" href="#">Eliminar currículum</a></p>
				</div>
				<div class="encabezado py-2 px-3"> Envío de ofertas </div>
				<div>
					<p class="py-1 ps-4 m-0 subItem"><a class="text-decoration-none" href="#">Oferta nueva</a></p>
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
			<div class="col-md-8 col-lg-9 col-xl-10">
				<h1 class="text-center my-2 mt-4">Bienvenido a Capital de Trabajo</h1>
				<h2 class="text-center my-2 text-secondary">Trabajo para todos los peruanos</h2>
				<div class="container">
					<div class="row row-cols-2">
						<div class="col">
							<div class="encabezado py-2 px-3"> Bolsa de trabajo </div>
							<p class="p-3">Capital de Trabajo es la puerta de acceso al mercado de trabajo en internet. ¡Encuentre trabajo ya! Podrá consultar nuestro directorio de empresas, y buscar empleo en nuestra bolsa de trabajo on-line.</p>
							<div class="d-flex justify-content-center mx-auto"><button class="btn btn-primary">Ver empleos</button></div>
						</div>
						<div class="col">
							<div class="encabezado py-2 px-3"> Bolsa de trabajo </div>
							<p class="p-3">Agregue su currículum gratis a nuestra base de datos y dese a conocer a cientos de empresas de todo el país. Además le regalaremos una página web gratis para poder tener acceso a su currículum desde internet.</p>
							<div class="d-flex justify-content-center mx-auto"><button class="btn btn-primary">Subir CV</button></div>

						</div>
					</div>
					<div class="row row-cols-2 mt-4">
						<div class="col">
							<div class="encabezado py-2 px-3"> Ofertas en su correo </div>
							<p class="p-3">Suscríbase a nuestra bolsa de trabajo y todas las semanas le enviaremos gratuitamente a su buzón de correo electrónico el listado con las nuevas ofertas de empleo que salgan publicadas en Capital de Trabajo.</p>
							<div class="d-flex justify-content-center mx-auto"><button class="btn btn-primary">Suscribirme</button></div>
						</div>
						<div class="col">
							<div class="encabezado py-2 px-3"> Publicar aviso </div>
							<p class="p-3">En Capital de Trabajo su empresa podrá publicar todas sus ofertas de empleo gratis, crear una página web con los datos de su empresa , y buscar entre miles de currículos a los mejores profesionales del país.</p>
							<div class="d-flex justify-content-center mx-auto"><button class="btn btn-primary">Publicar aviso</button></div>

						</div>
					</div>
				</div>
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
</style>
