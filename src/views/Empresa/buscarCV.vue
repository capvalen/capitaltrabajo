<template>
	<div class="container">
		
		<div class="encabezado py-2 px-3 my-3"> Anuncio para aplicar el filtro </div>
		<div class="row">
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Anuncio:</label>
					<div class="col-8">
						<select name="" id="" class="form-select">
							<option value="1">Busco ingeniero de minas para trabajar en Chinalco</option>
							<option value="2">Se busca oficinista a tiempo completo</option>
							<option value="3">Plaza de 15 obreros para mina importante</option>
						</select>
					</div>
				</div>
			
			</div>
		</div>
		<div class="encabezado py-2 px-3 my-3"> Filtros </div>
		<div class="row row-cols-2">
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Experiencia</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Sin experiencia</option>
							<option value="2"> 6 meses</option>
							<option value="2"> 1 año</option>
							<option value="2"> 2 años</option>
							<option value="2"> 3 años a más</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Vive</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">No aplica</option>
							<option value="2">Huancayo</option>
							<option value="2">Lima</option>
							<option value="2">Huaraz</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Carrera</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Administración</option>
							<option value="2">Diseño gráfico</option>
							<option value="2">Servicio al cliente</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Disponibilidad</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Medio tiempo</option>
							<option value="1">Por horas</option>
							<option value="1">Tiempo completo</option>
							<option value="1">Disponibilidad de viaje</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Grado estudio</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Cualquiera</option>
							<option value="1">Primaria</option>
							<option value="1">Secundaria</option>
							<option value="1">Bachiller</option>
							<option value="1">Titulado</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row ">
			<div class="col text-center">
				<button class="btn btn-primary">Realizar búsqueda</button>
			</div>
		</div>


		<div class="encabezado py-2 px-3 my-3"> Últimos avisos </div>
		<table class="table table-hover table-borderless table-sm">
			<tbody>
				<tr @click="verCVPostulante(6) ">
						<th scope="row">1</th>
						<td>11/02/2022</td>
						<td>Rosa Jurado Hernández</td>
						<td>Huaraz</td>
						<td>Administrador</td>
				</tr>
				<tr @click="verCVPostulante(6) ">
					<th scope="row">2</th>
					<td>10/02/2022</td>
					<td>Manolo Huamán Miroquesada</td>
					<td>Huancayo</td>
					<td>Servicio al cliente</td>
				</tr>
				<tr @click="verCVPostulante(6) ">
					<th scope="row">3</th>
					<td>10/02/2022</td>
					<td>Laura Brando Chávez</td>
					<td>Lima</td>
					<td>Sin empleo</td>
				</tr>
				
			</tbody>
		</table>



	</div>
</template>

<script>
	import {collection, getDocs, query, where, orderBy, startAt, endAt } from 'firebase/firestore';

export default{
	name: 'Buscador',
	props:['departamentos'],
	data(){
		return {
			categorias:[
				{cantidad:14, nombre: 'Administración'},{cantidad:12, nombre: 'Arte y diseño'},{cantidad:36, nombre: 'Informática'},{cantidad:85, nombre: 'Docencia'},{cantidad:46, nombre: 'Ingeniería'},{cantidad:91, nombre: 'Call center'},{cantidad:60, nombre: 'Servicio al cliente'},{cantidad:34, nombre: 'Asesor/a'},
			],
		}
	},
	mounted(){
		this.cargarDatos();
	},
	methods:{
		async cargarDatos(){
			
		},
		verCVPostulante(id=1){
			this.$router.push({name: 'verCVPostulante', params:{ id }})
		}
	}
}
</script>

<style>
input[type='date']:in-range::-webkit-datetime-edit-year-field,input[type='date']:in-range::-webkit-datetime-edit-month-field,input[type='date']:in-range::-webkit-datetime-edit-day-field,input[type='date']:in-range::-webkit-datetime-edit-text{  color: transparent;}
.link:hover, tbody>tr:hover{font-weight: bold;cursor: pointer;}

</style>