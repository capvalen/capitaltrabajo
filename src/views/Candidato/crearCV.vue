<template>
<div class="container">
	<h4 class="text-muted">Datos personales</h4>
	<div class="container">
		<div class="row my-2">
			<div class="col-2">Nombres <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.nombres">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Apellidos <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.apellidos">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Nacionalidad</div>
			<div class="col">
				<select name="" v-model="postulante.nacionalidad">
					<option value="1">Peruana</option>
					<option value="2">Venezolana</option>
					<option value="3">Colombiana</option>
					<option value="4">Chilena</option>
					<option value="5">Otro</option>
				</select>
			</div>
		</div>
		<div class="row my-2" v-if="postulante.nacionalidad==1">
			<div class="col-2">D.N.I. <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.dni">
			</div>
		</div>
		<div class="row my-2" v-else>
			<div class="col-2">Cédula de extranjería <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.dni">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Celular <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.celular">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Whatsapp <span class="text-danger">*</span></div>
			<div class="col">
				<input type="text" v-model="postulante.whatsapp">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">¿Qué edad tiene? <span class="text-danger">*</span></div>
			<div class="col">
				<input type="number" v-model="postulante.edad">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Correo electrónico</div>
			<div class="col">
				<input type="text" v-model="postulante.correo">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Página web personal</div>
			<div class="col">
				<input type="text" v-model="postulante.web">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Sexo</div>
			<div class="col">
				<select id="" v-model="postulante.sexo">
					<option value="1">Varón</option>
					<option value="2">Mujer</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Estado civil</div>
			<div class="col">
				<select id="" v-model="postulante.civil">
					<option value="1">Soltero(a)</option>
					<option value="2">Casado(a)</option>
					<option value="2">Divorciado(a)</option>
					<option value="2">Viudo(a)</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-10">Describa brevemente sus habilidades principales, destrezas y/o fortalezas.</div>
			<div class="col-10">
				<textarea cols="3" rows="3" style="width:50%;" v-model="postulante.destrezas"></textarea>
			</div>
		</div>
		<div class="row my-2 d-none">
			<div class="col-4">¿Está Ud. autorizado para trabajar en Perú?</div>
			<div class="col">
				<select id="" v-model="postulante.autorizado">
					<option value="1">Sí</option>
					<option value="2">Sí, sólo unos meses</option>
					<option value="3">No</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-3">¿Disponibilidad de viaje?</div>
			<div class="col">
				<select id="" v-model="postulante.viaje">
					<option value="1">Sí</option>
					<option value="2">Sí, sólo unos meses</option>
					<option value="3">No</option>
				</select>
			</div>
		</div>

	</div>

	<h4 class="text-muted my-4">Datos de Currículum Vitae</h4>
	<div class="container">
		<div class="row my-2">
			<div class="col-10">Título de su CV, por ejemplo: <span class="fst-italic">"Programador", "Secretaria Bilíngüe", "Ingeniero Petroquímico"</span></div>
			<div class="col-10">
				<input type="text" style="width:50%;" v-model="postulante.titulo">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">1. Lugar de residencia <span class="text-danger">*</span></div>
			<div class="col">
				<select id="" v-model="postulante.residencia">
					<option value="-1">Por favor seleccione</option>
					<option v-for="(residencia, index) in residencias" :value="index">{{residencia}}</option>
				</select>
			</div>
		</div>
		
		<div class="row my-2">
			<div class="col-2">2. ¿Puede conducir?</div>
			<div class="col">
				<select id="" v-model="postulante.conducir">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">3. ¿Posee vehículo propio?</div>
			<div class="col">
				<select id="" v-model="postulante.vehiculo">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">4. ¿Nivel de estudios? <span class="text-danger">*</span></div>
			<div class="col">
				<select id="" v-model="postulante.estudios">
					<option value="1">Ninguno</option>
					<option value="2">Primaria incompleta</option>
					<option value="3">Primaria completa</option>
					<option value="4">Secundaria incompleta</option>
					<option value="5">Secundaria completa</option>
					<option value="6">Superior</option>
					<option value="7">Técico</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">5. Situación laboral</div>
			<div class="col">
				<select id="" v-model="postulante.situacion">
					<option value="1">Sin trabajo</option>
					<option value="2">Trabajando actualmente</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">6. Disponibilidad</div>
			<div class="col">
				<select id="" v-model="postulante.disponibilidad">
					<option value="1">Inmediata</option>
					<option value="2">Medio tiempo</option>
					<option value="2">Por horas</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">7. Nivel de inglés</div>
			<div class="col">
				<select id="" v-model="postulante.ingles">
					<option value="1">No aprendido</option>
					<option value="2">Básico</option>
					<option value="2">Intermedio</option>
					<option value="2">Avanzado</option>
				</select>
			</div>
		</div>
		
		<div class="row my-2">
			<div class="col-2">8. Expectativas salariales</div>
			<div class="col">
				<select id="" v-model="postulante.expectativas">
					<option value="1">Entre 950 a 1200</option>
					<option value="2">Entre 1200 a 1500</option>
					<option value="3">Entre 1500 a 2200</option>
					<option value="4">Más de 2200</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col">9. ¿Qué tipo de empleo busca? Puede seleccionar todos si desea</div>
			<div class=" container">
				<div class="row row-cols-3 my-2">
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Tiempo completo
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Por horas
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Beca/Prácticas
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Medio tiempo
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Temporal
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Desde casa
							</label>
						</div>
					</div>

				</div>
			</div>

			<div class="col">10. ¿Qué categorías clasificaría su perfil profesional? Por favor no elija más de 2</div>
			<div class="container">
				<div class="row row-cols-2 my-2">
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Administración / Oficina
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Arte / Diseño / Medios
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Científico / Investigación
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Informática / Telecomunicaciones
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Dirección / Gerencia
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Economía / Contabilidad
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Educación / Universidad
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Hostelería / Turismo
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Ingeniería / Técnico
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Legal / Asesoría
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Marketing / Ventas
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Medicina / Salud
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Recursos Humanos
							</label>
						</div>
					</div>
					<div class="col">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Otros
							</label>
						</div>
					</div>

				</div>
			</div>

			<div class="col">11. ¿En qué lugares desearía trabajar?</div>
			<div class="container"></div>
			<div class="row row-cols-3 my-2">
				<div class="col" v-for="departamento in departamentosVivienda">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								{{departamento}}
							</label>
						</div>
					</div>
			</div>
			<div class="row my-2">
				<div class="col-2">12. ¿Es discapacitado?</div>
				<div class="col">
					<select id="" v-model="postulante.discapacidad">
						<option value="1">Si</option>
						<option value="2">No</option>
					</select>
				</div>
			</div>

			<div class="row my-2">
				<div class="col-3">13. Puede adjuntar un documento extra</div>
				<div class="col" >
					<input v-if="postulante.documento==''" type="file" ref="documento" id="documento" @change="subirDocumento()" accept="application/pdf,application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.oasis.opendocument.text">
					<p v-else><a :href="'/documentos/'+postulante.documento" target="_blank">Documento adjunto</a></p>
				</div>
				
			</div>
			<div class="row my-2">
				<div class="col-3">14. Agregue una foto a su CV</div>
				<div class="col">
					<input v-if="postulante.foto==''" type="file" ref="foto" id="foto" accept="image/*" @change="subirFoto()">
					<p v-else><a :href="'/images/fotos/'+postulante.foto" target="_blank">Foto adjuntada</a></p>
				</div>
			</div>

			<div class="row my-2">
				<div class="col d-flex justify-content-center" v-if="postulante.id<0">
					<button class="btn btn-outline-primary" @click="guardarCV()" ><i class="bi bi-cloud-plus"></i> Enviar currículum</button>
				</div>
				<div class="col d-flex justify-content-center gap-2" v-else>
					<button class="btn btn-outline-success" @click="actualizarCV()"><i class="bi bi-cloud-plus"></i> Actualizar currículum</button>
					<button class="btn btn-outline-primary" @click="verCV()"><i class="bi bi-cloud-plus"></i> Ver mi currículum</button>
				</div>
			</div>
			


		</div>

		
	</div>
