var loginFunction = function(accessToken){

    var thisData = {
        "qrCode": accessToken
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
            var user=JSON.stringify(request.user);
            document.cookie = "accessToken="  + request.accessToken;
            document.cookie = "user="  + user;

        })
        .fail(function(){


        });
};

function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function() {
        node.value = "";
        qrcode.callback = function(res) {
            if(res instanceof Error) {
                alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
            } else {
                node.parentNode.previousElementSibling.value = res;
                console.log(res);
                loginFunction(res);
                window.location.href = '/index.php';
                return false;
            };
        };
        qrcode.decode(reader.result);

    };
    reader.readAsDataURL(node.files[0]);
}