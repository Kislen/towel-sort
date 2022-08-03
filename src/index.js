
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix[0] === undefined  ) {return [];}
  for (let i = 0; i < matrix.length; i++) {
    if(i % 2 != 0 ) { 
      matrix[i] = matrix[i].reverse();
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    matrix[0] = matrix[0].concat(matrix[i]);
  }
  
  return matrix[0]; 
}
