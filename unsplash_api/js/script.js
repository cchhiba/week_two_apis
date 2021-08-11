/* custom js styles is written here */

console.log('js working');

// my unsplash api key using the .parse method to link my myKey.json (which has my api key) file to a variable
var myKey=JSON.parse(myKey); // JSON.parse converts json in to an object
console.log(myKey[0].key); // accessing the array in the myKey.Json file
var key = myKey[0].key;
// Your key will be hidden when you push to git as you have added a .gitignore file

var i;

// Jquery ajax
// xmlhttprequest - does not support CORS (cross origin)

// calling the data to the dom using jquery. This is another way to call data without using a promise
$.ajax({
  // Your url 'photos' is the type of data or your end point. page is the page number. per page is how many items per page. client id is your unqiue key.
  // Each parameter is seperated by a & symobol which is a logicl operator
  // this example has your key clearly written in the url link
  // url : 'https://api.unsplash.com/photos?page=3&per_page=32&client_id=9f4Yu9JGU4nKV5vpA8-fuT3xvBIavZFS50Llv8zO1Ec',

  // using the key variable to add your key to the url
  url : 'https://api.unsplash.com/photos?page=3&per_page=32&client_id=' + key,
  // user details end point
  // url : 'https://api.unsplash.com/users/harleydavidson/?client_id=9f4Yu9JGU4nKV5vpA8-fuT3xvBIavZFS50Llv8zO1Ec',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);

// displaying the api data using bootstrap and a for loop
    for (i = 0; i < data.length; i++) {

      console.log(data[i].id, data[i].name);
      document.querySelector('.objects').innerHTML +=
          '<div class="col-12 col-lg-3 col-xl-3">' +
            '<div class="card mt-3 ml-5" style="width: 18rem;">' +
              '<div class="card-body">' +
                '<h2 class="card-title">' + data[i].alt_description + '</h2>' +
                '<h5 class="card-title">Likes: ' + data[i].likes + '</h5>' +
                '<p class="card-text">Colour: ' + data[i].color + '</p>' +
                '<p class="card-text">Location: ' + data[i].user.location + '</p>' +
                `<img src='${data[i].urls.small}' width='150px'>`
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
