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
		path: '/anuncio/publicar', name: 'publicar', component: () => import('../views/Empresa/publicar.vue')
	},
	{
		path: '/empresas/login', name: 'loginEmpresa', component: () => import('../views/Empresa/login.vue')
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
	{
		path: '/aviso/:id', name: 'verAviso', component: () => import('../views/Empresa/aviso.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
