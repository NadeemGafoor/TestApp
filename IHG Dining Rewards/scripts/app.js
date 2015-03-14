(function () {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {
        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
  //hideNav();      
       navigator.splashscreen.hide();   
        // Initialize the Backend Services SDK
   
         
        app = new kendo.mobile.Application(document.body, {
                                               platform: 'ios7',
                                               transition:'slide',
                                               layout:'main-layout',
                                                initial: checkNetwork()?"views/home.html":"views/nonetwork.html",
                                               //initial: "views/home.html",
                                               useNativeScrolling: false,
            
                                           });
    }, false);
   
    function checkNetwork () {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.NONE] = 'No network connection';
       
        if (states[networkState] == "No network connection") {
            return false;
        } else {
            return true;
        }
    }
    
      function hideNav() {
        setTimeout(function() {
            navigator.splashscreen.hide();  
        }, 1000);  //hide Loading Popup
    }
}());