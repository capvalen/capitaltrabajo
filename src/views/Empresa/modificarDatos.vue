<template lang="">
	<div class="container">
		<h3>Modificar datos de la empresa</h3>
		<p>Es importante que rellene todos sus datos para que la gente pueda contactarlo con facilidad.</p>
		<div class="row my-2">
			<div class="col-2">R.U.C. <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" class="w-50" v-model="empresa.ruc">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Razón social <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.razonSocial">
			</div>
		</div>
		<div class="row my-2" >
			<div class="col-2">Foto </div>
			<div class="col">
				<input v-if="foto==''" type="file" >
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Departamento </div>
			<div class="col">
				<input type="text" class="w-50" >
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Provincia </div>
			<div class="col">
				<input type="text" class="w-50" >
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Dirección </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.direccion">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Correo electrónico </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.correo">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Celular #1 </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.celular1">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Celular #2 </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.celular2">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Whatsapp #1 </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.whastapp">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Whatsapp #2 </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.whastapp2">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Descripción breve </div>
			<div class="col">
				<textarea class="w-50" id="" rows="5" v-model="empresa.descripcion"></textarea>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Contacto </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.contacto">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Cargo de la empresa </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.puesto">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Sede </div>
			<div class="col">
				<input type="text" class="w-50"  v-model="empresa.sede">
			</div>
		</div>

	</div>
</template>
<script>
export default {
	name:'modificarDatos',
	data() {
		return {
			empresa:[],
		}
	},
	mounted() {
		this.cargarDatos()
	},
	methods: {
		cargarDatos(){
			this.axios.post(this.servidor+'Empresa.php',{pedir: 'listar', uid: this.$attrs.usuario.uid})
			.then(resp=> this.empresa =resp.data)
		}
	},
}
</script>
<style lang="">
	
</style>