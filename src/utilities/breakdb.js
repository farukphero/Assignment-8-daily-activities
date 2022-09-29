const addToBreak = (event) => {
  let array ={}
  const quantity = localStorage.getItem('break')
  if (quantity) {
     array = JSON.parse(quantity)
  }
  else {
    localStorage.setItem('break', JSON.stringify(quantity))
   }
}
 
export {
  addToBreak
}
 
    