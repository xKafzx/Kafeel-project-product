var countDown = new Date ("Dec 1, 2024 12:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance / (1000*60*60*24)); //untuk menghitung hari
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60*24)); //untuk menghitung jam
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60)); //untuk menghitung menit
    var seconds = Math.floor((distance % (1000*60)) / 1000); //untuk menghitung detik

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   if (distance < 0){
    clearInterval(x);
   ocument.getElementById("days").innerHTML = "00";
   document.getElementById("hours").innerHTML = "00";
   document.getElementById("minutes").innerHTML = "00";
   document.getElementById("seconds").innerHTML = "00";
   }
},1000);