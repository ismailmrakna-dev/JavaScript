function getAverage(arr){
  let som=0
  for (let num of arr){
    som+= num
  }
  return som/arr.length 
}
function getGrade(grade){
  if(grade===100){
    return "A+"
  }
  if(grade>=90 && grade <=99){
    return "A"
  }
  if(grade>=80 && grade <=89){
    return "B"
  }
  if(grade>=70 && grade <=79){
    return "C"
  }
  if(grade>=60 && grade <=69){
    return "D"
  }
  if(grade>=0 && grade <=59){
    return "F"
  } 
}
function hasPassingGrade(grade){
  let deg=getGrade(grade)
  if (deg==='F'){
    return false
  }
  else return true
  
}
function studentMsg(arr,grade){
  if(hasPassingGrade(grade)){
    return `Class average: ${getAverage(arr)}. Your grade : ${getGrade(grade)}. You passed the course.`
  }
  else return `Class average: ${getAverage(arr)}. Your grade : ${getGrade(grade)}. You failed the course.`
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))