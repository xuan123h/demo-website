const adressbtn = document.querySelector("#adress-form")
const adressclose = document.querySelector("#adress-close")


adressbtn.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "none"
})
// slider----------------------------------------------------------
const rightbtn = document.querySelector(".fa-chevron-right")
const leftbtn = document.querySelector(".fa-chevron-left")
const imgNuber = document.querySelectorAll(".slider-content-left-top img")
let index = 0

rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    removeactive ()
 
    imgNuberLi[index].classList.add("active")
})
leftbtn.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    removeactive ()
 
    imgNuberLi[index].classList.add("active")
})
//slider 1--------------------------------------------------------------
const imgNuberLi = document.querySelectorAll(".slider-content-left-bottom li")
imgNuberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}
//slider2------------------------------------------------------------
 function imgAuto () {
     index = index + 1
     if(index>imgNuber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")
    // console.log(index)
 }
 setInterval(imgAuto,5000)
 //-----------Slider-product--------------------
 const rightbtntwo = document.querySelector(".fa-chevron-right-two")
 const leftbtntwo = document.querySelector(".fa-chevron-left-two")
 const imgNubertwo = document.querySelectorAll(".slider-product-one-content-items")
//  console.log(rightbtntwo)
//  console.log(leftbtntwo)
rightbtntwo.addEventListener ("click", function(){
    index = index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtntwo.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
//  slider-product three
const rightbtnthree = document.querySelector(".fa-chevron-right-three")
 const leftbtnthree= document.querySelector(".fa-chevron-left-three")
 const imgNuberthree = document.querySelectorAll(".slider-product-three-content-items")
//  console.log(rightbtnthree)
//  console.log(leftbtnthree)
rightbtnthree.addEventListener ("click", function(){
    index = index+1
    if(index>imgNuberthree.length-1){
        index=0
    }
    document.querySelector(".slider-product-three-content-items-content").style.right = index *100+"%"
})
leftbtnthree.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuberthree.length-1
    }
    document.querySelector(".slider-product-three-content-items-content").style.right = index *100+"%"
})
// product-gallery-for
const rightbtnfor = document.querySelector(".fa-chevron-right-for")
 const leftbtnfor= document.querySelector(".fa-chevron-left-for")
 const imgNuberfor = document.querySelectorAll(".slider-product-for-content-items")
//  console.log(rightbtnfor)
//  console.log(leftbtnfor)
rightbtnfor.addEventListener ("click", function(){
    index = index+1
    if(index>imgNuberfor.length-1){
        index=0
    }
    document.querySelector(".slider-product-for-content-items-content").style.right = index *100+"%"
})
leftbtnfor.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuberfor.length-1
    }
    document.querySelector(".slider-product-for-content-items-content").style.right = index *100+"%"
})

