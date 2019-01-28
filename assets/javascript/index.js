$(document).ready(function () {
  // Firebase init
  var config = {
    apiKey: "AIzaSyCSjpthmc-lZ3kgzEA_JIJ53pUFEb7LyKw",
    authDomain: "nextbestmove-444e9.firebaseapp.com",
    databaseURL: "https://nextbestmove-444e9.firebaseio.com",
    projectId: "nextbestmove-444e9",
    storageBucket: "nextbestmove-444e9.appspot.com",
    messagingSenderId: "541706167802"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();

    var jobInput = data.jobInput;
    var cityInput = data.cityInput;
    // var stateInput = data.stateInput;

    //Creates new row for each search field and appends to table data from firebase
    var newRow = $("<tr>").append(
      $("<td>").text(jobInput),
      $("<td>").text(cityInput));

    $("#recentSearch").append(newRow);
  })

// closes entire js page
});

  // On click event that will take values entered and store
  // Weather search
  $("#submit").on("click", function (event) {

    event.preventDefault();
    var jobInput = $("#jobValue").val().trim();
    var cityInput =$("#cityValue").val().trim();
    var stateInput = $("#stateValue").val();
    // Testing to see if values are being pulled from Form.
    console.log(jobInput)
    console.log(cityInput)
    console.log(stateInput)

    var weatherAPIKey = "2839d424c20e5a81965724e469b669bb";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + ",us&units=imperial&appid=" + weatherAPIKey;

    //ajax call for weather
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function(response) {

      console.log(response)

      //correct reference to temp (in kelvins! Must convert to Fahrenheit)

      console.log(response.main.temp_max);  
      console.log(response.main.temp_min);

      //Creates a weather div. results will append to the div created below
      $("#weatherDiv").append('<div id="weather"></div>');

      var weatherDivDisplay = $("#weather");
        //Code below will display wind speed to weather div
        // Storing the wind speed
        var windSpeed = response.wind.speed;
        console.log("this is wind speed is " + windSpeed);
        // Creating an element to hold the windspeed
        var windSpeedDisplay = $("<p>").html("<strong>Wind Speed: </strong>" + windSpeed);
        // Displaying the wind speed
        weatherDivDisplay.append(windSpeedDisplay);

        //Code below will display wind gust to weather div
        // Storing the wind gust
        var windGust = response.wind.gust;
        console.log("This is wind gust is " + windGust);
        // Creating an element to hold the wind gust
        var windGustDisplay = $("<p>").html("<strong>Wind Gust: </strong>" + windGust);
        // Displaying the wind gust
        weatherDivDisplay.append(windGustDisplay);

        //Code below displays the weather data. NEEDS WORK!
        //Able to get weather info, but the entire array, not specific pieces of data
        var weather = JSON.stringify(response.weather);
        console.log("this is weather" + weather);
        // Creating an element to hold the weather data
        var weatherDisplay = $("<p>").html("<strong>Weather: </strong>" + weather);
        // Displaying the wether data
        weatherDivDisplay.append(weatherDisplay);

        //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
        // Storing the current temperature
        var currentTemp = response.main.temp;
        console.log("This is current temperature :" + currentTemp);
        // Creating an element to hold the current temp
        var currentTempDisplay = $("<p>").html("<strong>Current Temp: </strong>" + currentTemp);
        // Displaying the current temp
        weatherDivDisplay.append(currentTempDisplay);

        //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
        // Storing the max temp
        var maxTemp = response.main.temp_max;
        console.log("This is max temperature :" + maxTemp);
        // Creating an element to hold max temp
        var maxTempDisplay = $("<p>").html("<strong>Max temp: </strong>" + maxTemp);
        // Displaying the max temp
        weatherDivDisplay.append(maxTempDisplay);

        //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
        // Storing the min tem
        var minTemp = response.main.temp_min;
        console.log("This is min temperature :" + minTemp);
        // Creating an element to hold the min temp
        var minTempDisplay = $("<p>").html("<strong>Min temp: </strong>" + minTemp);
        // Displaying the min temp
        weatherDivDisplay.append(minTempDisplay);

      });  
      //hides search form so results, weather, and recent searches can appear.
      $('#jobDiv').empty();


  // Jobs search
  $("#submit").on("click", function (event) {
    event.preventDefault();
    var jobInput = $("#jobValue").val().trim();
    var cityInput = $("#cityValue").val().trim();

    console.log(jobInput)
    console.log(cityInput)

    var jobsURL = "https://authenticjobs.com/api/?api_key=950957111a9b72525093584bfdef9610&method=aj.jobs.search&keywords=" + jobInput + "&location=" + cityInput + "&format=json"

    //Jobs Function
    $.ajax({
      url: jobsURL,
      method: "GET"
    }).then(function (jobsResponse) {
      // $("#jobsDiv").text(JSON.stringify(jobsResponse));
      //console log tests
      console.log(jobsResponse.listings.listing)
      console.log(jobsURL);
      console.log(jobTitle);
      console.log(jobLocation);
      console.log(jobCompany);
      console.log(jobLink);

      //For loop that runs through results of job search...
      for (var i = 0; i < jobsResponse.listings.listing.length; i++) {
        var jobTitle = jobsResponse.listings.listing[i].title;
        var jobLocation = jobsResponse.listings.listing[i].company.location.name;
        var jobCompany = jobsResponse.listings.listing[i].company.name;
        var jobLink = jobsResponse.listings.listing[i].url;
        var jobDescription = jobsResponse.listings.listing[i].description;

        var jobIdNumber = jobsResponse.listings.listing[i].id;

        $("#jobsDiv").append('<div class="newJobDiv" id="' + jobIdNumber + '"></div>');

        // for (var j = 0; j < jobsResponse.listings.listing.length; j++) {

              $(`#${jobIdNumber}`).append(
                $("<p>").html("<h1>" + jobTitle + "</h1>"),
                $("<p>").html("<strong> Job Location(s): </strong>" + jobLocation),
                $("<p>").html("<strong>Company: </strong>" + jobCompany),
                $("<p>").html("<strong> Description: </strong><br> <div class='jobDescriptionDiv'>" + jobDescription + "</div>"),
                $("<p>").html("<a href='" + jobLink + "'target=" + "_blank" + ">" + "Click here to apply" + "</a>"));
          
        //       $(".jobRows").append(newJob);
      

        //...then clears the search form
        $("#jobValue").val("");
        $("#cityValue").val("");
     }
    });

  }); 
}); //closes entire js page
