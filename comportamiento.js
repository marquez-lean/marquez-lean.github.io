
let botonTexto = document.getElementById("botonTexto");

let textoVisible = document.getElementById("textoVisible");
    
botonTexto.addEventListener("click", toggleText);
    
function toggleText () {
   textoVisible.classList.toggle("esconder");

   if(textoVisible.classList.contains("esconder")) {
    botonTexto.innerHTML = "👆";
   }
   else {
    botonTexto.innerHTML = "👇";
  }
}

function startTime() {
  let today = new Date();
  let  hr = today.getHours();
  let  min = today.getMinutes();
  let  sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("Hora").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  let months = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '10', '11', '12'];
  let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("Fecha").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

