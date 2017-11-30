/**
 * Created by jaan on 30/11/2017.
 */
$(document).ready(function () {

    getTerrorists();

});

var getTerrorists = function() {
    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/terrorists",
        dataType: "json",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTIwMzgxMTAsImRhdGEiOnsidXNlciI6eyJpZCI6IjVhMTk4YTMyODBhZTM5NWYzMDRjZGMxYyIsInJvbGUiOjB9fSwiaWF0IjoxNTEyMDM2MzEwfQ.8R6lxyJfUWmSWhuVaMJDKOsihYGNTMopP8HZqYZLQ7w'},
        type: "GET",
        timeout: 3000,
        complete: function (data) {

            var terrorists = data.responseJSON;

           for (i = 0; i < terrorists.length; i++) {
               console.log(terrorists[i])

               $
           }
        }

    })};




