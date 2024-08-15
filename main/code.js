// Importa la instancia de la base de datos desde el archivo firebase-db.js
import { db } from "../main/firebase-db.js";

// Importa funciones específicas de Firestore necesarias para operaciones con la base de datos
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Función asíncrona para grabar un nuevo prompt
export async function grabarPrompt() {
    
    // Obtiene los valores de los campos de entrada
    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    // Verifica si ambos campos están llenos
    if (titulo && comentario) {
        try {
            // Intenta guardar el nuevo prompt en Firestore
            const docRef = await addDoc(collection(db, "prompts"), {
                titulo: titulo,
                comentario: comentario,
                fecha: new Date()
            });
            console.log("Documento guardado con ID: ", docRef.id);

            // Actualiza la interfaz de usuario con el nuevo prompt
            const listaPrompts = document.getElementById('listaPrompts');

            // Crea elementos HTML para el nuevo prompt
            const promptEntry = document.createElement('div');
            promptEntry.className = 'prompt-entry';

            const promptTitle = document.createElement('h3');
            promptTitle.innerText = titulo;

            const promptText = document.createElement('p');
            promptText.innerText = comentario;

            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerText = 'Copiar';
            copyButton.onclick = () => copiarTexto(promptText.innerText);

            // Estructura los elementos del prompt
            promptEntry.appendChild(promptTitle);
            promptEntry.appendChild(promptText);
            promptEntry.appendChild(copyButton);

            // Añade el nuevo prompt al principio de la lista
            listaPrompts.prepend(promptEntry);

            // Recarga todos los prompts para asegurar consistencia
            await cargarPrompts();
            // Limpia los campos de entrada
            limpiarCampos();
            
        } catch (e) {
            // Maneja cualquier error durante el proceso
            console.error("Error al añadir documento: ", e);
            alert('Error al guardar el prompt: ' + e.message);
        }
    } else {
        // Alerta si alguno de los campos está vacío
        alert('Por favor, llena ambos campos antes de grabar.');
    }
}

// Función asíncrona para cargar todos los prompts existentes
export async function cargarPrompts() {
    const listaPrompts = document.getElementById('listaPrompts');
    listaPrompts.innerHTML = ''; // Limpia la lista existente

    try {
        // Crea una referencia a la colección de prompts
        const promptsRef = collection(db, "prompts");
        // Crea una consulta ordenada por fecha descendente
        const q = query(promptsRef, orderBy("fecha", "desc"));
        // Ejecuta la consulta
        const querySnapshot = await getDocs(q);

        // Itera sobre los resultados y crea elementos HTML para cada prompt
        querySnapshot.forEach((doc) => {
            const promptData = doc.data();
            const promptEntry = crearEntradaPrompt(doc.id, promptData.titulo, promptData.comentario);
            listaPrompts.appendChild(promptEntry);
        });
    
    } catch (error) {
        console.error("Error al cargar los prompts: ", error);
    }
}

// Función para crear un elemento HTML para un prompt individual
function crearEntradaPrompt(id, titulo, comentario) {
    // Crea y estructura los elementos HTML para un prompt
    const promptEntry = document.createElement('div');
    promptEntry.className = 'prompt-entry';
    promptEntry.id = `prompt-${id}`; // Añadimos un id único

    const promptTitle = document.createElement('h3');
    promptTitle.innerText = titulo;

    const promptText = document.createElement('p');
    promptText.innerText = comentario;

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerText = 'Copiar';
    copyButton.onclick = () => copiarTexto(comentario);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Eliminar';
    deleteButton.onclick = () => eliminarPrompt(id);

    promptEntry.appendChild(promptTitle);
    promptEntry.appendChild(promptText);
    promptEntry.appendChild(copyButton);
    promptEntry.appendChild(deleteButton);

    return promptEntry;
}

// Función para limpiar los campos de entrada después de grabar un prompt
export function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('comentario').value = '';
}

// Función para copiar el texto de un prompt al portapapeles
export function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ' + err);
    });
}

export async function eliminarPrompt(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este prompt?')) {
        try {
            await deleteDoc(doc(db, "prompts", id));
            console.log("Prompt eliminado con ID: ", id);
            
            // Eliminar el prompt de la UI
            const promptElement = document.getElementById(`prompt-${id}`);
            if (promptElement) {
                promptElement.remove();
            }
        } catch (error) {
            console.error("Error al eliminar el prompt: ", error);
            alert('Error al eliminar el prompt: ' + error.message);
        }
    }
}