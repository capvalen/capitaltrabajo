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
		path: '/buscador/termino/:filtro', name: 'buscarTexto', component: Buscador
	},
	{
		path: '/empresas/lista', name: 'listaEmpresas', component: () => import('../views/Empresa/listas.vue')
	},
	{
		path: '/anuncio/publicar/anuncio/simple', name: 'publicar', component: () => import('../views/Empresa/publicar.vue')
	},
	{
		path: '/anuncio/editar/anuncio/simple/:corto', name: 'editarAnuncioSimpple', component: () => import('../views/Empresa/publicar.vue')
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
		path: '/candidato/mostrar-curriculum/:uid', name: 'verCVPostulante', component: () => import('../views/Candidato/verCV.vue')
	},
	{
		path: '/candidato/mis-postulaciones/', name: 'verDondePostule', component: () => import('../views/Candidato/misPostulados.vue')
	},
	{
		path: '/aviso/:id', name: 'verAviso', component: () => import('../views/Empresa/verAviso.vue')
	},
	{
		path: '/empresas/panel', name: 'verPanel', component: () => import('../views/Empresa/panel.vue')
	},
	{
		path: '/empresas/buscar/curriculum', name: 'buscarCV', component: () => import('../views/Empresa/buscarCV.vue')
	},
	{
		path: '/empresas/mis-ofertas', name: 'misOfertas', component: () => import('../views/Empresa/misOfertas.vue')
	},
	{
		path: '/empresas/editar/mis-datos', name: 'editarDatosEmpresa', component: () => import('../views/Empresa/modificarDatos.vue')
	},
	
	
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
