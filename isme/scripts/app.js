// This is your Telerik Backend Services API key.
var bsApiKey = '0khitwpp9mtx66ss';  

// This is the scheme (http or https) to use for accessing the Telerik Backend Services REST API.
var bsScheme = 'http';

// This is your Google Cloud Console API project number. It is required by Google in order to enable push notifications for your Android. You do not need it for iOS.
var googleApiProjectNumber = '718540900342';

var el;
var currentDevice;

var emptyFunc = function () {
};
var disableBackButton = function() {
    document.addEventListener("backbutton", emptyFunc, false);
};
var enableBackButton = function() {
    document.removeEventListener("backbutton", emptyFunc);
};
var destroysplashmovie = function() {
    $("#splash-screen").remove();
};
var playmovie = function() {
    var myVideo = document.getElementById("video1"); 
    myVideo.play(); 
setTimeout(stopmovie, 10000);  //hide Loading Popup
}

var stopmovie = function() {
    $("body").data("kendoMobilePane").navigate("views/home.html");      
}

(function () {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {
        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
        //hideNav();      
        hideNav();      
       
        // Initialize the Backend Services SDK
   
        if (!bsApiKey || bsApiKey === 'BACKEND_SERVICES_API_KEY') {
            navigator.notification.alert("Unable to register for Notification Services, you may not be able to receive Notifications from IHG Dining Rewards");
        } else if ((!googleApiProjectNumber || googleApiProjectNumber === 'GOOGLE_API_PROJECT_NUMBER') && device.platform.toLowerCase() == "android") {
            navigator.notification.alert("Unable to register for Notification Services, you may not be able to receive Notifications from IHG Dining Rewards");
        }
       
        app = new kendo.mobile.Application(document.body, {
                                               platform: 'ios7',
                                               layout:'main-layout',
                                               initial: "views/splashMovie.html",
                                               useNativeScrolling: false
                                           });
        
        //kendo.UserEvents.defaultThreshold(20); 
        
        // Initialize the Backend Services SDK
        el = new Everlive({
                              apiKey: bsApiKey,
                              scheme: bsScheme
                          });
    
        currentDevice = el.push.currentDevice(false);
    }, false);
        
    function hideNav() {
        setTimeout(function() {
            navigator.splashscreen.hide();  
        }, 2000);  //hide Loading Popup
    }
}());