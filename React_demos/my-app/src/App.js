import Product from './Product';
function App() {
    var products={
      product1:{
        url:"https://rukminim1.flixcart.com/image/312/312/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=70",
        name:"Realme 1",
        price:"$44"
      },
      product2:{
        url:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/z/r/-original-imagkp8yzvqffyhc.jpeg?q=70",
        name:"Realme 2",
        price:"$33"
      }
    }
    let product=[
      {
        name:'Samsung S23 ultra',
        url:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=70',
        price:'$555'
      },
      {
        name:'Iphone 14',
        url:'https://rukminim1.flixcart.com/image/312/312/l3khsi80/mobile/f/s/y/galaxy-s22-ultra-5g-sm-s08edrginu-sm-s908e-ds-samsung-original-imagenuuky3dbc2d.jpeg?q=70',
        price:'$3343'
      },
      {
        name:'Samsung S22',
        url:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/c/t/-original-imaggj699hhujaqe.jpeg?q=70',
        price:'$99'
      }
    ]

    let array=[];
    for(let i of product){
      array.push(
        <Product name={i.name} url={i.url} price={i.price}/>
      )
    }


  return (
    <>
    <Product url={products.product1.url} name={products.product1.name} price={products.product1.price}/>
    {array}
    </>
   
  );
}

export default App;
