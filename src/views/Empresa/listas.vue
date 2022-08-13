<template>
<div class="container">
		<h3 class="text-muted">Hay <span class="text-dark">241</span> ofertas de trabajo en nuestra base de datos</h3>
		<div class="encabezado py-2 px-3 my-3"> Empresas con más popularidad </div>
		<div class="row row-cols-3">
			<div class="col" v-for="empresa of empresas"> <p class="mb-0"><a href="#" class="text-decoration-none text-dark link">{{empresa.nombre}} <img :src="'/images/logos/'+empresa.logo" /></a></p> </div>
		</div>

		<div class="encabezado py-2 px-3 my-3"> Empresas recién evaluadas </div>
		<div class="row row-cols-3">
			<div class="col" v-for="evaluada of evaluadas"> <p class="mb-0"><a href="#" class="text-decoration-none text-dark link">{{evaluada.nombre}} <img :src="'/images/logos/'+evaluada.logo" /></a></p> </div>
		</div>
</div>
</template>

<script>
export default{
	name:'listaEmpresas',
	data(){
		return {
			empresas:[
				{nombre: 'Jerónimo Martins Colombia', logo: 'jeronimo.jpg'},
				{nombre: 'EFICACIA', logo: 'eficacia.jpg'},
				{nombre: 'Bimbo de Colombia', logo: 'Bimbo.jpg'},
				{nombre: 'Man power Profesionales', logo: 'manpower.png'},
				{nombre: 'Supertiendas y Drogerías', logo: 'olimpica-sa.png'},
				{nombre: 'Postobon SA', logo: 'postobon.png'},
				{nombre: 'Productos Ramos SA', logo: 'ramo.png'},
			],
			evaluadas:[
				{nombre: 'Intertek Peruanas SA', logo: 'intertek.png'},
				{nombre: 'BBVA', logo: 'bbva.png'},
				{nombre: 'Atento Perú SA', logo: 'atento.png'},
				{nombre: 'Interbank', logo: 'interbank.png'},
				{nombre: 'EFICACIA', logo: 'eficacia.jpg'},
				{nombre: 'Jerónimo Martins Colombia', logo: 'jeronimo.jpg'},
				{nombre: 'Supertiendas y Drogerías', logo: 'olimpica-sa.png'},
			],
		}
	}
}</script>

<style scoped>
img{
	width: 64px;
}</style>