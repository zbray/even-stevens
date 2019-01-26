$("#search").on("click", function (event) {
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

  event.preventDefault();
  var jobSearch = $("input").val();
  var queryURL = "https://authenticjobs.com/api/" + jobSearch + "?api_key=95681d175f84e545da6da7ac528eb17a&method=aj.jobs.get&id=1569";
  var box = $("<tr>")
  var jobTitleTable = $("<td>Text</td>")
  var cityTable = $("<td>Text</td>")
  var descriptionTable = $("<td>Text</td>")
  var salaryTable = $("<td>Text</td>")

  box.append(jobTitleTable)
  box.append(cityTable)
  box.append(descriptionTable)
  box.append(salaryTable)

  $("table").append(box)

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#jobs").text(JSON.stringify(response));
  });
});

$("#search").on("click", function (event) {
  event.preventDefault();
  var zipInput = $("#zipValue").val(); 
  var APIKey = "2839d424c20e5a81965724e469b669bbs";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipInput + ",us&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#weather").text(JSON.stringify(response));
  });
});


2839d424c20e5a81965724e469b669bb";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=60642,us&appid=2839d424c20e5a81965724e469b669bb;