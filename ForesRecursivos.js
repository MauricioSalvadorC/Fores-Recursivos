/**
 * La función ForR() realiza fores anidados a partir de recursividad,  
 * utilizando el vector de los iteradores de cada respectivo for para su uso, 
 * con la usabilidad  de pasar por parámetros una función para que ejecute el código a partir de N fores anidados
 * @param {Function} e es la funcion que se ejecutara y recive vector de iteradores de los fores anidados 
 * @param {Number} Nfores es el numero de fores anidados
 * @param {Number} destino limte del for EJ: for(let i=valorInicial; i<destino; i++)... 
 * @param {Number} valorInicial asignacion inicial del iterador i en el for EJ: for(let i=valorInicial; i<destino; i++)... 
 * @param {Array} v es aquel que contiene los iterador de los fores anidados Ej: for(let i=0; i<n; i++) for(let j=0; j<n; j++) donde v=[i,j]
 */
function ForR(e=()=>{}, Nfores=1, destino=2, valorInicial=0, v=[]){
    if(v.length==0){
        v= (new Array(Nfores)).fill(valorInicial);
    }
    e(v);
    for(let i=v.length-1; i>=0; i--){
        v[i]++;
        if(v[i]==destino){
            if(i==0) return;
            else v[i]= valorInicial;
        }else break;
    }
    ForR(e, Nfores, destino, valorInicial, v);
}