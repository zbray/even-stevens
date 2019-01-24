$("#search").on("click", function(event) {
    event.preventDefault();
    var jobSearch = $("input").val();
    var queryURL = "https://authenticjobs.com/api/" + jobSearch + "?api_key=95681d175f84e545da6da7ac528eb17a&method=aj.jobs.get&id=1569";
    var box= $("<tr>")
    var jobTitleTable= $("<td>Text</td>")
    var cityTable= $("<td>Text</td>")
    var descriptionTable= $("<td>Text</td>")
    var salaryTable =$("<td>Text</td>")
    
    box.append(jobTitleTable)
    box.append(cityTable)
    box.append(descriptionTable)
    box.append(salaryTable)
    
    $("table").append(box)
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#jobs").text(JSON.stringify(response));
      });
    });

    $("#search").on("click", function(event) {
        event.preventDefault();
        var WeatherAp = $("input").val();
        var queryURL = "https://openweathermap.org/api/" + WeatherAp + "?api_key=2839d424c20e5a81965724e469b669bb";
        
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            $("#weather").text(JSON.stringify(response));
          });
        });