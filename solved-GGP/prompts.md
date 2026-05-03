
# Prompt para resolver Ejercicio Reverse String

Prompt generado en ChatGPT.
Codigo gernaro en Claude.

Actúa como un Ingeniero de Software Senior especializado en desarrollo frontend, JavaScript vanilla, diseño responsive, accesibilidad básica y creación de interfaces limpias y robustas.

Necesito resolver el siguiente ejercicio:

> Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.  
> Ejemplo: si introduzco `AI4Devs`, la aplicación debe devolver `sveD4IA`.  
> Apóyate en la semilla HTML + JS proporcionada dentro de la carpeta `template`.  
> Usa un chatbot de IA, como ChatGPT, Gemini o Claude, para desarrollar la solución.

---

## Objetivo

Generar una solución completa, funcional y lista para copiar dentro de la carpeta `template`, separando correctamente la estructura HTML y la lógica JavaScript.

La solución debe ser sencilla, moderna, responsive y no depender de ninguna librería externa.

---

## 1. Estructura de ficheros

La solución debe estar dividida únicamente en estos dos ficheros:

```text
index.html
script.js
```

No se debe crear ningún fichero adicional.

No se debe incluir JavaScript dentro del HTML, salvo la referencia externa:

```html
<script src="script.js" defer></script>
```

El CSS debe ir dentro de `index.html`, en una etiqueta `<style>`, ya que no se permite crear un fichero CSS adicional.

---

## 2. Funcionalidad principal

La aplicación debe permitir al usuario introducir una cadena de texto y mostrar automáticamente la cadena invertida.

Ejemplo:

```text
Entrada: AI4Devs
Salida: sveD4IA
```

La inversión debe hacerse carácter a carácter, respetando mayúsculas, minúsculas, números y símbolos.

---

## 3. Actualización en tiempo real

La cadena invertida debe actualizarse en tiempo real mientras el usuario escribe.

Condiciones importantes:

- La actualización debe producirse con el evento `input`.
- El usuario no debe tener que pulsar ningún botón para ver el resultado.
- El botón no debe ser necesario para calcular ni actualizar la cadena invertida.
- Si el usuario borra o modifica el texto, el resultado debe actualizarse inmediatamente.

---

## 4. Comportamiento del botón

Debe existir un botón, pero su comportamiento debe cumplir esta regla:

- El botón solo debe mostrarse cuando el texto introducido tenga más de 3 caracteres.
- Si el texto tiene 0, 1, 2 o 3 caracteres, el botón debe estar oculto.
- Si el texto vuelve a bajar a 3 caracteres o menos, el botón debe ocultarse otra vez.

El botón debe ser una acción secundaria. Puede usarse, por ejemplo, para copiar el texto invertido al portapapeles.

Importante:

- El botón no debe invertir la cadena.
- El botón no debe ser necesario para actualizar el resultado.
- La lógica principal debe funcionar aunque el usuario nunca pulse el botón.

---

## 5. Estados de la interfaz

La aplicación debe gestionar correctamente estos estados:

### Estado inicial

Cuando no hay texto escrito, debe mostrarse un mensaje informativo, por ejemplo:

```text
El texto invertido aparecerá aquí
```

El botón debe estar oculto.

### Texto con 3 caracteres o menos

Ejemplo:

```text
Entrada: abc
Salida: cba
```

El resultado debe mostrarse en tiempo real, pero el botón debe seguir oculto.

### Texto con más de 3 caracteres

Ejemplo:

```text
Entrada: AI4Devs
Salida: sveD4IA
```

El resultado debe mostrarse en tiempo real y el botón debe aparecer.

---

## 6. Requisitos del fichero `index.html`

El fichero `index.html` debe contener:

- Documento HTML5 válido.
- `<!DOCTYPE html>`.
- Etiqueta `<html lang="es">`.
- Metadatos básicos:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Título descriptivo de la página.
- Enlace correcto a `script.js` con `defer`.
- CSS interno dentro de `<style>`.
- Un contenedor principal centrado.
- Una tarjeta o panel visual principal.
- Un título claro.
- Una descripción breve.
- Un campo de texto para introducir la cadena.
- Un área de resultado visible.
- Un botón inicialmente oculto.
- Identificadores o clases claras para que `script.js` pueda acceder a los elementos del DOM.

---

