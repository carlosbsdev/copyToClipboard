# CopyToClipboard
![Dependencies](https://img.shields.io/badge/Dependencies-jQuery-green.svg)

Pequeño script para copiar al portapapeles un texto de un elemento.

# Ejemplo

```
<div id="text">Example</div>
<button id="copy">Copy this text!</button>
```

```
$("#copy").click(function(){
    copyToClipboard($("#text"));
}
```
Copiado al portapapeles: **Example**

