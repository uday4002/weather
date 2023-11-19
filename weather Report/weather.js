let inputEl=document.getElementById("input");
let buttonEl=document.getElementById("button");
let spanEl=document.getElementById("span");
let conditionsEl=document.getElementById("conditions");
let temperatureEl=document.getElementById("temperature");
let windSpeedEl=document.getElementById("windSpeed");
windSpeedEl.style.marginBottom="20px";
let apik="75f5b42f3aa458b177367a02bfcba1d3";

function convertion(val){
    return (val-273).toFixed(3);
}


let options={
    method:"GET"
}

buttonEl.addEventListener("click",function(){
    let resultsContainerEl=document.getElementById("resultsContainer");
    resultsContainerEl.style.display="block";
    let url='https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid='+apik;
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spanEl.textContent=jsonData['name'];
        conditionsEl.textContent=jsonData['weather']['0']['description'];
        temperatureEl.textContent=convertion(jsonData['main']['temp'])+" C";
        windSpeedEl.textContent=jsonData['wind']['speed']+" Km/h";
    })
    .catch(err => alert("You entered Wrong city name"))
});