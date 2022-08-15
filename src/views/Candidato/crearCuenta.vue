<template>
<div class="container">
	<h4 class="text-muted">Registro de datos pesonales</h4>
	<div class="container">
		<div class="row my-2">
			<div class="col-2">1. Lugar de residencia</div>
			<div class="col">
				<select id="">
					<option value="1">Por favor seleccione</option>
					<option value="1">Lima</option>
					<option value="2">Junín</option>
					<option value="3">Anchas</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">2. ¿Qué edad tiene?</div>
			<div class="col">
				<input type="number">
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">3. ¿Puede conducir?</div>
			<div class="col">
				<select id="">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">4. ¿Posee vehículo propio?</div>
			<div class="col">
				<select id="">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">5. ¿Nivel de estudios?</div>
			<div class="col">
				<select id="">
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
				<select id="">
					<option value="1">No</option>
					<option value="2">Si</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">7. Situación laboral</div>
			<div class="col">
				<select id="">
					<option value="1">Sin trabajo</option>
					<option value="2">Trabajando actualmente</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">8. Disponibilidad</div>
			<div class="col">
				<select id="">
					<option value="1">Inmediata</option>
					<option value="2">Medio tiempo</option>
					<option value="2">Por horas</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">9. Nivel de inglés</div>
			<div class="col">
				<select id="">
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
				<select id="">
					<option value="1">Si</option>
					<option value="2">No</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">11. Sexo</div>
			<div class="col">
				<select id="">
					<option value="1">Varón</option>
					<option value="2">Mujer</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">12. Estado civil</div>
			<div class="col">
				<select id="">
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
				<select id="">
					<option value="1">Peruano</option>
					<option value="2">Extranjero</option>
				</select>
			</div>
		</div>
		<div class="row my-2">
			<div class="col-2">14. Expectativas salariales</div>
			<div class="col">
				<select id="">
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

		}
	}
}
</script>