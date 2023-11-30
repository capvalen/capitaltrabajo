<template>
	<div v-if="aviso.id && (aviso.publico==1 || aviso.activo==0)">
		<h3 class="">{{capitalizar(aviso.cargo)}}, {{ aviso.complemento }}</h3>
		<div class="row row-cols-2">
			<div class="col">
				<span>{{empresa.razonSocial}} <span class="text-warning"><i class="bi bi-star-fill"></i></span> <span>4.8</span> </span> 
				<span class="mx-3" v-if="aviso.versueldo==0">Sueldo a tratar</span>
				<span class="mx-3" v-else>S/ {{parseFloat(aviso.sueldo).toFixed(2)}}</span>
				<span class="mx-3">{{empresa.provincia}}, {{ empresa.departamento }}</span>
			</div>
			<div class="col ps-5 d-none">
				<button class="btn btn-outline-primary btn-sm	px-4"><i class="bi bi-diamond-half"></i> Postular</button>
			</div>
		</div>

		<div class="row row-cols-2 my-3">
			

			<div class="col">
				<h5 class="text-muted mb-3">Acerca del puesto</h5>
				<div class="encabezado py-2 px-3 my-2 w-50"> Requisitos </div>
				<div class="ms-4">
					<p v-if="aviso.requisitos" class="mb-0" v-html="aviso.requisitos.replace(/\n/g, '<br>')"></p>
					<p v-else>No se solicita</p>
				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Funciones </div>
				<div class="ms-4">
					<p v-if="aviso.funciones" class="mb-0" v-html="aviso.funciones.replace(/\n/g, '<br>')"></p>
					<p v-else>No se solicita</p>

				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Competencias y habilidades </div>
				<div class="ms-4">
					<p v-if="aviso.competencias" class="mb-0" v-html="aviso.competencias.replace(/\n/g, '<br>')"></p>
					<p v-else>No se solicita</p>
				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Destrezas </div>
				<div class="ms-4">
					<p v-if="aviso.destrezas" class="mb-0" v-html="aviso.destrezas.replace(/\n/g, '<br>')"></p>
					<p v-else>No se solicita</p>
				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Beneficios </div>
				<div class="ms-4">
					<p v-if="aviso.beneficios" class="mb-0" v-html="aviso.beneficios.replace(/\n/g, '<br>')"></p>
					<p v-else>No se solicita</p>
					<p class="mb-0">Discapacitados: <span>{{ aviso.discapacitado == 1? 'Si': 'No' }}</span> </p>

				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Tiempo del puesto </div>
				<div class="ms-4">
					<p class="mb-0" v-if="aviso.tiempo==-1">No especifica</p>
					<p class="mb-0" v-if="aviso.tiempo==1">Jornada extraordinaria</p>
					<p class="mb-0" v-if="aviso.tiempo==2">Medio Tiempo</p>
					<p class="mb-0" v-if="aviso.tiempo==3">Tiempo completo</p>
				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Requerimientos </div>
				<div class="ms-4">
					<p class="mb-0">Años de experiencia: 
						<span v-if="aviso.experiencia == -1">No requiere experiencia</span>
						<span v-if="aviso.experiencia == 1">1 año</span>
						<span v-if="aviso.experiencia == 2">2 años</span>
						<span v-if="aviso.experiencia == 3">3 años</span>
						<span v-if="aviso.experiencia == 4">4 años a más</span>
					</p>
					<p class="mb-0">Educación Mínima: 
						<span v-if="aviso.estudios==-1">No especifica</span>
						<span v-else>{{estudios[aviso.estudios-1]}}</span>
					</p>
					<p class="mb-0">Edad: De <span>{{aviso.edadMinima}} a {{ aviso.edadMaxima }}</span> años </p>
					<p class="mb-0">Idiomas: <span>{{ obtenerIdiomas }}</span> </p>
					<p class="mb-0">Permiso de conducir: <span>{{ obtenerLicencias }}</span> </p>
					<p class="mb-0">Disponibilidad de viaje: <span>{{ aviso.viaje==1? 'Si': 'No' }}</span> </p>
					<p class="mb-0">Cambio de residencia: <span>{{ aviso.residencia==1? 'Si': 'No' }}</span> </p>
				</div>
				<div class="encabezado py-2 px-3 my-2 w-50"> Oferta </div>
				<div class="ms-4">
					<p class="mb-0">Puestos: {{ aviso.vacantes }}</p>
					<p class="mb-0">Salario: 
						<span v-if="aviso.versueldo==0">A tratar</span>
						<span v-else>S/ {{parseFloat(aviso.sueldo).toFixed(2)}}</span>
					</p>
					<p class="mb-0">Fecha de publicación: {{ horaLargo(aviso.registro) }}</p>
					<p class="mb-0">Fecha de contratación: {{ fechaLatam(aviso.inicio) }} ({{fechaDesde}})</p>
					<p class="mb-0">Fecha de cierre: {{ fechaLatam(aviso.fin) }} ({{fechaDesdeFin}})</p>
				</div>
				<div class="my-3 ms-5 d-none">
					<button class="btn btn-lg btn-outline-primary"><i class="bi bi-diamond-half"></i> Postular al puesto</button>
				</div>
			</div>
			<div class="col">
				<h5 class="text-muted">Acerca de la empresa contratante</h5>
				<h3>{{empresa.razonSocial}}</h3>
				<h3 v-if="empresa.comercial">{{empresa.comercial}}</h3>
				<div class="row w-50">
					<div class="col-6 my-3">
						<img :src="'/images/logos/'+empresa.logo" class="img-fluid ">
					</div>
					<div class="col-12">
						<p><strong>RUC:</strong> {{empresa.ruc}}</p>
						<p><strong>Dirección:</strong> {{empresa.direccion}}</p>
						<p v-if="empresa.sede"><strong>Sede:</strong> {{empresa.sede}}</p>
						<p>{{empresa.descripcion}}</p>
						
						<div v-if="aviso.activo==1">
							<p v-if="empresa.correo"><strong>Correo:</strong> {{empresa.correo}}</p>
							<p v-if="empresa.celular1 && aviso.whatsapp==1"><strong>Celular:</strong> {{empresa.celular1}}</p>
							<p v-if="empresa.celular2 && aviso.whatsapp==1"><strong>Celular #2:</strong> {{empresa.celular2}}</p>
							<p v-if="empresa.whatsapp && aviso.whatsapp==1"><strong>Whatsapp:</strong> {{empresa.whatsapp}}</p>
							<p v-if="empresa.whatsapp2 && aviso.whatsapp==1"><strong>Whatsapp #2:</strong> {{empresa.whatsapp2}}</p>
							<p v-if="empresa.contacto"><strong>Contacto:</strong> {{empresa.contacto}}</p>
							<p v-if="empresa.puesto"><strong>Cargo:</strong> {{empresa.puesto}}</p>

							<a v-if="aviso.whatsapp==1" :href="'https://wa.me/51'+empresa.whatsapp" target="_blank" class="btn btn-lg btn-outline-success ms-2 my-1"><i class="bi bi-whatsapp"></i> Contactar vía Whatsapp</a>
							<a v-if="aviso.whatsapp==1" :href="'tel:'+empresa.celular1" target="_blank" class="btn btn-lg btn-outline-success ms-2 my-1"><i class="bi bi-whatsapp"></i> Realizar una llamada</a>
							<button class="btn btn-lg btn-outline-primary ms-2 my-1"><i class="bi bi-diamond-half"></i> Postular al puesto</button>
						</div>
						<div v-else>
							<p><i class="bi bi-stop-circle"></i> Ya no se aceptan postulantes</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		


	</div>
	<div class="container" v-else-if="aviso.publico==0">
		<h3>El aviso que intentas acceder aún no es público</h3>
		<p>Se paciente que la empresa pronto lo publicará</p>
	</div>
	<div class="container" v-else>
		<h3>Buscando operaciones</h3>
		<p>Ups, Parece que éste artículo no existe</p>
	</div>
