document.querySelector('#city').addEventListener('click',() => 
    console.log(form.childNodes[1])
)


fetch('https://api.openweathermap.org/data/2.5/weather?q=city,{country code}&appid=220789f4e8c25f055bb2d1eae7f527ab')
.then(res => res.json())
.then(data => console.log(data)

    // {
    //  console.log(data['name'])
        // var nameValue = console.log(data['name']) 
        // var tempValue = console.log(data['main']['temp'])
        //   var descriptionValue = console.log(data['weather'][0]['description'])
         
         
          
        // country.innerHTML = console.log(nameValue);
                    
        // description.innerHTML = descriptionValue;
        //  temp.innerHTML = tempValue;



// }
);


   
   
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