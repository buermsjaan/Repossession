/**
 * Created by Wout-PC on 30/11/2017.
 */
console.log("LETSGO");

$(document).ready(function () {

    loginFunction();

});

var loginFunction = function(){

    var thisData = {
        "qrCode": "91a3d65875df88e809f86b120e096f04ce5702013c7978c1e48b4d5f03edcdd6a18d150c0c582449b5ed0d73284fc2cbff6b03"
    };

    var ajaxreq = $.ajax({
        url: "http://37.230.98.72/htf/api/auth/login",
        data: thisData,
        dataType: "json",
        type: "POST",
        timeout: 3000,
    }).done(function(r) {
            request = r;

            console.log(request);

        })
        .fail(function(){


        });
}