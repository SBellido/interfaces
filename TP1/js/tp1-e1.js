"use strict";
let mat = [];
let row = 6;
let col = 6;
let arrAverange = [];

createMatrix();
console.table(mat);
let max = findMax();
console.log("El valor máximo encontrado en toda la matríz es " + max);
let maxEvenRows = findMaxEvenRows();
console.log("El valor máximo encontrado en las filas pares es " + maxEvenRows);
let smallOddRows = findSmallOddRows();
console.log("El valor mínimo encontrado en las filas impares es " + smallOddRows);
rowsAverange();
console.table("Los promedios obtenidos por cada fila son " + arrAverange);

function createMatrix(){
  for (let i = 0; i < row; i ++){
    mat[i] = [];
      for (let j = 0; j < col; j ++){
        mat[i][j] = Math.floor(Math.random() * 100 + 1);
      }
    }
}

//e1.a ( Encuentra el valor máximo de toda la matriz
function findMax() {
  let temp = mat[0][0];
  for (let i = 0; i < row; i ++) {
    for (let j = 0; j < col; j ++) {
      if (mat[i][j] > temp) {
        temp = mat[i][j];
      }
    }
  }
  return temp;
}

//e1.b ( Valor máximo contenido en las filas pares
function findMaxEvenRows() {
  let temp = mat[0][0];
  for (let i = 0; i < row; i ++) {
    if (i % 2 == 0) {
      for (let j = 0; j < col; j ++) {
        if (mat[i][j] > temp) {
          temp = mat[i][j];
        }
      }
    }
  }
  return temp;
}

//e1.b ( Valor mínimo en las filas impares
function findSmallOddRows() {
  let temp = mat[0][0];
  for (let i = 0; i < row; i++) {
    if (i % 2 != 0){
      for (let j = 0; j < col; j++) {
        if (mat[i][j] < temp) {
          temp = mat[i][j];
        }
      }
    }
  }
  return temp;
}

//e1.c ( Cargar arreglo con promedio por filas
function rowsAverange() {
  for (let i = 0; i < row; i++) {
    let sum = 0;
    for(let j = 0; j < col; j++) {
      sum += mat[i][j];
    }
    arrAverange[i] = sum / row;
  }
}