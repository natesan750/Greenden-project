//selection sideNav and menuIcon//



var sideNav = document.getElementById("sideNav")
var menuIcon = document.getElementById("menuIcon")
var closeNav = document.getElementById("closeNav")

menuIcon.addEventListener("click",function(){
    sideNav.style.right = "0"

    
})

closeNav.addEventListener("click",function(){
    sideNav.style.right = "-50%"
})


//product search functionality//

var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productList= productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(i=0;i<productList.length;i++)

    {
     var productName = productList[i].querySelector("h1").textContent.toUpperCase()

        if(productName.indexOf(enteredValue)<0)
        {
            productList[i].style.display = "none"
        }

        else
        {
            productList[i].style.display = "block"
        }
    }
})


