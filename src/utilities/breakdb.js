const addToBreak = (breakCount) => {
  let activityCart = {}
  const storedCart = localStorage.getItem('break-cart')

  if (storedCart) {
    activityCart = JSON.parse(storedCart)
  }
 
  const quantity = activityCart[breakCount]
  if (quantity) {
    const newQuantity = quantity + 1
    activityCart[breakCount]= newQuantity
  }
  else {
    activityCart[breakCount]=  1
  }
   


  localStorage.setItem('break-cart', JSON.stringify(activityCart))

}

const getStoredCart = () => {
  let activityCart = {}
  const storedCart = localStorage.getItem('break-cart')

  if (storedCart) {
    activityCart = JSON.parse(storedCart)
  }
  return storedCart
}
 
export {
  addToBreak,
  getStoredCart
}
 
    