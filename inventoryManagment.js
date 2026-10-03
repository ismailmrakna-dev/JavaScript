const inventory=[]
function findProductIndex(productName){
  let name=productName.toLowerCase()
  for(let i=0;i<inventory.length;i++){
    if(inventory[i].name === name){
      return i
    }
  }
  return -1
}
function addProduct(product){
  let name=product.name.toLowerCase()
  let index=findProductIndex(name)
  if(index!==-1){
    inventory[index].quantity += product.quantity
    console.log(name+ " quantity updated")
  }
  else{
    inventory.push({name: name, quantity: product.quantity})
    console.log(name+" added to inventory")
  }
}
addProduct({name: "flour", quantity: 5})
addProduct({name: "FLOUR", quantity: 5})
addProduct({name: "rice", quantity: 5})
addProduct({name: "milk", quantity: 5})
console.log(inventory)
function removeProduct(productName,quantity){
  let name=productName.toLowerCase()
  let index=findProductIndex(name)
  if(index===-1){
    console.log(name+" not found")
  }
  else if((inventory[index].quantity-quantity)===0){
    inventory.splice(index,1)
  }
  else if((inventory[index].quantity<quantity)){
    console.log("Not enough "+name+" available, remaining pieces: "+inventory[index].quantity)
  }
  else {
    inventory[index].quantity-=quantity
    console.log("Remaining "+name+" pieces: "+inventory[index].quantity)
  }
}
removeProduct("FLOUR", 5)
console.log(inventory)