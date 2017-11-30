    /**
 * Created by Wout-PC on 30/11/2017.
 */
console.log("LETSGO");

$(document).ready(function () {
    $('#login').on("click",function() {
        window.location.href = '/Repossession/login.php';
        return false;
    });

    $('#login').hide();
    getImages();
    getTerrorists();
    getMines();

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

    });
    ajaxreq.done(function(){

    });

    ajaxreq.fail(function(httpObj) {
        if(httpObj.status==401)
            $("#login").show();


    });
};


var getMines = function() {
    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/mines",
        dataType: "json",
        headers: {'Authorization': 'Bearer ' + Cookies.get("accessToken")},
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

var getImages = function() {
    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/images",
        dataType: "json",
        headers: {'Authorization': 'Bearer ' + Cookies.get("accessToken")},
        type: "GET",
        timeout: 3000,
        complete: function (data) {
            console.log(data);
            var images = data.responseJSON;

            for (i = 0; i < images.length; i++) {
                console.log(images[i]);

                $('.ImageCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='red-text text-darken-2'>" + "<h3>" +  images[i].user.name + "</h3>"+ "<img class='resize' src=http://37.230.98.72/htf" + images[i].url + ">" + "</span>" + "</div>" + "</li>");
            }
        }

    })

};