## 7. Requisitos del fichero `script.js`

El fichero `script.js` debe contener:

- Selección segura de elementos del DOM.
- Validación de existencia de los elementos antes de usarlos.
- Una función específica para invertir cadenas.
- Uso del evento `input` para actualizar el resultado en tiempo real.
- Lógica para mostrar el botón solo cuando el texto tenga más de 3 caracteres.
- Lógica para ocultar el botón cuando el texto tenga 3 caracteres o menos.
- Gestión del estado vacío.
- Código limpio, legible y mantenible.
- Comentarios solo cuando aporten claridad.
- Sin dependencias externas.
- Sin frameworks.
- Sin jQuery.
- Sin código innecesariamente complejo.

---

## 8. Requisitos de diseño

El diseño debe ser moderno, sencillo, visual y utilizable.

Debe inspirarse en la sencillez de las interfaces de Apple:

- Interfaz limpia.
- Buen espaciado.
- Tipografía legible.
- Bordes suaves.
- Sombras sutiles.
- Colores neutros.
- Buen contraste.
- Jerarquía visual clara.
- Sin elementos decorativos innecesarios.
- Sin colores estridentes.

La página debe ser responsive y verse bien en:

- Móvil.
- Tablet.
- Escritorio.

Debe funcionar correctamente en resoluciones pequeñas y grandes.

---

## 9. Accesibilidad y usabilidad mínima

Incluye buenas prácticas básicas:

- Usa etiquetas `<label>` asociadas al campo de texto.
- El campo debe tener `placeholder`.
- El resultado debe ser fácil de identificar.
- El botón debe tener un texto claro.
- Los elementos interactivos deben tener estados visuales de `focus`.
- La interfaz debe ser comprensible para un usuario no técnico.

---

## 10. Restricciones

No se permite:

- Crear más ficheros.
- Usar librerías externas.
- Usar frameworks.
- Usar Bootstrap.
- Usar Tailwind.
- Usar jQuery.
- Usar imágenes externas.
- Usar fuentes externas.
- Meter toda la lógica JavaScript dentro del HTML.
- Hacer que el botón sea necesario para invertir la cadena.
- Omitir la revisión final.

---

## 11. Formato de respuesta esperado

Devuelve la solución en este orden:

### 1. Código de `index.html`

Incluye el código completo dentro de un bloque:

```html
<!-- código completo aquí -->
```

### 2. Código de `script.js`

Incluye el código completo dentro de un bloque:

```javascript
// código completo aquí
```

### 3. Revisión final

Después del código, añade una checklist técnica indicando si la solución cumple cada condición:

| Condición | Estado |
|---|---|
| `index.html` contiene la estructura HTML | Cumple / No cumple |
| `script.js` contiene la lógica JavaScript | Cumple / No cumple |
| No usa librerías externas | Cumple / No cumple |
| Solo usa `index.html` y `script.js` | Cumple / No cumple |
| El resultado se actualiza en tiempo real | Cumple / No cumple |
| El botón no es necesario para invertir la cadena | Cumple / No cumple |
| El botón solo aparece con más de 3 caracteres | Cumple / No cumple |
| Con 3 caracteres o menos el botón se oculta | Cumple / No cumple |
| El estado vacío está gestionado | Cumple / No cumple |
| El diseño es moderno y responsive | Cumple / No cumple |
| Funciona en móvil y escritorio | Cumple / No cumple |
| El ejemplo `AI4Devs` devuelve `sveD4IA` | Cumple / No cumple |

---

## 12. Comprobaciones funcionales esperadas

Antes de dar la respuesta final, revisa mentalmente estos casos:

```text
Entrada: AI4Devs
Salida esperada: sveD4IA
Botón: visible
```

```text
Entrada: abc
Salida esperada: cba
Botón: oculto
```

```text
Entrada: abcd
Salida esperada: dcba
Botón: visible
```

```text
Entrada vacía
Salida esperada: El texto invertido aparecerá aquí
Botón: oculto
```

---

## 13. Criterio de calidad

La solución debe parecer entregada por un desarrollador frontend senior:

- Código simple.
- Separación clara entre HTML y JavaScript.
- Diseño cuidado pero no recargado.
- Lógica fácil de probar.
- Sin sobreingeniería.
- Sin dependencias innecesarias.
- Lista para copiar y pegar en la carpeta `template`.
