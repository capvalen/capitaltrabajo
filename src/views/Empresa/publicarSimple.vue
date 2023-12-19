<template>
	<div class="container">
		<h3 v-if="corto==null">Publica tu aviso simple</h3>
		<h3 v-else>Actualiza tu aviso</h3>
		
		<div class="encabezado py-2 px-3 my-4 w-75"> Datos del aviso </div>
		<div class="container">
			<div class="row mb-2">
				<div class="col-3">Titulo del aviso</div>
				<div class="col ">
					<input type="text" style="width:80%" placeholder="Se solicita mozos sin experiencia" v-model="publicacion.cargo">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Área</div>
				<div class="col ">
					<select name="" id="sltAreas" v-model="publicacion.area">
						<option value="-1">Seleccione el área de trabajo</option>
						<option v-for="area in areas" :value="area.id">{{area.area}}</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3 my-2">Nivel</div>
				<div class="col ">
					<select name="" id="sltAreas" v-model="publicacion.area">
						<option value="-1">Seleccione el nivel de postulantes</option>
						<option v-for="nivel in niveles" :value="nivel.id">{{nivel.nivel}}</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Departamento</div>
				<div class="col ">
					<select name="" id="sltDepartamento" @change="cargarProvincia()" v-model="publicacion.idDepartamento">
						<option value="-1">Seleccione un departamento</option>
						<option v-for="departamento in departamentos" :value="departamento.idDepa">{{departamento.departamento}}</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Provincia</div>
				<div class="col ">
					<select name="" id="sltProvincias" v-model="publicacion.idProvincia" >
						<option value="-1">Seleccione un departamento</option>
						<option v-for="provincia in provincias" :value="provincia.idProv">{{provincia.provincia}}</option>

					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Descripción o anotaciones adicionales</div>
				<div class="col-7">
					<textarea class="form-control" id="funciones" rows="2" v-model="publicacion.funciones"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Cantidad de vacantes</div>
				<div class="col ">
					<input type="number" v-model="publicacion.vacantes">
				</div>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-4 w-75  Razón"> Razón del aviso</div>
		<div class="container ">
			<div class="row my-2">
				<div class="col-3">Dirección de entrega de CV's o contacto</div>
					<div class="col-7">
						<textarea class="form-control" id="txtRazon" rows="2" placeholder="Dirección de contacto, requisitos" v-model="publicacion.complemento" @input="validarLongitud()"></textarea>
					</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar dirección de empresa</div>
					<div class="col-7">
						<input type="text" v-model="publicacion.razonDireccion">
					</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar celular de contacto</div>
					<div class="col-7">
						<input type="text" v-model="publicacion.razonCelular">
					</div>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-4 w-75  Razón"> Imágen promocional</div>
		<div class="container ">
			<div class="row my-2">
				<div class="col-3">Imágen a adjuntar</div>
					<div class="col-7">
						<input type="file" ref="archivo" id="archivo" @change="previewImg()">
						<img src="" id="imgPreview" class="w-75 img-fluid mt-2">
					</div>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-4 w-75"> Listado de personal </div>
		<div class=" col-9">
			<p>Puede agregar hasta 5 personales que requiera.</p>
			<button class="btn btn-sm btn-outline-secondary" @click="agregarpersonal()">	<i class="bi bi-person-add"></i> Añadir personal</button>
			<div class="w-75" v-if="publicacion.bancoPersonal.length>0">
				<h4 class="mt-2 text-muted">Personal a buscar</h4>
				<ul class="list-group ">
					<li class="list-group-item d-flex justify-content-between align-items-center text-capitalize" v-for="(personal, index) in publicacion.bancoPersonal"><span>{{index+1}}. {{personal}}</span> <button class="btn btn-sm btn-outline-danger border-0" @click="borrarPersonal(index)"><i class="bi bi-x-circle-fill"></i></button></li>
				</ul>
			</div>
		</div>

		<div class="row mt-3">
			<div class="col-8 d-flex justify-content-center">
				<button v-if="corto==null" class="btn btn-primary btn-lg" @click="publicar()"><i class="bi bi-cloud-upload"></i> Publicar anuncio</button>
				<button v-else class="btn btn-outline-success btn-lg" @click="actualizar()"><i class="bi bi-arrow-clockwise"></i> Actualizar anuncio</button>
			</div>
		</div>

		<div class="modal fade" id="modalPublicacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body">
						<h2 class="text-center">Anuncio creado exitósamente</h2>
						<div class="d-flex flex-column align-items-center">
							<img src="/images/ok.jpg" class="img-fluid my-3">
							<button @click="irAnuncio()" class="btn btn-outline-primary btn-lg" data-bs-dismiss="modal"><i class="bi bi-credit-card-2-front"></i> Ver anuncio</button>
							<div class="my-2"></div>
							<button @click="irPanel()" class="btn btn-outline-secondary btn-lg" data-bs-dismiss="modal"><i class="bi bi-filter-square"></i> Ir al panel de empresas</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import moment from 'moment';
	export default {
		name: 'publicar',
		data() {
			return {
				licencias:[ 'Sin permiso', 'A1', 'A2', 'A3', 'A4', 'A5', 'B', 'C', 'D', 'E', 'F' ],
				question:'',  areas:[], departamentos:[], provincias:[],
				publicacion:{id:null,idEmpresa:1, urgente:0, correo:1, celular:1, direccion:1, whatsapp:1, cargo:'', complemento:'', idDepartamento:-1, idProvincia:-1, jornada:-1, contrato:-1, sueldo:0, versueldo:true,
				inicio: moment().format('YYYY-MM-DD'), fin: moment().add(1,'week').format('YYYY-MM-DD'), vacantes:1, experiencia:-1, edadMinima:18, edadMaxima:55, estudios:-1, idiomas:["1"], destrezas:'', licencias:['Sin permiso'], viaje:1, bancoPersonal:[], tiempo:-1, requisitos:'',funciones:'',competencias:'',beneficios:'',oferta:'', residencia:2, discapacitado:2, corto:null, publico:1, area:-1, simple:1, foto:'', razonDireccion:'',razonCelular:''
				}, idiomas:['Ninguno', 'Español','Inglés', 'Francés', 'Italiano', 'Otros'], corto:null, niveles:[]
			}
		},
		mounted() {
			this.cargarBasicos()
			if(this.$route.params.corto)
				this.verAviso()
		},
		methods:{
			cargarBasicos(){
				const areas = JSON.parse(localStorage.getItem('areas'))
				this.departamentos = JSON.parse(localStorage.getItem('departamentos'))
				this.areas = areas.filter(x=> x.agrupado == '1')
				this.axios.post(this.servidor+'Areas.php',{ pedir: 'listarNiveles'})
				.then(resp => this.niveles = resp.data)
			},
			verAviso(){
				let uid = this.$route.params.corto;
				this.corto = uid
				this.axios.post(this.servidor+'Anuncio.php', {pedir:'verAviso', corto: uid})
				.then(resp =>{
					this.publicacion.id = resp.data.anuncio.id
					this.publicacion.cargo = resp.data.anuncio.cargo
					this.publicacion.idEmpresa = resp.data.anuncio.idEmpresa
					this.publicacion.urgente = resp.data.anuncio.urgente
					this.publicacion.correo = resp.data.anuncio.correo
					this.publicacion.celular = resp.data.anuncio.celular
					this.publicacion.direccion = resp.data.anuncio.direccion
					this.publicacion.whatsapp = resp.data.anuncio.whatsapp
					this.publicacion.complemento = resp.data.anuncio.complemento
					this.publicacion.idDepartamento = resp.data.anuncio.idDepartamento
					this.publicacion.idProvincia = resp.data.anuncio.idProvincia
					this.publicacion.jornada = resp.data.anuncio.jornada
					this.publicacion.sueldo = resp.data.anuncio.sueldo
					this.publicacion.area = resp.data.anuncio.area
					this.publicacion.idiomas = resp.data.idiomas
					this.publicacion.licencias = resp.data.licencias
					this.publicacion.versueldo= resp.data.anuncio.versueldo =='1'? true : false
					this.publicacion.corto= resp.data.anuncio.corto
					this.publicacion.simple= 1
				})
			},
			agregarpersonal(){
				this.question='';
				if(this.publicacion.bancoPersonal.length==5)
					alert('El máximo de personals es 5')
				else
					if(this.question=prompt('¿Qué tipo de personal desea agregar?'))
						this.publicacion.bancoPersonal.push(this.question);
			},
			async subirANube(){
				let archivo = this.$refs.archivo.files[0];

				if(archivo){
					let formData = new FormData();
					formData.append('ruta', 'images/simples');
					formData.append('archivo', archivo);

					await this.axios.post(this.servidor+'subirAdjunto.php', formData,{
						headers: { 'Content-Type' : 'multipart/form-data' }
					})
					.then( response => {
						let nomArchivo = response.data;
						console.log(nomArchivo)
						if( nomArchivo =='Error subida' ){
							this.publicacion.foto ='';
							console.error( 'err subida' );
						}else{ //subió bien
							this.publicacion.foto = nomArchivo;
							this.registrar()
							console.info( '%cSubió bien al indice con nombre: '+ nomArchivo, 'color: blue' );
						}
					})
					.catch(function(ero){
						console.log( 'err2' + ero );
						//return 'error 2';
					});
				}
			},
			publicar(){
				if(this.$refs.archivo.files[0])
					this.subirANube()
				else
					this.registrar()
			},
			registrar(){
				this.axios.post(this.servidor+'Anuncio.php', {pedir: 'publicarSimple', publicacion:this.publicacion})
				.then(resp=> {
					if(resp.data.mensaje=='guardado'){
						//modal llamar
						this.corto = resp.data.corto;
						var miModal = new bootstrap.Modal(document.getElementById('modalPublicacion'));
						miModal.show();

					}else{
						alertify.error('Hubo un error intentando guardar, inténtelo más tarde')
					}
				})
			},
			actualizar(){
				this.axios.post(this.servidor+'Anuncio.php', {pedir: 'actualizarSimple', publicacion:this.publicacion})
				.then(resp=> {
					if(resp.data.mensaje=='actualizado'){
						//modal llamar
						this.corto = resp.data.corto;
						var miModal = new bootstrap.Modal(document.getElementById('modalPublicacion'));
						miModal.show();

					}else{
						alertify.error('Hubo un error intentando guardar, inténtelo más tarde')
					}
				})
			},
			agregarIdioma(){
				if(! this.publicacion.idiomas.includes(event.target.value) && event.target.value!=-1)
					this.publicacion.idiomas.push(event.target.value)
			},
			borrarIdiomas(index){
				if(index!=0) { this.publicacion.idiomas.splice(index, 1) }
			},
			modificarLicencias(){
				console.log(event.target.value)
				if(event.target.checked){ //cuando no esta marcado
					this.publicacion.licencias.push(event.target.value)
				}else{
					const index = this.publicacion.licencias.findIndex(x=> x == event.target.value )
					this.publicacion.licencias.splice(index,1)
				}
			},
			irPanel(){ this.$router.push({ name: 'verPanel'}); },
			irAnuncio(){ this.$router.push({ name: 'verAviso.simple', params:{id:this.corto}}); },
			cargarProvincia(){
				this.provincias=[]
				this.publicacion.idProvincia=-1
				this.axios.post(this.servidor+'Ubigeo.php',{pedir: 'provincias', idDepa: this.publicacion.idDepartamento})
				.then(resp=> this.provincias = resp.data )
			},
			borrarPersonal(index){
				if(confirm('¿Deseas eliminar la personal?')){
					this.publicacion.bancoPersonal.splice(index, 1);
				}
			},
			validarLongitud(maximo = 100) {
				// Obtener la longitud del texto
				this.publicacion.complemento= this.publicacion.complemento.replace("\n", "");
				const longitud = this.publicacion.complemento.length;
				if (longitud > maximo) this.publicacion.complemento = this.publicacion.complemento.substring(0, maximo);
			},/* 
			validarLongitudCelular(maximo = 15) {
				// Obtener la longitud del texto
				this.publicacion.celular= this.publicacion.complemento.replace("\n", "");
				const longitud = this.publicacion.celular.length;
				if (longitud > maximo) this.publicacion.celular = this.publicacion.celular.substring(0, maximo);
			}, */
			previewImg(){
				const inputFile = document.getElementById('archivo');
				const imagenPreview = document.getElementById('imgPreview');
				if (inputFile.files && inputFile.files[0]) {
					// Crear un objeto FileReader
					const reader = new FileReader();
					// Cuando la lectura del archivo esté completada
					reader.onload = function(e) {
						// Asignar la URL del archivo a la imagen de vista previa
						imagenPreview.src = e.target.result;
					}
					// Leer el archivo como una URL de datos
					reader.readAsDataURL(inputFile.files[0]);
				}
			}
		}
	}
</script>

<style scoped>

</style>