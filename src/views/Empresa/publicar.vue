<template>
	<div class="container">
		<h3 v-if="corto==null">Publica tu aviso</h3>
		<h3 v-else>Actualiza tu aviso</h3>
		<div class="encabezado py-2 px-3 my-4 w-75"> Visibilidad del aviso simple </div>
		<div class="container">
			<div class="row my-2">
				<div class="col-3">Urgente</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbUrgente" id="rUrgente" value="1" v-model="publicacion.urgente">
							<label class="form-check-label" for="rUrgente">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbUrgente" id="rUrgente2" value="0" v-model="publicacion.urgente">
							<label class="form-check-label" for="rUrgente2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Publicar inmeditamente</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rPublico" id="rPublico" value="1" v-model="publicacion.publico">
							<label class="form-check-label" for="rPublico">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rPublico" id="rPublico2" value="0" v-model="publicacion.publico">
							<label class="form-check-label" for="rPublico2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar e-mail de contacto</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbMail" id="rMail" value="1" v-model="publicacion.correo">
							<label class="form-check-label" for="rMail">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbMail" id="rMail2" value="0" v-model="publicacion.correo">
							<label class="form-check-label" for="rMail2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar celular de contacto</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbCelular" id="rCelular" value="1" v-model="publicacion.celular">
							<label class="form-check-label" for="rCelular">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbCelular" id="rCelular2" value="0" v-model="publicacion.celular">
							<label class="form-check-label" for="rCelular2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar Whatsapp de contacto</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbWhatsapp" id="rWhatsapp" value="1" v-model="publicacion.whatsapp">
							<label class="form-check-label" for="rWhatsapp">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbWhatsapp" id="rWhatsapp2" value="0" v-model="publicacion.whatsapp">
							<label class="form-check-label" for="rWhatsapp2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar dirección de empresa</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbDireccion" id="rDireccion1" value="1" v-model="publicacion.direccion">
							<label class="form-check-label" for="rDireccion1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbDireccion" id="rDireccion2" value="0" v-model="publicacion.direccion">
							<label class="form-check-label" for="rDireccion2">
								No
							</label>
						</div>
				</div>
			</div>

		</div>
		<div class="encabezado py-2 px-3 my-4 w-75"> Datos del aviso </div>
		<div class="container">
			<div class="row mt-2">
				<div class="col-3"></div>
				<div class="col ">
					<label class="text-muted" style="width:42%">Cargo</label> 
					<label class="text-muted" style="width:40%">Complemento</label>
				</div>
			</div>
			<div class="row mb-2">
				<div class="col-3">Titulo del aviso</div>
				<div class="col ">
					<input type="text" style="width:40%" placeholder="Conductor(a)" v-model="publicacion.cargo"> - 
					<input type="text" style="width:40%" placeholder="Con 2 años de experiencia" v-model="publicacion.complemento">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3"><span class="fst-italic">Titulo a publicar</span></div>
				<div class="col text-capitalize ">
					<label for="" v-if="publicacion.cargo==''"><strong><span class="fst-italic">Conductor(a), con 2 años de experiencia</span></strong></label>
					<label for="" v-else><strong><span class="fst-italic">{{publicacion.cargo}}, {{publicacion.complemento}}</span></strong></label>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Área</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Seleccione el área de trabajo</option>
						<option v-for="area in areas" :value="area.id">{{area.area}}</option>
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
				<div class="col-3">Jornada laboral</div>
				<div class="col ">
					<select name="" id="sltJornada" v-model="publicacion.jornada">
						<option value="-1">Seleccione una jornada</option>
						<option value="1">Jornada extraordinaria</option>
						<option value="2">Medio Tiempo</option>
						<option value="3">Tiempo completo</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Tipo de contrato</div>
				<div class="col ">
					<select name="" id="sltContrato" v-model="publicacion.contrato">
						<option value="-1">Seleccione un contrato</option>
						<option value="1">Contrato indefinido</option>
						<option value="2">Sin contrato</option>
						<option value="3">CAS</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Tiempo de contratación</div>
				<div class="col ">
					<select name="" id="sltContrato" v-model="publicacion.tiempo">
						<option value="-1">Seleccione un tipo</option>
						<option value="1">Por horas</option>
						<option value="2">Tiempo parcial</option>
						<option value="3">Tiempo completo</option>
						<option value="4">Horarios prolongados</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Requisitos</div>
				<div class="col-7">
					<textarea class="form-control" id="requisitos" rows="3" v-model="publicacion.requisitos"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Funciones</div>
				<div class="col-7">
					<textarea class="form-control" id="funciones" rows="3" v-model="publicacion.funciones"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Competencias y habilidades</div>
				<div class="col-7">
					<textarea class="form-control" id="competencias" rows="3" v-model="publicacion.competencias"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Beneficios</div>
				<div class="col-7">
					<textarea class="form-control" id="beneficios" rows="3" v-model="publicacion.beneficios"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Oferta</div>
				<div class="col-7">
					<textarea class="form-control" id="oferta" rows="3" v-model="publicacion.oferta"></textarea>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Sueldo (neto mensual)</div>
				<div class="col ">
					<input type="number" id="txtSueldo" v-model="publicacion.sueldo">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" id="cSueldo" v-model="publicacion.versueldo">
						<label class="form-check-label" for="cSueldo">Mostrar monto del sueldo </label>
					</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Fecha de contratación</div>
				<div class="col ">
					<input type="date" v-model="publicacion.inicio">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Fecha de cierre</div>
				<div class="col ">
					<input type="date" v-model="publicacion.fin">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Cantidad de vacantes</div>
				<div class="col ">
					<input type="number" v-model="publicacion.vacantes">
				</div>
			</div>

		</div>

		<div class="encabezado py-2 px-3 my-4 w-75"> Requerimientos </div>
		<div class="container">
			<div class="row my-2">
				<div class="col-3">Años de experiencia</div>
				<div class="col ">
					<select name="" id="sltExperiencia" v-model="publicacion.experiencia">
						<option value="-1">No requiere experiencia</option>
						<option value="1">1 año</option>
						<option value="2">2 años</option>
						<option value="3">3 años</option>
						<option value="4">4 años a más</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Edad</div>
					<div class="col">
						<input type="number" min="10" max="99" v-model="publicacion.edadMinima"> -
						<input type="number" min="10" max="99" v-model="publicacion.edadMaxima">
					</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Estudios mínimos</div>
				<div class="col ">
					<select name="" id="sltEstudios" v-model="publicacion.estudios">
						<option value="-1">Sin estudios</option>
						<option value="1">Ninguno</option>
						<option value="2">Primaria incompleta</option>
						<option value="3">Primaria completa</option>
						<option value="4">Secundria incompleta</option>
						<option value="5">Secundria completa</option>
						<option value="6">Superior</option>
						<option value="7">Técnico</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Idiomas</div>
				<div class="col ">
					<select name="" id="sltIdiomas" @change="agregarIdioma()">
						<option value="-1">Seleccione</option>
						<option value="2">Inglés</option>
						<option value="3">Francés</option>
						<option value="4">Italiano</option>
						<option value="5">Otros</option>
					</select>
					<select class="d-none" id="">
						<option value="-1">Seleccione</option>
						<option value="-1">Nativo</option>
						<option value="-1">Avanzado</option>
						<option value="1">Medio</option>
						<option value="2">Básico</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<button v-for="(language, index) in publicacion.idiomas" type="button" class="btn btn-sm btn-outline-primary position-relative me-3">{{idiomas[language]}}
						<span v-if="index>0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" @click="borrarIdiomas(index)">
							<i class="bi bi-x-lg"></i>
						</span>
					</button>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Destrezas y conocimientos</div>
				<div class="col ">
					<input type="text" class="w-50" v-model="publicacion.destrezas">
				</div>
			</div>
			<div class="row row-cols-3 my-2">
				<div class="col" v-for="(licencia, index) in licencias">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" name="chkLicencias" :value="licencia" :id="'chkLicencias'+index" :checked="index==0? true: false" @change="modificarLicencias()" >
							<label class="form-check-label" :for="'chkLicencias'+index" >
								{{licencia}}
							</label>
						</div>
					</div>
			</div>
			<div class="row my-2">
				<div class="col-2">Disponibilidad para viajar</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje1" value="1" v-model="publicacion.viaje">
							<label class="form-check-label" for="rdbViaje1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje2" value="2" v-model="publicacion.viaje">
							<label class="form-check-label" for="rdbViaje2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-2">Disponibilidad para cambiar de residencia</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rResidencia" id="rResidencia" value="1" v-model="publicacion.residencia">
							<label class="form-check-label" for="rResidencia">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rResidencia" id="rResidencia2" value="2" v-model="publicacion.residencia">
							<label class="form-check-label" for="rResidencia2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-2">Persona con discapacidad</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rDiscapacitado" id="rDiscapacitado" value="1" v-model="publicacion.discapacitado">
							<label class="form-check-label" for="rDiscapacitado">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rDiscapacitado" id="rDiscapacitado2" value="2" v-model="publicacion.discapacitado">
							<label class="form-check-label" for="rDiscapacitado2">
								No
							</label>
						</div>
				</div>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-4 w-75"> Preguntas extras </div>
		<div class=" col-9">
			<p>Puede agregar la cantidad de preguntas que desee para obtener información del candidato de forma más precisa. Le ayudará para descartar los menos adecuados.</p>
			<button class="btn btn-sm btn-outline-secondary" @click="agregarPregunta()"><i class="bi bi-question-circle"></i> Añadir nueva pregunta</button>
			<div class="w-75" v-if="publicacion.bancoPreguntas.length>0">
				<h4 class="text-muted">Preguntas</h4>
				<ul class="list-group ">
					<li class="list-group-item d-flex justify-content-between align-items-center" v-for="(pregunta, index) in publicacion.bancoPreguntas"><span>{{index+1}}. {{pregunta}}</span> <button class="btn btn-sm btn-outline-danger border-0" @click="borrarPregunta(index)"><i class="bi bi-x-circle-fill"></i></button></li>
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
				inicio: moment().format('YYYY-MM-DD'), fin: moment().add(1,'week').format('YYYY-MM-DD'), vacantes:1, experiencia:-1, edadMinima:18, edadMaxima:55, estudios:-1, idiomas:["1"], destrezas:'', licencias:['Sin permiso'], viaje:1, bancoPreguntas:[], tiempo:-1, requisitos:'',funciones:'',competencias:'',beneficios:'',oferta:'', residencia:2, discapacitado:2, corto:null, publico:1
				}, idiomas:['Ninguno', 'Español','Inglés', 'Francés', 'Italiano', 'Otros'], corto:null
			}
		},
		mounted() {
			this.cargarBasicos()
			if(this.$route.params.corto)
				this.verAviso()
		},
		methods:{
			cargarBasicos(){
				this.areas = JSON.parse(localStorage.getItem('areas'))
				this.departamentos = JSON.parse(localStorage.getItem('departamentos'))
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
					this.publicacion.contrato = resp.data.anuncio.contrato
					this.publicacion.sueldo = resp.data.anuncio.sueldo
					this.publicacion.idiomas = resp.data.idiomas
					this.publicacion.licencias = resp.data.licencias
					this.publicacion.versueldo= resp.data.anuncio.versueldo =='1'? true : false
					this.publicacion.corto= resp.data.anuncio.corto
				})
			},
			agregarPregunta(){
				this.question='';
				if(this.publicacion.bancoPreguntas.length==5)
					alert('El máximo de preguntas es 5')
				else
					if(this.question=prompt('¿Cuál es la pregunta que desea hacer al candidato?'))
						this.publicacion.bancoPreguntas.push(this.question);
			},
			publicar(){
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
			irAnuncio(){ this.$router.push({ name: 'verAviso', params:{id:this.corto}}); },
			cargarProvincia(){
				this.provincias=[]
				this.publicacion.idProvincia=-1
				this.axios.post(this.servidor+'Ubigeo.php',{pedir: 'provincias', idDepa: this.publicacion.idDepartamento})
				.then(resp=> this.provincias = resp.data )
			},
			borrarPregunta(index){
				if(confirm('¿Deseas eliminar la pregunta?')){
					this.publicacion.bancoPreguntas.splice(index, 1);
				}
			}
		}
	}
</script>

<style scoped>

</style>