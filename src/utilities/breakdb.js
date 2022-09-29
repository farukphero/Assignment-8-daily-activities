const addToBreak = (event) => {
  const quantity = localStorage.getItem('break')
  if (quantity) {
    localStorage.setItem('break', event)
  }
  else {
    localStorage.setItem('break', event)
   }
  
}
 export {addToBreak}
 
    