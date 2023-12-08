<template>
	<div class="container" v-if="usuario.level==2">
		<h1>Bienvenido a su panel de administración</h1>
		<p>Elija la categoría que desee información</p>
		<div class="list-group col-6">
			<router-link :to="{name: 'editarDatosEmpresa'}" class="list-group-item list-group-item-action " aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1 text-primary"><i class="bi bi-building"></i> Modificar mis datos</h5>
				</div>
				<p class="ms-4 mb-1">Edite sus datos básicos para que la gente lo contacte</p>
		</router-link>

			<router-link :to="{name: 'publicar'}" class="list-group-item list-group-item-action " aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1"><i class="bi bi-file-check"></i> Crear un aviso personal</h5>
				</div>
				<p class="ms-4 mb-1">Cree una publicación de trabajo de un solo puesto especializado</p>
			</router-link>
			
		
			<a href="#" class="list-group-item list-group-item-action " aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1"><i class="bi bi-file-check"></i> Crear un aviso por paquete de trabajadores</h5>
				</div>
				<p class="ms-4 mb-1">Cree una publicación con varios puestos de trabajo</p>
			</a>
			<router-link :to="{name: 'misOfertas'}" class="list-group-item list-group-item-action ">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1"><i class="bi bi-card-checklist"></i> Ver mis publicaciones activas</h5>
				</div>
				<p class="ms-4 mb-1">Administre todas sus publicaciones activas</p>
			</router-link>
		
			<a href="#" class="list-group-item list-group-item-action " aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1"><i class="bi bi-person-bounding-box"></i> Buscar currículos</h5>
				</div>
				<p class="ms-4 mb-1">Puede ver CV's de los postulantes de cada publicación</p>
			</a>
			<a href="#" class="list-group-item list-group-item-action " aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1"><i class="bi bi-funnel"></i> Utilizar filtro detallado</h5>
				</div>
				<p class="ms-4 mb-1">Filtre su información inteligentemente</p>
			</a>
		</div>
	</div>
	<div class="container" v-else>
		<h3>Ud no tiene permiso para poder controlar este panel</h3>
	</div>
</template>
<script>
export default {
	name:'PanelEmpresa',
	props:['usuario'],
	data() {
		return {
			
		}
	},
	mounted() {
		this.usuario.level = sessionStorage.getItem('level')
		this.usuario.uid = sessionStorage.getItem('uid')
		this.cargarBasicos()
	},
	methods: {
		cargarBasicos(){
			this.axios.post(this.servidor+'Empresa.php',{pedir: 'listar', uid: this.usuario.uid})
			.then(resp=> localStorage.setItem('empresa', JSON.stringify(resp.data)) )
			this.axios.post(this.servidor+'Areas.php',{pedir: 'listar'})
			.then(resp=> localStorage.setItem('areas', JSON.stringify(resp.data)) )
			this.axios.post(this.servidor+'Ubigeo.php',{pedir: 'departamentos'})
			.then(resp=> localStorage.setItem('departamentos', JSON.stringify(resp.data)) )
		}

	},
}
</script>