import { grabarPrompt, limpiarCampos, copiarTexto, cargarPrompts, eliminarPrompt  } from './code.js';

// Asignar las funciones al objeto window para que estén disponibles globalmente
window.grabarPrompt = grabarPrompt;
window.limpiarCampos = limpiarCampos;
window.copiarTexto = copiarTexto;
window.eliminarPrompt = eliminarPrompt;

// Cargar los prompts existentes cuando se carga la página
window.addEventListener('load', cargarPrompts);

// Puedes agregar más inicializaciones o event listeners aquí si es necesario