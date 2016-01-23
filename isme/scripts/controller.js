

function hideSpin() {
    window.setTimeout(function() {
        $("#mvwait").data("kendoMobileModalView").close();
    }, 1000); 
}
         
function showSpin() {
    if (!checkConnectionBool()) {
        navigator.notification.alert("Cannot complete the request.  Network unavailable.  Please check your network and re-try.", function() {
        }, "isme by Jumeirah", "Dismiss");  
        //        //$("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
    } else {
        $("#mvwait").data("kendoMobileModalView").open();
    }
}

function showOutletMessage() {
    navigator.notification.alert("Please check the Reward location details under the Bars & Dining or Leisure", function() {
    }, "isme by Jumeirah", "Dismiss");  
}
function showConfirm() {
    navigator.notification.confirm(
        'Please enrol or login to activate this reward.', // message
        onConfirm, // callback to invoke with index of button pressed
        'isme by Jumeirah', // title
        'Login,Enrol'          // buttonLabels
        );
}

function onConfirm(buttonIndex) {
    if (buttonIndex===1) {
        loadLogin();
    } else {
        loadEnrol();
    }
}

function loadDiscover() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/discoverlist.html'
                                                                 }), 500);
}

function loadExplore() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/explorelist.html'
                                                                 }), 500);
}

function loadBenefits() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/benefitdetail.html'
                                                                 }), 500);
}

function loadRewards() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/offerlist.html'
                                                                 }), 500);
}

function loadLogin() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/login.html'
                                                                 }), 500);
}

function loadEnrol() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                     "duration"         :  500, // in milliseconds (ms), default 400
                                                                     "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                     "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                     "androiddelay"     :  150, // same as above but for Android, default 70

                                                                     'direction': 'up',
                                                                     'href': '#views/enrol.html'
                                                                 }), 500);
}

function faceBookClick() {
    window.plugins.socialsharing.shareViaFacebook(window.localStorage.getItem("social_message") + "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email"), window.localStorage.getItem("appad_location_short"), window.localStorage.getItem("appad_location"), function () {
    }, function (errormsg) {
    });
}

function twitterClick() {
    window.plugins.socialsharing.shareViaTwitter(window.localStorage.getItem("social_shortmsg"));
}

function whatsappClick() {
    window.plugins.socialsharing.shareViaWhatsApp(window.localStorage.getItem("social_shortmsg") + "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email") + "\n\n" , "", window.localStorage.getItem("appad_location"), function () {
    }, function (errormsg) {
    })
}

function emailClick() {
    window.plugins.socialsharing.shareViaEmail(
        window.localStorage.getItem("social_message") + "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email") + "\n\n" + "Download the isme by Jumeirah Mobile App at " + window.localStorage.getItem("appad_location"), 
        window.localStorage.getItem("social_shortmsg"), null, null, null, // TO: must be null or an array
        [window.localStorage.getItem("share_image")], // FILES: can be null, a string, or an array
        function (msg) {
        }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
        function (msg) {
        } // called when sh*t hits the fan
        );
}

function getLocation5() {
    $("#modalviewmap").data("kendoMobileModalView").open();
    document.getElementById("map_canvas1").style.backgroundColor = "#e9e5dc";
    for (i=0;i <= 1;i++) {
        document.getElementById("map_canvas1").innerHTML = "";  
        mapInitialize();
    }
}

function mapInitialize() {
    //  navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
    //     lat = position.coords.latitude;                                  
    //     lon = position.coords.longitude;
    //    }
    //                                            , function onErrorShowMap(error) { 
    //                                              lat = window.localStorage.getItem("lat");
    //                                            lon = window.localStorage.getItem("lon");
    //                                      }); 
    lat = window.localStorage.getItem("lat");
    lon = window.localStorage.getItem("lon");
    
    var latlng = new google.maps.LatLng(
        lat,
        lon);
    
    var mapOptions = {
        sensor: true,
        center: latlng,
        panControl: false,
        zoomControl: true,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: true,
    
    }; 
    
    var map = new google.maps.Map(
        document.getElementById("map_canvas1"),
        mapOptions
        );
        
    var marker = new google.maps.Marker({
                                            position: latlng,
                                            map: map
                                        });
    
    markers.push(marker);
    marker.setMap(map);     
    marker.setVisible(true);
    map.setCenter(marker.position);  
    google.maps.event.trigger(map, 'resize');
}

function onSelectTabStrip(e) {
    var i = $(e.item).index();
    if (i === 0) {
        getLocation5();
    } else if (i === 1) {
        supportEmailA();
    } else {
        customerCare();
    }
    var tabstrip = e.view.footer.find(".km-tabstrip").data("kendoMobileTabStrip");
    var currentItem = tabstrip.currentItem();
}

function onSelectTabStrip1(e) {
    var i = $(e.item).index();
    if (i === 0) {
        supportEmailA();
    } else {
        customerCare();
    }
    var tabstrip = app.view().footer.find(".km-tabstrip").data("kendoMobileTabStrip");
    tabstrip.clear();
}

function supportEmailA() {
    window.plugins.socialsharing.shareViaEmail(
        "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email") + "\n\n" + "Download the isme by Jumeirah Mobile App at " + window.localStorage.getItem("appad_location"), 
        window.localStorage.getItem("social_subject"), window.localStorage.getItem("social_email"), null, null, // TO: must be null or an array
        window.localStorage.getItem("share_image"), // FILES: can be null, a string, or an array
        function (msg) {
        }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
        function (msg) {
        } // called when sh*t hits the fan
        );
}

function customerCare() {
    window.open("tel:" + "9999999999");
}

function offerMessage() {
    navigator.notification.alert("To view offer details please select All Offers from the menu", function() {
    }, "isme by Jumeirah", "Dismiss")    
}

function outletMessage() {
    navigator.notification.alert("To view Restaurant details please select Restaurants List from the menu", function() {
    }, "isme by Jumeirah", "Dismiss")    
}

function setPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").open();
}

function closeSetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
}

function resetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
    $("#modalviewrepin").data("kendoMobileModalView").open();
}

function closeResetPinForEnrollment() {
    $("#modalviewrepin").data("kendoMobileModalView").close();
}

function resetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
    $("#modalviewrepin").data("kendoMobileModalView").open();
}

function closeResetPinForEnrollment() {
    $("#modalviewrepin").data("kendoMobileModalView").close();
}

function loadFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").open(); 
}

function closeFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").close(); 
}

function enterPinForRedemption() {
    $("#modalviewenterpin").data("kendoMobileModalView").open(); 
}

function openEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").open(); 
}

function closeEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").close(); 
}

function closeEnterModalPasswordandEnterPIN() {
    $("#modalviewpassword").data("kendoMobileModalView").close();
    setPinForEnrollment();
}

function closeEnterPinForRedemption() {
    $("#modalviewenterpin").data("kendoMobileModalView").close();
}

function enterStaffPinForRedemption() {
    $("#modalviewenterpin").data("kendoMobileModalView").close();
    $("#modalviewstaffpin").data("kendoMobileModalView").open();
}

function closeStaffPinForRedemption() {
    $("#modalviewstaffpin").data("kendoMobileModalView").close();
}

function closeModalMap() {
    $("#modalviewmap").data("kendoMobileModalView").close();
}    

function loadMapView() {
    $("#modalviewmap").data("kendoMobileModalView").open();
}    

function loadFilterView() {
    $("#modalviewfilter").data("kendoMobileModalView").open();
} 

function loadLocationView() {
    $("#modalviewcountry").data("kendoMobileModalView").open();
}

function loadCuisineView() {
    $("#modalviewcuisine").data("kendoMobileModalView").open();
}

function loadOfferView() {
    $("#modalviewoffertype").data("kendoMobileModalView").open();
}

function closeOfferTypeView() {
    $("#modalviewoffertype").data("kendoMobileModalView").close();
}

function loadTypeView() {
    $("#modalviewtype").data("kendoMobileModalView").open();
}   
    
function closeModalStar() {
    $("#modalviewstar").data("kendoMobileModalView").close();
}

function closeFilterView() {
    $("#modalviewfilter").data("kendoMobileModalView").close();
} 

function closeLocationView() {
    $("#modalviewcountry").data("kendoMobileModalView").close();
}

function closeCuisineView() {
    $("#modalviewcuisine").data("kendoMobileModalView").close();
}

function closeTypeView() {
    $("#modalviewtype").data("kendoMobileModalView").close();
}

function offerFilterView() {
    $("#modalviewofferfilter").data("kendoMobileModalView").open();
}

function closeOfferFilterView() {
    $("#modalviewofferfilter").data("kendoMobileModalView").close();
} 

function historyFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").open();
}

function closeHistoryFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").close();
} 

function loadCeleberationTypeView() {
    $("#modalviewceleberationtype").data("kendoMobileModalView").open();
}

function closeCeleberationTypeView() {
    $("#modalviewceleberationtype").data("kendoMobileModalView").close();
}

function shareClick() {
    $(".cardhead").slideUp("slow");
    elems = document.getElementsByClassName('foot');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }
    
    $(".sharehead").slideToggle("slow");
       
    elems = document.getElementsByClassName('sharehead');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -1000;
    }  
    
    elems = document.getElementsByClassName('mymenu1');

    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '<i class="fa fa-angle-up fa-2x" style="color:#fff"></i>';
        
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
}

function plHomeClick() {
    $(".cardhead").slideUp("slow");
   
    $(".foot").slideToggle("slow"); 
  
    elems = document.getElementsByClassName('mymenu1');

    for (i = 0; i < elems.length; i++) {
        if (elems[i].innerHTML === '<i class="fa fa-angle-down fa-2x" style="color:#fff"></i>') {
            elems[i].innerHTML = '<i class="fa fa-angle-up fa-2x" style="color:#fff"></i>';
        } else {
            elems[i].innerHTML = '<i class="fa fa-angle-down fa-2x" style="color:#fff"></i>';
        }  
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
    
    elems = document.getElementsByClassName('foot');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -10000;
    }  
    
    $(".sharehead").slideUp("slow");
      
    elems = document.getElementsByClassName('sharehead');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -1000;
    }  
}

function cardClick() {
    $(".sharehead").slideUp("slow");
    elems = document.getElementsByClassName('sharehead');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }
    
    elems = document.getElementsByClassName('foot');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }
  
    $(".cardhead").slideToggle("slow");
}

function loadExploreDetail() {
    doOneBack();
    if (window.localStorage.getItem("appopen") != "10") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-branddetail.html'
                                                   });
        window.localStorage.setItem("appopen", "10");   
    }
}

function loadMessageDetail() {  
    doOneBack();
    if (window.localStorage.getItem("appopen") != "14") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-messageitem.html'
                                                   });
        window.localStorage.setItem("appopen", "14");   
    }
}

function loadHistoryDetail() {  
    doOneBack();
    if (window.localStorage.getItem("appopen") != "15") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-historyitem.html'
                                                   });
        window.localStorage.setItem("appopen", "15");   
    }
}

function loadOfferDetail(e) {  
    doOneBack();
    if (window.localStorage.getItem("appopen") != "11") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-offerdetail.html?cpn=' + e
                                                   });
        window.localStorage.setItem("appopen", "11");   
    }
}

function loadOutletDetail() {
    doOneBack();
    if (window.localStorage.getItem("appopen") != "13") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-outletdetail.html'
                                                   });
        window.localStorage.setItem("appopen", "13");   
    }
}

function loadLeisureDetail() {
    doOneBack();
    if (window.localStorage.getItem("appopen") != "12") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-outletdetail.html'
                                                   });
        window.localStorage.setItem("appopen", "12");   
    }
}

function loadMyProfile() {
    plHomeClick();
    doOneBack();
    if (window.localStorage.getItem("appopen") != "1") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-myprofile.html'
                                                   });
        window.localStorage.setItem("appopen", "1");   
    }
}

function loadMyReward() {  
    plHomeClick();  

    if (window.localStorage.getItem("appopen") != "2") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-myreward.html'
                                                   });
        window.localStorage.setItem("appopen", "2");   
    }
}

function loadMyBenefit() {
    plHomeClick();

    if (window.localStorage.getItem("appopen") != "3") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-benefitdetail.html'
                                                   });
        window.localStorage.setItem("appopen", "3");   
    }
}

function loadMyMessages() {
    plHomeClick();

    if (window.localStorage.getItem("appopen") != "4") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-mymessagelist.html'
                                                   });
        window.localStorage.setItem("appopen", "4");   
    }
}

function loadSetting() {
    plHomeClick();

    if (window.localStorage.getItem("appopen") != "5") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-setting.html'
                                                   });
        window.localStorage.setItem("appopen", "5");   
    }
}

function loadHistory() {
    plHomeClick();

    if (window.localStorage.getItem("appopen") != "6") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-historylist.html'
                                                   });
        window.localStorage.setItem("appopen", "6");   
    }
}

function loadFavorites() {
    plHomeClick();

    if (window.localStorage.getItem("appopen") != "7") {
        window.plugins.nativepagetransitions.slide({
                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                       'direction': 'up',
                                                       'href': '#views/pl-favorites.html'
                                                   });
        window.localStorage.setItem("appopen", "7");   
    }
}

function preLoginBack() {
    elems = document.getElementsByClassName('sharehead');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    } 
}

function postLoginBack() {
    elems = document.getElementsByClassName('cardhead');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }  
   
    elems = document.getElementsByClassName('foot');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    } 
    
    elems = document.getElementsByClassName('mymenu1');

    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '<i class="fa fa-angle-up fa-2x" style="color:#fff"></i>';
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
    
    window.localStorage.setItem("appopen", "0");   
    window.plugins.nativepagetransitions.slide({
                                                   'direction': 'right',
                                                   'href': '#views/pl-home.html'
                                               });
    //$("body").data("kendoMobilePane").navigate("#:back");
}

function doOneBack() {
    elems = document.getElementsByClassName('cardhead');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }  
    
    elems = document.getElementsByClassName('foot');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }  
    
    elems = document.getElementsByClassName('mymenu1');
    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '<i class="fa fa-angle-up fa-2x" style="color:#fff"></i>';
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
    
    $(".sharehead").slideUp("slow");
      
    elems = document.getElementsByClassName('sharehead');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -1000;
    }  
    window.localStorage.setItem("appopen", "0");  
}

function hideBenefitDetail() {
    document.getElementById("pbenefit-detail-view").style.display = "none";
    document.getElementById("pbenefit-detail-view-1").style.display = "none";
}

function plhideOutletDetail() {
    doOneBackPre();  
    document.getElementById("pl-outlet-detail-div").style.display = "none";
}

function plhideLeisureDetail() {
    doOneBackPre(); 
    document.getElementById("pl-outlet-detail-div").style.display = "none";
}

function plhideBrandDetail() {
    doOneBackPre();
    document.getElementById("pl-property-detail-div").style.display = "none";
}

