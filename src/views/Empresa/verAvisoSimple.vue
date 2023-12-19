<template>
	<div class="container" v-if="aviso.id && aviso.tipo==1 && (aviso.publico==1 || aviso.activo==0)">
		<h3 class="">{{capitalizar(aviso.cargo)}}</h3>
		<div class="row ">
			<div class="col-12">
				<span>{{empresa.razonSocial}} <span class="text-warning"><i class="bi bi-star-fill"></i></span> <span>4.8</span> </span> 
				<span class="mx-3" >Sueldo a tratar</span>
				<span class="mx-3">{{empresa.provincia}}, {{ empresa.departamento }}</span>
			</div>
			<div class="col ps-5 d-none">
				<button class="btn btn-outline-primary btn-sm	px-4"><i class="bi bi-diamond-half"></i> Postular</button>
			</div>
		</div>

		<div class="row row-cols-2 my-3">
			<div class="col">
				<h5 class="text-muted mb-3">Acerca del puesto</h5>
				<div class="w-75"><img v-if="aviso.foto!=''" :src="'/images/simples/'+aviso.foto" class="img-fluid my-3 "></div>
			</div>
			<div class="col">

				<div class="encabezado py-2 px-3 my-2 w-75"> Funciones extras </div>
				<div class="ms-4">
					<p v-if="aviso.funciones" class="mb-0" v-html="capitalizar(aviso.funciones).replace(/\n/g, '<br>')"></p>
					<p v-else>No se indicó</p>
				</div>

				<div class="encabezado py-2 px-3 my-2 w-75"> Detalles </div>
				<div class="ms-4">
					<p v-if="aviso.complemento" class="mb-0" v-html="capitalizar(aviso.complemento).replace(/\n/g, '<br>')"></p>
					<p v-else>No se indicó</p>
				</div>
				
				<h5 class="text-muted mt-3">Área</h5>
				<div class="ms-4"> <span>{{ aviso.nomArea }}</span> </div>
				<h5 class="text-muted mt-3">Ubicación</h5>
				<div class="ms-4"> <span>{{ capitalizar(aviso.nomDepartamento) }} - {{ capitalizar(aviso.nomProvincia) }}</span> </div>
				<h5 class="text-muted mt-3">Vacantes</h5>
				<div class="ms-4"> <span>{{ aviso.vacantes == 1 ? '1 plaza' : aviso.vacantes+ ' plazas' }}</span> </div>
				<h5 class="text-muted mt-3">Nivel</h5>
				<div class="ms-4"> <span>Practicante</span> </div>
				
				<h5 class="text-muted mt-3">Personal solicitado</h5>
				<ul class="ms-3">
					<li class="text-capitalize" vfor v-for="personal in personales">{{ personal.personal }}</li>
				</ul>
				
				
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
		name: 'verAvisoSimple',
		data() {
			return {
				aviso:[], empresa:[], estudios:['Ninguno','Primaria incompleta','Primaria completa','Secundria incompleta','Secundria completa','Superior','Técnico'], idiomas:[], licencias:[], personales:[]
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
					this.aviso = resp.data.anuncio; this.empresa = resp.data.empresa; this.idiomas = resp.data.idiomas; this.licencias = resp.data.licencias;
					this.personales = resp.data.personal;
				})
			},
			capitalizar(text) {
				if (text)
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