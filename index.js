const wrapper = document.querySelector('.wrapper')
const card = wrapper.querySelector('.card text-center')
const city = wrapper.querySelector('#city')
const getLocation = wrapper.querySelector('#butt')

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
//writing function to fetch api
function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=220789f4e8c25f055bb2d1eae7f527ab`
    //fetching api response and returning it while parsing into js object
    fetch(api)
    .then(response => (response.json()))
    //.then calling weatherDeatils function with parsing api result as an argument
    .then(result => weatherDetails(result))
}
function weatherDetails(info){
    console.log(info)
}


// fetch('https://api.openweathermap.org/data/2.5/weather?q=city,{country code}&appid=220789f4e8c25f055bb2d1eae7f527ab')
// .then(res => res.json())
// .then(data => console.log(data)

    // {
    //  console.log(data['name'])
        // var nameValue = console.log(data['name']) 
        // var tempValue = console.log(data['main']['temp'])
        //   var descriptionValue = console.log(data['weather'][0]['description'])
         
         
          
        // country.innerHTML = console.log(nameValue);
                    
        // description.innerHTML = descriptionValue;
        //  temp.innerHTML = tempValue;



// }
// );


   
   
//below works


// let weather = async () => {


// fetch('https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=220789f4e8c25f055bb2d1eae7f527ab')
// .then(res => res.json())
// .then(data => console.log(data)
    // {
//     var nameValue = data['name'];
//    var tempValue = data['main']['temp'];
//      var descriptionValue = data['weather'][0]['description'];
    
    
              
//    country.innerHTML = nameValue;
               
//    description.innerHTML = descriptionValue;
//     temp.innerHTML = tempValue;
    
//   })
// )

// }



// document.querySelector('#butt').addEventListener('click',  ()  => {
  

// })


//above works


// )



// let country = document.querySelector('#country')
// let description = document.querySelector('#description')
// let temp = document.querySelector('#temp')

// document.querySelector('#button').addEventListener('click', () => {

//     // console.log(
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=220789f4e8c25f055bb2d1eae7f527ab')
//         .then(res => res.json())
//         .then(data =>  console.log(data)
//             // {
//             // var nameValue = data['name'];
//             // var tempValue = data['main']['temp'];
//             // var descriptionValue = data['weather'][0]['description'];


          
//             // country.innerHTML = nameValue;
           
//             // description.innerHTML = descriptionValue;
//             // temp.innerHTML = tempValue;

//         // }
//         )
//     // )


// });