function plhideOfferDetail() {
    doOneBackPre();
    document.getElementById("pl-offer-detail-div").style.display = "none";
    document.getElementById("pl-offer-location-div").style.display = "none";
}

function doOneBackPre() {
    $(".sharehead").slideUp("slow");
      
    elems = document.getElementsByClassName('sharehead');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -1000;
    }  
    window.localStorage.setItem("appopen", "0");  
    //  
    //   
    //     
    //        
}

function hideOutletDetail() {
    doOneBackPre();  
    document.getElementById("outlet-detail-div").style.display = "none";
}

function hideLeisureDetail() {
    doOneBackPre(); 
    document.getElementById("outlet-detail-div").style.display = "none";
}

function hideBrandDetail() {
    doOneBackPre();
    document.getElementById("property-detail-div").style.display = "none";
}

function hideOfferDetail() {
    doOneBackPre();
    document.getElementById("offer-detail-div").style.display = "none";
    document.getElementById("offer-location-div").style.display = "none";
}

function postLoginBackOne() {
    doOneBack();
}

function postLoginBackMessage() {
    doOneBack();

    window.plugins.nativepagetransitions.slide({
                                                   "duration"         :  500, // in milliseconds (ms), default 400
                                                   "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                   "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                   "androiddelay"     :  150, // same as above but for Android, default 70
                                                   'direction': 'right',
                                                   'href': '#views/pl-mymessagelist.html'
                                               });
}

function postLoginBackMessage() {
    doOneBack();
    window.plugins.nativepagetransitions.slide({
                                                   "duration"         :  500, // in milliseconds (ms), default 400
                                                   "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                   "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                   "androiddelay"     :  150, // same as above but for Android, default 70
                                                   'direction': 'right',
                                                   'href': '#views/pl-historylist.html'
                                               });
}

function completeEnrollment() {
    $("#modalviewrepin").data("kendoMobileModalView").close();
    window.plugins.nativepagetransitions.slide({
                                                   "duration"         :  500, // in milliseconds (ms), default 400
                                                   "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                   "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                   "androiddelay"     :  150, // same as above but for Android, default 70

                                                   'direction': 'up',
                                                   'href': '#views/confirmEnrollment.html'
                                               });
}

function completeRedemption() {
    $("#modalviewstaffpin").data("kendoMobileModalView").close();
    window.plugins.nativepagetransitions.slide({
                                                   "duration"         :  500, // in milliseconds (ms), default 400
                                                   "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                   "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                   "androiddelay"     :  150, // same as above but for Android, default 70

                                                   'direction': 'up',
                                                   'href': '#views/pl-confirmRedemption.html'
                                               });
}

