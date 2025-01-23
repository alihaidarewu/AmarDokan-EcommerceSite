// initial code 

"use strict"
console.clear() ;

// main code 

let productsDiv = document.getElementById("productsDiv") ;

let mobileLength = mobile.length;
let numberOfColumn = 4 ;
let numberOfRow = Math.floor((mobileLength / numberOfColumn)+1) ; 
var numberOfImage = -1 ;

for(let i=0 ; i<numberOfRow ; i++)
{
    productsDiv.innerHTML += `<div class="row">

                            </div>`

    for(let j=0 ; j<4 ; j++)
    {
        numberOfImage++ ;

        if(numberOfImage >= mobileLength)
        {
            break ;
        }

        let rows = productsDiv.children[i].innerHTML += `<div class="col-sm-6 col-lg-3">

                                    <div>

                                        <div class="card">

                                            <img id="${mobile[numberOfImage].id}" src="./products/mobile/${mobile[numberOfImage].id}.jpg" alt="imageMissing" class="card-img-top">

                                            <div class="card-body">

                                                <p class="card-title">${mobile[numberOfImage].name}</p>
                                                <p class="card-text small">$ ${mobile[numberOfImage].price}</p>
                                                <a href="#" class="card-link stretched-link">&#11088;&#11088;&#11088;&#11088;</a>

                                            </div>

                                        </div>

                                    </div>

                                </div>
` ;
    }
}

let cards = document.querySelectorAll(".card") ;

for(let item of cards)
{
    item.addEventListener("click" , function(){

        let name = item.querySelector(".card-title").innerHTML ;
        let id = item.querySelector(".card-img-top").id ;

        let priceArr = (item.querySelector(".card-text").innerHTML).split(" ") ;
        let price = priceArr[1] ;

        console.log(price) ;
        console.log(name) ;
        console.log(id) ;

        window.location = `individualProduct.html?name=${name}&price=${price}&id=${id}`
    }) ;
}
