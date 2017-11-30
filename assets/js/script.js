    /**
 * Created by Wout-PC on 30/11/2017.
 */
console.log("LETSGO");

$(document).ready(function () {
    $('#login').on("click",function() {
        window.location.href = '/Repossession/login.php';
        return false;
    });



    getTerrorists();

});





    var getTerrorists = function() {
        var ajaxreq = $.ajax({
            url: "http://37.230.98.72/htf/api/terrorists",
            dataType: "json",
            headers: {'Authorization': 'Bearer ' + Cookies.get("accessToken")},
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


