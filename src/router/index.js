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
		path: '/empresas/lista', name: 'listaEmpresas', component: () => import('../views/Empresa/listas.vue')
	},
	{
		path: '/empresas/publicar', name: 'publicar', component: () => import('../views/Empresa/publicar.vue')
	},
	{
		path: '/preguntas-frecuentes', name: 'PreguntasPostulante', component: () => import('../views/Candidato/preguntas.vue')
	},
	{
		path: '/candidato/login', name: 'loginCandidato', component: () => import('../views/Candidato/login.vue')
	},
	{
		path: '/candidato/crearCV', name: 'crearCV', component: () => import('../views/Candidato/crearCV.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
