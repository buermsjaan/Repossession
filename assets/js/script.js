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

    checkAuth();
    getImages();
    getTerrorists();
    getMines();
    getPolls();

});

var checkAuth = function(){

    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/terrorists",
        dataType: "json",
        headers: {'Authorization': 'Bearer ' + Cookies.get("accessToken")},
        type: "GET",
        timeout: 3000,
        complete: function (data) {

        }

    });
    ajaxreq.done(function(){

    });

    ajaxreq.fail(function(httpObj) {
        $("#login").show();
        $("#Container").hide();

    });


};

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
                var afbeelding = terrorists[i].image;
                $('.TerroristCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='red-text text-darken-2'>" + "<img src=http://37.230.98.72/htf" + afbeelding + ">"+ "<h3>" +  terrorists[i].name + "</h3>" + " Risk level " + terrorists[i].riskLevel + "</span>" + "</div>" + "</li>");
            }
        }

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
            var images = data.responseJSON;

            for (i = 0; i < images.length; i++) {


                $('.ImageCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='red-text text-darken-2'>" + "<h3>" +  images[i].user.name + "</h3>"+ "<img class='resize' src=http://37.230.98.72/htf" + images[i].url + ">" + "</span>" + "</div>" + "</li>");
            }
        }

    })


};

var getPolls = function() {
    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/polls",
        dataType: "json",
        headers: {'Authorization': 'Bearer ' + Cookies.get("accessToken")},
        type: "GET",
        timeout: 3000,
        complete: function (data) {
            console.log(data);
            var polls = data.responseJSON;

            for (i = 0; i < polls.length; i++) {
                console.log(polls[i]);
                $('.PollCollection').append("<li class='collection-item'>" + "<div class='card-panel'>" + "<span class='red-text text-darken-2'>" + "<h3>" +  polls[i].description + "</h3>" + "</span>" + "</div>" + "</li>");
            }
        }

    })
};
