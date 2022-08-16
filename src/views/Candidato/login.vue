<template>

	<div class="row row-cols-2">
		<div class="col text-center">
			<img src="../../../public/images/loginLeft.png" alt="">
		</div>
		<div class="col-4 p-5">
			<h2>Inicie sesión</h2>
			<p>Ingrese los datos de su cuenta</p>
			<label for="">Correo</label>
			<input type="text" class="form-control mb-3">
			<label for="">Contraseña</label>
			<input type="password" class="form-control mb-3">
			<button class="btn btn-primary">Entrar a la plataforma</button>
			<hr>
			<h2>Regístrese</h2>
			<p>Si no dispone de una cuenta, puede crearse una acá:</p>
			<label for="">Nombres</label>
			<input type="text" class="form-control mb-3">
			<label for="">Apellidos</label>
			<input type="text" class="form-control mb-3">
			<label for="">Correo</label>
			<input type="text" class="form-control mb-3">
			<label for="">Contraseña</label>
			<input type="password" class="form-control mb-3">
			<label for="">Repita su contraseña</label>
			<input type="password" class="form-control mb-3">
			<button class="btn btn-primary">Entrar a la plataforma</button>
			<hr>
			<p>Si Ud. es empresa puede ingresar desde <a href="#">acá</a></p>
			<hr>
			<p>También puede utilizar la app en:</p>
			<center><img src="../../../public/images/google-play.svg" alt=""></center>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style scoped>

</style>