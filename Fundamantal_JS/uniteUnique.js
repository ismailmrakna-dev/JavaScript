function uniteUnique(...args){
  const arrDep=[]
  for (const arg of args){
    for(let num of arg){
      cond=true
      for(let j=0 ;j<arrDep.length;j++){
        if(arrDep[j] === num){
          cond=false
        }
      }
      if(cond){
       arrDep.push(num)
      }
     }
  }
  return arrDep
}
console.log("----------------------------")
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
console.log("----------------------------")
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
console.log("----------------------------")
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log("----------------------------")