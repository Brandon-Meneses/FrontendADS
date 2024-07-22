# Frontend

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.1.

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de Código

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas de Extremo a Extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## Estructura del Proyecto

```plaintext
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── cliente-list
│   │   │   │   ├── cliente-list.component.css
│   │   │   │   ├── cliente-list.component.html
│   │   │   │   ├── cliente-list.component.ts
│   │   │   │   └── cliente-list.component.spec.ts
│   │   │   ├── usuario-list
│   │   │   │   ├── usuario-list.component.css
│   │   │   │   ├── usuario-list.component.html
│   │   │   │   ├── usuario-list.component.ts
│   │   │   │   └── usuario-list.component.spec.ts .... demás componentes por cada modelo
│   │   ├── models
│   │   │   ├── cliente.ts
│   │   │   ├── usuario.ts
│   │   │   ├── pedido.ts
│   │   │   ├── producto.ts
│   │   │   ├── factura.ts
│   │   │   └── inventario.ts
│   │   ├── services
│   │   │   ├── cliente.service.ts
│   │   │   ├── usuario.service.ts
│   │   │   ├── pedido.service.ts
│   │   │   ├── producto.service.ts
│   │   │   ├── factura.service.ts
│   │   │   └── inventario.service.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
└── tsconfig.json

```

## Tecnologías Utilizadas

- **Angular**: Framework principal para la construcción del frontend.
- **Tailwind CSS**: Utilizado para los estilos y la personalización de la interfaz de usuario.
- **DaisyUI**: Componente adicional de Tailwind CSS para facilitar la creación de componentes UI.
- **Angular Material**: Implementado para algunos componentes específicos de Angular.
- **StarUML**: Usado para el diseño y modelado de diagramas UML.
- **Spring Boot**: Backend que se comunica con este frontend.

## Configuración Adicional

### Tailwind CSS

Este proyecto utiliza Tailwind CSS para la estilización. Asegúrate de configurar Tailwind CSS correctamente en tu proyecto siguiendo la [documentación oficial](https://tailwindcss.com/docs).

### DaisyUI

DaisyUI está configurado para proporcionar componentes UI adicionales. Puedes encontrar más información sobre cómo utilizar DaisyUI en su [documentación](https://daisyui.com/docs).

## Recomendaciones de Desarrollo

1. **Mantén el Código Limpio**: Sigue las mejores prácticas de codificación y asegúrate de que el código esté bien documentado.
2. **Pruebas Continuas**: Ejecuta pruebas unitarias y de extremo a extremo regularmente para garantizar que la aplicación funcione correctamente.
3. **Actualizaciones Regulares**: Mantén las dependencias del proyecto actualizadas para aprovechar las últimas características y correcciones de errores.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o revisa la [página de referencia de comandos y visión general de Angular CLI](https://angular.io/cli).

Para cualquier otra consulta, no dudes en abrir un issue en el repositorio o contactar a los mantenedores del proyecto.
