
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let out = [];
  if (!matrix) return out;
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) { //четные
      //out = out.push(matrix[i])
      Array.prototype.push.apply(out, matrix[i]);

    }
    else {
      //out = out.push(matrix[i].reverse())
      Array.prototype.push.apply(out, matrix[i].reverse());

    }
  }
   
  
  return out;

}