</div>

</template>

<script>
import BuscarCV from '../Empresa/buscarCV.vue'

export default{
	name: 'crearCuenta',
	props:['usuario', 'departamentos'],
	data(){
		return {
			residencias:[], departamentosVivienda:[],
			postulante:{ id:-1, idPostulante:-1, 
				nombres:'', apellidos: '', dni:'', celular:'', edad:'', correo:'', web:'', sexo:1, civil:1, nacionalidad:1, destrezas:'', residencia:-1,conducir:1,vehiculo:1,estudios:1, situacion:1,disponibilidad:1,ingles:1, expectativas:1,titulo:'', nacionalidad:1, whatsapp:'', autorizado:1, viaje:1, documento:'', foto:'', discapacidad:2
			}
		}
	},
	mounted() {
		this.departamentosVivienda=[]
		this.departamentosVivienda = this.departamentos
		this.residencias = this.departamentos
		this.buscarCV()
		//this.departamentosVivienda.unshift('Extranjero', 'Cualquier departamento')
	},
	methods: {
		buscarCV(){
			let uid = this.usuario.uid
			this.axios.post(this.servidor+'Postulante.php', {pedir:'pedirCV', uid})
			.then(resp => this.postulante = resp.data )
		},
		guardarCV(){
			this.postulante.idPostulante = this.usuario.uid
			if( this.validarRellenado())
				this.axios.post(this.servidor+'Postulante.php', {pedir:'registrar', postulante: this.postulante })
				.then(resp=>{
					this.postulante.id = resp.data.id
					alertify.success('CV registrado con éxito')
					console.log(resp.data)
				})
		},
		actualizarCV(){
			if( this.validarRellenado())
				this.axios.post(this.servidor+'Postulante.php', {pedir:'actualizar', postulante: this.postulante })
				.then(resp=>{
					alertify.success('Datos actualizados con éxito')
					console.log(resp.data)
				})
		},
		verCV(){
			this.$router.push({ name: 'verCVPostulante', params: { uid: this.postulante.idPostulante } });
		},
		subirFoto(){
			let archivo = this.$refs.foto.files[0];

			if(archivo){
				let formData = new FormData();
				formData.append('ruta', 'images/fotos');
				formData.append('archivo', archivo);

				this.axios.post(this.servidor+'subirAdjunto.php', formData,{
					headers: { 'Content-Type' : 'multipart/form-data' }
				})
				.then( response => {
					let nomArchivo = response.data;
					console.log(nomArchivo)
					if( nomArchivo =='Error subida' ){
						this.postulante.foto='';
						console.log( 'err1' );
					}else{ //subió bien
						this.postulante.foto = nomArchivo;
						console.log( 'subio bien al indice con nombre: '+ nomArchivo );
					}
				})
				.catch(function(ero){ console.log( 'err2' + ero );
					return 'error 2';
				});
			}
		},
		subirDocumento(){
			let archivo = this.$refs.documento.files[0];

			if(archivo){
				let formData = new FormData();
				formData.append('ruta', 'documentos');
				formData.append('archivo', archivo);

				this.axios.post(this.servidor+'subirAdjunto.php', formData,{
					headers: { 'Content-Type' : 'multipart/form-data' }
				})
				.then( response => {
					let nomArchivo = response.data;
					console.log(nomArchivo)
					if( nomArchivo =='Error subida' ){
						this.postulante.documento='';
						console.log( 'err1' );
					}else{ //subió bien
						this.postulante.documento = nomArchivo;
						console.log( 'subio bien al indice con nombre: '+ nomArchivo );
					}
				})
				.catch(function(ero){
					console.log( 'err2' + ero );
					return 'error 2';
				});
			}
		},
		validarRellenado(){
			let valor = false;
			if( this.postulante.nombres == '') alertify.error('Falta rellenar el campo nombres')
			else if( this.postulante.apellidos == '') alertify.error('Falta rellenar el campo apellidos')
			else if( this.postulante.dni == '') alertify.error('Falta rellenar el campo DNI / Celula')
			else if( this.postulante.celular == '') alertify.error('Falta rellenar el campo celular')
			else if( this.postulante.whatsapp == '') alertify.error('Falta rellenar el campo Whastapp')
			else if( this.postulante.estudios == '') alertify.error('Falta rellenar el campo de estudios')
			else if( this.postulante.edad == '' || this.postulante.edad<=0) alertify.error('Falta rellenar el campo de edad')
			else if( this.postulante.residencia == '' || this.postulante.residencia<0) alertify.error('Falta rellenar el campo de residencia')
			else valor = true
			return valor;
		}
	},
}
</script>