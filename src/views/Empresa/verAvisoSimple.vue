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
				<div class="encabezado py-2 px-3 my-2 w-75"> Detalles </div>
				<div class="ms-4">
					<p v-if="aviso.complemento" class="mb-0" v-html="aviso.complemento.replace(/\n/g, '<br>')"></p>
					<p v-else>No se indicó</p>
				</div>
				<h5 class="text-muted mt-3">Área</h5>
				<div class="ms-4">
					<span>{{ aviso.nomArea }}</span>
				</div>
				
				<h5 class="text-muted mt-3">Personal solicitado</h5>
				<ul class="ms-3">
					<li vfor v-for="personal in personales">{{ personal.personal }}</li>
				</ul>
				
				
			</div>
			<div class="col">
				<h5 class="text-muted">Acerca de la empresa contratante</h5>
				<h3>{{empresa.razonSocial}}</h3>
				<h3 v-if="empresa.comercial">{{empresa.comercial}}</h3>
				<div class="row w-75">
					<div class="col-6 my-3">
						<img :src="'/images/logos/'+empresa.logo" class="img-fluid ">
					</div>
					<div class="col-12">
						<p><strong>RUC:</strong> {{empresa.ruc}}</p>
						<p><strong>Dirección:</strong> {{empresa.direccion}}</p>
						<p v-if="empresa.sede"><strong>Sede:</strong> {{empresa.sede}}</p>
						<p>{{empresa.descripcion}}</p>
						
						<div v-if="aviso.activo==1" class="d-none">
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