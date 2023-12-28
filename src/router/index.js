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
	{ path: '/publicar/anuncio/avanzado', name: 'publicarComplejo', component: () => import('../views/Empresa/publicarComplejo.vue') },
	{ path: '/publicar/anuncio/simple', name: 'publicarSimple', component: () => import('../views/Empresa/publicarSimple.vue') },
	{ path: '/anuncio/editar/anuncio/avanzado/:corto', name: 'editarAnuncioComplejo', component: () => import('../views/Empresa/publicarComplejo.vue') },
	{ path: '/anuncio/editar/anuncio/simple/:corto', name: 'editarAnuncioSimple', component: () => import('../views/Empresa/publicarSimple.vue') },
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
	{ path: '/aviso/:id', name: 'verAviso', component: () => import('../views/Empresa/verAviso.vue') },
	{ path: '/aviso/simple/:id', name: 'verAviso.simple', component: () => import('../views/Empresa/verAvisoSimple.vue') },
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
	hashbang: false,
	mode:'html5',
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