</template>

<script>
	import moment from 'moment';
	export default {
		name: 'verAviso',
		data() {
			return {
				aviso:[], empresa:[], estudios:['Ninguno','Primaria incompleta','Primaria completa','Secundria incompleta','Secundria completa','Superior','Técnico'], idiomas:[], licencias:[]
			}
		},
		mounted() {
			this.verAviso()
		},
		methods: {
			verAviso(){
				let uid = this.$route.params.id;

				this.axios.post(this.servidor+'Anuncio.php', {pedir:'verAviso', corto: uid})
				.then(resp =>{
					this.aviso = resp.data.anuncio; this.empresa = resp.data.empresa; this.idiomas = resp.data.idiomas; this.licencias = resp.data.licencias
				})
			},
			capitalizar(text) {
				return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
			},
			fechaLatam(fecha){ return moment(fecha).format('DD/MM/YYYY') },
			horaLargo(fecha){ return moment(fecha).format('DD/MM/YYYY HH:mm a') }
		},
		computed: {
			obtenerIdiomas() {
				const idiomas = this.idiomas.map(item => item.idioma);
				const cadenaIdiomas = idiomas.join(', ');
				return 'Español '+ cadenaIdiomas;
			},
			obtenerLicencias() {
				const idiomas = this.licencias.map(item => item.idLicencia);
				const cadenaIdiomas = idiomas.join(', ');
				return cadenaIdiomas;
			},
			fechaDesde(){
				moment.locale('es')
				return moment(this.aviso.inicio).fromNow()
			},
			fechaDesdeFin(){
				moment.locale('es')
				return moment(this.aviso.fin).fromNow()
			},
		},
	}
</script>

<style scoped>

</style>