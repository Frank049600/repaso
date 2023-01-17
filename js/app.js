console.log('Conectado...')

const productData = [
    {
        index: '01', 
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum repellat, voluptatibus autem voluptatem natus inventore consectetur aliquam nesciunt nostrum harum ea. Nihil ut enim fuga dicta possimus, quidem debitis!'
    },
    {
        index: '02', 
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum repellat, voluptatibus autem voluptatem natus inventore consectetur aliquam nesciunt nostrum harum ea. Nihil ut enim fuga dicta possimus, quidem debitis!'
    },
    {
        index: '03', 
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum repellat, voluptatibus autem voluptatem natus inventore consectetur aliquam nesciunt nostrum harum ea. Nihil ut enim fuga dicta possimus, quidem debitis!'
    }
]

const nextBtn = document.querySelector('.nxt-btn')

let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')
let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.backdrop-img')
let backdropImg = document.querySelector('.backdrop-img')
let productDetail = document.querySelector('.detail-product')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')
//console.log('Boton', nextBtn)

let currentProduct = 0

nextBtn.addEventListener('click', () => {
    //alert('hola')
    if ( currentProduct >= productData.length - 1){
        currentProduct = 0
    }else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        //Se esperan 500ms y despues se ejecuta este código
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`
    }, 500)

    setTimeout(() => {
        //Se esperan 500ms y despues se ejecuta este código
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    }, 1000)
})