import React from 'react';
import { Item } from "./item.jsx";
import {itemSort} from "../functions/itemSort"


export const Items = ( props) => {

let itemArrs = itemSort(props.posts)

return(<div className="item-list">
<div className="shop-left">
<div className="shop-left-one">
{itemArrs[0].map((n, i)=>{
return ( <Item
    openModal={props.openModal} 
    setModalItem={props.setModalItem}
      key={i}
      img={n.image}
      name={n.name}
      desc={n.description}
      price={n.price}
      fullItem={n}
      color={n.color}
      aspect={n.aspect}
      currentArtist={n.userId}
    />)

})}
</div>
<div className="shop-left-two">
{itemArrs[1].map((n, i)=>{
return ( <Item
    openModal={props.openModal} 
    setModalItem={props.setModalItem}
      key={i}
      img={n.image}
      name={n.name}
      desc={n.description}
      price={n.price}
      fullItem={n}
      color={n.color}
      aspect={n.aspect}
      currentArtist={n.userId}
    />)

})}
</div>

</div>
<div className="shop-right">
<div className="shop-right-one">
{itemArrs[2].map((n, i)=>{
return ( <Item
    openModal={props.openModal} 
    setModalItem={props.setModalItem}
      key={i}
      img={n.image}
      name={n.name}
      desc={n.description}
      price={n.price}
      fullItem={n}
      color={n.color}
      aspect={n.aspect}
      currentArtist={n.userId}
    />)

})}
</div>
<div className="shop-right-two">
{itemArrs[3].map((n, i)=>{
return ( <Item
    openModal={props.openModal} 
    setModalItem={props.setModalItem}
      key={i}
      img={n.image}
      name={n.name}
      desc={n.description}
      price={n.price}
      fullItem={n}
      color={n.color}
      aspect={n.aspect}
      currentArtist={n.userId}
    />)

})}
</div>

</div>

</div>)

}