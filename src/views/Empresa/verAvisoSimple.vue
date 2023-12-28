<template>
	<div class="container" v-if="aviso.id && aviso.tipo==1 && (aviso.publico==1 || aviso.activo==0)">
		<div class="w-100 px-md-5 mx-auto"><img v-if="aviso.foto!=''" :src="'/images/simples/'+aviso.foto" class="img-fluid my-3 "></div>
		
		<div class="row row-cols-1 row-cols-md-2 my-3">
			
			<div class="col">
				<h5 class="text-muted mb-3">Acerca del puesto</h5>
				<h3 class="">{{capitalizar(aviso.cargo)}}</h3>

				<div class="encabezado py-2 px-3 my-2 w-75"> Vacantes </div>
				<div class="ms-4"> <span>{{ aviso.vacantes == 1 ? '1 plaza' : aviso.vacantes+ ' plazas' }}</span> </div>
				
				<div class="encabezado py-2 px-3 my-2 w-75"> Ubicación </div>
				<div class="ms-4"> <span>{{ capitalizar(aviso.nomDepartamento) }} - {{ capitalizar(aviso.nomProvincia) }}</span> </div>
			</div>
			<div class="col">
				<router-link  v-if="comprobarDueño()" :to="{ name: 'editarAnuncioSimple', params: { corto: aviso.corto } }"  class="btn btn-outline-primary"><i class="bi bi-pencil-square"></i> Editar aviso</router-link>

				<div class="encabezado py-2 px-3 my-2 w-75"> Nivel </div>
				<div class="ms-4"> <span>Practicante</span> </div>
				
				<div class="encabezado py-2 px-3 my-2 w-75"> Personal solicitado </div>
				<ul class="ms-3">
					<li class="text-capitalize" vfor v-for="personal in personales">{{ personal.personal.replace('* ', '') }}</li>
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

				this.axios.post(this.servidor+'Anuncio.php', {pedir:'verAvisoSimple', corto: uid})
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
			horaLargo(fecha){ return moment(fecha).format('DD/MM/YYYY HH:mm a') },
			comprobarDueño(){
				if(this.$attrs.uid == this.empresa.uid){
					return true
				}else return false
			}
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
			}
		},
	}
</script>

<style scoped>

</style>