let weather = async () => {

fetch('https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=220789f4e8c25f055bb2d1eae7f527ab')
.then(res => res.json())
.then(data => console.log(data))

}
console.log (weather())
document.querySelector('#butt').addEventListener('click',  ()  => {
    console.log (weather())

})



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