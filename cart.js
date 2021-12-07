const btn =document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    // console.log(button,index)
    button.addEventListener("click",function(event){
        var btnItem=event.target
        var product= btnItem. parentElement
        // console.log(product)
        var productImg=product.querySelector("img").src 
        var productName=product.querySelector("h1").innerText
        var productPrice=product.querySelector("span").innerText
        addcart(productPrice,productImg,productName)
        // console.log(productPrice,productName,productImg)
    })
});
function addcart(productPrice,productImg,productName){
    var addtr=document.createElement("tr")
    // var cartItem=document.querySelectorAll("tbody tr")
    // for (var i=0; i<cartItem.length;i++){
    //     var productT=document.querySelectorAll(".title")
    //     if(productT[i].innerHTML ==productName){
    //         alert(" Sản phẩm của bạn đã có trong giỏ hàng ")
    //         return
    //     }
    // }
    var trcontent=' <tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span> </td><td><p><span class="prices">'+productPrice+'</span><sup> đ </sup></p></td><td><input style=" width: 30px outline:none" type="number" value="1" min="1" ></td> <td style="cursor: pointer;"><span class="cart-delete"> Xóa</span></td><tr>' 
    addtr.innerHTML=trcontent
    var cartTable=document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}
// totalprice
function carttotal(){
    var cartItem=document.querySelectorAll("tbody tr")
    var totalC=0
    // console.log(cartItem.length)
    for(var i=0;i< cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice=cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        A= inputValue*productPrice*1000
        totalC= A+totalC
        // console.log(totalC)
    }
    var carttotalA=document.querySelector(".price-total span")
    carttotalA.innerHTML=totalC.toLocaleString('de-DE')
    inputchange()
}
// deletecart
function deleteCart(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT=document.querySelectorAll(".cart-delete") 
        // console.log(productT)
        productT[i].addEventListener("click",function(event){
            var cartDelete=event.target
            var cartitemR=cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            // console.log(cartitemR)
        })
    }
}
// số lượng thay đổi thì tiền thay đổi 
function inputchange(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
                                                                                                                                                                                                                
