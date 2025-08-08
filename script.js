const product = [
    {
        id:0,
        image: 'https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f2.jpg?raw=true',
        title:'t-shirt',
        price: 120,
        },
{
        id:1,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/5/0/-original-imahy3uqdmgx6qey.jpeg?q=70',
        title:'Air pods pro',
        price: 220,
},
  {      id:2,
        image: 'https://m.media-amazon.com/images/I/71UnOkasgaL.AC_UL320.jpg',
        title:'laptop',
        price: 430,
  },

  {
    id:3,
    image: 'https://m.media-amazon.com/images/I/81Os1SDWpcL.AC_UL320.jpg',
    title:'i phone',
    price: 110,
  }
  
];
    const categories = [...new Set(product.map((item)=>
        {return item}))]
        let i=0;
        document.getElementById('root').innerHTML = categories.map((item)=>
        {
            var{image,title,price} = item;
            return(
                `<div class= 'box'>
                <div class= 'img-box' >
                <img class= 'image' src=${image}></img>
                </div>
                <div class = 'bottom'>
                <p>${title}</P>
                <h2 class='h2-2'>$ ${price}.00</h2>`+
                "<button class='buttonp' onclick= 'addtocart("+(i++)+")'>Add to cart</button>"+
               
                `</div>
                </div>`
            )
        }).join('')

        var cart = [];

        function addtocart(a){
           cart.push({...categories[a]});
           displaycart();
        }

        function delElement(a){
          cart.splice(a,1);
          displaycart();
        }

        function displaycart(a){
          let j = 0; total=0;
          document.getElementById("count").innerHTML= cart.length;
          if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$"+0+".00";
          }
          else{
            document.getElementById('cartItem').innerHTML = cart.map((item)=>
            {
              var {image,title,price}= item;
              total=total+price;
              document.getElementById("total").innerHTML = "$"+total+".00";
              return(
                `<div class='cart-item'>
                <div class= row-img>
                <img class='rowimg' src=${image}>
                </div>
                <p style= 'font-size:12px;'>${title} </p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick= 'delElement("+(j++)+")'></i></div>"
              );
            }).join('');
          }
        }