Aplicación de Almacenamiento de Prompts
Una aplicación web simple que almacena prompts generados por los usuarios, utilizando HTML, CSS, JavaScript y Firestore de Firebase como base de datos.

Estado del Proyecto
Estado: En Pausa

Este proyecto fue parte de mis prácticas como estudiante, donde experimenté con la creación de una aplicación para almacenar y gestionar prompts. El frontend está construido con HTML, CSS y JavaScript, mientras que Firebase Firestore se utilizó como la base de datos.

Debido a dificultades para configurar de manera segura las claves de Firebase utilizando GitHub Secrets, he decidido pausar el desarrollo del proyecto. Se realizaron varios intentos para ocultar la información sensible utilizando variables de entorno y workflows de GitHub Actions, pero no logré desplegar la aplicación de forma segura.

Funcionalidades
Crear, almacenar y gestionar prompts de usuarios.
Integración con Firebase Firestore para el almacenamiento de datos.
Diseño responsivo y fácil de usar.
Desafíos
Uno de los principales desafíos fue implementar GitHub Secrets para almacenar de manera segura las claves de configuración de Firebase. A pesar de explorar diversas soluciones con herramientas como ChatGPT, Claude y Gemini, no fue posible superar este obstáculo.

Debido a la importancia de mantener la seguridad en el proyecto, he optado por no publicar las claves de Firebase en el repositorio público.

Planes Futuros
Retomar el proyecto una vez que encuentre una solución segura y confiable para gestionar las claves de Firebase a través de GitHub Secrets.
Mejorar el pipeline de despliegue utilizando GitHub Actions.
Cómo Ejecutar el Proyecto Localmente
Si deseas experimentar con este proyecto localmente, sigue estos pasos:

Clona este repositorio:
git clone https://github.com/NetworkingCode/PromptestV2.git

Instala las dependencias (si las hay) ejecutando:
npm install

Deberás proporcionar tu propia configuración de Firebase en un archivo firebaseConfig.js.
Nota: No publiques datos sensibles, como las claves de configuración de Firebase, en repositorios públicos. Considera usar variables de entorno o un gestor de secretos.

Lecciones Aprendidas
La configuración adecuada de secretos en repositorios públicos es esencial para la seguridad.
Firebase Firestore es una base de datos flexible y escalable para proyectos pequeños.
Los pipelines de despliegue requieren una configuración cuidadosa para equilibrar la facilidad de uso y la seguridad.
Contribuciones
Este proyecto actualmente no acepta contribuciones ya que está en pausa. Sin embargo, siéntete libre de hacer un fork y experimentar con tu propia configuración de Firebase.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.
