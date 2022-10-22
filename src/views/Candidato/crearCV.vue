<template>
<div class="container">
	<h4 class="text-muted">Datos personales</h4>
	<div class="container">
		<div class="row my-2">
			<div class="col-2">Nombres</div>
			<div class="col">
				<input type="text" v-model="postulante.nombres">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Apellidos</div>
			<div class="col">
				<input type="text" v-model="postulante.apellidos">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">D.N.I.</div>
			<div class="col">
				<input type="text" v-model="postulante.dni">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">Celular</div>
			<div class="col">
				<input type="text" v-model="postulante.celular">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">¿Qué edad tiene?</div>
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
				<input type="text" v-model="postulante.pagina">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">11. Sexo</div>
			<div class="col">
				<select id="" v-model="postulante.sexo">
					<option value="1">Varón</option>
					<option value="2">Mujer</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">12. Estado civil</div>
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
			<div class="col-2">13. Su nacionalidad</div>
			<div class="col">
				<select id="" v-model="postulante.nacionalidad">
					<option value="1">Peruano</option>
					<option value="2">Extranjero</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-10">Describa brevemente sus habilidades principales, destrezas y/o fortalezas.</div>
			<div class="col-10">
				<textarea cols="3" rows="3" style="width:50%;" v-model="postulante.habilidades"></textarea>
			</div>
		</div>
		

	</div>

	<h4 class="text-muted my-4">Datos de Currículum Vitae</h4>
	<div class="container">
		<div class="row my-2">
			<div class="col-10">Título de su CV, por ejemplo: <span class="fst-italic">"Programador", "Secretaria Bilíngüe", "Ingeniero Petroquímico"</span></div>
			<div class="col-10">
				<input type="text" style="width:50%;" v-model="postulante.presentacion">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">1. Lugar de residencia</div>
			<div class="col">
				<select id="" v-model="postulante.residencia">
					<option value="1">Por favor seleccione</option>
					<option value="1">Lima</option>
					<option value="2">Junín</option>
					<option value="3">Anchas</option>
				</select>
			</div>
		</div>
		
		<div class="row my-2">
			<div class="col-2">3. ¿Puede conducir?</div>
			<div class="col">
				<select id="" v-model="postulante.conducir">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">4. ¿Posee vehículo propio?</div>
			<div class="col">
				<select id="" v-model="postulante.vehiculo">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">5. ¿Nivel de estudios?</div>
			<div class="col">
				<select id="" v-model="postulante.estudios">
					<option value="1">Ninguno</option>
					<option value="2">Primaria incompleta</option>
					<option value="2">Primaria completa</option>
					<option value="2">Secundaria incompleta</option>
					<option value="2">Secundaria completa</option>
					<option value="2">Superior</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">6. ¿Que grado tiene?</div>
			<div class="col">
				<select id="" v-model="postulante.grado">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">7. Situación laboral</div>
			<div class="col">
				<select id="" v-model="postulante.situacion">
					<option value="1">Sin trabajo</option>
					<option value="2">Trabajando actualmente</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">8. Disponibilidad</div>
			<div class="col">
				<select id="" v-model="postulante.disponibilidad">
					<option value="1">Inmediata</option>
					<option value="2">Medio tiempo</option>
					<option value="2">Por horas</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">9. Nivel de inglés</div>
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
			<div class="col-2">10. ¿Está Ud. autorizado para trabajar en Perú?</div>
			<div class="col">
				<select id="" v-model="postulante.trabajar_peru">
					<option value="1">Si</option>
					<option value="2">No</option>
				</select>
			</div>
		</div>
		
		<div class="row my-2">
			<div class="col-2">14. Expectativas salariales</div>
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
			<div class="col">15. ¿Qué tipo de empleo busca? Puede seleccionar todos si desea</div>
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

			<div class="col">16. ¿Qué categorías clasificaría su perfil profesional? Por favor no elija más de 2</div>
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

			<div class="col">17. ¿En qué lugares desearía trabajar?</div>
			<div class="container"></div>
			<div class="row row-cols-3 my-2">
				<div class="col" v-for="departamento in departamentos">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								{{departamento}}
							</label>
						</div>
					</div>
			</div>

			<div class="row my-2">
				<div class="col">18. Puede adjuntar un documento extra</div>
				<div class="col">
					<input type="file">
				</div>
			</div>

			<div class="row my-2">
				<div class="col d-flex justify-content-center"><button class="btn btn-outline-primary"><i class="bi bi-cloud-plus"></i> Enviar currículum</button></div>
			</div>


		</div>

		
	</div>
</div>

</template>

<script>
export default{
	name: 'crearCuenta',
	data(){
		return {
			departamentos:['Extranjero','Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Cusco', 'Callao', 'Huancavelica','Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno','San Martín', 'Tacna', 'Tumbes', 'Ucayali' ],
			postulante:{
				nombres:'', apellidos: '', dni:'', celular:'', edad:'', correo:'', web:'', sexo:'', civil:'', nacionalidad:'', habilidades:'', residencia:'',conducir:'',vehiculo:'',estudios:'',grado:'',situacion:'',disponibilidad:'',ingles:'',trabajar_peru:'',expectativas:'',presentacion:'',
			}
		}
	}
}
</script>