var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.cityName')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=02b9399dd6534036eeafcf6e8768c85c')
    .then(response=>response.json())
    .then((data)=>{
        // console.log(data);
        var nameValue = data.name;
        var temp = "Temperature : " + data.main.temp;
        var desc ="Description : " + data.weather[0].description;
        cityName.innerHTML = nameValue;
        description.innerHTML = desc;
        temperature.innerHTML = temp;
    })
    .catch(err=>alert("Please enter a valid city Name"));  
})
