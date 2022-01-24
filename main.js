let calculate = document.getElementById("calculate");
let discount = document.getElementById("discount");
const price = 0.21;
let discountedPrice;


calculate.addEventListener('click',

    function() {
        
        let name = document.getElementById("name").value;
        let distance = document.getElementById("distance").value;

        if (discount.value == "adult") {
            document.getElementById('offer').innerHTML = "Tariffa ordinaria";
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
        document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 8 + 1);
        document.getElementById('code').innerHTML = Math.floor(Math.random() * 99998 + 1);
        document.getElementById('user').innerHTML = name;
    }

    
    

);

