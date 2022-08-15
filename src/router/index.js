import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Bienvenida.vue'
import Buscador from '../views/Buscador.vue'

const routes = [
	{
		path: '/',name: 'Principal', component: Principal
	},
	{
		path: '/buscador', name: 'Buscador', component: Buscador
	},
	{
		path: '/login', name: 'login', component: () => import('../views/login.vue')
	},
	{
		path: '/lista/empresas', name: 'listaEmpresas', component: () => import('../views/Empresa/listas.vue')
	},
	{
		path: '/preguntas-frecuentes', name: 'PreguntasPostulante', component: () => import('../views/Candidato/preguntas.vue')
	},
	{
		path: '/candidato/crear', name: 'crearCuenta', component: () => import('../views/Candidato/crearCuenta.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