(function (global) {
    var gpsErrorShow = "";
    var gpsErrorShowApp = "";
    var magicnumber = "";
    var googleapikey = "";
    var firsttime = "";
    var mdevice = "";
    var muuid = "";
    var mversion = "";
    var mdevicestat = "";
    var ctr = 0;
    var gurl = "http://exclusiveu.dynns.com:8088/mobilePortalServiceJumeirah";
    //var gurl = "https://appapi.exclusiveu.in/mobilePortal";
    var merchant = "JUMEI02000";
    //var merchant = "IHGDI09999"; 
    var customer = "9999999999";
    var customername = "Guest";
    var password = "";
    var segmentcode = "";
    var segmentname = "";
    var currency = "";
    var nationality = "";
    var pointvalue = "";
    var cuspict = "";
    var cusqr = "";
    var emailid = "";
    var mobilenumber = ""; 
    var memberexpiry = "";
    var segmentimage = "";
    var pushoffer = "";
    var remindexpiry = "";
    var showprofile = "";
    var firstname = "";
    var initdate="";
    var lat = "";
    var lon = "";
    var city = "";
    var country = "";
    var geocity = "";
    var mcountry = "";
    var countryflag = "";
    var autolocation = "";
    var outletcode = "";
    var brandcode = "";
    var benefitcode = "";
    var m = [];  
    var offertype = "1"; //prelogin ofer
    var offercode = ""; //All Offers default
    var couponnumber = "";
    var newimage = "";
    var uuid = "";
    var identifier = "";
    var major = "";
    var minor = "";
    var appad_location = "http://isme.jumeirah.com";
    var appad_location_short = "isme.jumeirah.com";    
    var share_image = "http://exclusiveu.dynns.com:8088/mobileportalServiceJumeirah/images/large_logo_placeholder.png";
    var flag_image = "http://exclusiveu.dynns.com:8088/mobileportal/flagimages/";
    //var notification_image = "https://appapi.exclusiveu.in/mobileportal/images/36x36_icon.png";    
    //var share_image = "https://appapi.exclusiveu.in/mobileportal/images/ihg_logo.png";
    //var flag_image = "https://appapi.exclusiveu.in/mobileportal/flagimages/";
    var short_msg = "Check out the isme by Jumeirah at ";
    var offertelephone = "0097149999999";
    var enrollmenttelephone = "0097149999999";
    var customercaretelephone = "0097149999999";
    var cardimage = "";
    var supportemail = "isme@jumeirah.com";
    var emailsubject = "isme By Jumeirah";
    //// function onSuccess(acceleration) {
    // alert('Acceleration X: ' + acceleration.x + '\n' +
    //     'Acceleration Y: ' + acceleration.y + '\n' +
    //   'Acceleration Z: ' + acceleration.z + '\n' +
    // 'Timestamp: '      + acceleration.timestamp + '\n');
    //};

    //function onError() {
    //alert('onError!');
    //};

    //var options = { frequency: 1000 };  // Update every 3 seconds
    // Listen for the event and wire it to our callback function
       
    window.sharingView = kendo.observable({
                                                                                     
                                              mysubmitShare: function () {
                                                  if (ctr === 0) { 
                                                      navigator.notification.alert("Rate 1 to 5", function() {
                                                      }, "isme by Jumeirah", "Dismiss")   
                                                      return;
                                                  }
                                                  
                                                  if (this.txtremarks.length > 256) { 
                                                      navigator.notification.alert("Remarks should be less than 256 characters", function() {
                                                      }, "isme by Jumeirah", "Dismiss")   
                                                      return;
                                                  }
                                                  //kendo.mobile.application.showLoading(); //show loading popup
                                                  showSpin();

                                                  $.ajax({
                                                             type: "POST",
                                                             url: gurl + "/addRating.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:shareCustomer,producttype:shareProductType,productcode:shareProductCode,notes:this.txtremarks,rating:ctr
                                                                                  }),
                                                             success: function (data) {
                                                                 var getData = JSON.parse(data);
                                                                 window.plugins.spinnerDialog.hide();
                                                                 if (getData.statuscode == "000") {
                                                                     navigator.notification.alert("Thank You very much for Rating  " + getData.producttype, function() {
                                                                     }, "isme by Jumeirah", "Dismiss");   
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Error, Cannot Publish Rating", function() {
                                                                     }, "isme by Jumeirah", "Dismiss");   
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot Publish Rating!. Try after sometime")
                                                                 // kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 window.plugins.spinnerDialog.hide();
                                                             }
                                                         });
                                                  $("#modalviewstar").data("kendoMobileModalView").close();
                                              },
                                              starCounter: function(e) {                                    
                                                  for (var i = 1;i <= 5;i++) {
                                                      document.getElementById("d" + i).className = "detail-rate";
                                                  }
                                                  ctr = 0;
                                                  var y = $(e.target).data('parameter');

                                                  for (i = 1;i <= y;i++) {
                                                      document.getElementById("d" + i).className = "detail-rate-tap";
                                                  }
                                                  ctr = y;
                                              },
                                              viewInit:    function(e) {
                                                  document.getElementById("txtReview").value = "";
                                                  ctr = 0;
                                              }
                                          });  

    function mvhide() {
        window.setTimeout(function() {
            $("#mvwait").data("kendoMobileModalView").close();
        }, 1000); 
    }
    
    function mvshow() {
        $("#mvwait").data("kendoMobileModalView").open();
    }
    
    window.preLogin = kendo.observable({
                                           social_subject:"",
                                           social_message:"",
                                           social_image:share_image,
                                           social_header:"",
                                           social_shortmsg:short_msg,
                                           social_telephone:"",
                                           social_email:"",
                                           username:"",
                                           username1:"",
                                           emailid1:"",
                                           password:"",
                                           outlettelephone:"",
                                           tokennum:"",
                                           geocity:"",
                                           geocountry:"",
                                           merchantcode: "",    
                                           mdevice:"",
                                           customer:"",
                                           segmentcode:"",
                                           enrollmenttelephone:enrollmenttelephone,
                                           customercaretelephone:customercaretelephone,
                                           showDiscoveryList:function() {
                                               mvshow();
                                               mvhide();
                                           },
                                           showLogin:function() {
                                               mvshow();
                                               mvhide();
                                           },
                                           showEnrol:function() {
                                               mvshow();
                                               mvhide();
                                           },

                                                             
                                           showBrandPage
                                           : function () {
                                               // alert("Hello");
                                               $("body").data("kendoMobilePane").navigate("views/brandpage.html");  
                                           } ,   
                                           loadDrawer:function() {
                                               window.plugins.nativepagetransitions.slide({
                                                                                              // the defaults for direction, duration, etc are all fine
                                                                                              "href" : "#appdrawerN"
                                                                                          });  
                                           }
                                           ,
                                      
                                           benefitdetail
                                           : function (e) { 
                                               benefitcode = "1000"; 
                                               showSpin(); //show loading popup
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/benefitlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,benefitcode:benefitcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  if (getData.benefitlist.length > 0) {
                                                                      document.getElementById("benefit-detail-view").style.display = "block";
                                                                      document.getElementById("benefit-text3").innerHTML = "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                      window.localStorage.setItem("social_shortmsg", getData.benefitlist[0].shortdes1);
                                                            
                                                                      window.localStorage.setItem("social_message", "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>");
                                                                      window.localStorage.setItem("social_image", getData.benefitlist[0].imageurll); 

                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("There are no Benefits for the selected Program", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Benefit details. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit details.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           },
        
                                           benefitdetail1
                                           : function (e) { 
                                               benefitcode = "1001"; 
                                               showSpin(); //show loading popup
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/benefitlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,benefitcode:benefitcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  if (getData.benefitlist.length > 0) {
                                                                      document.getElementById("benefit-detail-view").style.display = "block";
                                                                      document.getElementById("benefit-text5").innerHTML = "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                   
                                                                      window.localStorage.setItem("social_shortmsg", getData.benefitlist[0].shortdes1);
                                                            
                                                                      window.localStorage.setItem("social_message", "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>");
                                                                      window.localStorage.setItem("social_image", getData.benefitlist[0].imageurll); 

                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("There are no Benefits for the selected Program", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Benefit details. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit details.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           },
        
                                           showAllOutlet
                                           : function (e) {
                                               showSpin(); 
                                               window.localStorage.setItem("brandcode", e.view.params.brand);
                                               window.localStorage.setItem("category", e.view.params.category);
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat,outletcode:""
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                            
                                                              if (getData.statuscode === "000") {
                                                                  if (getData.outletlist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#outlet-list").kendoMobileListView({
                                                                             
                                                                                                                dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                template: $("#outletTemplate").html()
                                                                                                            });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No locations exists for the selected property", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get locations List." + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get locations list.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });                  
                                           },
        
                                           showAllLeisure
                                           : function (e) {
                                               showSpin(); 
                                               window.localStorage.setItem("brandcode", e.view.params.brand);
                                               window.localStorage.setItem("category", e.view.params.category);
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat,outletcode:""
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                            
                                                              if (getData.statuscode === "000") {
                                                                  if (getData.outletlist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#leisure-list").kendoMobileListView({
                                                                             
                                                                                                                 dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                 template: $("#leisureTemplate").html()
                                                                                                             });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No locations exists for the selected property", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get locations List." + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get locations list.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });                  
                                           },
        
                                           showPropertyItem  
                                           : function (e) {
                                               showSpin();
                                               window.localStorage.setItem("brandcode", e.view.params.od);
                                            
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,                                                      
                                                          url: gurl + "/propertyitem.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,brandcode: window.localStorage.getItem("brandcode"),mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  m = getData.geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                  lat = m[0];
                                                                  lon = m[1];
                                                                  document.getElementById("property-detail-div").style.display = "block";
                                                                  document.getElementById("detail-title").innerHTML = getData.hotelname;
                                                                  document.getElementById("brandimage").src = getData.imageurll;
                                                                  document.getElementById("property-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.shortdes + "</pre>";
                                                                  document.getElementById("property-short-2").innerHTML = "<pre class='fulljustifybold'>" + getData.shortdes1 + "</pre>";                                                                  
                                                                  document.getElementById("property-long-1").innerHTML = "<pre class='fulljustify'>" + getData.longdes + "</pre>";
                                                            
                                                                  window.localStorage.setItem("social_message", getData.shortdes + "\n\n" + getData.shortdes1 + "\n\n" + getData.longdes);
                                                                  window.localStorage.setItem("social_image", getData.imageurll); 
                                                                  window.localStorage.setItem("lat", lat);
                                                                  window.localStorage.setItem("lon", lon);
                                                              
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Brand Item " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Brand Item. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
        
        
        
        
        
        
        
        
                                           showOutletItem
                                           : function (e) {
                                               showSpin();
                                               outletcode = e.view.params.od;
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,                                                      
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,brandcode:"",outletcode:outletcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);

                                                              if (getData.statuscode == "000") {
                                                                  m = getData.outletlist[0].geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                  lat = m[0];
                                                                  lon = m[1];
                                                                  document.getElementById("outlet-detail-div").style.display = "block";
                                                                  document.getElementById("detail-title").innerHTML = getData.outletlist[0].outletname;
                                                                  
                                                                  document.getElementById("outletimage").src = getData.outletlist[0].imageurll;
                                                                  document.getElementById("outlet-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.outletlist[0].outletshort + "</pre>";
                                                                  document.getElementById("outlet-long-1").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";
                                                                  
                                                                  window.localStorage.setItem("social_email", getData.outletlist[0].emailid + "  \n");
                                                                  window.localStorage.setItem("social_telephone", getData.outletlist[0].telephone);                   
                                                                  window.localStorage.setItem("social_shortmsg", getData.outletlist[0].outletshort);
                                                            
                                                                  window.localStorage.setItem("social_message", getData.outletlist[0].outletlong + "\n\n");
                                                                  window.localStorage.setItem("social_image", getData.outletlist[0].imageurll); 
                                                                  window.localStorage.setItem("lat", lat);
                                                                  window.localStorage.setItem("lon", lon);
                                                              
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot get location " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get location. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
                                           showOutletOffer
                                           : function () {
                                               offercode = "";
                                               offertype = "1";
                                               showSpin();
                                                
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/offerListOutlet.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat,outletcode:outletcode
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  if (getData.offerlist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#outlet-offer").kendoMobileListView({
                                                                                                                 dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                 template: $("#outletOfferTemplate").html()
                                                                                                                    
                                                                                                             });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No Offers currently exist for the selected Restaurant", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Offer List " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Offer List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
                                           propertyList
                                           : function () {
                                               window.localStorage.setItem("brandcode", "");
                                               showSpin();
                                                
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/propertyList.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                      
                                                              if (getData.statuscode == "000") {
                                                                  if (getData.propertylist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#property-list").kendoMobileListView({
                                                                                                                  dataSource: kendo.data.DataSource.create({data: getData.propertylist}),
                                                                                                                  template: $("#explorelisttemplate").html()
                                                                                                                    
                                                                                                              });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No Property Data Available", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Property Data " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Property Data.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
                                           rewardList   
                                           : function (e) {
                                               showSpin();
                                               offercode = "";
                                               offertype = "1";
                                               
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/offerList.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              
                                                              if (getData.statuscode == "000") {
                                                                  if (getData.offerlist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#offer-list-view").kendoMobileListView({
                                                                                                                    dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                    template: $("#offerListTemplate").html()
                                                                                                                    
                                                                                                                });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No Reward List currently exist", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Reward List" + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Reward List   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
                                           showOfferItem
                                           : function (e) {
                                               offercode = e.view.params.cpn; //offer code for single offer inquiry
                                               offertype = "2"; //single offer inquiry
                                               showSpin();
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/offerList.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  document.getElementById("offer-detail-div").style.display = "block";
                                                                  //document.getElementById("detail-title").innerHTML = getData.outletlist[0].outletname;
                                                                  
                                                                  document.getElementById("offerimage").src = getData.offerlist[0].imageurll;
                                                                  document.getElementById("offer-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + "</pre>";
                                                                  document.getElementById("offer-long-1").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                  document.getElementById("offer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                  document.getElementById("offer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                          
                                                                  window.localStorage.setItem("social_shortmsg", getData.offerlist[0].itemdescription);
                                                                  window.localStorage.setItem("social_subject", getData.offerlist[0].itemname);
                                                                  window.localStorage.setItem("social_message", getData.offerlist[0].itemdescription + "\n\n" + "Offer Expirying on :" + getData.offerlist[0].couponexpirydate);
                                                                  window.localStorage.setItem("social_image", getData.offerlist[0].imageurll); 
                                                                    
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Reward List. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Reward List. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
                                           showOfferOutlet: function() {
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/offeroutletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,offercode:offercode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  if (getData.offeroutletlist.length > 0) {
                                                                      $("#offer-location-div").kendoMobileListView({
                                                                                                                       dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                                                       template: $("#offerOutletTemplate").html()
                                                                                                                   });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("There are no locations for the selected offer.", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get locations List. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get locations List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
                                           
                                        
                                           varInit
                                           : function() {
                                               showSpin();
                                               //document.getElementById("flagtitle").style.background = "url(" + window.localStorage.getItem("flagurl") + ") no-repeat center center"; 
                                               //checklocation();
                                               window.localStorage.setItem("appopen", "0");
                                               if (firsttime === "") { //Register Access and device in the platform
                                                   mdevice = device.model;
                                                   muuid = device.uuid;
                                                   mversion = device.version;
                                                   mplatform = device.platform;
                                                   mdevicestat = mdevice + "^" + muuid + "^" + mversion + "^" + mplatform + "^" + window.devicePixelRatio + "^" + window.innerHeight + "^" + window.innerWidth;
                                                   preLogin.set("mdevice", mdevicestat);
                                                   preLogin.set("merchantcode", merchant);
                                                   preLogin.set("customer", customer);
                                                   preLogin.set("segmentcode", segmentcode);
                                                   window.localStorage.setItem("mdevicestat", mdevicestat);
                                                   window.localStorage.setItem("merchant", merchant);
                                                   window.localStorage.setItem("appad_location", appad_location);
                                                   window.localStorage.setItem("appad_location_short", appad_location_short);
                                                   window.localStorage.setItem("social_email", supportemail + "  \n");
                                                   window.localStorage.setItem("social_telephone", customercaretelephone);                   
                                                   window.localStorage.setItem("social_subject", emailsubject);
                                                   window.localStorage.setItem("share_image", share_image);
                                                   window.localStorage.setItem("brandcode", "");
                                                   window.localStorage.setItem("faqcategory", "");
                                                   $.ajax({    
                                                              type: "POST",
                                                              cache:false,
                                                              async:true,
                                                              timeout:20000,
                                                              url: gurl + "/initAccess.aspx",
                                                              contentType: "application/json; charset=utf-8",
                                                              data: JSON.stringify({
                                                                                       merchantcode :merchant,mdevice:mdevicestat
                                                                                   }),
                                                              success: function (data) { 
                                                                  var getData = JSON.parse(data);
                                                               
                                                                  if (getData.statuscode === "000") {
                                                                      firsttime = "1";  
                                                                      googleapikey = getData.googleapikey;  
                                                                      city = getData.citycode;
                                                                      country = getData.countrycode;
                                                                      positiono = getData.position.split(",");
                                                                      lat = positiono[0];
                                                                      lon = positiono[1];
                                                                      window.localStorage.setItem("lat", lat);
                                                                      window.localStorage.setItem("lon", lon);
                                                                      window.localStorage.setItem("isfenceset", "0");
                                                                      appad_location = getData.appad_location; 
                                                                      appad_location_short = getData.appad_location_short; 
                                                                      window.localStorage.setItem("appad_location", appad_location);
                                                                      window.localStorage.setItem("appad_location_short", appad_location_short);
                                                                      hideSpin(); //hide loading popup
                                                                  }else if (getData.statuscode === "047") {
                                                                      $("body").data("kendoMobilePane").navigate("views/deviceBlock.html");  
                                                                  } else {
                                                                      navigator.notification.alert("Platform Error, Services may not be available. " + getData.statusText, function() {
                                                                      }, "isme by Jumeirah", "Dismiss")          
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              },
                                                              error: function (errormsg) {
                                                                  navigator.notification.alert("Platform Error, Services may not be available. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                                  }, "isme by Jumeirah", "Dismiss")
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          });
                                      
                                                   //var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                                                   // if (mplatform==="iOS") {
                                                   //     var options = {enableHighAccuracy:false,timeout: 30000,frequency:600000 }
                                                   //    mywatch = navigator.geolocation.watchPosition(meWatchPos, watchPosError, options);
                                                   // } else {
                                                   //Check whether GPS enabled
                                                   
                                                   window.plugins.DGGeofencing.initCallbackForRegionMonitoring(new Array(), processRegionMonitorCallback, function(error) {
                                                       callBackError(error) ;
                                                   });
                                               
                                                   var delegate = new cordova.plugins.locationManager.Delegate();

                                                   delegate.didDetermineStateForRegion = function (pluginResult) {
                                                       fdidEntera(pluginResult);
                                                   };

                                                   delegate.didStartMonitoringForRegion = function (pluginResult) {
                                                       fdidEntera(pluginResult);
                                                   };

                                                   delegate.didRangeBeaconsInRegion = function (pluginResult) {
                                                       fdidEntera(pluginResult);
                                                   };
                                                   
                                                   cordova.plugins.locationManager.requestAlwaysAuthorization();
                                                   
                                                   cordova.plugins.locationManager.setDelegate(delegate);
                                                                                                     
                                                   navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                       lat = position.coords.latitude;                                  
                                                       lon = position.coords.longitude;
                                            
                                                       $.ajax({
                                                                  type: "POST",
                                                                  cache: false,
                                                                  async: true,
                                                                  timeout: 20000,
                                                                  url: gurl + "/propertyList.aspx",
                                                                  contentType: "application/json; charset=utf-8",
                                                                  data: JSON.stringify({
                                                                                           merchantcode: merchant, mdevice: mdevicestat,brandcode:window.localStorage.getItem("brandcode")
                                                                                       }),
                                                                  success: function (data) {
                                                                      var getData = JSON.parse(data);
                                                                      var i = 0;
                                                                      if (getData.statuscode === "000") {
                                                                          if (getData.propertylist.length > 0) {
                                                                              while (i <= getData.propertylist.length - 1) {
                                                                                  //Stop Geo Fence Monitor
                                                                                  params = [getData.propertylist[i].brandcode, getData.propertylist[i].lat, getData.propertylist[i].lon];
                                                                                  window.plugins.DGGeofencing.stopMonitoringRegion(params, function(result) {
                                                                                  }, function(error) {
                                                                                      m = JSON.stringify(error);
                                                                                      m = JSON.parse(m);
                                                                                      showTop(m.message);   
                                                                                  });
                                                                                  
                                                                                  //Start Geofence Monitoring
                                                                                  params = [getData.propertylist[i].brandcode, getData.propertylist[i].lat, getData.propertylist[i].lon,  parseInt(getData.propertylist[i].radius)];
                                                                                  //alert(getData.propertylist[i].brandcode + " " + getData.propertylist[i].lat +  " " +  getData.propertylist[i].lon + " " +   getData.propertylist[i].radius);
                                                                                  window.plugins.DGGeofencing.startMonitoringRegion(params, function(result) {
                                                                                  }, function(error) {
                                                                                      m = JSON.stringify(error);
                                                                                      m = JSON.parse(m);
                                                                                      showTop(m.message);   
                                                                                  });
                                                                                                                                                                 
                                                                                  i++;
                                                                              }
                                                                              
                                                                              i = 0;
                                                                              
                                                                              while (i <= getData.propertylist.length - 1) {
                                                                                  uuid = getData.propertylist[i].UUID;
                                                                                  identifier = getData.propertylist[i].BeaconName;
                                                                                  minor = getData.propertylist[i].BeaconMinor;
                                                                                  major = getData.propertylist[i].BeaconMajor;
                                                                                   
                                                                                  if (uuid.length > 0 && identifier.length > 0 && minor.length > 0 && major.length > 0) {
                                                                                      beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
                                                                                      cordova.plugins.locationManager.stopMonitoringForRegion(beaconRegion)
                                                                                          .fail()
                                                                                          .done();
                                                                                      
                                                                                      cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
                                                                                          .fail()
                                                                                          .done();
                                                                                  }
                                                                                  
                                                                                  i++;
                                                                              }
                                                                      
                                                                              window.localStorage.setItem("isfenceset", "1");
                                   
                                                                              hideSpin(); //hide loading popup
                                                                          } else {
                                                                              navigator.notification.alert("There are no Property for the selected Program!", function () {
                                                                              }, "isme by Jumeirah", "Dismiss")
                                                                              hideSpin(); //hide loading popup
                                                                          }
                                                                      } else {
                                                                          navigator.notification.alert("Cannot get Property List " + getData.statusdesc, function () {
                                                                          }, "isme by Jumeirah", "Dismiss")
                                                                          hideSpin(); //hide loading popup
                                                                      }
                                                                  },
                                                                  error: function (error) {
                                                                      navigator.notification.alert("Platform Error, Services may not be available. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function () {
                                                                      }, "isme by Jumeirah", "Dismiss")
                                                                  }
                                                              });
                                                   }
                                                                                            , function onErrorShowMap(error) {
                                                                                                gpsError();
                                                                                            }); 
                                   
                                                   // }
                           
                                                   if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
                                                       customer = window.localStorage.getItem("customer");
                                                       customername = window.localStorage.getItem("customername");
                                                       segmentcode = window.localStorage.getItem("segmentcode");
                                                       segmentname = window.localStorage.getItem("segmentname");
                                                       currency = window.localStorage.getItem("currency");
                                                       nationality = window.localStorage.getItem("nationality");
                                                       pointvalue = window.localStorage.getItem("pointvalue");
                                                       cuspict = window.localStorage.getItem("cuspict");
                                                       cusqr = window.localStorage.getItem("cusqr");
                                                       emailid = window.localStorage.getItem("emailid");
                                                       mobilenumber = window.localStorage.getItem("mobilenumber");                                                                    
                                                       memberexpiry = window.localStorage.getItem("memberexpiry"); 
                                                       segmentimage = window.localStorage.getItem("segmentimage"); 
                                                       pushoffer = window.localStorage.getItem("pushoffer");
                                                       remindexpiry = window.localStorage.getItem("remindexpiry");
                                                       showprofile = window.localStorage.getItem("showprofile");
                                                       password = window.localStorage.getItem("password");
                                                       mdevice = window.localStorage.getItem("mdevice");
                                                       muuid = window.localStorage.getItem("muuid");
                                                       mversion = window.localStorage.getItem("mversion");
                                                       mplatform = window.localStorage.getItem("mplatform");
                                                       autolocation = window.localStorage.getItem("autolocation");
                                                       city = window.localStorage.getItem("city");
                                                       country = window.localStorage.getItem("country");
                                                       magicnumber = window.localStorage.getItem("magicnumber");
                                                       
                                                       $("body").data("kendoMobilePane").navigate("views/pl-home.html"); 
                                                   } else {
                                                       outletcode = "";
                                                       brandcode = "";
                                                       offercode = "";
                                                       benefitcode = "";
                                                       offertype = "1";
                                                       password = "";
                                                       customer = "9999999999";
                                                       window.localStorage.setItem("customer", customer);
                                                       customername = "Guest";
                                                       segmentcode = "";
                                                       segmentname = "";
                                                       currency = "";
                                                       nationality = "";
                                                       pointvalue = "";
                                                       cuspict = "";
                                                       cusqr = "";
                                                       emailid = "";
                                                       mobilenumber = ""; 
                                                       memberexpiry = "";
                                                       segmentimage = "";
                                                   }     
                                                   var pushSettings = {
                                                       iOS: {
                                                           badge: "true",
                                                           sound: "true",
                                                           alert: "true",
                                                           clearBadge: "true"
                                                       },
                                                       android: {
                                                           senderID: googleApiProjectNumber
                                                       },
                                                       wp8: {
                                                           channelName: 'EverlivePushChannel'
                                                       },
                                                       notificationCallbackIOS: onPushNotificationReceived,
                                                       notificationCallbackAndroid: onPushNotificationReceived,
                                                       notificationCallbackWP8: onPushNotificationReceived,
                                                       customParameters: {
                                                           Memberid: customer,
                                                           Merchant:merchant,
                                                           Segment:segmentcode,
                                                           devicecode:muuid
                                                       } 
                                                   };
                                            
                                                   if (window.localStorage.getItem("notification") == undefined || window.localStorage.getItem("notification") == '' || window.localStorage.getItem("notification") == 'null') {
                                                       //Enable and Register
                                                       currentDevice.enableNotifications(pushSettings, function (data) {
                                                           currentDevice.register(pushSettings, function (data) {
                                                           }, function (err) {
                                                           });
                                                           //Set notification to 1 so that its not registered again
                                                           window.localStorage.setItem("notification", "1");
                                                       }, function (err) {
                                                       });
                                                   } else {
                                                       if (window.localStorage.getItem("notification") === "1") {
                                                           currentDevice.getRegistration(function () {
                                                               currentDevice.unregister().then(function () {
                                                               }, function (err) {
                                                               });
                                                               currentDevice.enableNotifications(pushSettings, function (data) {
                                                                   currentDevice.register(pushSettings, function (data) {
                                                                   }, function (err) {
                                                                   });
                                                               }, function (err) {
                                                               });
                                                           }, function (err) { //If not registered then enable and register
                                                               currentDevice.enableNotifications(pushSettings, function (data) {
                                                                   currentDevice.register(pushSettings, function (data) {
                                                                   }, function (err) {
                                                                   });
                                                               }, function (err) {
                                                               });
                                                           });
                                                       }
                                                   }
                                               } else {
                                                   if (window.localStorage.getItem("isfenceset")==="0") {
                                                       startMonitor();
                                                       window.localStorage.setItem("isfenceset", "1");
                                                   }
                                               }
                                               
                                               hideSpin();
                                               return;
                                           },
        
                                          
                                           loginInit
                                           :function() {
                                               if (window.localStorage.getItem("rememberMe") != undefined) {
                                                   y = window.localStorage.getItem("rememberMe");           
                                                   if (y == "1") {
                                                       $("#profile-rememberme").data("kendoMobileSwitch").check(true);
                                                       preLogin.set("username", window.localStorage.getItem("memberID"));
                                                   } else {
                                                       preLogin.set("username", "");
                                                       preLogin.set("password", "");
                                                       $("#profile-rememberme").data("kendoMobileSwitch").check(false);                                                          
                                                   }
                                               }else {
                                                   preLogin.set("username", "");                                                   
                                               }
                                               preLogin.set("password", "");
                                           },   
                                           initToken
                                           :function() {
                                               preLogin.set("tokennum", "");
                                           },
        
                                           updateRememberMe
                                           :function() {   
                                               if ($("#profile-rememberme").data("kendoMobileSwitch").check()) {
                                                   window.localStorage.setItem("memberID", this.username);
                                                   window.localStorage.setItem("rememberMe", "1");           
                                               } else {
                                                   window.localStorage.setItem("memberID", "");
                                                   window.localStorage.setItem("rememberMe", "");      
                                               }
                                           },
        
                                           validateUser
                                           : function () {
                                               window.localStorage.setItem("appopen", "0");   
                                              
                                               if (!this.username) {
                                                   navigator.notification.alert("Invalid Membership # or Empty", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               if (!this.password) {
                                                   navigator.notification.alert("Invalid Password or Empty", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               customer = this.username;
                                               password = this.password;
                                               // window.localStorage.setItem("memberID", this.username);"1000","3"
                                               // m = window.localStorage.getItem("memberID");
                                               //  alert(m);
                                               showSpin();
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/validateUser.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,customer:customer,password:password,mdevice:mdevicestat,mdevicef:mdevice,muuid:muuid,mversion:mversion,mplatform:mplatform,mfirsttime: window.localStorage.getItem("notification"),mmagicnumber:""
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                             
                                                              if (getData.statuscode == "000") { //Login Successful
                                                                  customer = getData.customerid;
                                                                  customername = getData.customername;
                                                                  segmentcode = getData.segmentcode;
                                                                  segmentname = getData.segmentname;
                                                                  currency = getData.currency;
                                                                  nationality = getData.nationality;
                                                                  pointvalue = getData.pointvalue;
                                                                  cuspict = getData.imageurl;
                                                                  cusqr = getData.qrurl;
                                                                  emailid = getData.emailid;
                                                                  mobilenumber = getData.mobilenumber;                                                                    
                                                                  memberexpiry = getData.memberexpiry; 
                                                                  segmentimage = getData.segmentimage; 
                                                                  pushoffer = getData.pushoffer;
                                                                  remindexpiry = getData.remindexpiry;
                                                                  showprofile = getData.showprofile;
                                                                  autolocation = getData.autolocation;
                                                                  city = getData.city;
                                                                  country = getData.country;
                                                                  magicnumber = getData.magicnumber;
                                                                  firstname = getData.firstname;
                                                                  initdate=getData.initdate;

                                                                  //set Local Storage as cookies to retain login
                                                                  window.localStorage.setItem("customer", customer);
                                                                  window.localStorage.setItem("customername", customername);
                                                                  window.localStorage.setItem("firstname", firstname);
                                                                  window.localStorage.setItem("initdate", initdate);
                                                                  window.localStorage.setItem("segmentcode", segmentcode);
                                                                  window.localStorage.setItem("segmentname", segmentname);
                                                                  window.localStorage.setItem("currency", currency);
                                                                  window.localStorage.setItem("nationality", nationality);
                                                                  window.localStorage.setItem("pointvalue", pointvalue);
                                                                  window.localStorage.setItem("cuspict", cuspict);
                                                                  window.localStorage.setItem("cusqr", cusqr);
                                                                  window.localStorage.setItem("emailid", emailid);
                                                                  window.localStorage.setItem("mobilenumber", mobilenumber);  
                                                                  window.localStorage.setItem("memberexpiry", memberexpiry); 
                                                                  window.localStorage.setItem("segmentimage", segmentimage); 
                                                                  window.localStorage.setItem("pushoffer", pushoffer);
                                                                  window.localStorage.setItem("remindexpiry", remindexpiry);
                                                                  window.localStorage.setItem("showprofile", showprofile);
                                                                  window.localStorage.setItem("mdevice", mdevice);
                                                                  window.localStorage.setItem("muuid", muuid);
                                                                  window.localStorage.setItem("mversion", mversion);
                                                                  window.localStorage.setItem("mplatform", mplatform);
                                                                  window.localStorage.setItem("autolocation", autolocation);
                                                                  window.localStorage.setItem("city", city);
                                                                  window.localStorage.setItem("country", country);
                                                                  window.localStorage.setItem("magicnumber", magicnumber);
                                                                 
                                                                  pushSettings = {
                                                                      iOS: {
                                                                          badge: "true",
                                                                          sound: "true",
                                                                          alert: "true",
                                                                          clearBadge: "true"
                                                                      },
                                                                      android: {
                                                                          senderID: googleApiProjectNumber
                                                                      },
                                                                      wp8: {
                                                                          channelName: 'EverlivePushChannel'
                                                                      },
                                                                      notificationCallbackIOS: onPushNotificationReceived,
                                                                      notificationCallbackAndroid:onPushNotificationReceived,
                                                                      notificationCallbackWP8: onPushNotificationReceived,
                                                                      customParameters: {
                                                                          Memberid: customer,
                                                                          Merchant:merchant,
                                                                          Segment:segmentcode,
                                                                          devicecode:muuid
                                                                      }
                                                                  };
                                                                  
                                                                  if (window.localStorage.getItem("notification")==="1") {
                                                                      //Re-register the device with updates
                                                                      currentDevice.getRegistration(function() {
                                                                          currentDevice.unregister().then(function() {
                                                                          }, function (err) {
                                                                          });
                                                                          currentDevice.enableNotifications(pushSettings, function (data) {
                                                                              currentDevice.register(pushSettings, function (data) {
                                                                              }, function (err) {
                                                                              }); 
                                                                          }, function (err) {
                                                                          });
                                                                      }, function(err) {
                                                                      });
                                                                      window.localStorage.setItem("notification", "1");
                                                                  }
                                                                   
                                                                  if ((getData.deviceinfo.length === 0)) {
                                                                      $("body").data("kendoMobilePane").navigate("views/tokenpage.html");      
                                                                  }else {
                                                                      password = getData.certificate;
                                                                      window.localStorage.setItem("password", password);
                                                                      window.localStorage.setItem("loggedin", "1");

                                                                      //$("body").data("kendoMobilePane").navigate("views/pl-myprofile.html");  
                                                                      window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                                                                                       "duration"         :  500, // in milliseconds (ms), default 400
                                                                                                                                       "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                                                                                       "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                                                                                       "androiddelay"     :  150, // same as above but for Android, default 70

                                                                                                                                       'direction': 'up',
                                                                                                                                       'href': '#views/pl-home.html'
                                                                                                                                   }), 500);
                                                                  }
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Login. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Login.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },

                                           validateToken
                                           : function () {
                                               if (!this.tokennum) {
                                                   navigator.notification.alert("Invalid Token or Empty", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                            
                                               // window.localStorage.setItem("memberID", this.username);
                                               // m = window.localStorage.getItem("memberID");
                                               //  alert(m);
                                               mvalidaterequest = "1"; //Device Change
                                               showSpin();
                                               
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/validateToken.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                 
                                                                  
                                                                 
                                                                                   merchantcode :merchant,customer:customer,token:this.tokennum,mdevice:mdevicestat,mdevicef:mdevice,muuid:muuid,mversion:mversion,mplatform:mplatform,validatetype:mvalidaterequest
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") { //Login Successful  
                                                                  password = getData.certificate;
                                                                  window.localStorage.setItem("password", password); //Get and Store Certificate
                                                                  window.localStorage.setItem("loggedin", "1");
                                                                  $("body").data("kendoMobilePane").navigate("views/pl-myprofile.html");  
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Login. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Login.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },  
                                           requestPasswordChangeURL:
                                           function () {
                                               if (!this.username1) {
                                                   navigator.notification.alert("Invalid Membership # or Empty", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               if (!this.emailid1) {
                                                   navigator.notification.alert("Invalid email or Empty", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                             
                                               // window.localStorage.setItem("memberID", this.username);
                                               // m = window.localStorage.getItem("memberID");
                                               //  alert(m);
                                               showSpin();
                                               
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/passResetRequest.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,customerid:this.username1,emailid:this.emailid1,mdevice:mdevicestat,mmagicnumber:""
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") { //Login Successful
                                                                  navigator.notification.alert("A URL has been sent to your registered email with a link to set your new password", function() {
                                                                  }, "isme by Jumeirah", "Dismiss");   
                                                                  preLogin.set("username1", "");
                                                                  preLogin.set("emailid1", "");
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Unable to send the password reset URL. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Unable to send the password reset URL [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
                                           benefitlist
                                           : function () {
                                               benefitcode = "";//initialize benefit code
                                               showSpin(); //show loading popup
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/benefitlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,benefitcode:benefitcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  if (getData.benefitlist.length > 0) {
                                                                      $("#benefit-list-view").kendoMobileListView({
                                                                                                                      dataSource: kendo.data.DataSource.create({data: getData.benefitlist}),
                                                                                                                      template: $("#benefitlistTemplate").html()
                                                                                                                  });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("There are no Benefits for the selected Program!", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get Benefit List " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit List. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
                                           getfaq
                                           : function () {
                                               showSpin(); //show loading popup
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/faqlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,mdevice:mdevicestat,category:window.localStorage.getItem("faqcategory")
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                                                                                
                                                              if (getData.statuscode === "000") {  
                                                                  //fill the outlet template
                                                                  if (getData.faqlist.length > 0) {
                                                                      $("#faqlist-all").kendoMobileListView({
                                                                                                                dataSource: kendo.data.DataSource.create({data: getData.faqlist}),
                                                                                                                template: $("#faqTemplate").html()
                                                                                                            });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No FAQ exists for the selected Program", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Cannot get FAQ list " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get FAQ list  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           },
        
                                           getAddRestFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestAddData() });
                                               
                                               $("#add-Rest-Filter").kendoMobileListView({
                                                                                             dataSource: dataSource,
                                                                                             template: $("#add-Rest-Filter-Template").html()

                                                                    
                                                                                         });
                                           },
        
                                           getLocationFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestLocationData() });
                                               
                                               $("#Location-Filter").kendoMobileListView({
                                                                                             dataSource: dataSource,
                                                                                             template: $("#LocationFilter-Template").html()

                                                                    
                                                                                         });
                                           },
        
                                           getRestTypeFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestTypeData() });
                                               
                                               $("#Type-Filter").kendoMobileListView({
                                                                                         dataSource: dataSource,
                                                                                         template: $("#TypeFilter-Template").html()

                                                                    
                                                                                     });
                                           },
        
                                           getRestCuisineFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestCuisineData() });
                                               
                                               $("#Cuisine-Filter").kendoMobileListView({
                                                                                            dataSource: dataSource,
                                                                                            template: $("#CuisineFilter-Template").html()

                                                                    
                                                                                        });
                                           },
                                           getRestCuisineFilter1:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestCuisineData() });
                                               
                                               $("#Cuisine-Filter1").kendoMobileListView({
                                                                                             dataSource: dataSource,
                                                                                             template: $("#CuisineFilter-Template1").html()

                                                                    
                                                                                         });
                                           },
        
                                           getOfferTypeData:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferTypeData() });
                                               
                                               $("#Offer-Filter").kendoMobileListView({
                                                                                          dataSource: dataSource,
                                                                                          template: $("#Offer-Filter-Template").html()

                                                                    
                                                                                      });
                                           },
                                           getOfferTypeData1:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferTypeData() });
                                               
                                               $("#Offer-Filter1").kendoMobileListView({
                                                                                           dataSource: dataSource,
                                                                                           template: $("#Offer-Filter-Template1").html()

                                                                    
                                                                                       });
                                           },
        
                                           getOfferTypeData2:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferTypeData() });
                                               
                                               $("#Offer-Filter2").kendoMobileListView({
                                                                                           dataSource: dataSource,
                                                                                           template: $("#Offer-Filter-Template2").html()

                                                                    
                                                                                       });
                                           },
        
                                           getCelebrationFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferCeleberationData() });
                                               
                                               $("#Celebration-Filter").kendoMobileListView({
                                                                                                dataSource: dataSource,
                                                                                                template: $("#Celebration-Filter-Template").html()

                                                                    
                                                                                            });
                                           },
        
                                           getFAQFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getFAQData() });
                                               
                                               $("#FAQ-Filter").kendoMobileListView({
                                                                                        dataSource: dataSource,
                                                                                        template: $("#FAQ-Template").html()

                                                                    
                                                                                    });
                                           }                                                                                     
                                       });
    
    window.postLogin = kendo.observable({ 
                                            outlettelephone:"",
                                            transactionref:"",
                                            couponcode:"",
                                            couponname:"",
                                            couponcategory:"",
                                            msgsequence:"",
        
                                            loadPLDetails
                                            :function() {
                                                document.getElementById("main-title").innerHTML = "Hello, " + window.localStorage.getItem("firstname");
                                                document.getElementById("profile-name").innerHTML = window.localStorage.getItem("customername");
                                                document.getElementById("profile-number").innerHTML = window.localStorage.getItem("customer");
                                                document.getElementById("profile-init").innerHTML = "Member Since " + window.localStorage.getItem("initdate");
                               
                                               if (window.localStorage.getItem("segmentcode") === "1000") {
                                                    document.getElementById("profile-type").innerHTML = "isme Member";
                                                }else{
                                                    document.getElementById("profile-type").innerHTML = "isme elite Member";
                                                }
                                            },
        
                                            logMeOut:function () {
                                                alert("Logout");
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/logmeout.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :window.localStorage.getItem("merchant"),customerid:window.localStorage.getItem("customer"),password:window.localStorage.getItem("password"),mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) {
                                                               var getData = JSON.parse(data);
                                                               alert(getData.statuscode);
                                                               if (getData.statuscode == "000") {
                                                                   //clear Local Storage on logout
                                                                   window.localStorage.setItem("customer", "9999999999");
                                                                   window.localStorage.setItem("firstname", "");
                                                                   window.localStorage.setItem("customername", "Guest");
                                                                   window.localStorage.setItem("segmentcode", "");
                                                                   window.localStorage.setItem("segmentname", "");
                                                                   window.localStorage.setItem("currency", "");
                                                                   window.localStorage.setItem("nationality", "");
                                                                   window.localStorage.setItem("pointvalue", "");
                                                                   window.localStorage.setItem("cuspict", "");
                                                                   window.localStorage.setItem("cusqr", "");
                                                                   window.localStorage.setItem("emailid", "");
                                                                   window.localStorage.setItem("mobilenumber", "");                                                                    
                                                                   window.localStorage.setItem("memberexpiry", ""); 
                                                                   window.localStorage.setItem("segmentimage", ""); 
                                                                   window.localStorage.setItem("pushoffer", "");
                                                                   window.localStorage.setItem("remindexpiry", "");
                                                                   window.localStorage.setItem("showprofile", "");
                                                                   window.localStorage.setItem("password", "");
                                                                   window.localStorage.setItem("mdevice", "");
                                                                   window.localStorage.setItem("muuid", "");
                                                                   window.localStorage.setItem("mversion", "");
                                                                   window.localStorage.setItem("mplatform", "");
                                                                   window.localStorage.setItem("loggedin", "");
                                                                   outletcode = "";
                                                                   brandcode = "";
                                                                   offercode = "";
                                                                   benefitcode = "";
                                                                   offertype = "1";
                                                                   password = "";
                                                                   customer = "9999999999";
                                                                   customername = "Guest";
                                                                   segmentcode = "";
                                                                   segmentname = "";
                                                                   currency = "";
                                                                   nationality = "";
                                                                   pointvalue = "";
                                                                   cuspict = "";
                                                                   cusqr = "";
                                                                   emailid = "";
                                                                   mobilenumber = ""; 
                                                                   memberexpiry = "";
                                                                   segmentimage = "";
                                                                   window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                                                                                    "duration"         :  500, // in milliseconds (ms), default 400
                                                                                                                                    "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                                                                                    "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                                                                                    "androiddelay"     :  150, // same as above but for Android, default 70

                                                                                                                                    'direction': 'right',
                                                                                                                                    'href': '#views/home.html'
                                                                                                                                }), 500);  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot Logout. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot Logout. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                                // }   
                                            },
        
                                            varInit
                                            : function() {
                                                outletcode = "";
                                                brandcode = "";
                                                offercode = "";
                                                benefitcode = "";
                                                offertype = "1";
                                                password = "";
                                                customer = "9999999999";
                                                customername = "Guest";
                                                segmentcode = "";
                                                segmentname = "";
                                                currency = "";
                                                nationality = "";
                                                pointvalue = "";
                                                cuspict = "";
                                                cusqr = "";
                                                emailid = "";
                                                mobilenumber = ""; 
                                                memberexpiry = "";
                                                segmentimage = "";
                                                parentimage = "";
                                            },        
        
                                            benefitdetail  
                                            : function (e) { 
                                                benefitcode = "1001"; 
                                                showSpin(); //show loading popup
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/benefitlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,benefitcode:benefitcode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   //fill the outlet template
                                                                   if (getData.benefitlist.length > 0) {
                                                                       document.getElementById("pl-benefit-detail-view").style.display = "block";
                                                                       document.getElementById("benefit-head").innerHTML = getData.benefitlist[0].titlename;
                                                                       document.getElementById("benefit-text6").innerHTML = "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                       window.localStorage.setItem("social_shortmsg", getData.benefitlist[0].shortdes1);
                                                            
                                                                       window.localStorage.setItem("social_message", "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>");
                                                                       window.localStorage.setItem("social_image", getData.benefitlist[0].imageurll); 

                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("There are no Benefits for the selected Program", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Benefit details. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Benefit details.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup                                          
                                                           }
                                                       });
                                            },
        
        
        
        
                                            showOfferItem
                                            : function (e) {
                                                offercode = e.view.params.cpn; //offer code for single offer inquiry
                                                offertype = "2"; //single offer inquiry
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   document.getElementById("pl-offer-detail-div").style.display = "block";
                                                                   //document.getElementById("detail-title").innerHTML = getData.outletlist[0].outletname;
                                                                  
                                                                   document.getElementById("pl-offerimage").src = getData.offerlist[0].imageurll;
                                                                   document.getElementById("pl-offer-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + "</pre>";
                                                                   document.getElementById("pl-offer-long-1").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                   document.getElementById("pl-offer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                   document.getElementById("pl-offer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                          
                                                                   window.localStorage.setItem("social_shortmsg", getData.offerlist[0].itemdescription);
                                                                   window.localStorage.setItem("social_subject", getData.offerlist[0].itemname);
                                                                   window.localStorage.setItem("social_message", getData.offerlist[0].itemdescription + "\n\n" + "Offer Expirying on :" + getData.offerlist[0].couponexpirydate);
                                                                   window.localStorage.setItem("social_image", getData.offerlist[0].imageurll); 
                                                                    
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Reward List. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Reward List. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            showOfferOutlet: function() {
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offeroutletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   //fill the outlet template
                                                                   if (getData.offeroutletlist.length > 0) {
                                                                       $("#pl-offer-location-div").kendoMobileListView({
                                                                                                                           dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                                                           template: $("#plofferOutletTemplate").html()
                                                                                                                       });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("There are no locations for the selected Reward.", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get locations List. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Cannot get locations List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
        
        
        
        
        
                                            rewardList
                                            : function (e) {
                                                showSpin();
                                                offercode = "";
                                                offertype = "3";  
                                               
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.offerlist.length > 0) {
                                                                       //fill the outlet template
                                                                       $("#pl-offer-list-view").kendoMobileListView({
                                                                                                                        dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                        template: $("#pl-offerListTemplate").html()
                                                                                                                    
                                                                                                                    });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Reward List currently exist", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Reward List." + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Reward List.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
                                            showOutletItem
                                            : function (e) {
                                                showSpin();
                                                outletcode = e.view.params.od;
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,                                                      
                                                           url: gurl + "/outletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,brandcode:"",outletcode:outletcode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);

                                                               if (getData.statuscode == "000") {
                                                                   m = getData.outletlist[0].geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                   lat = m[0];
                                                                   lon = m[1];
                                                                   document.getElementById("pl-outlet-detail-div").style.display = "block";
                                                                   document.getElementById("pl-detail-title").innerHTML = getData.outletlist[0].outletname;
                                                                  
                                                                   document.getElementById("pl-outletimage").src = getData.outletlist[0].imageurll;
                                                                   document.getElementById("pl-outlet-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.outletlist[0].outletshort + "</pre>";
                                                                   document.getElementById("pl-outlet-long-1").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";
                                                                  
                                                                   window.localStorage.setItem("social_email", getData.outletlist[0].emailid + "  \n");
                                                                   window.localStorage.setItem("social_telephone", getData.outletlist[0].telephone);                   
                                                                   window.localStorage.setItem("social_shortmsg", getData.outletlist[0].outletshort);
                                                            
                                                                   window.localStorage.setItem("social_message", getData.outletlist[0].outletlong + "\n\n");
                                                                   window.localStorage.setItem("social_image", getData.outletlist[0].imageurll); 
                                                                   window.localStorage.setItem("lat", lat);
                                                                   window.localStorage.setItem("lon", lon);
                                                              
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot get location " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Cannot get location. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            propertyList
                                            : function () {
                                                window.localStorage.setItem("brandcode", "");
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/propertyList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                      
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.propertylist.length > 0) {
                                                                       //fill the outlet template
                                                                       $("#pl-property-list").kendoMobileListView({
                                                                                                                      dataSource: kendo.data.DataSource.create({data: getData.propertylist}),
                                                                                                                      template: $("#pl-explorelisttemplate").html()
                                                                                                                    
                                                                                                                  });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Property Data Available", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Property Data " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Property Data.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
        
        
                                            showAllOutlet
                                            : function (e) {
                                                showSpin(); 
                                                window.localStorage.setItem("brandcode", e.view.params.brand);
                                                window.localStorage.setItem("category", e.view.params.category);
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/outletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat,outletcode:""
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                            
                                                               if (getData.statuscode === "000") {
                                                                   if (getData.outletlist.length > 0) {
                                                                       //fill the outlet template
                                                                       $("#pl-outlet-list").kendoMobileListView({
                                                                             
                                                                                                                    dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                    template: $("#pl-outletTemplate").html()
                                                                                                                });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No locations exists for the selected property", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get locations List." + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get locations list.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });                  
                                            },
        
                                            showAllLeisure
                                            : function (e) {
                                                showSpin(); 
                                                window.localStorage.setItem("brandcode", e.view.params.brand);
                                                window.localStorage.setItem("category", e.view.params.category);
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/outletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:mdevicestat,outletcode:""
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                            
                                                               if (getData.statuscode === "000") {
                                                                   if (getData.outletlist.length > 0) {
                                                                       //fill the outlet template
                                                                       $("#pl-leisure-list").kendoMobileListView({
                                                                             
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                     template: $("#pl-leisureTemplate").html()
                                                                                                                 });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No locations exists for the selected property", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get locations List." + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get locations list.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });                  
                                            },
        
                                            showPropertyItem  
                                            : function (e) {
                                                showSpin();
                                                window.localStorage.setItem("brandcode", e.view.params.od);
                                            
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,                                                      
                                                           url: gurl + "/propertyitem.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,brandcode: window.localStorage.getItem("brandcode"),mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   m = getData.geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                   lat = m[0];
                                                                   lon = m[1];
                                                                   document.getElementById("pl-property-detail-div").style.display = "block";
                                                                   document.getElementById("pl-detail-title").innerHTML = getData.hotelname;
                                                                   document.getElementById("pl-brandimage").src = getData.imageurll;
                                                                   document.getElementById("pl-property-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.shortdes + "</pre>";
                                                                   document.getElementById("pl-property-short-2").innerHTML = "<pre class='fulljustifybold'>" + getData.shortdes1 + "</pre>";                                                                  
                                                                   document.getElementById("pl-property-long-1").innerHTML = "<pre class='fulljustify'>" + getData.longdes + "</pre>";
                                                            
                                                                   window.localStorage.setItem("social_message", getData.shortdes + "\n\n" + getData.shortdes1 + "\n\n" + getData.longdes);
                                                                   window.localStorage.setItem("social_image", getData.imageurll); 
                                                                   window.localStorage.setItem("lat", lat);
                                                                   window.localStorage.setItem("lon", lon);
                                                              
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Brand Item " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Brand Item. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
        
        
        
        
        
        
        
        
        
        
        
                                            toggleDD:function() {
                                                if (document.getElementById("profile-autolocation").checked) {
                                                    document.getElementById("selCountry").disabled = true;
                                                    document.getElementById("selCity").disabled = true;
                                                    document.getElementById("selCountry").value = "";
                                                    document.getElementById("selCity").value = "";
                                                    document.getElementById("selCountry").style.color = "#ccc";
                                                    document.getElementById("selCity").style.color = "#ccc";
                                                } else {
                                                    document.getElementById("selCountry").disabled = false;
                                                    document.getElementById("selCity").disabled = false;
                                                    document.getElementById("selCountry").style.color = "#575757";
                                                    document.getElementById("selCity").style.color = "#575757";
                                                }
                                            },
                                        
                                            loginSuccess:function() {
                                                if (segmentcode==="") {
                                                    $("body").data("kendoMobilePane").navigate("views/home.html"); 
                                                    return;
                                                }
                                                
                                                checklocation(); 
                                                
                                                if (autolocation != "1") {
                                                    gpsErrorApp();
                                                }
                                                //get flag
                                                document.getElementById("plflagtitle").style.background = "url(" + window.localStorage.getItem("flagurl") + ") no-repeat center center";

                                                //Show Card Image
                                                if (segmentcode==="1000") {
                                                    cardimage = "images/ihg_gold.png";
                                                }else if (segmentcode==="1001") {
                                                    cardimage = "images/ihg_platinum.png";
                                                }else {
                                                    cardimage = "images/ihg_platinum.png";
                                                }
                                                //  alert(cardimage);
                                                document.getElementById("mycardimage").style.background = "url(" + cardimage + ") no-repeat center center";
                                                document.getElementById("mycardname").innerHTML = customername;
                                                document.getElementById("mycardid").innerHTML = customer.substring(0, 3) + " " + customer.substring(3, 6) + " " + customer.substring(6, 9);
                                                document.getElementById("mycardexpiry").innerHTML = "EXP. " + memberexpiry;
                                                //  document.getElementById("mycardimage").style.backgroundSize = "cover";
                                            },
          
                                            mymessagelist
                                            : function () {
                                                t = "";
                                                // alert(merchant);
                                                // alert(customer);
                                                // alert(password);
                                                // alert(mdevicestat);
                                                showSpin();
                                             
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/archivehistory.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                        
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.historylist.length > 0) {
                                                                       $("#pl-history-list").kendoMobileListView({
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.historylist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                                                                                     template: $("#pl-historyListTemplate").html(),
                                                                           
                                                                                                                     filterable: {
                                                                               autoFilter: true,
                                                                               placeholder:"Search By Message",                                         
                                                                               field: "narration",
                                                                               operator: "contains"
                                                                           }
                                                                                                                     //endlessScroll: true
                                                                                                                      
                                                                                                                 });
                                                                   }else {
                                                                       navigator.notification.alert("No message history for your Membership", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get message history. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message history.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
        
                                            mymessageitem
                                            : function (e) {
                                                t = e.view.params.mi;
                                                showSpin(); 
                                                // alert(merchant);
                                                // alert(customer);
                                                // alert(password);
                                                // alert(mdevicestat);
                                                // showSpin();
                                             
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/messageitem.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                  
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.messageitem.length > 0) {
                                                                       document.getElementById("pl-messageitem-list").style.display = "block";
                                                                       document.getElementById("msgnarration").innerHTML = getData.messageitem[0].narration;
                                                                       document.getElementById("msgmonth").innerHTML = getData.messageitem[0].mmonth;
                                                                       document.getElementById("msgday").innerHTML = getData.messageitem[0].mday;
                                                                       postLogin.set("msgsequence", getData.messageitem[0].sequence);
                                                                   }else {
                                                                       navigator.notification.alert("No message available for your Membership", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get message item. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message item.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
                                            plshowAllOutlet: function (e) {
                                                y = e.view.params.geo;
                                                outletcode = "";
                                                brandcode = "";
                                          
                                                showSpin();
                                                
                                                if (autolocation==="1") { //Check whether auto location enabled
                                                    navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                        lat = position.coords.latitude;                                  
                                                        lon = position.coords.longitude
                                                        var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;
          
                                                        $.getJSON(geocodingAPI, function (json) {
                                                            if (json.status === "OK") {
                                                                //Check result 0
                                                                var result = json.results[0];
                                                                for (var i = 0, len = result.address_components.length; i < len; i++) {
                                                                    var ac = result.address_components[i];
                                                                    if (ac.types.indexOf("locality") >= 0) {
                                                                        geocity = ac.long_name;
                                                                    }
	                          
                                                                    if (ac.types.indexOf("country") >= 0) {
                                                                        geocountry = ac.long_name;
                                                                    }
                                                                }
                                                           
                                                                if (y==="1") {
                                                                    geocity = "";
                                                                }
                                   
                                                                pllistOutlet();
                                                                hideSpin();
                                                            }
                                                        });
                                                    }
                                                                                             , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                                 //  if (err.code == "1") {
                                                                                                 //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                 //  } else if (err.code == "2") {
                                                                                                 //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                 //  }
                                                                                                 gpsError();
                                                                                                 if (y==="1") {
                                                                                                     geocity = "";
                                                                                                 }else {
                                                                                                     geocity = city;
                                                                                                 }
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 geocountry = country;
                                                                                               
                                                                                                 pllistOutlet();
                                                                                                 hideSpin();
                                                                                             });
                                                }else {
                                                    if (y==="1") {
                                                        geocity = "";
                                                    }else {
                                                        geocity = city;
                                                    }
                                                    lat = window.localStorage.getItem("lat");
                                                    lon = window.localStorage.getItem("lon");
                                                    geocountry = country;
                                                
                                                    pllistOutlet();
                                                    hideSpin();
                                                }
                                            } ,
        
                                
        

                                            showOutletOffer
                                            : function () {
                                                offercode = "";
                                                offertype = "1";
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerListOutlet.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat,outletcode:outletcode
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.offerlist.length > 0) {
                                                                       //fill the outlet template
                                                                       $("#pl-outlet-offer").kendoMobileListView({
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                     template: $("#pl-outletOfferTemplate").html()
                                                                                                                    
                                                                                                                 });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Offers currently exist for the selected Restaurant", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Offer List. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Offer List.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
                                            callTel:  function () {
                                                window.open("tel:" + postLogin.outlettelephone);
                                            },
                                            shareOutlet:  function () {
                                                showSpin();
                                                $("body").data("kendoMobilePane").navigate("views/pl-socialshare.html");  
                                                hideSpin();
                                            },
        
                                    
                                            plofferlist: function (e) {
                                                y = e.view.params.geo;
                                        
                                                showSpin();
                                                
                                                if (autolocation==="1") {
                                                    navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                        lat = position.coords.latitude;                                  
                                                        lon = position.coords.longitude
                                                        var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;
                                                         
                                                        $.getJSON(geocodingAPI, function (json) {
                                                            if (json.status === "OK") {
                                                                //Check result 0
                                                                var result = json.results[0];
                                                                for (var i = 0, len = result.address_components.length; i < len; i++) {
                                                                    var ac = result.address_components[i];
                                                                    if (ac.types.indexOf("locality") >= 0) {
                                                                        geocity = ac.long_name;
                                                                    }
	                          
                                                                    if (ac.types.indexOf("country") >= 0) {
                                                                        geocountry = ac.long_name;
                                                                    }
                                                                }
                                                           
                                                                if (y==="1") {
                                                                    geocity = "";
                                                                }
                                                                pllistOffer();
                                                                hideSpin();
                                                            }
                                                        });
                                                    }
                                                                                             , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                                 //  if (err.code == "1") {
                                                                                                 //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                 //  } else if (err.code == "2") {
                                                                                                 //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                 //  }
                                                                                                 gpsError();
                                                                                                 if (y==="1") {
                                                                                                     geocity = "";
                                                                                                 }else {
                                                                                                     geocity = city;
                                                                                                 }
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 geocountry = country;
                                                                               
                                                                                                 pllistOffer();
                                                                                                 hideSpin();
                                                                                             });
                                                }else {
                                                    if (y==="1") {
                                                        geocity = "";
                                                    }else {
                                                        geocity = city;
                                                    }
                                                    lat = window.localStorage.getItem("lat");
                                                    lon = window.localStorage.getItem("lon");
                                                    geocountry = country;
                           
                                                    pllistOffer();
                                                    hideSpin();
                                                }
                                            },
                                                
                                            
        
                                        
        
                                            plofferitem
                                            : function (e) {
                                                offercode = e.view.params.of; //offer code for single offer inquiry
                                                offertype = "2"; //single offer inquiry
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   document.getElementById("pl-offerdetail-div").style.display = "block";
                                                                   //document.getElementById("pl-offer-image-large").style.background = "url(" + getData.offerlist[0].imageurll + ") no-repeat center center";
                                                                   //document.getElementById("pl-offer-image-large").style.backgroundSize = "cover";
                                                                   //document.getElementById("item-title").innerHTML = getData.offerlist[0].category;
                                                                   document.getElementById("plofferimage").src = getData.offerlist[0].imageurll;  

                                                                   document.getElementById("pl-ooffer-shortname").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + " </pre>";
                                                                   document.getElementById("pl-ooffer-description").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                   document.getElementById("pl-ooffer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                   document.getElementById("pl-ooffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                                                                   postLogin.set("outlettelephone", offertelephone);
                                                                   sharingSocialView.set("social_shortmsg", "Checkout " + getData.offerlist[0].itemname + "  \n");
                                                                   sharingSocialView.set("social_header", getData.offerlist[0].category);
                                                                   sharingSocialView.set("social_subject", getData.offerlist[0].itemname);
                                                                   sharingSocialView.set("social_message", getData.offerlist[0].itemdescription);
                                                                   sharingSocialView.set("social_image", share_image); 
                                                                   sharingSocialView.set("social_telephone", ""); 
                                                                   sharingSocialView.set("social_email", "");   
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot get Offer item. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Offer item.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            oofferOutlet
                                            : function () {
                                                showSpin(); //show loading popup
                                                
                                                if (autolocation==="1") { 
                                                    navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                        lat = position.coords.latitude;                                  
                                                        lon = position.coords.longitude;
 
                                                        pllistOfferOutlet();
                                                    }
                                                                                             , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                                 //  if (err.code == "1") {
                                                                                                 //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                 //  } else if (err.code == "2") {
                                                                                                 //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                 //  }
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                  
                                                                                                 pllistOfferOutlet();
                                                                                             });
                                                }else {
                                                    lat = window.localStorage.getItem("lat");
                                                    lon = window.localStorage.getItem("lon");
                                                    pllistOfferOutlet();
                                                }
                                            },
                                           
                                            activateoffer
                                            : function (e) {
                                                if (!document.getElementById("tandc-accept").checked) {
                                                    navigator.notification.alert("Please Accept Terms & Conditions to proceed", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                writeSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/issuecoupon.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,customerid:customer,password:password,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   postLogin.set("transactionref", getData.transactionref);
                                                                   postLogin.set("couponcode", getData.couponcode);
                                                                   postLogin.set("couponname", getData.couponname);                
                                                                   postLogin.set("couponcategory", getData.couponcategory);        
                                                                   $("body").data("kendoMobilePane").navigate("views/pl-confirmpage.html");  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot activate offer. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error Cannot activate offer. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup                                                                 
                                                           }
                                                       });
                                            }, 
        
                                            confirmIssueResponse
                                            :function() {
                                                document.getElementById("offer-1").innerHTML = postLogin.transactionref;
                                                document.getElementById("offer-2").innerHTML = postLogin.couponname;
                                                //document.getElementById("offer-3").innerHTML = postLogin.couponcategory;
                                            },
                                            mywalletofferlist
                                            : function () {
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/mywalletvouchers.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.mywalletvouchers.length > 0) {
                                                                       $("#mywallet-voucher-list").kendoMobileListView({
                                                                                                                           dataSource: kendo.data.DataSource.create({data: getData.mywalletvouchers}),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                                                                                           template: $("#mywallet-voucherlist-Template").html()
                                                                                                                           // endlessScroll:true
                                                                                                                       });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Vouchers available in Wallet.", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet.  " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            mywalletofferdetail
                                            : function (e) {
                                                couponnumber = e.view.params.itc;
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/mywalletvoucherdetail.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,couponnumber:couponnumber,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.myvoucherdetail.length > 0) {
                                                                       document.getElementById("wallet-div").style.display = "block";
                                                                       //document.getElementById("myvoucher-load").style.background = "url(" + getData.myvoucherdetail[0].imageurll + ") no-repeat center center";
                                                                       //document.getElementById("myvoucher-load").style.backgroundSize = "cover";
                                                                                                                                         
                                                                       //document.getElementById("voucher-number").innerHTML = getData.myvoucherdetail[0].itemcode;
                                                                       //document.getElementById("voucher-name").innerHTML = getData.myvoucherdetail[0].itemname;
                                                                       //document.getElementById("voucher-expiry").innerHTML = getData.myvoucherdetail[0].couponexpirydate;
                                                                       //document.getElementById("coupon-description-1").innerHTML = getData.myvoucherdetail[0].itemdescription;
                                                                       document.getElementById("myvoucherimage").src = getData.myvoucherdetail[0].imageurll;
                                                                       document.getElementById("pl-ooffer-voucher").innerHTML = "Voucher : " + getData.myvoucherdetail[0].itemcode;
                                                                       //document.getElementById("qr-image-3").style.background = "url(" + getData.myvoucherdetail[0].imageurls + ") no-repeat center center";
                                                                       document.getElementById("pl-ooffer-shortname").innerHTML = "<pre class='fulljustifybold'>Offer Name : " + getData.myvoucherdetail[0].itemname + " </pre>";
                                                                       document.getElementById("pl-ooffer-description").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].itemdescription + "</pre>";
                                                                       document.getElementById("pl-ooffer-expiry").innerHTML = "Expiry Date : " + getData.myvoucherdetail[0].couponexpirydate;
                                                                       document.getElementById("pl-ooffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].remark + "</pre>";
                                                               
                                                                       offercode = getData.myvoucherdetail[0].couponcode;
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Vouchers available in Wallet.", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            myofferOutlet:
                                            function () {
                                                showSpin(); //show loading popup
                                                
                                                if (autolocation==="1") {
                                                    navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                        lat = position.coords.latitude;                                  
                                                        lon = position.coords.longitude;
                                                         
                                                        myOfferListOutlet();
                                                    }
                                                                                             , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                                 //  if (err.code == "1") {
                                                                                                 //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                 //  } else if (err.code == "2") {
                                                                                                 //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                 //  }
                                                                                                 gpsError();
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                  
                                                                                                 myOfferListOutlet();
                                                                                             });
                                                }else {
                                                    lat = window.localStorage.getItem("lat");
                                                    lon = window.localStorage.getItem("lon");
                                                    myOfferListOutlet();
                                                }
                                            },
                                            deleteMessage
                                            :
                                            function () {
                                                t = postLogin.msgsequence;
         
                                                showSpin(); 
                                             
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/messagedelete.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:mdevicestat
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   $("body").data("kendoMobilePane").navigate("views/pl-mymessagelist.html");  
                                                               }else {
                                                                   navigator.notification.alert("Cannot delete message. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot delete message. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
        
                                            editsettingdata
                                            :function() {
                                                showSpin(); 
                                                listCountry();
                                                listCity(country);  
                                                document.getElementById("setting-view").style.display = "block";
                                                if (pushoffer == "1") {
                                                    $("#profile-pushoffer").data("kendoMobileSwitch").check(true);
                                                }else {
                                                    $("#profile-pushoffer").data("kendoMobileSwitch").check(false);
                                                }
                                                  
                                                if (remindexpiry == "1") {
                                                    $("#profile-remindexpiry").data("kendoMobileSwitch").check(true);
                                                }else {
                                                    $("#profile-remindexpiry").data("kendoMobileSwitch").check(false);
                                                }
                                                  
                                                if (autolocation == "1") {
                                                    $("#profile-autolocation").data("kendoMobileSwitch").check(true);
                                                    document.getElementById("selCountry").style.color = "#ccc";
                                                    document.getElementById("selCity").style.color = "#ccc";
                                                }else {
                                                    $("#profile-autolocation").data("kendoMobileSwitch").check(false);
                                                    document.getElementById("selCountry").value = country;
                                                    document.getElementById("selCity").value = city;
                                                    document.getElementById("selCountry").style.color = "#575757";
                                                    document.getElementById("selCity").style.color = "#575757";
                                                }
                                                hideSpin();
                                            },
                                            getCity
                                            :function() {
                                                showSpin();
                                                // kendo.mobile.application.showLoading(); //show loading popup
                                                var e = document.getElementById("selCountry");
                                                var str = e.options[e.selectedIndex].value;
                                                listCity(str);
                                                hideSpin(); //hide loading popup
                                            },
        
                                            saveSetting:
                                            function () {
                                                if (!document.getElementById("profile-autolocation").checked) {
                                                    if (document.getElementById("selCountry").value == "") {
                                                        navigator.notification.alert("Select Country", function() {
                                                        }, "isme by Jumeirah", "Dismiss");
                                                        return; 
                                                    }
                                                    if (document.getElementById("selCity").value == "") {
                                                        navigator.notification.alert("Select City", function() {
                                                        }, "isme by Jumeirah", "Dismiss");
                                                        return; 
                                                    }
                                                }      
                                                                                                
                                                if ((!document.getElementById("profile-pushoffer").checked) && (document.getElementById("profile-remindexpiry").checked)) {
                                                    navigator.notification.alert("Please enable Push Notification to receive reminders for expirying vouchers", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                                                           
                                                if (document.getElementById("profile-pushoffer").checked) {
                                                    pushoffer1 = "1";
                                                }else {
                                                    pushoffer1 = "";
                                                }
                                           
                                                if (document.getElementById("profile-remindexpiry").checked) {
                                                    remindexpiry1 = "1";
                                                }else {
                                                    remindexpiry1 = "";
                                                }
                                         
                                                if (document.getElementById("profile-autolocation").checked) {
                                                    autolocation1 = "1";
                                                    country1 = country;
                                                    city1 = city;
                                                }else {
                                                    autolocation1 = "";
                                                    country1 = document.getElementById("selCountry").value;
                                                    city1 = document.getElementById("selCity").value;
                                                }      
                                                showSpin();                                                  
                                   
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/updateprofile_ihg.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,mobile:mobilenumber,emailid:emailid,pushoffer:pushoffer1,remindexpiry:remindexpiry1,showprofile:showprofile,image1:newimage,mdevice:mdevicestat,autolocation:autolocation1,city:city1,country:country1
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   pushoffer = pushoffer1;
                                                                   remindexpiry = remindexpiry1;
                                                                   autolocation = autolocation1;
                                                                   country = country1;
                                                                   city = city1;
                                                                   window.localStorage.setItem("autolocation", autolocation);
                                                                   window.localStorage.setItem("pushoffer", pushoffer);
                                                                   window.localStorage.setItem("remindexpiry", remindexpiry);
                                                                   window.localStorage.setItem("city", city);
                                                                   window.localStorage.setItem("country", country);  
                                                                   pushSettings = {
                                                                       iOS: {
                                                                           badge: "true",
                                                                           sound: "true",
                                                                           alert: "true",
                                                                           clearBadge: "true"
                                                                       },
                                                                       android: {
                                                                           senderID: googleApiProjectNumber
                                                                       },
                                                                       wp8: {
                                                                           channelName: 'EverlivePushChannel'
                                                                       },
                                                                       notificationCallbackIOS:onPushNotificationReceived,
                                                                       notificationCallbackAndroid: onPushNotificationReceived,
                                                                       notificationCallbackWP8: onPushNotificationReceived,
                                                                       customParameters: {
                                                                           Memberid: customer,
                                                                           Merchant:merchant,
                                                                           Segment:segmentcode,
                                                                           devicecode:muuid
                                                                       }
                                                                   };
                                                                                                                                       
                                                                   if (pushoffer == "1") {
                                                                       //If already registered than update registration
                                                                       currentDevice.getRegistration(function() {
                                                                           currentDevice.unregister().then(function() {
                                                                           }, function (err) {
                                                                               //alert('unregister 1 ' + err);
                                                                           });
                                                                           currentDevice.enableNotifications(pushSettings, function (data) {
                                                                               currentDevice.register(pushSettings, function (data) {
                                                                               }, function (err) {
                                                                                   //alert('register  1 ' + err);
                                                                               }); 
                                                                           }, function (err) {
                                                                               //alert('enable  1 ' + err);
                                                                           });
                                                                       }, function(err) { //If not registered then enable and register
                                                                           currentDevice.enableNotifications(pushSettings, function (data) {
                                                                               currentDevice.register(pushSettings, function (data) {
                                                                               }, function (err) {
                                                                                   //alert('register 2 '+err);
                                                                               }); 
                                                                           }, function (err) {
                                                                               //alert('enable  2 ' + err);
                                                                           });
                                                                       });
                                                                       window.localStorage.setItem("notification", "1");
                                                                   }else {
                                                                       currentDevice.unregister()
                                                                           .then(
                                                                               function() {
                                                                               },
                                                                               function (err) {
                                                                                   //alert('unregister 2 ' + err);
                                                                               }
                                                                               );
                                                                       window.localStorage.setItem("notification", "2");
                                                                   }
                                                                     
                                                                   navigator.notification.alert("Profile changes successfully updated.", function() {
                                                                   }, "isme by Jumeirah", "Dismiss")   
                                                                   $("body").data().kendoMobilePane.navigate("views/pl-myprofile.html");  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Could not update profile changes due to error. " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Could not update profile.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
        
                                            plshowBrandPage
                                            : function () {
                                                // alert("Hello");
                                                $("body").data("kendoMobilePane").navigate("views/pl-brandpage.html");  
                                            },
                                            getHistoryFilter:function() {
                                                var dataSource = new kendo.data.DataSource({ data: getHistoryFilterData() });
                                               
                                                $("#History-Filter").kendoMobileListView({
                                                                                             dataSource: dataSource,
                                                                                             template: $("#History-Filter-Template").html()

                                                                    
                                                                                         });
                                            },
                                            addImage:
                                            function () {
                                                var success = function (imageData) {
                                                    var image = document.getElementById('profile-picture-1');
                                                    image.src = "data:image/png;base64," + imageData;
                                                    //image.src = imageURI;
                                                    newimage = imageData;
                                                };
                                                var error = function () {
                                                    navigator.notification.alert("Unfortunately Image cannot be captured");
                                                };
                                                  
                                                var config = {
                                                    quality : 75,
                                                    destinationType : Camera.DestinationType.DATA_URL,
                                                    sourceType : Camera.PictureSourceType.CAMERA,
                                                    allowEdit : true,
                                                    encodingType: Camera.EncodingType.PNG,
                                                    targetWidth: 75,
                                                    targetHeight: 75,
                                                    popoverOptions: CameraPopoverOptions,
                                                    saveToPhotoAlbum: false
                                                };
                                                //                       var config = {
                                                //                           destinationType: Camera.DestinationType.DATA_URL,
                                                //                           targetHeight: 75,
                                                //                           targetWidth: 75,
                                                //                           encodingType: Camera.EncodingType.PNG
                                                //                       };
                                                navigator.camera.getPicture(success, error, config);
                                            },
        
                                              
                                            getImage:
                                            function () {
                                                var success = function (imageData) {
                                                    var image = document.getElementById('profile-picture-1');
                                                    image.src = "data:image/png;base64," + imageData;
                                                    //image.src = imageURI;
                                                    newimage = imageData;
                                                };
                                                var error = function () {
                                                    navigator.notification.alert("Unfortunately Image cannot be retrieved");
                                                };
                                                  
                                                var config = {
                                                    quality : 75,
                                                    destinationType : Camera.DestinationType.DATA_URL,
                                                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                                                    allowEdit : true,
                                                    encodingType: Camera.EncodingType.PNG,
                                                    targetWidth: 75,
                                                    targetHeight: 75,
                                                    popoverOptions: CameraPopoverOptions,
                                                    saveToPhotoAlbum: false
                                                };
                                                //                       var config = {
                                                //                           destinationType: Camera.DestinationType.DATA_URL,
                                                //                           targetHeight: 75,
                                                //                           targetWidth: 75,
                                                //                           encodingType: Camera.EncodingType.PNG
                                                //                       };
                                                navigator.camera.getPicture(success, error, config);
                                            },
        
                                        });
    
    function listCountry() {
        showSpin(); //show loading popup
                                      
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/listcountryandprice.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,mdevice:mdevicestat
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           //fill the outlet template
                           if (getData.statuscode == "000") {
                               //fill the select dropdown for country
                               for (var i = 0;i < getData.countrylist.length;i++) {
                                   var x = document.getElementById("selCountry");
                                   var opt = document.createElement("option");
                                   opt.value = getData.countrylist[i].countryname;    
                                   opt.text = getData.countrylist[i].countrycode;
                                   x.add(opt);
                               }
                               hideSpin();
                           }else {
                               navigator.notification.alert("Cannot get Country list. " + getData.statusdesc, function() {
                               }, "isme by Jumeirah", "Dismiss")          
                               hideSpin(); //hide loading popup
                           }
                       }
                   },
                   error:
                   function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Country list. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function listCity(e) {
        t = e;
        showSpin(); //show loading popup
                                                  
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/listcityandlanguage.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,countrycode:t,mdevice:mdevicestat
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           //fill the outlet template
                           for (var i = 0;i < getData.citylist.length;i++) {
                               var x = document.getElementById("selCity");
                               var opt = document.createElement("option");
                               opt.value = getData.citylist[i].cityname;    
                               opt.text = getData.citylist[i].citycode;
                               x.add(opt);
                           }
                       }else {
                           navigator.notification.alert("Cannot get City list. " + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get City list. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function hideSpin() {
        window.setTimeout(function() {
            $("#mvwait").data("kendoMobileModalView").close();
        }, 1000); 
    }
         
    function showSpin() {
        if (!checkConnectionBool()) {
            navigator.notification.alert("Cannot complete the request.  Network unavailable.  Please check your network and re-try.", function() {
            }, "isme by Jumeirah", "Dismiss");  
            //        //$("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            $("#mvwait").data("kendoMobileModalView").open();
        }
    }
    
    function writeSpin() {
        if (!checkConnectionBool()) {
            navigator.notification.alert("Cannot complete the request.  Network unavailable.  Please check your network and re-try.", function() {
            }, "isme by Jumeirah", "Dismiss");              
            //        $("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            window.plugins.spinnerDialog.show(null, null, true); //show loading popup
        }
    }
    
    function checkConnectionBool () {
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
            navigator.notification.alert(states[networkState], function() {
            }, "isme by Jumeirah", "Dismiss");                     
            return false;
        } else {
            return true;
        }
    }
    
    function getGeoPlacePostLogin() {
        showSpin();
        if (autolocation != "1") { //Check whether auto location enabled
            geocity = city;
            geocountry = country;           
        }
       
        return true;
    }
    
    function pllistOutlet() {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/outletlistGeo.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat,city:geocity,country:geocountry,lat:lat,lon:lon
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                                            
                       if (getData.statuscode == "000") {
                           if (getData.outletlist.length > 0) {
                               //fill the outlet template
                               $("#pl-outletlist-all").kendoMobileListView({
                                                                             
                                                                               dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                               template: $("#pl-outletListAllTemplate").html(),
                                                                          
                                                                               filterable: {
                                       autoFilter: true,
                                       placeholder:"Search By Restaurant Name",                                         
                                       field: "outletname",
                                       operator: "contains",
                                       serverPaging: true,
                                       serverSorting: true,
                                       pageSize: 10
                                   }
                                                                                                                    
                                                                           });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no Restaurant for the selected Hotel", function() {
                               }, "isme by Jumeirah", "Dismiss")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Cannot get Restaurant List. " + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
   
    function pllistOffer() {
        offercode = "";
        offertype = "1";
        //alert(customer);
        //alert(password);
        showSpin();
                                                
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/offerListGeo.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat,city:geocity,country:geocountry,lat:lat,lon:lon
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           if (getData.offerlist.length > 0) {
                               //fill the outlet template
                               $("#pl-offer-list-view").kendoMobileListView({
                                                                                dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                template: $("#plofferListTemplate").html(),
                                                                          
                                                                                filterable: {
                                       autoFilter: true,
                                       placeholder:"Search By Offer Name",                                         
                                       field: "itemname",
                                       operator: "contains",
                                       serverPaging: true,
                                       serverSorting: true,
                                       pageSize: 10
                                   }
                                                                                                                    
                                                                            });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("No Offers currently exist", function() {
                               }, "isme by Jumeirah", "Dismiss")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Cannot get Offer List." + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Offer List.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function pllistOfferOutlet() {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/offeroutletlist_Geo.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,offercode:offercode,mdevice:mdevicestat,lat:lat,lon:lon
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           //fill the outlet template
                           if (getData.offeroutletlist.length > 0) {
                               $("#pl-offer-outlet-list-view").kendoMobileListView({
                                                                                       dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                       template: $("#plofferOutletTemplate").html()
                                                                                   });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no Restaurant for the selected offer.", function() {
                               }, "isme by Jumeirah", "Dismiss")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Cannot get Restaurant List. " + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
        
    function myOfferListOutlet() {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/offeroutletlist_Geo.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,offercode:offercode,mdevice:mdevicestat,lat:lat,lon:lon
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           //fill the outlet template
                           if (getData.offeroutletlist.length > 0) {
                               $("#my-offer-outlet-list-view").kendoMobileListView({
                                                                                       dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                       template: $("#my-offerOutletTemplate").html()
                                                                                   });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no Restaurants for the selected offer.", function() {
                               }, "isme by Jumeirah", "Dismiss")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Cannot get Restaurants List." + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurants List. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function gpsError() {
        if (gpsErrorShow==="") {
            showTop("Location Settings are disabled for this app. This will result in incorrect display of distance.  Please enable the Location settings for the app on the device Settings.");
            // navigator.notification.alert("Location Settings are disabled for this app. This will result in incorrect display of distance.  Please enable the Location settings for the app on the device Settings.", function() {
            // }, "isme by Jumeirah", "Dismiss");
            
            $.ajax({ 
                       type: "POST",
                       cache:false,
                       async:true,
                       timeout:20000,
                       url: gurl + "/trackDevice.aspx",
                       contentType: "application/json; charset=utf-8",
                       data: JSON.stringify({
                                                merchantcode :window.localStorage.getItem("merchant"),mdevice:window.localStorage.getItem("mdevicestat"),lat:lat,lon:lon,customer:window.localStorage.getItem("customer").callbacktype,segment:"GPSOFF"
                                            }),
                       success: function (data) {
                       },
                       error: function (error) {
                       }
                   });        
            //gpsErrorShow = "1"; remove the comment if error message is required to be shown only once
        }
    }
    
    function gpsErrorApp() {
        if (gpsErrorShowApp==="") {    
            showTop("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page.");
            //navigator.notification.alert("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page.", function() {
            //}, "isme by Jumeirah", "Dismiss");
            //gpsErrorShowApp = "1"; remove the comment if error message is required to be shown only once
        }
    }
    
    function meWatchPos(position) {
        //Check whether GPS enabled
        x = position.coords.latitude;                                  
        y = position.coords.longitude;
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/trackDevice.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:mdevicestat,lat:x,lon:y,customer:"WATCH",segment:segmentcode
                                        }),
                   success: function (data) { 
                   },
                   error: function (error) {
                   }
               });
    }
   
    //Get Country
    function getCountry() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;                                  
            lon = position.coords.longitude
            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;
          
            $.getJSON(geocodingAPI, function (json) {
                if (json.status === "OK") {
                    //Check result 0
                    var result = json.results[0];
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) {
                            geocity = ac.long_name;
                        }
	                          
                        if (ac.types.indexOf("country") >= 0) {
                            mcountry = ac.long_name;
                            window.localStorage.setItem("country", mcountry);
                        }
                    }
                    getFlag(mcountry);                                              
                }else {
                    mcountry = country;
                    window.localStorage.setItem("country", mcountry);
                    getFlag(mcountry);
                }
            });
        }
                                                 , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                     //  if (err.code == "1") {
                                                     //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                     //  } else if (err.code == "2") {
                                                     //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                     //  }
                                                     lat = window.localStorage.getItem("lat");
                                                     lon = window.localStorage.getItem("lon");
                                                     mcountry = country;
                                                     window.localStorage.setItem("country", mcountry);
                                                     getFlag(mcountry);
                                                 });
    }
    function getFlag(e) {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/getCountryflag.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat,city:geocity,country:e,lat:lat,lon:lon
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                                            
                       if (getData.statuscode == "000") { 
                           countryflag = getData.countryflag;
                           window.localStorage.setItem("flagurl", flag_image + countryflag + ".png");
                           document.getElementById("flagtitle").style.background = "url(" + window.localStorage.getItem("flagurl") + ") no-repeat center center";
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function processRegionMonitorCallback (mresult) {
        if (mresult.callbacktype === "enter" || mresult.callbacktype === "exit") {
            // window.plugin.notification.local.add({
            //                                          title:   "GeoFence",
            //                                          message: mresult.regionId + " " + mresult.callbacktype
            //                                       });
            $.ajax({ 
                       type: "POST",
                       cache:false,
                       async:true,
                       timeout:20000,
                       url: gurl + "/trackdevice.aspx",
                       contentType: "application/json; charset=utf-8",
                       data: JSON.stringify({
                                                merchantcode :window.localStorage.getItem("merchant"),mdevice:window.localStorage.getItem("mdevicestat") + "^enter^" + mresult.callbacktype,lat:lat,lon:lon,customer:window.localStorage.getItem("customer"),segment:mresult.regionId
                                            }),
                       success: function (data) {
                       },
                       error: function (error) {
                       }
                   });  
        }
    }
       
    function showTop(e) {
        window.plugins.toast.showWithOptions({
                                                 message: e,
                                                 duration: "long",
                                                 position: "bottom",
                                                 addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                                             },
                                             function() {
                                             }, // optional
                                             function() {
                                             }    // optional
            );
    }
    
    function checklocation() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;                                  
            lon = position.coords.longitude;
        }
                                                 , function onErrorShowMap(error) { 
                                                     gpsError();
                                                 });   
    }
    
    function startMonitor() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;                                  
            lon = position.coords.longitude
            $.ajax({
                       type: "POST",
                       cache: false,
                       async: true,
                       timeout: 20000,
                       url: gurl + "/propertyList.aspx",
                       contentType: "application/json; charset=utf-8",
                       data: JSON.stringify({
                                                merchantcode: merchant, mdevice: mdevicestat,brandcode:window.localStorage.getItem("brandcode")
                                            }),
                       success: function (data) {
                           var getData = JSON.parse(data);
                           var i = 0;
                           if (getData.statuscode === "000") {
                               if (getData.propertylist.length > 0) {
                                   //Start Monitor
                                   while (i <= getData.propertylist.length - 1) {
                                       //Stop Monitor
                                       var params = [getData.propertylist[i].brandcode, getData.propertylist[i].lat, getData.propertylist[i].lon];
                                       window.plugins.DGGeofencing.stopMonitoringRegion(params, 
                                                                                        function(result) {
                                                                                            // not used.
                                                                                        }, function(error) {
                                                                                            // not used
                                                                                        });
                                       
                                       params = [getData.propertylist[i].brandcode, getData.propertylist[i].lat, getData.propertylist[i].lon,  getData.propertylist[i].radius,"3"];
                                       window.plugins.DGGeofencing.startMonitoringRegion(params, function(result) {
                                       }, function(error) {
                                       });
                                       i++;
                                   }
                                   
                                   hideSpin(); //hide loading popup
                               } else {
                                   navigator.notification.alert("There are no Property for the selected Program!", function () {
                                   }, "isme by Jumeirah", "Dismiss")
                                   hideSpin(); //hide loading popup
                               }
                           } else {
                               navigator.notification.alert("Cannot get Property List " + getData.statusdesc, function () {
                               }, "isme by Jumeirah", "Dismiss")
                               hideSpin(); //hide loading popup
                           }
                       },
                       error: function (error) {
                           navigator.notification.alert("Platform Error, Services may not be available. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function () {
                           }, "isme by Jumeirah", "Dismiss")
                       }
                   });
        }
                                                 , function onErrorShowMap(error) {
                                                 });
        hideSpin(); 
    }
        
    function fdidEntera(data) {
        var json = JSON.stringify(data);
        var jsonp = JSON.parse(json);
        
        if (jsonp["state"] === "CLRegionStateInside") {
            // window.plugin.notification.local.add({
            //                                         title:   "Beacon",
            //                                          message: jsonp["region"].identifier + " " + jsonp["state"]
            //                                    });
            $.ajax({ 
                       type: "POST",
                       cache:false,
                       async:true,
                       timeout:20000,
                       url: gurl + "/beaconMessageBroadCast.aspx",
                       contentType: "application/json; charset=utf-8",
                       data: JSON.stringify({
                                                merchantcode: window.localStorage.getItem("merchant"), mdevice: jsonp["region"].identifier + "^" + window.localStorage.getItem("mdevicestat") + "^" + jsonp["region"].typeName + "^" + jsonp["state"] + "^" + jsonp["region"].minor + "^" + jsonp["region"].major + "^" + jsonp["region"].identifier + "^" + jsonp["region"].uuid, lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment: jsonp["region"].identifier
                                            }),
                       success: function (data) {
                           var getData = JSON.parse(data);
                           var i = 0;
                           if (getData.statuscode === "000") {
                               if (getData.beaconoffers.length > 0) {
                                   //Start Monitor
                                   while (i <= getData.beaconoffers.length - 1) {
                                       window.plugin.notification.local.add({
                                                                                // title:   getData.beaconoffers[i].msgtitle,
                                                                                message: getData.beaconoffers[i].msgnotification
                                                                            });
                                       
                                       i++;
                                   }
                               } 
                           } else {
                               // showTop("Error Retrieving Beacon Message" + getData.statuscode + getData.statusdesc);
                           }
                       },
                       error: function (error) {
                       }
                   });        
        }
    }                     

    function onPushNotificationReceived(e) {
        // alert(JSON.stringify(e));
        if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
            $("body").data().kendoMobilePane.navigate("views/pl-offerlist.html?geo=1");  
        } else {
            $("body").data().kendoMobilePane.navigate("views/offerlist.html?geo=1");
        }                  
    };
    
    function callBackError(e) {
        m = JSON.stringify(e);
        m = JSON.parse(m);
        $.ajax({
                   type: "POST",
                   cache: false,
                   async: true,
                   timeout: 20000,
                   url: gurl + "/trackDevice.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat") + "^" + m, lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment:"ERROR"
                                        }),
                   success: function (data) {
                   },
                   error: function (error) {
                   }
               }); 
    }
    
    function getRestAddData() {
        var data = [];
        data.push({addresticon:"fa-beer",addrestkey: "1",addrestitem:"Alcohol"});
        data.push({addresticon:"fa-spoon",addrestkey: "2",addrestitem:"Brunch"});
        data.push({addresticon:"fa-cutlery",addrestkey: "3",addrestitem:"Buffet"});
        data.push({addresticon:"fa-group",addrestkey: "4",addrestitem:"Group Arrangement"});
        data.push({addresticon:"fa-check-square",addrestkey: "5",addrestitem:"Halal"});
        data.push({addresticon:"fa-child",addrestkey: "6",addrestitem:"Kids Arrangement"});
        data.push({addresticon:"fa-microphone",addrestkey: "7",addrestitem:"Live Entertainment"});
        data.push({addresticon:"fa-sun-o",addrestkey: "8",addrestitem:"Outdoor Seating"});
        data.push({addresticon:"fa-car",addrestkey: "9",addrestitem:"Parking"});        
        data.push({addresticon:"fa-magic",addrestkey: "10",addrestitem:"Smoking Indoor"});  
        data.push({addresticon:"fa-magic",addrestkey: "11",addrestitem:"Smoking Outdoor"});  
        data.push({addresticon:"fa-magic",addrestkey: "12",addrestitem:"Smoking Sisha"});  
        data.push({addresticon:"fa-car",addrestkey: "13",addrestitem:"Valet Parking"});  
        data.push({addresticon:"fa-wheelchair",addrestkey: "14",addrestitem:"Wheelchair"});  
        data.push({addresticon:"fa-wifi",addrestkey: "15",addrestitem:"Wifi"});  
        
        return data;
    }
    
    function getRestLocationData() {
        var data = [];
        data.push({locationkey: "1",locationitem:"Abudhabi"});
        data.push({locationkey: "2",locationitem:"Dubai"});
        data.push({locationkey: "3",locationitem:"Sharjah"});
        data.push({locationkey: "4",locationitem:"Ajman"});
        data.push({locationkey: "5",locationitem:"Fujairah"});
        data.push({locationkey: "6",locationitem:"Ras Al Khaimah"});
        data.push({locationkey: "7",locationitem:"Um Al Quwain"});
        return data;
    }
    
    function getRestTypeData() {
        var data = [];
        data.push({typekey: "1",typeitem:"Award Winning"});
        data.push({typekey: "2",typeitem:"Bar/Lounge"});
        data.push({typekey: "3",typeitem:"Casual Dining"});
        data.push({typekey: "4",typeitem:"Corporate/Business"});
        data.push({typekey: "5",typeitem:"Family Dining"});
        data.push({typekey: "6",typeitem:"OpenAir Dining"});
        data.push({typekey: "7",typeitem:"Romantic Dining"});
        data.push({typekey: "8",typeitem:"Scenic View"});
        data.push({typekey: "9",typeitem:"Romantic Dining"});
        data.push({typekey: "10",typeitem:"Spa"});
        data.push({typekey: "11",typeitem:"Theme Park"});
        data.push({typekey: "12",typeitem:"Night life/Night Club"});
        data.push({typekey: "13",typeitem:"Cafe or Bistro"});
        data.push({typekey: "14",typeitem:"Sports Bar"});
        data.push({typekey: "15",typeitem:"Cocktail Bar"});
        data.push({typekey: "16",typeitem:"Signature Fine Dining"});           
           
        return data;
    }
    
    function getRestCuisineData() {
        var data = [];
        data.push({cuisinekey: "1",cuisineitem:"African"});
        data.push({cuisinekey: "2",cuisineitem:"Afternoon Tea"});
        data.push({cuisinekey: "3",cuisineitem:"Asian"});
        data.push({cuisinekey: "4",cuisineitem:"Bar food"});
        data.push({cuisinekey: "5",cuisineitem:"Brunch"});    
        data.push({cuisinekey: "6",cuisineitem:"Business Lunch"});         
        data.push({cuisinekey: "7",cuisineitem:"European"});
        data.push({cuisinekey: "8",cuisineitem:"Healthy"});         
        data.push({cuisinekey: "9",cuisineitem:"International"});
        data.push({cuisinekey: "11",cuisineitem:"Latin American"});
        data.push({cuisinekey: "12",cuisineitem:"Light Bites"});
        data.push({cuisinekey: "13",cuisineitem:"Middle Eastern"});
        data.push({cuisinekey: "14",cuisineitem:"Patisserie"});
        data.push({cuisinekey: "15",cuisineitem:"Seafood"});
        data.push({cuisinekey: "16",cuisineitem:"Steakhouse"});
        data.push({cuisinekey: "17",cuisineitem:"Vegetarian"});
           
        return data;
    }
    
    function getOfferTypeData() {
        var data = [];
        data.push({offerkey: "1",offeritem:"Art & Culture"});
        data.push({offerkey: "2",offeritem:"Beach"});
        data.push({offerkey: "3",offeritem:"Beauty"});
        data.push({offerkey: "4",offeritem:"Brunch"});
        data.push({offerkey: "5",offeritem:"Family & Kids"});    
        data.push({offerkey: "6",offeritem:"Fashion"});         
        data.push({offerkey: "7",offeritem:"Fine Dining"});
        data.push({offerkey: "8",offeritem:"Football"});         
        data.push({offerkey: "9",offeritem:"Gadgets"});
        data.push({offerkey: "10",offeritem:"Golf"});         
        data.push({offerkey: "11",offeritem:"Grape Tasting"});
        data.push({offerkey: "12",offeritem:"Horse Racing"});
        data.push({offerkey: "13",offeritem:"Leisure"});
        data.push({offerkey: "14",offeritem:"Live music"});
        data.push({offerkey: "15",offeritem:"Luxury Goods"});
        data.push({offerkey: "16",offeritem:"Motor Sports"});
        data.push({offerkey: "17",offeritem:"Networking"});
        data.push({offerkey: "18",offeritem:"No alcohol"});
        data.push({offerkey: "19",offeritem:"Rugby"});
        data.push({offerkey: "20",offeritem:"Shopping"});
        data.push({offerkey: "21",offeritem:"Signature Events"});
        data.push({offerkey: "22",offeritem:"Spa / Fitness"});
        data.push({offerkey: "23",offeritem:"Special Holiday Offers"});
        data.push({offerkey: "24",offeritem:"Travel & Stay Packages"});
        data.push({offerkey: "25",offeritem:"Watersports"});
        data.push({offerkey: "26",offeritem:"Weight loss"});
        data.push({offerkey: "27",offeritem:"Wellness & Wellbeing"});
        data.push({offerkey: "27",offeritem:"Yoga"});
           
        return data;
    }
    
    function getOfferCeleberationData() {
        var data = [];
        data.push({celebkey: "1",celebitem:"Birthdays"});
        data.push({celebkey: "2",celebitem:"Corporate entertainment"});
        data.push({celebkey: "3",celebitem:"Easter celebrations"});
        data.push({celebkey: "4",celebitem:"Eid celebrations"});
        data.push({celebkey: "5",celebitem:"Father`s day"});    
        data.push({celebkey: "6",celebitem:"Festive"});         
        data.push({celebkey: "7",celebitem:"Mothers day"});
        data.push({celebkey: "8",celebitem:"Ramadan"});         
        data.push({celebkey: "9",celebitem:"Thanks giving day"});
        data.push({celebkey: "10",celebitem:"UAE National Day"});         
        data.push({celebkey: "11",celebitem:"Valentines"});
        data.push({celebkey: "12",celebitem:"Wedding Anniversary"});
        data.push({celebkey: "13",celebitem:"Women`s Day"});
           
        return data;
    }
    
    function getHistoryFilterData() {
        var data = [];
        data.push({historykey: "1",historyitem:"Activate Offer"});
        data.push({historykey: "2",historyitem:"Change Profile"});
        data.push({historykey: "3",historyitem:"New Subscription"});
        data.push({historykey: "4",historyitem:"Redeem Spend"});
        data.push({historykey: "5",historyitem:"Redeem Voucher"});    
        data.push({historykey: "6",historyitem:"Renew Membership"});         
        data.push({historykey: "7",historyitem:"Other Transactions"});
  
        return data;
    }
    
    function getFAQData() {
        var data = [];
        data.push({faqkey: "1",faqitem:"About isme by Jumeirah"});
        data.push({faqkey: "2",faqitem:"Membership & Validity"});
        data.push({faqkey: "3",faqitem:"Programme Benefits"});
        data.push({faqkey: "4",faqitem:"Tier Privilege"});
        data.push({faqkey: "5",faqitem:"Mobile App Queries"});        
  
        return data;
    }
    
    function movhide() {
        window.setTimeout(function() {
            $("#mvwait").data("kendoMobileModalView").close();
        }, 1000); 
    }
    
    function movshow() {
        $("#mvwait").data("kendoMobileModalView").open();
    }
}
    )(window);