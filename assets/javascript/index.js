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


  //On click event that will take values entered and store


  $("#submit").on("click", function (event) {
    event.preventDefault();
    var jobInput = $("#jobValue").val().trim();
    var cityInput = $("#cityValue").val().trim();
    // Testing to see if values are being pulled from Form.
    console.log(jobInput)
    console.log(cityInput)

    var weatherAPIKey = "2839d424c20e5a81965724e469b669bb";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + ",us&units=imperial&appid=" + weatherAPIKey;


    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function (response) {
      $("#weatherDiv").text(JSON.stringify(response));
      console.log(response)
      console.log(response.main.temp_max);
      console.log(response.main.temp_min);

      var weatherDiv = $("#weather");
      //Code below will display wind speed to weather div
      // Storing the wind speed
      var windSpeed = response.wind.speed;
      console.log("this is wind speed is " + windSpeed);
      // Creating an element to hold the windspeed
      var windSpeedDisplay = $("<p>").html("<strong>Wind Speed: </strong>" + windSpeed);
      // Displaying the wind speed
      weatherDiv.append(windSpeedDisplay);

      //Code below will display wind gust to weather div
      // Storing the wind gust
      var windGust = response.wind.gust;
      console.log("This is wind gust is " + windGust);
      // Creating an element to hold the wind gust
      var windGustDisplay = $("<p>").html("<strong>Wind Gust: </strong>" + windGust);
      // Displaying the wind gust
      weatherDiv.append(windGustDisplay);

      //Code below displays the weather data. NEEDS WORK!
      //Able to get weather info, but the entire array, not specific pieces of data
      var weather = JSON.stringify(response.weather);
      console.log("this is weather" + weather);
      // Creating an element to hold the weather data
      var weatherDisplay = $("<p>").html("<strong>Weather: </strong>" + weather);
      // Displaying the wether data
      weatherDiv.append(weatherDisplay);

      //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
      // Storing the current temperature
      var currentTemp = response.main.temp;
      console.log("This is current temperature :" + currentTemp);
      // Creating an element to hold the current temp
      var currentTempDisplay = $("<p>").html("<strong>Current Temp: </strong>" + currentTemp);
      // Displaying the current temp
      weatherDiv.append(currentTempDisplay);

      //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
      // Storing the max temp
      var maxTemp = response.main.temp_max;
      console.log("This is max temperature :" + maxTemp);
      // Creating an element to hold max temp
      var maxTempDisplay = $("<p>").html("<strong>Max temp: </strong>" + maxTemp);
      // Displaying the max temp
      weatherDiv.append(maxTempDisplay);

      //Code below will display temps (in kelvins! Must convert to Fahrenheit) to weather div
      // Storing the min tem
      var minTemp = response.main.temp_min;
      console.log("This is min temperature :" + minTemp);
      // Creating an element to hold the min temp
      var minTempDisplay = $("<p>").html("<strong>Min temp: </strong>" + minTemp);
      // Displaying the min temp
      weatherDiv.append(minTempDisplay);
    });



  //   $("#submit").on("click", function (event) {
  //     event.preventDefault();
  //     var jobInput = $("#jobValue").val().trim();
  //     var cityInput = $("#cityValue").val().trim();

  //     console.log(jobInput)
  //     console.log(cityInput)

  //     var jobsURL = "https://authenticjobs.com/api/?api_key=950957111a9b72525093584bfdef9610&method=aj.jobs.search&keywords=" + jobInput + "&location=" +cityInput+ stateInput + "&format=json"
      
  //   $.ajax({
  //     url: jobsURL,
  //     method: "GET"
  //   }).then(function (jobsResponse) {
  //     $("#jobsDiv").text(JSON.stringify(jobsResponse));
  //     console.log(jobsResponse)
  //     console.log (jobsURL);

  //   });
  // });
});
});