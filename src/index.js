
// You should implement your task here.

module.exports = function towelSort (arr) {
  let result=[];
  if(!arr) return result;
  let iter=0;
  arr.forEach( (elem) => {
      iter+=1;
      if (iter%2 !==0) {
          result = [].concat(...result ,...elem); 
      } else {
          result = [].concat(...result, ...elem.reverse()); 
      }
  });
  return result;
}
