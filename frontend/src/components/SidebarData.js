import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Crear Articulo',
    path: '/crearArticulo',
    icons:<AiIcons.AiOutlinePlusCircle color='#EBF7F8'/>,
    cName: 'nav-text_CrearArticulo'
  },
  {
    title: 'Inicio',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Comunidad',
    path:'/comunidad',
    cName: 'nav-text'
  },
  {
    title: 'Sobre Nosotros',
    path:'/sobreNosotros',
    cName: 'nav-text'
  },
  {
    title: 'Soporte',
    path:'/soporte',
    cName: 'nav-text'
  },
  {
    title: 'Configuración',
    path:'/configuracion',
    cName: 'nav-text'
  },
];