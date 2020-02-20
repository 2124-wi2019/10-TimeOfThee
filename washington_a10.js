/*
Timothy Washington
washington_a010.js
INFO 2124 - Javascript I
Thoendel
Creation date: Feb 19, 2020
*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    var phot = document.getElementById('photo');//setting vars
    var sor = phot.src.toString()
    if(sor.substring(sor.length-6) != "02.jpg")//if not 2
        phot.src = "02.jpg";//swap
    else phot.src = "01.jpg";//else

    if(document.getElementsByTagName("h1")[0].className != "greenText")//if not green
        document.getElementsByTagName("h1")[0].className="greenText";//swaw
    else document.getElementsByTagName("h1")[0].className="ghostText";//else

    //AND THIS COMMENT
});