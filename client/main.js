$(".button-collapse").sideNav();

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});