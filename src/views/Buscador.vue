<template>
	<div class="container">
		<h3 class="text-muted">Hay <span class="text-dark">{{rando()}}</span> ofertas de trabajo en nuestra base de datos</h3>
		<div class="encabezado py-2 px-3 my-3"> Filtros de empleo </div>
		<div class="row row-cols-2">
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Lugar</label>
					<div class="col-8">
						<select class="form-select" name="" id="sltDepartamentos" v-model="busqueda.lugar">
							<option value="-1">Cualquiera</option>
							<option v-for="departamento in departamentos" :value="departamento.idDepa">{{capitalizar(departamento.departamento)}}</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Fecha</label>
					<div class="col-8">
						<input type="date" class="form-control" id="txtFecha" v-model="busqueda.fecha">
					</div>
				</div>
			</div>
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Área o Categoría</label>
					<div class="col-8">
						<select class="form-select" name="" id="sltArea" v-model="busqueda.area">
							<option value="-1">Cualquiera</option>
							<option v-for="area in areas" :value="area.id">{{capitalizar(area.area)}}</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Tiempo</label>
					<div class="col-8">
						<select class="form-select" name="" id="sltTiempo" v-model="busqueda.tiempo">
							<option value="-1">Cualquiera</option>
							<option value="1">Por horas</option>
							<option value="2">Tiempo parcial</option>
							<option value="3">Tiempo completo</option>
							<option value="4">Horarios prolongados</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-1"></div>
			<div class="col-2">Que contengan el texto</div>
			<div class="col">
					<input type="text" class="form-control" id="txtPalabras" v-model="busqueda.texto">
			</div>
			<div class="col">
				<button class="btn btn-primary" @click="buscarEmpleos()">Realizar búsqueda</button>
			</div>
		</div>

		<div class="container" v-if="resultados.length>0">
		<div class="encabezado py-2 px-3 my-3"> Resultados de su búsqueda</div>
			<div class="d-flex justify-content-between">
				<p v-if="resultados[0].corto!=0">Se encontró {{ resultados.length }} resultados con los filtros indicados:</p>
				<p v-else>Lo sentimos no hay data</p>
				<div class="d-grid">
					<button v-if="Object.keys($route.params).length > 0" @click="irInicio()" class="btn btn-outline-secondary btn-sm flex-shrink-0"><span><i class="bi bi-x-circle"></i> Borrar filtro</span></button>
					<button v-else class="btn btn-outline-secondary btn-sm flex-shrink-0" @click="limpiarFiltros()"><span><i class="bi bi-x-circle"></i> Borrar Búsqueda</span></button>
				</div>
			</div>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>N°</th>
						<th>Empleo</th>
						<th>Empleador</th>
						<th>Plazas</th>
						<th>Fecha límite</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(empleo, index) in resultados" @click="verAviso(empleo.corto)">
						<td>{{index+1}}</td>
						<td>{{capitalizar(empleo.cargo)}}, {{empleo.complemento}}</td>
						<td>{{ capitalizar(empleo.razonSocial) }}</td>
						<td>{{ empleo.vacantes }}</td>
						<td>{{ capitalizar(fechaDesdeFin(empleo.fin)) }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-if="resultados.length==0">
			<div class="encabezado py-2 px-3 my-3"> Ofertas por categoría </div>
			<div class="row row-cols-3">
				<div class="col" v-for="categoria of categorias"> <p class="mb-0" @click="busqueda.area=categoria.idArea; buscarEmpleos()"><a href="#" class="text-decoration-none text-dark link">{{categoria.nombre}} ({{categoria.cantidad}})</a></p> </div>
			</div>
			<div class="encabezado py-2 px-3 my-3"> Por ubicación </div>
			<div class="row row-cols-3">
				<div class="col" v-for="departamento of departamentos"> <p class="mb-0" @click="busqueda.lugar=departamento.idDepa;buscarEmpleos()"><span class="text-dark link">{{capitalizar(departamento.departamento)}} ({{rando()}})</span></p> </div>
			</div>
			<div class="encabezado py-2 px-3 my-3"> Últimos avisos </div>
			<table class="table table-hover table-sm">
				<tbody>
					<tr v-for="(ultimo, index) in ultimos" @click="verAviso(ultimo.corto)">
						<th scope="row">{{index+1}}</th>
						<td>{{fechaLatam(ultimo.inicio)}}</td>
						<td>{{capitalizar(ultimo.cargo)}}, {{ ultimo.complemento }}</td>
						<td>{{ capitalizar(ultimo.departamento) }}</td>
					</tr>			
				</tbody>
			</table>
		</div>



	</div>
</template>

<script>
import {collection, getDocs, query, where, orderBy, startAt, endAt } from 'firebase/firestore';
import moment from 'moment'

export default{
	name: 'Buscador',
	data(){
		return {
			departamentos:[], areas:[], resultados:[], busqueda:{lugar:-1, area:-1,fecha:'', tiempo:-1, texto:''}, ultimos:[],
			categorias:[]
		}
	},
	mounted(){
	this.cargarDatos();
	},
	methods:{
		cargarDatos(){
			if(this.$route.params.filtro){
				let texto = this.$route.params.filtro;
				this.busqueda.texto = texto
				this.buscarEmpleos();
			}
			this.axios.post(this.servidor+'Areas.php',{pedir: 'listar'})
			.then(resp=> this.areas = resp.data )
			this.axios.post(this.servidor+'Ubigeo.php',{pedir: 'departamentos'})
			.then(resp=> this.departamentos = resp.data )
			this.axios.post(this.servidor+'Anuncio.php', {pedir:'conteoAreas'})
			.then(resp=> this.categorias = resp.data )
			this.axios.post(this.servidor+'Anuncio.php',{pedir: 'buscarEmpleos', filtros:this.busqueda})
			.then(resp=> this.ultimos = resp.data)
		},
		buscarEmpleos(){
			this.axios.post(this.servidor+'Anuncio.php',{pedir: 'buscarEmpleos', filtros:this.busqueda})
			.then(resp=> this.resultados = resp.data)
		},
		verAviso(id){
			if(id!=0)
				this.$router.push({name: 'verAviso', params:{ id }})
		},
		limpiarFiltros(){
			this.resultados=[];
			this.busqueda.lugar=-1
			this.busqueda.area=-1
			this.busqueda.tiempo=-1
			this.busqueda.fecha=''
			this.busqueda.texto=''
		},
		irInicio(){
			this.limpiarFiltros()
			this.$router.push({ name: 'Buscador', params:null});
		},
		rando(){return Math.floor(Math.random() * 50) + 1;},
		capitalizar(text) { return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); },
		fechaLatam(fecha){ return moment(fecha).format('DD/MM/YYYY') },
		fechaDesdeFin(fecha){
			moment.locale('es')
			return moment(fecha).fromNow()
		},
	},
	watch: {
    '$route.params.filtro'(newValue, oldValue) {
			if(newValue){
				let texto = this.$route.params.filtro;
				this.busqueda.texto = texto
				this.buscarEmpleos();
			}
    }
  }
}
</script>

<style>
input[type='date']:in-range::-webkit-datetime-edit-year-field,input[type='date']:in-range::-webkit-datetime-edit-month-field,input[type='date']:in-range::-webkit-datetime-edit-day-field,input[type='date']:in-range::-webkit-datetime-edit-text{  color: transparent;}
.link:hover, tbody>tr:hover{font-weight: bold;cursor: pointer;}

</style>