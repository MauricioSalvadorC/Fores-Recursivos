# Fores-Recursivos

## CDN
https://raw.githack.com/MauricioSalvadorC/Fores-Recursivos/main/ForesRecursivos.js

## Descripción
La función ForR() realiza fores anidados a partir de recursividad,  utilizando el vector de los iteradores de cada respectivo for para su uso, con la usabilidad  de pasar por parámetros una función para que ejecute el código a partir de N fores anidados


## Comenzando

### Instalación
En su archivo HTML agregue la siguiente linea de codigo
```html
<script src="ForesRecursivos.js"></script>
```
O usando la CDN
```html
<script src="https://raw.githack.com/MauricioSalvadorC/Fores-Recursivos/main/ForesRecursivos.js"></script>
```
### Ejemplo de uso
  ```js
  function indicesFores(v){
      console.log(v.toString()) 
  }
  ForR(indicesFores, 4, 2)
  ```
```
0 0 0 0
0 0 0 1
0 0 1 0
0 0 1 1
0 1 0 0
0 1 0 1
0 1 1 0
0 1 1 1
1 0 0 0
1 0 0 1
1 0 1 0
1 0 1 1
1 1 0 0
1 1 0 1
1 1 1 0
1 1 1 1
```
### Otro jemplo de uso(combinacion a partir de los iteradores de 3 fores anidados

```js
  let a=["a","b","c"]
  function combinaciones(v){
      let cad= "";
      for(let i=0;i<v.length;i++){
          cad+= a[ v[i] ] + " ";
      }
      console.log(cad);
  }
  ForR(combinaciones, 3, 3)
```

```
a a a
a a b
a a c
a b a
a b b
a b c
a c a
a c b
a c c
b a a
b a b
b a c
b b a
b b b
b b c
b c a
b c b
b c c
c a a
c a b
c a c
c b a
c b b
c b c
c c a
c c b
c c c
```


## Autores

* *Maririco Salvador* 
* *Oscar Orozco*
