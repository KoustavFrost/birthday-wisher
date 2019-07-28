window.fbAsyncInit = function () {
    FB.init({
        appId: '{app-id-here}',
        cookie: true,
        xfbml: true,
        version: 'v3.3'
    });


    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var statusChangeCallback = (r) => {
    if (r.status) {
        if (r.status === "connected") {
            // window.location.replace("showInfo.html");
            // console.log("Login success ---> ", r);
            document.getElementById('fb-signin').style.display = 'none';
            document.getElementById('after-login').style.display = 'block';

            fetchUserData(r);
        } else {
            document.getElementById('fb-signin').style.display = 'block';
            document.getElementById('after-login').style.display = 'none';
            // console.log("Login Failed ---> ", r.error);
        }
    }
};

function logout() {
    FB.logout((response) => {
        statusChangeCallback(response);
        // console.log("Logout -->", response);
    });
}

var fetchUserData = (res) => {
    FB.api('me?fields=id,name', (response) => {
        console.log("Response for api call --> ", response);
    });
};