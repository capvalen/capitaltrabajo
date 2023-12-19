<template lang="">
	<div class="container">
		<h3>Mis ofertas</h3>
		<h5 class="text-muted">Ofertas activas</h5>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>N°</th>
					<th>Título</th>
					<th>Tipo</th>
					<th>Fecha inicial</th>
					<th>Fecha final</th>
					<th>Estado</th>
					<th>@</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(oferta, index) in ofertas">
					<td>{{index+1}}</td>
					<td>{{capitalizar(oferta.cargo)}} <span v-if="oferta.tipo==0" >, {{oferta.complemento}}</span></td>
					<td>
						<span v-if="oferta.tipo==1">Simple</span>
						<span v-if="oferta.tipo==0">Compuesto</span>
					</td>
					<td>{{ fechaLatam(oferta.inicio) }}</td>
					<td>{{ fechaLatam(oferta.fin) }}</td>
					<td>
						<span v-if="oferta.activo==1 && oferta.publico==1"> <i class="bi bi-check"></i> Publicado</span>
						<span v-else-if="oferta.activo==1 && oferta.publico==0"><i class="bi bi-dash-circle-dotted"></i> Borrador</span>
						<span v-else><i class="bi bi-stop-circle"></i> Finalizado</span>
					</td>
					<td class="d-flex gap-2">
						<button @click="editarAnuncio(oferta.corto)" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-square"></i> Editar</button>
						<button @click="irAnuncio(oferta.corto, oferta.tipo)" class="btn btn-sm btn-outline-success"><i class="bi bi-envelope-paper"></i> Ver anuncio</button>
						<button @click="finAnuncio(oferta.id)" class="btn btn-sm btn-outline-danger"><i class="bi bi-envelope-paper"></i> Finalizar</button>
					</td>
				</tr>
			</tbody>
		</table>
		<h5 class="text-muted">Anteriores ofertas</h5>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>N°</th>
					<th>Título</th>
					<th>Fecha inicial</th>
					<th>Fecha final</th>
					<th>Estado</th>
					<th>@</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(oferta, index) in anulados">
					<td>{{index+1}}</td>
					<td>{{capitalizar(oferta.cargo)}}, {{oferta.complemento}}</td>
					<td>{{ fechaLatam(oferta.inicio) }}</td>
					<td>{{ fechaLatam(oferta.fin) }}</td>
					<td>
						<span v-if="oferta.activo==1 && oferta.publico==1"> <i class="bi bi-check"></i> Publicado</span>
						<span v-else-if="oferta.activo==1 && oferta.publico==0"><i class="bi bi-dash-circle-dotted"></i> Borrador</span>
						<span v-else><i class="bi bi-stop-circle"></i> Finalizado</span>
					</td>
					<td class="d-flex gap-2">
						<button @click="editarAnuncio(oferta.corto)" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-square"></i> Editar</button>
						<button @click="irAnuncio(oferta.corto, oferta.tipo)" class="btn btn-sm btn-outline-success"><i class="bi bi-envelope-paper"></i> Ver anuncio</button>
						<button @click="bajarAnuncio(oferta.id)" class="btn btn-sm btn-outline-danger"><i class="bi bi-envelope-paper"></i> Dar de baja</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import moment from 'moment';
export default {
	name:'misOfertas',
	
	props:['usuario'],
	data() {
		return {
			ofertas:[], anulados:[]
		}
	},
	mounted() {
		this.cargarOfertas()
	},
	methods: {
		cargarOfertas(){
			let uid = this.usuario.uid;
			this.axios.post(this.servidor+'Anuncio.php', {pedir:'verOfertas', uid})
			.then(resp => {
				this.ofertas = resp.data.anuncios;
				this.anulados = resp.data.anulados;
			})
		},
		editarAnuncio(corto){ this.$router.push({ name: 'editarAnuncioSimpple', params:{corto}}); },
		irAnuncio(corto, tipo){ 
			if( tipo==1 )
				this.$router.push({ name: 'verAviso.simple', params:{id:corto}}); 
			else
				this.$router.push({ name: 'verAviso', params:{id:corto}}); 
		},
		finAnuncio(id){
			this.axios.post(this.servidor+'Anuncio.php', { pedir:'finAnuncio', id })
			.then(resp => this.cargarOfertas() )
		},
		bajarAnuncio(id){
			this.axios.post(this.servidor+'Anuncio.php', { pedir:'bajarAnuncio', id })
			.then(resp => this.cargarOfertas() )
		},
		fechaLatam(fecha){ return moment(fecha).format('DD/MM/YYYY') },
		capitalizar(text) { 
			if(text=='') return ''
			else return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
		 },
	},
}
</script>