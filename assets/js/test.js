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
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTIwNDAyMzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjVhMTk4YTMyODBhZTM5NWYzMDRjZGMxYyIsInJvbGUiOjB9fSwiaWF0IjoxNTEyMDM4NDMxfQ.U9jIVNQ3T6OZ6eBPDDCnxwz9M4xTgBtQnH1AGHnEFck'},
        type: "GET",
        timeout: 3000,
        complete: function (data) {

            var terrorists = data.responseJSON;

           for (i = 0; i < terrorists.length; i++) {
               console.log(terrorists[i]);
            var afbeelding = terrorists[i].image;
               $('.TerroristCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='blue-text text-darken-2'>" + "<img src=http://37.230.98.72/htf" + afbeelding + ">"+ "<h3>" +  terrorists[i].name + "</h3>" + " Risk level " + terrorists[i].riskLevel + "</span>" + "</div>" + "</li>");
           }
        }

    })};




