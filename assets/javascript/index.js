

$("#submit").on("click", function(event) {
    alert("hello");
    
    
    var jobSearch = $("#jobValue").val();
    var queryURL = "https://authenticjobs.com/api/?api_key=30cf344b293c93f1d755fbebf7fc61fc&method=aj.jobs.get" + jobSearch;

         $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
         $("#showResults").text(JSON.stringify(response));
            Console.log(response);
    });
});

     $("#submit").on("click", function(event) {
        event.preventDefault();
        
        var zipInput = $("#zipValue").val();
        var APIKey= "2839d424c20e5a81965724e469b669bb";
        var weatherSearch = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipInput +
      ",us&appid=" + APIKey;


         $.ajax({
            url: weatherSearch,
            method: "GET"
          }).then(function(response) {
          $("#weather").text(JSON.stringify(response));
            Console.log(response);
          });
        });




//var box= $("<tr>")
    // var jobTitleTable= $("<td>Text</td>")
    // var cityTable= $("<td>Text</td>")
    // var descriptionTable= $("<td>Text</td>")
    // var salaryTable =$("<td>Text</td>")

    //  box.append(jobTitleTable)
    // box.append(cityTable)
    // box.append(descriptionTable)
    // box.append(salaryTable)

    //  $("table").append(box)

  
    //   });
    // });