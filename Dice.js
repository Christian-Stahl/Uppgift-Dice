

    function kasta() {
        var x = Math.floor((Math.random() * 6) + 1);
        var resultat = x;
        console.log(resultat);

        if (resultat === 1) {
            console.log("siffran är ett")
            /* Flytta bilden */
            document.getElementById("bild").innerHTML="<img src='1.png'>";
        }

        else if (resultat === 2) {
            console.log("siffran är två")
            document.getElementById("bild").innerHTML="<img src='2.png'>";
        }

        else if (resultat === 3) {
            console.log("siffran är tre")
            document.getElementById("bild").innerHTML="<img src='3.png'>";
        }

        else if (resultat === 4) {
            console.log("siffran är fyra")
            document.getElementById("bild").innerHTML="<img src='4.png'>";
        }

        else if (resultat === 5) {
            console.log("siffran är fem")
            document.getElementById("bild").innerHTML="<img src='5.png'>";
        }

        else if (resultat === 6) {
            console.log("siffran är sex")
            document.getElementById("bild").innerHTML="<img src='6.png'>";
        }

        else {
            console.log("Nu har något blivit riktigt fel, kontakta supporten")
        }
}




