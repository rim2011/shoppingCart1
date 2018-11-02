  
    var btnIncList= document.querySelectorAll(".plus-btn");
        
            for (let btn of btnIncList) {
     btn.onclick = function(event) {
    event.target.parentElement.querySelector(".product-qt").value++;
    calcTotal();
  };
}
          


var btnDecList=document.querySelectorAll(".minus-btn");
           for (let btn of btnDecList) {
     btn.onclick = function(event) {
    if(event.target.parentElement.querySelector(".product-qt").value>0){

    event.target.parentElement.querySelector(".product-qt").value--;
    calcDelete();}
  };

        }

       
        function calcTotal() {
            var total = 0
            var products = document.querySelectorAll(".item")
            for (let product of products) {
                var quantity = product.querySelector(".product-qt").value
                var uniPrice = product.querySelector(".price").innerHTML
                total += parseInt(quantity)*parseInt(uniPrice)
            }
            var totalItem = document.querySelector(".shopping-total")
            totalItem.innerHTML = total;
        }

        document.addEventListener("click", function (event) {
            if (event.target.className == "plus-btn"){
                
                calcTotal()
            }
        })

        function calcDelete() {
            var total = 0
            var products = document.querySelectorAll(".item")
            for (let product of products) {
                var quantity = product.querySelector(".product-qt").value
                var uniPrice = product.querySelector(".price").innerHTML
                total -= parseInt(quantity)*parseInt(uniPrice)
            }
            var totalItem = document.querySelector(".shopping-total")
            totalItem.innerHTML = Math.abs(total);
        }

        document.addEventListener("click", function (event) {
            if (event.target.className == "minus-btn") {
                calcDelete()
            }
        })

        function deleteProduct(){

        var removeBtns=document.querySelectorAll(".delete-btn")
        for(let btn of removeBtns){

            event.target.parentElement.parentElement.remove()
            
        }

        }

        document.addEventListener("click", function (event) {

            if (event.target.className == "delete-btn") {

                
                deleteProduct()
                calcDelete()
            }
        })


    