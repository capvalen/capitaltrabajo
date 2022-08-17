<template>
	<div>
		<h3>Publica tu aviso</h3>
		<div class="encabezado py-2 px-3 my-4 w-75"> Visibilidad del aviso </div>
		<div class="container">
			<div class="row my-2">
				<div class="col-3">Urgente</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbUrgente" id="flexRadioDefault1">
							<label class="form-check-label" for="flexRadioDefault1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbUrgente" id="flexRadioDefault2" checked>
							<label class="form-check-label" for="flexRadioDefault2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar e-mail de contacto</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbMail" id="flexRadioDefault1">
							<label class="form-check-label" for="flexRadioDefault1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbMail" id="flexRadioDefault2" checked>
							<label class="form-check-label" for="flexRadioDefault2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar celular de contacto</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbCelular" id="flexRadioDefault1">
							<label class="form-check-label" for="flexRadioDefault1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbCelular" id="flexRadioDefault2" checked>
							<label class="form-check-label" for="flexRadioDefault2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Mostrar dirección de empresa</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbDireccion" id="flexRadioDefault1">
							<label class="form-check-label" for="flexRadioDefault1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbDireccion" id="flexRadioDefault2" checked>
							<label class="form-check-label" for="flexRadioDefault2">
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
					<input type="text" style="width:40%" placeholder="Conductor(a)"> - 
					<input type="text" style="width:40%" placeholder="Con 2 años de experiencia">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3"><span class="fst-italic">Titulo a publicar</span></div>
				<div class="col ">
					<label for=""><strong><span class="fst-italic">Conductor(a), con 2 años de experiencia</span></strong></label>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Área</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Seleccione el área de trabajo</option>
						<option value="1">Almacén / Logística / Transporte</option>
						<option value="2">Informática / Telecomunicaciones</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Departamento</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Seleccione un departamento</option>
						<option value="1">Lima</option>
						<option value="2">El Callao</option>
						<option value="3">Junín</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Provincia</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Seleccione un departamento</option>
						<option value="1">Huancayo</option>
						<option value="2">El Tambo</option>
						<option value="3">Chilca</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Jornada laboral</div>
				<div class="col ">
					<select name="" id="">
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
					<select name="" id="">
						<option value="-1">Seleccione un contrato</option>
						<option value="1">Contrato indefinido</option>
						<option value="2">Sin contrato</option>
						<option value="3">CAS</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Sueldo (neto mensual)</div>
				<div class="col ">
					<input type="number">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
						<label class="form-check-label" for="flexCheckDefault">
							Mostrar "Sueldo a tratar"
						</label>
					</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Fecha de contratación</div>
				<div class="col ">
					<input type="date">
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Cantidad de vacantes</div>
				<div class="col ">
					<input type="number" value="1">
				</div>
			</div>

		</div>

		<div class="encabezado py-2 px-3 my-4 w-75"> Requerimientos </div>
		<div class="container">
			<div class="row my-2">
				<div class="col-3">Años de experiencia</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">No requiere experiencia</option>
						<option value="1">1 año</option>
						<option value="2">2 años</option>
						<option value="3">3 años</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Edad</div>
					<div class="col">
						<input type="number" value="18" min="10" max="99"> -
						<input type="number" value="58" min="10" max="99">
					</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Estudios mínimos</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Sin estudios</option>
						<option value="1">Primaria incompleta</option>
						<option value="2">Secundria</option>
						<option value="3">Técnico</option>
					</select>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Idiomas</div>
				<div class="col ">
					<select name="" id="">
						<option value="-1">Seleccione</option>
						<option value="-1">Español</option>
						<option value="1">Inglés</option>
						<option value="2">Frances</option>
						<option value="3">Italiano</option>
					</select>
					<select name="" id="">
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
					<button type="button" class="btn btn-sm btn-outline-primary position-relative me-3">Español nativo
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							<i class="bi bi-x-lg"></i>
						</span>
					</button>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-3">Destrezas y conocimientos</div>
				<div class="col ">
					<input type="text" class="w-50">
				</div>
			</div>
			<div class="row row-cols-3 my-2">
				<div class="col" v-for="(licencia, index) in licencias">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" name="chkLicencias" value="" :id="'chkLicencias'+index" :checked="index==0? true: false">
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
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje1">
							<label class="form-check-label" for="rdbViaje1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje2" checked>
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
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje1">
							<label class="form-check-label" for="rdbViaje1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje2" checked>
							<label class="form-check-label" for="rdbViaje2">
								No
							</label>
						</div>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-2">Persona con discapacidad</div>
				<div class="col">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje1">
							<label class="form-check-label" for="rdbViaje1">
								Sí
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio" name="rdbViaje" id="rdbViaje2" checked>
							<label class="form-check-label" for="rdbViaje2">
								No
							</label>
						</div>
				</div>
			</div>
		</div>

		<div class="encabezado py-2 px-3 my-4 w-75"> Preguntas extras </div>
		<div class="container">
			<p>Puede agregar la cantidad de preguntas que desee para obtener información del candidato de forma más precisa. Le ayudará para descartar los menos adecuados.</p>
			<button class="btn btn-sm btn-outline-secondary" @click="agregarPregunta"><i class="bi bi-question-circle"></i> Añadir nueva pregunta</button>
			<div class="w-75" v-if="bancoPreguntas.length>0">
				<h4 class="text-muted">Preguntas</h4>
				<ul class="list-group ">
					<li class="list-group-item d-flex justify-content-between align-items-center" v-for="(pregunta, index) in bancoPreguntas"><span>{{index+1}}. {{pregunta}}</span> <button class="btn btn-sm btn-outline-danger border-0" @click="borrarPregunta(index)"><i class="bi bi-x-circle-fill"></i></button></li>
				</ul>
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		name: 'publicar',
		data() {
			return {
				licencias:[ 'Sin permiso', 'A1', 'A2', 'A3', 'A4', 'A5', 'B', 'C', 'D', 'E', 'F' ],
				question:'', bancoPreguntas:[]
			}
		},
		methods:{
			agregarPregunta(){
				if(this.bancoPreguntas.length==5){
					alert('El máximo de preguntas es 5')	
				}
				else{
					this.question='';
					if(this.question=prompt('¿Cuál es la pregunta que desea hacer al candidato?')){
						this.bancoPreguntas.push(this.question);
					}
				}
			},
			borrarPregunta(index){
				if(confirm('¿Deseas eliminar la pregunta?')){
					this.bancoPreguntas.splice(index, 1);
				}
			}
		}
	}
</script>

<style scoped>

</style>