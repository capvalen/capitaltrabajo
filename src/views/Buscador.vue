<template>
	<div class="container">
		<h3 class="text-muted">Hay <span class="text-dark">241</span> ofertas de trabajo en nuestra base de datos</h3>
		<div class="encabezado py-2 px-3 my-3"> Filtros de empleo </div>
		<div class="row row-cols-2">
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Lugar</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Cualquiera</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Fecha</label>
					<div class="col-8">
						<input type="date" class="form-control" id="txtFecha">
					</div>
				</div>
			</div>
			<div class="col">
				<div class="row mb-3">
					<label class="col-2 text-end">Categoría</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Cualquiera</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label class="col-2 text-end">Tiempo</label>
					<div class="col-8">
						<select class="form-select" name="" id="">
							<option value="1">Cualquiera</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-1"></div>
			<div class="col-2">Palabras</div>
			<div class="col">
					<input type="text" class="form-control" id="txtPalabras">
			</div>
			<div class="col">
				<button class="btn btn-primary">Realizar búsqueda</button>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-3"> Ofertas por categoría </div>
		<div class="row row-cols-3">
			<div class="col" v-for="categoria of categorias"> <p class="mb-0"><a href="#" class="text-decoration-none text-dark link">{{categoria.nombre}} ({{categoria.cantidad}})</a></p> </div>
		</div>

		<div class="encabezado py-2 px-3 my-3"> Por ubicación </div>
		<div class="row row-cols-3">
			<div class="col" v-for="departamento of departamentos"> <p class="mb-0"><a href="#" class="text-decoration-none text-dark link">{{departamento.nombre}} ({{departamento.cantidad}})</a></p> </div>
		</div>

		<div class="encabezado py-2 px-3 my-3"> Últimos avisos </div>
		<table class="table table-hover table-borderless table-sm">
			<tbody>
				<tr @click="verAviso(1)">
						<th scope="row">1</th>
						<td>11/02/2022</td>
						<td>BDA MySQL Server</td>
						<td>Todo el país</td>
				</tr>
				<tr @click="verAviso(1)">
					<th scope="row">2</th>
					<td>10/02/2022</td>
					<td>Periodista</td>
					<td>Todo el país</td>
				</tr>
				<tr @click="verAviso(1)">
					<th scope="row">3</th>
					<td>10/02/2022</td>
					<td>Teleoperadora</td>
					<td>Lima</td>
				</tr>
				
			</tbody>
		</table>



	</div>
</template>

<script>
export default{
	name: 'Buscador',
	data(){
		return {
			categorias:[
				{cantidad:14, nombre: 'Administración'},{cantidad:12, nombre: 'Arte y diseño'},{cantidad:36, nombre: 'Informática'},{cantidad:85, nombre: 'Docencia'},{cantidad:46, nombre: 'Ingeniería'},{cantidad:91, nombre: 'Call center'},{cantidad:60, nombre: 'Servicio al cliente'},{cantidad:34, nombre: 'Asesor/a'},
			],
			departamentos:[
				{cantidad:60, nombre: 'Lima'},{cantidad:18, nombre: 'Amazonas'},{cantidad:14, nombre: 'Ancash'},{cantidad:51, nombre: 'Apurimac'},{cantidad:60, nombre: 'Arequipa'},{cantidad:15, nombre: 'Ayacucho'},{cantidad:64, nombre: 'Cajamarca'},{cantidad:23, nombre: 'Cusco'},{cantidad:28, nombre: 'El Callao'},{cantidad:43, nombre: 'Huancavelica'},{cantidad:80, nombre: 'Huánuco'},{cantidad:46, nombre: 'Ica'},{cantidad:15, nombre: 'Junín'},{cantidad:12, nombre: 'La Libertad'},{cantidad:8, nombre: 'Lambayeque'},
				{cantidad:43, nombre: 'Loreto'},{cantidad:74, nombre: 'Madre de Dios'},{cantidad:43, nombre: 'Moquegua'},{cantidad:38, nombre: 'Pasco'},{cantidad:28, nombre: 'Piura'},{cantidad:46, nombre: 'Puno'},
				{cantidad:41, nombre: 'San Martín'},{cantidad:28, nombre: 'Tacna'},{cantidad:26, nombre: 'Tumbes'},{cantidad:11, nombre: 'Ucayali'}
				]
		}
	},
	methods:{
		verAviso(id){
			this.$router.push({name: 'verAviso', params:{ id }})
		}
	}
}
</script>

<style>
input[type='date']:in-range::-webkit-datetime-edit-year-field,input[type='date']:in-range::-webkit-datetime-edit-month-field,input[type='date']:in-range::-webkit-datetime-edit-day-field,input[type='date']:in-range::-webkit-datetime-edit-text{  color: transparent;}
.link:hover, tbody>tr:hover{font-weight: bold;cursor: pointer;}

</style>