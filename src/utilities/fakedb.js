const addToDb = (id) => {
   
  let activityCart = {}
  const storedCart = localStorage.getItem('activity-cart')

  if (storedCart) {
    activityCart = JSON.parse(storedCart)
  }
 
  const quantity = activityCart[id]
  if (quantity) {
    const newQuantity = quantity + 1;
    activityCart[id]= newQuantity
   }
  else {
    
     activityCart[id] =  1
  }
 localStorage.setItem('shopping-cart', JSON.stringify(activityCart))

}




export {addToDb}