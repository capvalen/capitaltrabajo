<template lang="">
	<div class="container">
		<h3>Mis ofertas</h3>
		<h5 class="text-muted">Ofertas activas</h5>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>N°</th>
					<th>Título</th>
					<th>Fecha inicial</th>
					<th>Fecha final</th>
					<th>@</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(oferta, index) in ofertas">
					<td>{{index+1}}</td>
					<td>{{capitalizar(oferta.cargo)}}, {{oferta.complemento}}</td>
					<td>{{ fechaLatam(oferta.inicio) }}</td>
					<td>{{ fechaLatam(oferta.fin) }}</td>
					<td class="d-flex gap-2">
						<button @click="editarAnuncio(oferta.corto)" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-square"></i> Editar</button>
						<button @click="irAnuncio()" class="btn btn-sm btn-outline-success"><i class="bi bi-envelope-paper"></i> Ver anuncio</button>
					</td>
				</tr>
			</tbody>
		</table>
		<h5 class="text-muted">Anteriores ofertas</h5>
	</div>
</template>
<script>
import moment from 'moment';
export default {
	name:'misOfertas',
	
	props:['usuario'],
	data() {
		return {
			ofertas:[]
		}
	},
	mounted() {
		this.cargarOfertas()
	},
	methods: {
		cargarOfertas(){
			let uid = this.usuario.uid;
			this.axios.post(this.servidor+'Anuncio.php', {pedir:'verOfertas', uid})
			.then(resp => this.ofertas = resp.data.anuncios )
		},
		editarAnuncio(corto){ this.$router.push({ name: 'editarAnuncioSimpple', params:{corto}}); },
		irAnuncio(corto){ this.$router.push({ name: 'verAviso', params:{id:corto}}); },
		fechaLatam(fecha){ return moment(fecha).format('DD/MM/YYYY') },
		capitalizar(text) { 
			if(text=='') return ''
			else return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
		 },
	},
}
</script>