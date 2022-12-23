// let weather = {
//     "apiKey": "1f69fc603ff2d4b4c44901ea991ea5af",
//     fetchWeather: function (city) {
//         fetch(
//           "https://api.openweathermap.org/data/2.5/weather?q=" +
//             city +
//             "&units=metric&appid=" +
//             this.apiKey
//         )
//           .then((response) => {
//             if (!response.ok) {
//               alert("No weather found.");
//               throw new Error("No weather found.");
//             }
//             return response.json();
//           })
//           .then((data) => console.log(data));
//       },
//       displayWeather: function (data){

//       }
//     }

// adding variables that will help in DOM
const button = document.querySelector('#button')
const form = document.querySelector("#form"),
inputPart = form.querySelector("#city")
const country = document.querySelector('#country')
const icon = document.querySelector('#icon')
const description = document.querySelector('#description')
const temp = document.querySelector('#temp')

        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            inputPart.value +
            "&1f69fc603ff2d4b4c44901ea991ea5af")
           
