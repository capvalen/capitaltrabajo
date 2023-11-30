<template>
	<div class="row row-cols-2">
		<div class="col-7 ps-5">
			<h1>Currículum vitae</h1>
			<h2>De {{postulante.apellidos}} {{postulante.nombres ?? '-'}} </h2>
			<p><strong>Edad</strong> {{postulante.edad ?? '-'}} años</p>
			<div class="row row-cols-2">
				<p v-if="postulante.nacionalidad==1"><strong>D.N.I.</strong> {{postulante.dni ?? '-'}} años</p>
				<p v-else><strong>Cédula</strong> {{postulante.dni ?? '-'}} años</p>
				<p><strong>Domicilio</strong> {{postulante.residencia != '' ? departamentos[postulante.residencia]: '-'}}</p>
				<p><strong>Celular</strong> {{postulante.celular ?? '-'}}</p>
				<p><strong>Whatsapp</strong> {{postulante.whatsapp ?? '-'}}</p>
				<p><strong>Email</strong> {{postulante.correo ?? '-'}}</p>
				<p><strong>Estado civil</strong> {{postulante.civil ?? '-'}}</p>
				
				
			</div>
			<hr>
			<p><strong>Perfil</strong></p>
				<p v-if="postulante.titulo"><strong>{{postulante.titulo}}</strong></p>
				<p>{{(postulante.destrezas || postulante.destrezas!='') ? postulante.destrezas: 'Sin destrezas'}}</p>
			<div class="row row-cols-2">
				<p><strong>Nacionalidad</strong> {{postulante.nacionalidad =='' || postulante.nacionalidad == null ? '-' : naciones[postulante.nacionalidad-1] }}</p>
			<p><strong>Correo electrónico</strong> {{postulante.correo ?? '-'}}</p>
			<p v-if="postulante.web"><strong>Página web</strong> {{postulante.web ?? '-'}}</p>
			<p><strong>Autorizado para trabajar en Perú </strong> 
				<span v-if="postulante.autorizado == 1">Sí</span>
				<span v-if="postulante.autorizado == 2">Sí, sólo unos meses</span>
				<span v-if="postulante.autorizado == 3">No</span>
			</p>
			<p><strong>Disponibilidad de viaje </strong> 
				<span v-if="postulante.autorizado == 1">Sí</span>
				<span v-if="postulante.autorizado == 2">Sí, sólo unos meses</span>
				<span v-if="postulante.autorizado == 3">No</span>
			</p>
			<p><strong>Dispone de algún vehículo propio </strong> 
				<span v-if="postulante.autorizado == 1">No</span>
				<span v-if="postulante.autorizado == 2">Sí</span>
			</p>
			<p><strong>Puede conducir </strong> 
				<span v-if="postulante.autorizado == 1">No</span>
				<span v-if="postulante.autorizado == 2">Sí</span>
			</p>
			<p><strong>Nivel de estudios </strong> <span>{{ nivel[postulante.estudios] }}</span> </p>
			<p><strong>Inglés </strong> <span>{{ ingles[postulante.ingles] }}</span> </p>
			<p><strong>Situación laboral actual </strong> <span>{{ postulante.situacion=='1'? 'Sin trabajo' : 'Actualmente laborando' }}</span> </p>
			<p><strong>Disponibilidad </strong>
				<span v-if="postulante.disponibilidad==1">Inmediata</span>
				<span v-if="postulante.disponibilidad==2">Trabajo a medio tiempo</span>
				<span v-if="postulante.disponibilidad==3">Trabajo por horas</span>
			</p>
			<p><strong>Espectativas salariales </strong>
				<span v-if="postulante.expectativas==1">Entre 950 a 1200 soles</span>
				<span v-if="postulante.expectativas==2">Entre 1200 a 1500 soles</span>
				<span v-if="postulante.expectativas==3">Entre 1500 a 2200 soles</span>
				<span v-if="postulante.expectativas==4">Más de 2200 soles</span>
			</p>
			
			</div>

		</div>
		<div class="col-3 text-center">
			<!-- <img :src="'/images/fotos/'+postulante.foto" class="img-fluid" onerror="this.onerror=null;this.src='/images/default.jpg'"> -->
			<img :src="queFoto" class="img-fluid" >
			<a v-if="postulante.documento" class="btn btn-outline-secondary btn-lg mt-3" :href="'/documentos/'+postulante.documento" target="_blank"><i class="bi bi-file-arrow-down"></i> Ver CV personalizado</a> 
			<a v-if="postulante.whatsapp" :href="'https://wa.me/51'+postulante.whatsapp" class="btn btn-outline-success btn-lg mt-3"><i class="bi bi-whatsapp"></i> Contactar con postulante</a>
			<a v-if="postulante.celular" :href="'tel:'+postulante.celular" class="btn btn-outline-primary btn-lg mt-3"><i class="bi bi-telephone"></i> Llamar al postulante</a>
		</div>

	</div>
	
</template>
<script>
export default{
	nane:'verCV',
	props:['departamentos'],
	data() {
		return {
			postulante:[], naciones:['Peruana', 'Colombiana', 'Chilena', 'Otro'], nivel:['Ninguno','Primaria incompleta','Primaria completa','Secundaria incompleta','Secundaria completa','Superior', 'Técnico'],
			ingles:['No', 'Básico', 'Intermedio', 'Avanzado'], queFoto:'/images/default.jpg'
		}
	},
	mounted(){
		//this.departamentos.unshift('Extranjero', 'Cualquier departamento')
		this.cargarCV()
	},
	methods: {
		cargarCV(){
			let uid = this.$route.params.uid;
			this.axios.post(this.servidor+'Postulante.php', {pedir:'pedirCV', uid})
			.then(resp => {this.postulante = resp.data
				if(this.postulante.foto!='') this.queFoto='/images/fotos/'+this.postulante.foto
			})
		}
	},
}
</script>