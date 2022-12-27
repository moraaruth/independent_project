const wrapper = document.querySelector('.wrapper')
const card = wrapper.querySelector('.card text-center')
const city = wrapper.querySelector('#city')
const getLocation = wrapper.querySelector('#butt')
let api;
let icon= 'http://openweathermap.org/img/wn/10d@2x.png';
         


city.addEventListener('keyup', e => {
    if (e.key == 'Enter' && city.value != ''){
       requestApi(city.value)
    }
})

getLocation.addEventListener('click', ()=> {
    //if/else statement if browser supports geolation api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError)

    }else{
        alert('Sorry, unable to get location!')
    }

})

function onSuccess(position){
    // getting lat and lon of the user device from cordinates
    const {latitude, longitude} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&${icon}&units=metric&appid=220789f4e8c25f055bb2d1eae7f527ab`
    fetchweatherData(api);
}

function onError(error){
   alert('Sorry, location permission denied!')

}
//writing function to fetch api
function requestApi(city){
   api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&{icon}&units=metric&appid=220789f4e8c25f055bb2d1eae7f527ab`
    fetchweatherData(api);
}


function fetchweatherData(){
        //fetching api response and returning it while parsing into js object
        fetch(api)
        .then(response => (response.json()))
        //.then calling weatherDeatils function with parsing api result as an argument
        .then(result => weatherDetails(result)
        )

}
function weatherDetails(info){
    //if user inputs an invalid city name, gets error
    if(info.cod == '404'){
        alert(`${city.value} is not a valid city name`)
    }else {
        const row = document.querySelector('.row')
        const cards = row.querySelector('#cards')
        const country = cards.querySelector('#country')
        const icon = cards.querySelector('#icon')
        const temp = cards.querySelector('#temp')
        const description = cards.querySelector('#description')
        
//using DOM to display weather details
         country.innerText = (info['name']);
         icon.innerText = (info['weather'][0]['main'])
         //using math floor to set temperature to whole numbers without decimal places
          temp.innerHTML = Math.floor( (info['main']['temp']));
          description.innerHTML = (info['weather'][0]['description'])
    }
   
}



