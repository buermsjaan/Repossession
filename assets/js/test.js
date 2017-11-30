/**
 * Created by jaan on 30/11/2017.
 */
$(document).ready(function () {

    getMines();

});


    var getMines = function() {
        var ajaxreq = $.ajax({
            url: "http://37.230.98.72/htf/api/mines",
            dataType: "json",
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTIwNDI5NjQsImRhdGEiOnsidXNlciI6eyJpZCI6IjVhMTk4YTMyODBhZTM5NWYzMDRjZGMxYyIsInJvbGUiOjB9fSwiaWF0IjoxNTEyMDQxMTY0fQ.AjO3O2AA_9hHezRu1n1uS1H04BdaDmkTnDImxZ_JbHc'},
            type: "GET",
            timeout: 3000,
            complete: function (data) {
                console.log(data);
                var mines = data.responseJSON;

                for (i = 0; i < mines.length; i++) {
                    console.log(mines[i]);

                    $('.MineCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='red-text text-darken-2'>" + "<h3>" +  mines[i].name + "</h3>" + " Risk level " + mines[i].type + "</span>" + "</div>" + "</li>");
                }
            }

        })

};


