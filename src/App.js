import React from 'react';
import './App.css';
/* MULTIPLICAR SIN SIGNO MULTIPLICACION
const multiply = (a, b)=>{
  let resultado = 0;

  const positivo  = Math.abs(b) == b

  for(let i = 0; i<Math.abs(b); i++){
    resultado = positivo ? resultado + a : resultado - a
  }

  return resultado
  
}

const a = multiply(50, 50)

function App() {
  return (
    <div>
     <h1>{a}</h1> 
    </div>
  );
}
*/

/*OBTENER EL NUMERO MAYOR EN UN ARREGLO, ITERANDO SOLO UNA VEZ

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el )
const b = getBiggest([50, -1500, 1000, 0, 1, 54])

function App() {
  return (
    <div>
     <h1>{b}</h1> 
    </div>
  );
}
export default App;
*/

/*ITERANDO UN ARREGLO SOLAMENTE UNA VEZ ESCRIBIR UNA FUNCION QUE ELIMINE LOS UNDEFINED, FALSE, CEROS Y TAMBIEN LOS NULL 
const clean = (arr) => arr.reduce((acc, el) => {
  if(el){ // en js los ceros,null,undefined y false si lo evaluamos retorna false

    acc.push(el)
  }
  return acc
}, [])
let array = [1,undefined,null,0,2,3]
const c = clean(array)

function App() {
  return (
    <div>
     <h1>ESTE ES EL ARREGLO CRUDO {array}</h1> 
  <h1> este es el arreglo pasado por la funcion {c}</h1>
    </div>
  );
}
export default App;
*/


/* ESCRIBIR UNA FUNCION QUE APLANE LOS ARREGLOS EN UN NIVEL
const arr = [[1,2],[[3,4]],[1,[]]];
console.log(arr)
//resultado esperado [1,2,[3,4],1,[]]
const flatten = arr => arr.reduce((acc,el) => acc.concat(el), [])
const d = flatten(arr)

console.log(d)

function App() {
  return (
    <div>
     
    </div>
  );
}
export default App;
*/

/*ESCRIBIR UNA FUNCION QUE CUENTE LA CANTIDAD DE VECES QUE SE REPITE UNA PALABRA 

const repeated = str => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc,el)=> {
    if(acc[el]){
      acc[el]++
    }else{
      acc[el] = 1
    }
     return acc
  },{})
  return Object.entries(reduced).reduce((acc,el) => acc[1] > el[1] ? acc : el)
}

const e = repeated(' this is a repeated word test this is a a')
console.log(e)


function App() {
  return (
    <div>
     
    </div>
  );
}
export default App;


*/

/*VERIFICAR SI UN STRING ES UN PALINDROMO (CAPICUA)

const isPalindrome = (str) =>{
  str = str.replace(/\s/g, '')
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')
  return lowered == joined
}

const f = isPalindrome('menem') 
console.log(f)

function App() {
  return (
    <div>
     
    </div>
  );
}
export default App;
*/
function App() {
  return (
    <div>
     
    </div>
  );
}
export default App;