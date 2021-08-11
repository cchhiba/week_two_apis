/* custom js styles is written here */

console.log('js working');

// var student = [{
//     id: 101,
//     name: 'David'
//   },
//   {
//     id: 102,
//     name: 'Greg'
//   }
//
// ];

// display the data object
// var i;
//
// for (i = 0; i < student.length; i++) {
//
//   console.log(student[i].id, student[i].name);
//
// };

// Converting the above informaiton in to Json
// Note: the properties are now in double quotation marks
// var student = [{
//     "id": 101,
//     "name": "Sarah"
//   },
//   {
//     "id": 101,
//     "name": "Ben"
//   }
// ]


// display the student data.json object
// var i;
//
// for (i = 0; i < student.length; i++) {
//
//   console.log(student[i].id, student[i].name);
//   document.querySelector('.objects').innerHTML +=
//     // '<p class="text-light"> ' + student[i].id + '  ' + student[i].name + '</p>'
//       '<div class="col-12 col-lg-6 col-xl-6">' +
//         '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//           '<div class="card-body">' +
//             '<h5 class="card-title">' + student[i].name + '</h5>' +
//             '<p class="card-text">' + student[i].id + '</p>' +
//           '</div>' +
//         '</div>' +
//     '</div>';
// }

// display the car data.json object
var i;

// var carData = JSON.parse(carData);
//
// console.log(data);

// for (i = 0; i < student.length; i++) {
//
//   console.log(student[i].id, student[i].name);
//   document.querySelector('.objects').innerHTML +=
//     // '<p class="text-light"> ' + student[i].id + '  ' + student[i].name + '</p>'
//       '<div class="col-12 col-lg-6 col-xl-6">' +
//         '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//           '<div class="card-body">' +
//             '<h5 class="card-title">' + student[i].name + '</h5>' +
//             '<p class="card-text">' + student[i].id + '</p>' +
//           '</div>' +
//         '</div>' +
//     '</div>';
// }

// Jquery ajax
// xmlhttprequest - does not support CORS (cross origin)

// calling the data to the dom using jquery. This is another way to call data without using a promise
$.ajax({
  url : 'https://my.api.mockaroo.com/api_lesson_one_car_data.json?key=66cfc2b0',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);

// displaying the api data using bootstrap
    for (i = 0; i < data.length; i++) {

      console.log(data[i].id, data[i].name);
      document.querySelector('.objects').innerHTML +=
          '<div class="col-12 col-lg-6 col-xl-6">' +
            '<div class="card mt-3 ml-5" style="width: 18rem;">' +
              '<div class="card-body">' +
                '<h2 class="card-title">' + data[i].id + '</h2>' +
                '<h5 class="card-title">Car Model: ' + data[i].car_model + '</h5>' +
                '<p class="card-text">Car Make: ' + data[i].car_make + '</p>' +
                '<p class="card-text">Car Year: ' + data[i].year + '</p>' +
              '</div>' +
            '</div>' +
        '</div>';
    // for loop ends
    }
    // end of success statement
  },
  error: function() {
    console.log('error');
    // end of error
  }
  // end of ajax
});
