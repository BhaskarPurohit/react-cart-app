import React from 'react'
import "../styles/home.scss"


const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {

    const productList = [
        {
            name: "Mac Book",
            price:12000,
            imgSrc: "asd",
            id: "hellobye",
        },
        {
            name: "iPhone",
            price:1560,
            imgSrc: "qwerty",
            id: "newiphone",
        }
    ]


   const addToCartHandler= (options)=>{
    console.log(options);
   }

  return (
    <div className="home">Home
    {
        productList.map((i)=>(
            <ProductCart key={i.id} imgSrc={i.imgSrc} name={i.name}
            price={i.price} id={i.id} handler={addToCartHandler}/>
        ))
    }
    </div>
  )
}S

const ProductCart = ({name, id, price, handler, imgSrc})=>{
    <div className="productCart">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>
    </div>
    
}
export default Home