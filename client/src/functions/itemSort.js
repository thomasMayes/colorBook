export const itemSort = (arr) => {

let mappedArr = arr.map(n=> {
  let copy = {...n}
  copy.aspect = parseFloat(copy.aspect)
  return copy
})
    // let sortItems = arr.map(n=>{
    //     let newIMG = new Image()
    //     newIMG.src = n.image
    //  let aspect = newIMG.height /newIMG.width
    //  let newObj = {...n}
    //  newObj.aspect = aspect
    //  return newObj
    //   })
    //   console.log(sortItems)
     
    let itemArrs = [[],[],[],[]]


    
    mappedArr.forEach(e => {
    
      if(itemArrs[0].length === 0){
        itemArrs[0].push(e)
        return
      } if(itemArrs[2].length === 0){
        itemArrs[2].push(e)
        return
      }
      
      if(itemArrs[1].length === 0){
        itemArrs[1].push(e)
        return
      }
     
      if(itemArrs[3].length === 0){
        itemArrs[3].push(e)
        return
      }
    itemArrs = itemArrs.sort((a,b)=> a.reduce((a,b)=> a + b.aspect, 0)- b.reduce((a,b)=> a + b.aspect, 0))
    
    itemArrs[0].push(e)
    
    
    
    
    })

    return itemArrs








}