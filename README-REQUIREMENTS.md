# Frontend Technical Test: Clinical Summary Dashboard

Este proyecto es una solución para la prueba técnica de frontend, construida con una pila tecnológica moderna que incluye **Vite, React, TypeScript y Tailwind CSS**. El objetivo es demostrar habilidades en la construcción de interfaces de usuario modulares, dinámicas y estilizadas de manera eficiente, siguiendo las mejores prácticas de desarrollo y colaboración.

---

## 📄 El Desafío

El objetivo era implementar una interfaz de usuario basada en una historia de usuario y un diseño específico. La tarea principal consistía en crear cinco "widgets" o componentes para mostrar información de salud, con un enfoque en:

-   **Componentización:** Crear componentes reutilizables y bien definidos.
-   **Renderizado Dinámico:** Los widgets de datos debían ser capaces de renderizar contenido a partir de una lista (array) de datos.
-   **Manejo de Estado de UI:** Implementar la lógica de navegación por pestañas en el widget de "Agregar dato de salud".

---

## 🛠️ Flujo de Trabajo y Colaboración (Git Workflow)

Para asegurar un proceso de desarrollo limpio y organizado, se siguió un flujo de trabajo basado en ramas:

1.  **Rama Principal (`main`):** La rama `main` se mantiene siempre estable y desplegable. **No se realizan commits directos a esta rama.**
2.  **Rama de Desarrollo (`develop`):** Se creó una rama `develop` a partir de `main` para concentrar el desarrollo de la funcionalidad.
3.  **Merge Request / Pull Request:** Todo el código fue desarrollado en la rama `develop`. Una vez finalizado el trabajo, se creó un **Pull Request** de `develop` hacia `main` para formalizar la integración del código.
    *   Este proceso simula un entorno de equipo donde el código es revisado antes de ser fusionado, garantizando la calidad y la estabilidad de la rama principal.

---

## 💻 Tech Stack & Decisiones Arquitectónicas

Para este proyecto, elegí las siguientes tecnologías y patrones:

*   **Build Tool:** **Vite**
    *   **Por qué:** Vite ofrece una experiencia de desarrollo extremadamente rápida gracias a su servidor de desarrollo nativo ESM y Hot Module Replacement (HMR) instantáneo.

*   **Framework:** **React**
    *   **Por qué:** La arquitectura de React basada en componentes es ideal para desglosar la UI en "widgets" reutilizables.

*   **Lenguaje:** **TypeScript**
    *   **Por qué:** Utilicé TypeScript para añadir seguridad de tipos a todo el proyecto, definiendo interfaces para las `props` y los datos.

*   **Estilos:** **Tailwind CSS**
    *   **Por qué:** Su enfoque "utility-first" permite construir diseños complejos directamente en el JSX, acelerando el desarrollo y asegurando consistencia visual.

*   **Estructura de Carpetas:**
    ```
    /src
    ├── /assets         # Íconos SVG, imágenes, etc.
    ├── /components     # Componentes reutilizables (Widget, Button, Tab, etc.)
    ├── /features       # Componentes de alto nivel (HistorialClinico, Plan, etc.)
    ├── /data           # Mocks de datos para simular las APIs
    └── App.tsx         # Componente principal que orquesta la UI
    ```
