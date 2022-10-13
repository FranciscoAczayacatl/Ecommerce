let productsArr=[
    {
      name:'K120 Corded Keyboard',
      price:279,
      stock:6,
      id:'TEC-1',
      img:'./assets/img/keyboard/K120 Corded Keyboard.webp',
      device:'keyboard'
    },
    {
      name:'K835 TKL mecánico',
      price:1999.00,
      stock:5,
      id:'TEC-2',
      img:'./assets/img/keyboard/K835 TKL mecánico.webp',
      device:'keyboard'
    },
    {
      name:'MX MECHANICAL',
      price:3499.00,
      stock:4,
      id:'TEC-3',
      img:'./assets/img/keyboard/MX MECHANICAL.webp',
      device:'keyboard'
    },
    {
      name:'Razer BlackWidow Lite-Black',
      price:89.99,
      stock:10,
      id:'TEC-4',
      img:'./assets/img/keyboard/Razer BlackWidow Lite - US - Black.jpg',
      device:'keyboard'
    },
    {
      name:'MOUSE CON CABLE M100',
      price:179.00,
      stock:6,
      id:'MOU-1',
      img:'./assets/img/mouse/MOUSE CON CABLE M100.webp',
      device:'mouse'
    },
    {
      name:'Mouse M90',
      price:149.00,
      stock:5,
      id:'MOU-2',
      img:'./assets/img/mouse/Mouse M90.webp',
      device:'mouse'
    },
    {
      name:'MX Anywhere 3',
      price:1899.00,
      stock:4,
      id:'MOU-3',
      img:'./assets/img/mouse/MX Anywhere 3.webp',
      device:'mouse'
    },
    {
      name:'MX MASTER 3S',
      price:2499.00,
      stock:10,
      id:'MOU-4',
      img:'./assets/img/mouse/MX MASTER 3S.webp',
      device:'mouse'
    },
    {
      name:'EXTRA BASS™ WI-XB400',
      price:1199,
      stock:6,
      id:'AUD-1',
      img:'./assets/img/hearpones/EXTRA BASS™ WI-XB400.jpeg',
      device:'mouse'
    },
    {
      name:'INZONE H7',
      price:4999,
      stock:5,
      id:'AUD-2',
      img:'./assets/img/hearpones/INZONE H7 .jpeg',
      device:'mouse'
    },
    {
      name:'LinkBuds S',
      price:2999,
      stock:4,
      id:'AUD-3',
      img:'./assets/img/hearpones/Sony-LinkBuds-S.jpg',
      device:'mouse'
    },
    {
      name:'Razer BlackShark V2 Pro',
      price:199.99,
      stock:10,
      id:'AUD-4',
      img:'./assets/img/hearpones/Razer BlackShark V2 Pro - Six Siege Special Edition.jpg',
      device:'mouse'
    },
    

  ];

  const products=document.querySelector(".products");
  const products2=document.querySelector(".pro2");
  const products3=document.querySelector(".pro3");
  const carN=document.querySelector('.car-number');
  const carBtn=document.querySelector('.car-nav');
  const carItems=document.querySelector('.car-items');
  const displayCar=document.querySelector('.display-car');
  const exit=document.querySelector('.exit');
  const totalCar=document.querySelector('.total');
  const buy=document.querySelector('.buy')
  let arrCar=JSON.parse(localStorage.getItem("car")) ?? [];
  let carCounter=JSON.parse(localStorage.getItem("cuonterCar"))??0;
  let arrPrice=JSON.parse(localStorage.getItem("total"))??0;
  let idConter=JSON.parse(localStorage.getItem("idcounter"))??1;


  addCarItem();
  counterCar();
  total(0);
    products.addEventListener('click',(e)=>{
    let id=e.target.getAttribute("id");
    const newArr = productsArr.filter((product) => product.id === id);
    let name=newArr[0].name;
    let price=newArr[0].price;
    let stock=newArr[0].stock;
    let img=newArr[0].img;
    let idC=idConter;
    arrCar.push({name,price,stock,img,idC});
    carCounter+=1;
    idConter ++;
    counterCar();
    addCarItem();
    total(price);
    localStorage.setItem("car", JSON.stringify(arrCar));
    localStorage.setItem("cuonterCar", JSON.parse(carCounter));
    localStorage.setItem("total", JSON.parse(arrPrice));
    localStorage.setItem("idcounter", JSON.parse(idConter));
  });

  products2.addEventListener('click',(e)=>{
    let id=e.target.getAttribute("id");
    const newArr = productsArr.filter((product) => product.id === id);
    let name=newArr[0].name;
    let price=newArr[0].price;
    let stock=newArr[0].stock;
    let img=newArr[0].img;
    let idC=idConter;
    arrCar.push({name,price,stock,img,idC});
    carCounter+=1;
    idConter ++;
    addCarItem();
    counterCar();
    total(price);
    localStorage.setItem("car", JSON.stringify(arrCar));
    localStorage.setItem("cuonterCar", JSON.parse(carCounter));
    localStorage.setItem("total", JSON.parse(arrPrice));
    localStorage.setItem("idcounter", JSON.parse(idConter));
  });

  products3.addEventListener('click',(e)=>{
    let id=e.target.getAttribute("id");
    const newArr = productsArr.filter((product) => product.id === id);
    let name=newArr[0].name;
    let price=newArr[0].price;
    let stock=newArr[0].stock;
    let img=newArr[0].img;
    let idC=idConter;
    arrCar.push({name,price,stock,img,idC});
    carCounter+=1;
    idConter ++;
    addCarItem();
    counterCar();
    total(price);
    localStorage.setItem("car", JSON.stringify(arrCar));
    localStorage.setItem("cuonterCar", JSON.parse(carCounter));
    localStorage.setItem("total", JSON.parse(arrPrice));
    localStorage.setItem("idcounter", JSON.parse(idConter));
  });

  buy.addEventListener('click',(e)=>{
    arrCar=[];
    carCounter=0;
    arrPrice=0;
    idConter=0;
    localStorage.setItem("car", JSON.stringify(arrCar));
    localStorage.setItem("cuonterCar", JSON.parse(carCounter));
    localStorage.setItem("idcounter", JSON.parse(idConter));
    counterCar();
    addCarItem();
    total(0);
    localStorage.setItem("total", JSON.parse(0));
    alert('compra completada');
  })
  function total(price) {
    arrPrice+=price;
    totalCar.innerHTML=`total:${arrPrice}`;
  }

  function counterCar() {
    carN.innerHTML=`${carCounter}`;
  }

  carBtn.addEventListener('click',(e)=>{
    displayCar.style.display='flex';
  });

  exit.addEventListener('click',(e)=>{
    displayCar.style.display='none';
  });

  //name,price,stock,img
  function addCarItem() {
    let item=arrCar.map((it)=>{
      return `
      <div class="car-item">
        <div><img src="${it.img}"></div>
        <div>
          <h3>${it.name}</h3>
          <h4>$${it.price}</h4>
          <p> stock:${it.stock}</p>
        </div>
        <div class="delate">
          <span class="material-symbols-outlined btn-delate" id=${it.idC}>delete</span>
        </div>
      </div>`;

    });
    carItems.innerHTML=item.join('');
  }

  carItems.addEventListener('click',(e)=>{
    if(e.target.classList.contains("btn-delate")){
      let suma=0;
      const itemId = e.target.getAttribute("id");
      const newArr = arrCar.filter((item) => item.idC !== Number(itemId));
      arrCar = [...newArr];
      addCarItem();
      carCounter-=1;
      counterCar();
      localStorage.setItem("car", JSON.stringify(arrCar));
      localStorage.setItem("cuonterCar", JSON.parse(carCounter));
      

    }
  })

