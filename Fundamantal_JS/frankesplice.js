function frankenSplice(arr1,arr2,index){
  const tab=[]
  if(arr2.length===0)
  return arr1
  for(let j=0; j< arr2.length;j++ ){
    if(j===index){
      for(let i=0 ; i< arr1.length;i++){
        tab.splice(index+i,0,arr1[i])
        }
        tab.push(arr2[j])
    }
    else {
      tab.push(arr2[j])
    }
    }
    
  return tab
}
console.log(frankenSplice([1, 2, 3, 4], [], 0) )
