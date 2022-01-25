let calculate = document.getElementById("calculate");
let cancel = document.getElementById("delete");
let discount = document.getElementById("discount");
const price = 0.21;
let discountedPrice;


calculate.addEventListener('click',

    function() {

        let hidden = document.getElementById("hidden");
        hidden.style.display = "flex"
        let name = document.getElementById("name").value;
        let distance = document.getElementById("distance").value;

        if (discount.value == "adult") {
            document.getElementById('offer').innerHTML = "Biglietto Standard";
            discountedPrice = price * distance;
            document.getElementById('price').innerHTML = discountedPrice.toFixed(2) + "€"; 

        } else if (discount.value == "under") {
            document.getElementById('offer').innerHTML = "Sconto del 20%";
            discountedPrice = price * distance * 80 / 100;
            document.getElementById('price').innerHTML = discountedPrice.toFixed(2) + "€";

        } else if (discount.value == "over") {
            document.getElementById('offer').innerHTML = "Sconto del 40%";
            discountedPrice = price * distance * 60 / 100;
            document.getElementById('price').innerHTML = discountedPrice.toFixed(2) + "€";

        }

        
        // Generatore random di numero di carrozza e numero del treno
        document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 9 + 1);
        document.getElementById('code').innerHTML = Math.floor(Math.random() * 10000 + 90000);
        document.getElementById('user').innerHTML = name;
    }

);

cancel.addEventListener('click',

    function() {
        let hidden = document.getElementById("hidden");
        hidden.style.display = "none"

        document.getElementById("distance").value = " ";
        document.getElementById("name").value = " ";
        document.getElementById("discount").value = " ";
    }


);
