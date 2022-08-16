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
			
		</div>


	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>

</style>