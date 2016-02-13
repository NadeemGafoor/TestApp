function FacebookErr() {
    navigator.notification.alert("Error Accessing your Facebook account, please make sure you have Facebook installed", function() {
    }, "isme by Jumeirah", "Dismiss");    
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
    window.open("tel:" + "8004763");
}

function offerMessage() {
    navigator.notification.alert("To view offer details please select All Offers from the menu", function() {
    }, "isme by Jumeirah", "Dismiss")    
}

function outletMessage() {
    navigator.notification.alert("To view Restaurant details please select Restaurants List from the menu", function() {
    }, "isme by Jumeirah", "Dismiss")    
}

function closeSetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
}

function resetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
    //$("#modalviewrepin").data("kendoMobileModalView").open();
}

function loadFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").open(); 
}

function closeFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").close(); 
}

function enterPinForRedemption() {
    window.localStorage.setItem("selfredeem", "D"); 
    $("#modalviewenterpin").data("kendoMobileModalView").open(); 
}

function openEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").open(); 
}

function closeEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").close(); 
}

function closeEnterPinForRedemption() {
    $("#modalviewenterpin").data("kendoMobileModalView").close();
}

//function enterStaffPinForRedemption() {
//   $("#modalviewenterpin").data("kendoMobileModalView").close();
//   $("#modalviewstaffpin").data("kendoMobileModalView").open();
//}

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

//function loadLocationView() {
//   $("#modalviewcountry").data("kendoMobileModalView").open();
//}

function loadCuisineView() {
    $("#modalviewcuisine").data("kendoMobileModalView").open();
}

function loadOfferView() {
    $("#modalviewoffertype").data("kendoMobileModalView").open();
}

//function closeOfferTypeView() {
//   $("#modalviewoffertype").data("kendoMobileModalView").close();
//}

function loadTypeView() {
    $("#modalviewtype").data("kendoMobileModalView").open();
}   
    
//function closeModalStar() {
//    $("#modalviewstar").data("kendoMobileModalView").close();
//}

//function closeFilterView() {
//    $("#modalviewfilter").data("kendoMobileModalView").close();
//} 

//function closeLocationView() {
//    $("#modalviewcountry").data("kendoMobileModalView").close();
//}

//function closeCuisineView() {
//   $("#modalviewcuisine").data("kendoMobileModalView").close();
//}

//function closeTypeView() {
//    $("#modalviewtype").data("kendoMobileModalView").close();
//}

function offerFilterView() {
    if (window.localStorage.getItem("appopen")==="90") {
        $("#modalviewhistoryfilter").data("kendoMobileModalView").open();
    }else {
        $("#modalviewofferfilter").data("kendoMobileModalView").open();          
    }
}

//function closeOfferFilterView() {
//   $("#modalviewofferfilter").data("kendoMobileModalView").close();
//} 

function historyFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").open();
}

function closeHistoryFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").close();
} 

function loadCeleberationTypeView() {
    $("#modalviewceleberationtype").data("kendoMobileModalView").open();
}

///function closeCeleberationTypeView() {
//   $("#modalviewceleberationtype").data("kendoMobileModalView").close();
//}

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
        elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
        
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
        if (elems[i].innerHTML === '<i class="fa fa-chevron-down fa-2x" style="color:#fff"></i>') {
            elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
        } else {
            elems[i].innerHTML = '<i class="fa fa-chevron-down fa-2x" style="color:#fff"></i>';
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
                                                       "androiddelay"     :  150, // same as above but for Android, default 70pppp

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
        elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
    
    $("body").data("kendoMobilePane").navigate("views/pl-home.html");                                                                       
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
        elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
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
    //var gurl = "https://stg-isme.jumeirah.com/ismemobileportal";
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
    var initdate = "";
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
    var homecountry = "";
    var birthdate = "";
    var residentcity = "";
    var pinnumber = "";
    var spend = 0;
    var maxspend = 0;
    var fbid = "";
    var m = [];  
    var offertype = "1"; //prelogin ofer
    var offercode = ""; //All Offers default
    var couponnumber = "";
    var newimage = "";
    var uuid = "";
    var identifier = "";
    var major = "";  
    var minor = "";
    var alcohol = "";
    var homecountryname = "";
    var residentcityname = "";
    var appad_location = "http://isme.jumeirah.com";
    var appad_location_short = "isme.jumeirah.com";  
    // var share_image = "https://stg-isme.jumeirah.com/ismemobileportal/images/large_logo_placeholder.png";
    //var flag_image = "https://stg-isme.jumeirah.com/ismemobileportal/flagimages/";
    var share_image = "http://exclusiveu.dynns.com:8088/mobilePortalServiceJumeirah/images/large_logo_placeholder.png";
    var flag_image = "http://exclusiveu.dynns.com:8088/mobilePortalServiceJumeirah/flagimages/";
    //var notification_image = "https://appapi.exclusiveu.in/mobileportal/images/36x36_icon.png";    
    //var share_image = "https://appapi.exclusiveu.in/mobileportal/images/ihg_logo.png";
    //var flag_image = "https://appapi.exclusiveu.in/mobileportal/flagimages/";
    var short_msg = "Check out the isme by Jumeirah at ";
    var offertelephone = "8004763";
    var enrollmenttelephone = "8004763";
    var customercaretelephone = "8004763";
    var cardimage = "";
    var supportemail = "info@isme.jumeirah.com";
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
    
    function getFBUserExists() {  
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/checkFBUserExist.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:mdevicestat,fbuserid:window.localStorage.getItem("FBuserID")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode != "000") {
                           window.localStorage.setItem("FBValidated", "N");
                       }else {
                           window.localStorage.setItem("FBValidated", "Y");
                       }
                   },
                   error: function (errormsg) {
                       window.localStorage.setItem("FBValidated", "N");
                       navigator.notification.alert("Cannot validate FB User ID in isme this time due to a server error! " + errormsg.statusText, function() {
                       }, "isme By Jumeirah" , "Dismiss");     
                   }
               });
    }
    
    function getFBUserData() {
        var graphPath = "me/?fields=id,email,first_name,last_name,gender,age_range,link,locale"; 
        facebookConnectPlugin.api(graphPath, ["email","public_profile"], 
                                  function(response) { 
                                      if (response.error) { 
                                          navigator.notification.alert("Error accessing Facebook " + response.error, function() {
                                          }, "isme by Jumeirah", "Dismiss");
                                      } else { 
                                          FBData = JSON.parse(JSON.stringify(response));  
                                          window.localStorage.setItem("FBuserID", FBData.id);
                                          window.localStorage.setItem("FBemail", FBData.email);
                                          window.localStorage.setItem("FBFirstNme", FBData.first_name);
                                          window.localStorage.setItem("FBLastName", FBData.last_name);
                                          window.localStorage.setItem("FBGender", FBData.gender);
                                          window.localStorage.setItem("FBValidated", "Y");
                                          postLogin.set("firstname", FBData.first_name);
                                          postLogin.set("lastname", FBData.last_name);
                                          postLogin.set("emailid", FBData.email);
                                          //check whether the ID exists
                                      
                                          this.firstname.value = window.localStorage.getItem("FBFirstNme");                                     
                                          this.lastname.value = window.localStorage.getItem("FBLastName");                                     
                                          this.emailid.value = window.localStorage.getItem("FBemail"); 
                                          mgender = window.localStorage.getItem("FBGender");
                                          if (mgender == 'female') {
                                              document.getElementById("selGender").value = "F";
                                          }else if (mgender == 'male') {
                                              document.getElementById("selGender").value = "M";
                                          } else {
                                              document.getElementById("selGender").value = "U";
                                          }

                                          navigator.notification.alert("You have been validated successfully with your Facebook account.  Please complete the missing details and continue with your subscription.", function() {
                                          }, "isme by Jumeirah", "Dismiss");
                                      } 
                                  }); 
    }
    
    function fbCleanVariables() {
        window.localStorage.setItem("FBuserID", "");
        window.localStorage.setItem("FBAccessToken", "");
        window.localStorage.setItem("FBemail", "");
        window.localStorage.setItem("FBFirstNme", "");
        window.localStorage.setItem("FBLastName", "");
        window.localStorage.setItem("FBGender", "");
        window.localStorage.setItem("FBValidated", "");
    }
    
    function fbLogin() {
        facebookConnectPlugin.login(["email"], function(response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
            if (response.status === "connected") { 
                m = JSON.parse(JSON.stringify(response));                                                       
                window.localStorage.setItem("FBuserID", m.authResponse.userID);
                window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                getFBUserData();
            } else { 
                navigator.notification.alert("Error accessing Facebook " + response.status, function() {
                }, "isme by Jumeirah", "Dismiss");
            } 
        }); 
    }
    
    function clearEnrolPage() {
        postLogin.set("firstname", "");
        postLogin.set("lastname", "");
        postLogin.set("emailid", "");
        this.firstname.value = "";
        this.lastname.value = "";
        this.emailid.value = "";
        this.emailida.value = "";
        this.mobile.value = "";
        this.siriusnumber.value = "";
        document.getElementById("selGender").value = "";
        document.getElementById("selEmirate").value = "";
        $("#enrol-tandc-accept").data("kendoMobileSwitch").check(false);
        fbCleanVariables();
    }
    
    function clearListFilter() {
        //clear Locations Near Me
        window.localStorage.setItem("distance", "");
        document.getElementById("olocation").checked = false;
      
        //Clear Restaurant Filter
        window.localStorage.setItem("restaurant", ""); 
        document.getElementById("orestauranttype").innerHTML = "All";        
        ul = document.getElementById("RestType-Filter");
        items = ul.getElementsByTagName("input");                                    

        //check where checked
        for (i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
        
        //Clear Cuisine Filter
        window.localStorage.setItem("cuisine", ""); 
        document.getElementById("ocuisine").innerHTML = "All";        
        ul = document.getElementById("Cuisine-Filter");
        items = ul.getElementsByTagName("input");                                    

        //check where checked
        for (i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
        
        //Clear Celebration Filter
        window.localStorage.setItem("celebration", ""); 
        document.getElementById("ocelebration").innerHTML = "All";        
        ul = document.getElementById("Celebration-Filter");
        items = ul.getElementsByTagName("input");                                    

        //check where checked
        for (i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
        
        //Clear Life Style Filter
        window.localStorage.setItem("lifestyle", ""); 
        document.getElementById("olifestyle").innerHTML = "All";        
        ul = document.getElementById("Offer-Filter");
        items = ul.getElementsByTagName("input");                                    

        //check where checked
        for (i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
    }
       
    window.preLogin = kendo.observable({
                                           pin1:"",
                                           pin2:"",
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
                                           firstname:"",
                                           lastname:"",
                                           emailid:"",
                                           mobile:"",
                                           checklocation:false,
                                           checkrestaurant:false,
                                           checkcuisine:false,
                                           checkcelebration:false,
                                           checklifestyle:false,
        
        
                                           queryOfferFilter:function() {
                                               window.localStorage.setItem("distance", ""); 
                                               if (window.localStorage.getItem("appopen")==="84") {
                                                   preLogin.rewardList();
                                               } else if (window.localStorage.getItem("appopen")==="85") {
                                                   postLogin.rewardList();
                                               }
                                                                                        
                                               $("#modalviewofferfilter").data("kendoMobileModalView").close();
                                           },

                                           queryOutletFilter:function() {
                                               if (document.getElementById("olocation").checked) {
                                                   window.localStorage.setItem("distance", "1"); 
                                                   getlocationparams();
                                               }else {
                                                   window.localStorage.setItem("distance", ""); 
                                               }
                                             
                                               $("#modalviewfilter").data("kendoMobileModalView").close();
                                               
                                               if (window.localStorage.getItem("appopen")==="80") {
                                                   preLogin.showAllOutlet();
                                               } else if (window.localStorage.getItem("appopen")==="81") {
                                                   preLogin.showAllLeisure();
                                               } else if (window.localStorage.getItem("appopen")==="82") {
                                                   //alert(window.localStorage.getItem("restaurant"));   
                                                   //alert(window.localStorage.getItem("cuisine")); 
                                                   //alert(window.localStorage.getItem("celebration")); 
                                                   //alert(window.localStorage.getItem("distance"));      
                                                   postLogin.showAllOutlet();
                                               }else if (window.localStorage.getItem("appopen")==="83") {
                                                   postLogin.showAllLeisure();
                                               }
                                           }
                                               
                                           ,  
        
                                           restaurantCritFilter:function() {
                                               //Restaurant Type Filter
                                               var itemconcat = "";
                                               var x = 1;
                                               var vopen = "('";
                                               var vclose = "')";
                                               ul = document.getElementById("RestType-Filter");
                                               items = ul.getElementsByTagName("input");
                                              
                                               window.localStorage.setItem("restaurant", ""); 
                                               document.getElementById("orestauranttype").innerHTML = "All";

                                               //check where checked
                                               for (i = 0; i < items.length; i++) {
                                                   y = items[i].checked ? "1" : "0";
                                                   
                                                   if (y === "1") {
                                                       if (x===1) {
                                                           itemconcat = vopen + items[i].value;
                                                       }else {
                                                           itemconcat = itemconcat + "','" + items[i].value;
                                                       }
                                                       x++;
                                                   }
                                               }
                                               
                                               if (x > 1) {
                                                   itemconcat = itemconcat + vclose;
                                                   window.localStorage.setItem("restaurant", itemconcat);
                                                   document.getElementById("orestauranttype").innerHTML = "Filter";
                                               }
                                              
                                               $("#modalviewtype").data("kendoMobileModalView").close();
                                           },
        
                                           cuisineCritFilter:function() {
                                               //Cuisine Type Filter
                                               var itemconcat = "";
                                               var x = 1;
                                               var vopen = "('";
                                               var vclose = "')";
                                               ul = document.getElementById("Cuisine-Filter");
                                               items = ul.getElementsByTagName("input");
                                               document.getElementById("ocuisine").innerHTML = "All";                                              
                                               window.localStorage.setItem("cuisine", ""); 
                                               //check where checked
                                               for (i = 0; i < items.length; i++) {
                                                   y = items[i].checked ? "1" : "0";
                                                   
                                                   if (y === "1") {
                                                       if (x===1) {
                                                           itemconcat = vopen + items[i].value;
                                                       }else {
                                                           itemconcat = itemconcat + "','" + items[i].value;
                                                       }
                                                       x++;
                                                   }
                                               }
                                               if (x > 1) {
                                                   itemconcat = itemconcat + vclose;
                                                   document.getElementById("ocuisine").innerHTML = "Filter";
                                                   window.localStorage.setItem("cuisine", itemconcat);    
                                               }
                                              
                                               $("#modalviewcuisine").data("kendoMobileModalView").close();
                                           },
        
        
                                           celebrationCritFilter:function() {
                                               //Celebration Type Filter
                                               var itemconcat = "";
                                               var x = 1;
                                               var vopen = "('";
                                               var vclose = "')";
                                               ul = document.getElementById("Celebration-Filter");
                                               items = ul.getElementsByTagName("input");
                                               document.getElementById("ocelebration").innerHTML = "All";                                              
                                               window.localStorage.setItem("celebration", ""); 
                                               //check where checked
                                               for (i = 0; i < items.length; i++) {
                                                   y = items[i].checked ? "1" : "0";
                                                   
                                                   if (y === "1") {
                                                       if (x===1) {
                                                           itemconcat = vopen + items[i].value;
                                                       }else {
                                                           itemconcat = itemconcat + "','" + items[i].value;
                                                       }
                                                       x++;
                                                   }
                                               }
                                               if (x > 1) {
                                                   itemconcat = itemconcat + vclose;
                                                   document.getElementById("ocelebration").innerHTML = "Filter";
                                                   window.localStorage.setItem("celebration", itemconcat);    
                                               }
                                                                                      
                                               $("#modalviewceleberationtype").data("kendoMobileModalView").close();
                                           },
        
                                           lifestyleCritFilter:function() {
                                               //Lifestyle Type Filter
                                               var itemconcat = "";
                                               var x = 1;
                                               var vopen = "('";
                                               var vclose = "')";
                                               ul = document.getElementById("Offer-Filter");
                                               items = ul.getElementsByTagName("input");
                                               document.getElementById("olifestyle").innerHTML = "All";                                              
                                               window.localStorage.setItem("lifestyle", ""); 
                                               //check where checked
                                               for (i = 0; i < items.length; i++) {
                                                   y = items[i].checked ? "1" : "0";
                                                   
                                                   if (y === "1") {
                                                       if (x===1) {
                                                           itemconcat = vopen + items[i].value;
                                                       }else {
                                                           itemconcat = itemconcat + "','" + items[i].value;
                                                       }
                                                       x++;
                                                   }
                                               }
                                               if (x > 1) {
                                                   itemconcat = itemconcat + vclose;
                                                   document.getElementById("olifestyle").innerHTML = "Filter";
                                                   window.localStorage.setItem("lifestyle", itemconcat);    
                                               }
                                               
                                               $("#modalviewoffertype").data("kendoMobileModalView").close();
                                           },
        
                                           getRestCuisineFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestCuisineData() });
                                               
                                               $("#Cuisine-Filter").kendoMobileListView({
                                                                                            dataSource: dataSource,
                                                                                            template: $("#CuisineFilter-Template").html()

                                                                    
                                                                                        });
                                           },
                                         
        
                                           getLifeStyleData:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferTypeData() });
                                               
                                               $("#Offer-Filter").kendoMobileListView({
                                                                                          dataSource: dataSource,
                                                                                          template: $("#OfferFilter-Template").html()

                                                                    
                                                                                      });
                                           },
                                           
                                           getCelebrationFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getOfferCeleberationData() });
                                               
                                               $("#Celebration-Filter").kendoMobileListView({
                                                                                                dataSource: dataSource,
                                                                                                template: $("#CelebrationFilter-Template").html()

                                                                    
                                                                                            });
                                           },
                                           getRestTypeFilter:function() {
                                               var dataSource = new kendo.data.DataSource({ data: getRestTypeData() });
                                               
                                               $("#RestType-Filter").kendoMobileListView({
                                                                                             dataSource: dataSource,
                                                                                             template: $("#RestFilter-Template").html()

                                                                    
                                                                                         });
                                           },    
        
                                         
                                            
                                           getFBUserData
                                           : function () {  
                                               showSpin();
                                               //Check Login Status - If not logged in and user rejects then throw enrollment error
                                               //If not login then login - If user rejects then throw enrolment error
                                               //check if Id is already exists on isme then throw error
                                               //get user data and publish on enrol page
                                               //Show a message of successful FB validation and update balance data to complete.
                                               if (window.localStorage.getItem("FBValidated")==="Y") {
                                                   navigator.notification.alert("You have already enrolled or validated your Facebook account. Please continue to enter missing information and complete your subscription if you have still not enrolled. Login to your isme membership if already enrolled.", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   hideSpin();
                                                   return;
                                               }
                                               fbCleanVariables();
                                            
                                               facebookConnectPlugin.login(["email"], function(response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                                                   if (response.status === "connected") { 
                                                       m = JSON.parse(JSON.stringify(response));                                                       
                                                       window.localStorage.setItem("FBuserID", m.authResponse.userID);
                                                       window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                                                       window.localStorage.setItem("loginmode", "FB");
                                                       getFBUserData();
                                                       hideSpin();
                                                   } else { 
                                                       navigator.notification.alert("Error accessing Facebook " + response.status, function() {
                                                       }, "isme by Jumeirah", "Dismiss");
                                                       hideSpin();
                                                       return;
                                                   } 
                                               }); 
                                           } 

                                           ,   
        
                                      

                                           fbLoginD
                                           : function () { 
                                               showSpin();
                                               
                                               facebookConnectPlugin.getLoginStatus(function(response) { 
                                                   if (response.status === "connected") {
                                                       m = JSON.parse(JSON.stringify(response));                                                       
                                                       window.localStorage.setItem("FBuserID", m.authResponse.userID);
                                                       window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                                                       window.localStorage.setItem("loginmode", "FB");
                                                       preLogin.validateUser();
                                                   } else { 
                                                       facebookConnectPlugin.login(["email"], function(response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                                                           if (response.status === "connected") { 
                                                               m = JSON.parse(JSON.stringify(response));                                                       
                                                               window.localStorage.setItem("FBuserID", m.authResponse.userID);
                                                               window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                                                               window.localStorage.setItem("loginmode", "FB");
                                                               preLogin.validateUser();
                                                           } else { 
                                                               navigator.notification.alert("Error accessing Facebook " + response.status, function() {
                                                               }, "isme by Jumeirah", "Dismiss");
                                                               hideSpin();
                                                               return;
                                                           } 
                                                       }); 
                                                   } 
                                               });
                                           }
                                            
                                           , 

                                           showConfirmation
                                           :function() {
                                               document.getElementById("confirm-memberid").innerHTML = window.localStorage.getItem("newmemberid");
                                               document.getElementById("confirm-membername").innerHTML = window.localStorage.getItem("newmembername");
                                               document.getElementById("confirm-segment").innerHTML = window.localStorage.getItem("newmembersegment"); 
                                               window.localStorage.setItem("newmemberid", "");
                                               window.localStorage.setItem("newmembername", "");
                                               window.localStorage.setItem("newmembersegment", "");
                                           },
        
                                           showEnrol
                                           :function() {
                                               showSpin();
                                               // kendo.mobile.application.showLoading(); //show loading popup
                                               listCity("UAE", document.getElementById("selEmirate"));
                                               
                                               hideSpin(); //hide loading popup
                                           },
        
                                           confirmEnrol
                                           :function() {
                                               if (window.localStorage.getItem("FBValidated") === "Y") {
                                                   getFBUserExists();
                                                   if (window.localStorage.getItem("FBValidated")==="N") {
                                                       navigator.notification.alert("There is an isme membership already associated with this Facebook account.  Unable to enrol using this Facebook account", function() {
                                                       }, "isme by Jumeirah", "Dismiss");
                                                       clearEnrolPage();
                                                       return;
                                                   }
                                               }
                                               //alert(window.localStorage.getItem("FBValidated"));
                                               if (window.localStorage.getItem("FBValidated") == "Y") {
                                                   //alert(postLogin.firstname);
                                                   if (postLogin.firstname == "") {
                                                       navigator.notification.alert("First Name is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                               
                                                   if (postLogin.lastname == "") {
                                                       navigator.notification.alert("Last Name is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                               
                                                   if (postLogin.emailid == "") {
                                                       navigator.notification.alert("Email is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                                  
                                                   if (!this.emailida) {
                                                       navigator.notification.alert("Re-enter Email Id.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                                   if (postLogin.emailid != this.emailida) {
                                                       navigator.notification.alert("Email ID do not match, re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss");
                                                       return;
                                                   }
                                               } else {
                                                   if (!this.firstname) {
                                                       navigator.notification.alert("First Name is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                               
                                                   if (!this.lastname) {
                                                       navigator.notification.alert("Last Name is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                               
                                                   if (!this.emailid) {
                                                       navigator.notification.alert("Email is required.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                                   if (!this.emailida) {
                                                       navigator.notification.alert("Re-enter Email Id.  Re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss")
                                                       return;
                                                   }
                                                   
                                                   if (this.emailid != this.emailida) {
                                                       navigator.notification.alert("Email ID do not match, re-enter", function() {
                                                       }, "isme by Jumeirah", "Dismiss");
                                                       return;
                                                   }   
                                               }
                                                
                                               if (!this.mobile) {
                                                   navigator.notification.alert("Mobile Number is required.  Re-enter", function() {
                                                   }, "isme by Jumeirah", "Dismiss")
                                                   return;
                                               }
                                           
                                               if (document.getElementById("selEmirate").value === "") {
                                                   navigator.notification.alert("Select Resident City", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return; 
                                               }
                                              
                                               if (document.getElementById("selGender").value === "") {
                                                   navigator.notification.alert("Select Gender", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return; 
                                               }
                                               
                                               if (!document.getElementById("enrol-tandc-accept").checked) {
                                                   navigator.notification.alert("Please accept Terms & Conditions to proceed", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               
                                                  if (!document.getElementById("enrol-tandc-accept-c").checked) {
                                                   navigator.notification.alert("Please accept Data Protection Policy to proceed", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               
                                               navigator.notification.confirm(
                                                   'We are about to create a new isme membership for you. Click OK to proceed.', // message
                                                   onConfirm1, // callback to invoke with index of button pressed
                                                   'isme by Jumeirah', // title
                                                   'OK,Return for Correction'          // buttonLabels
                                                   );
                                           },
                                                                 
                                           showBrandPage
                                           : function () {
                                               // alert("Hello");
                                               $("body").data("kendoMobilePane").navigate("views/brandpage.html");  
                                           } ,   
                                           loadDrawer
                                           :function() {
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
                                                                      document.getElementById("benefit-detail-view-1").style.display = "none";
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
                                                                      document.getElementById("benefit-detail-view-1").style.display = "block";
                                                                      document.getElementById("benefit-detail-view").style.display = "none";
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
                                             
                                               if (window.localStorage.getItem("appopen")==="0") {
                                                   window.localStorage.setItem("brand", e.view.params.brand);  
                                                   window.localStorage.setItem("category", e.view.params.category); 
                                                   window.localStorage.setItem("appopen", "80"); 
                                               }
                                               
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:"",preflocation:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),prefrestaurant:window.localStorage.getItem("restaurant"),lat:window.localStorage.getItem("latl"),lon:window.localStorage.getItem("lonl")
                                                                                   
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode === "000") {
                                                                  //fill the outlet template
                                                                  $("#outlet-list").kendoMobileListView({
                                                                             
                                                                                                            dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                            template: $("#outletTemplate").html()
                                                                                                        });
                                                                  hideSpin(); //hide loading popup
                                                                  if (getData.outletlist.length === 0) {
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
                                               if (window.localStorage.getItem("appopen")==="0") {
                                                   window.localStorage.setItem("brand", e.view.params.brand);  
                                                   window.localStorage.setItem("category", e.view.params.category); 
                                                   window.localStorage.setItem("appopen", "81"); 
                                               }
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:"",preflocation:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),prefrestaurant:window.localStorage.getItem("restaurant"),lat:window.localStorage.getItem("latl"),lon:window.localStorage.getItem("lonl")
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                            
                                                              if (getData.statuscode === "000") {
                                                                  $("#leisure-list").kendoMobileListView({
                                                                             
                                                                                                             dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                             template: $("#leisureTemplate").html()
                                                                                                         });
                                                                  hideSpin(); //hide loading popup
                                                                  if (getData.outletlist.length === 0) {
                                                                      navigator.notification.alert("No locations exists for the selected property", function() {
                                                                      }, "isme by Jumeirah", "Dismiss")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                                  //fill the outlet template
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
                                                                  // alert(getData.imageurll);                                                                                                                                                                  
                                                                  lat = m[0];
                                                                  lon = m[1];
                                                                  document.getElementById("property-detail-div").style.display = "block";
                                                                  document.getElementById("detail-title").innerHTML = getData.hotelname;
                                                                  document.getElementById("brandimage").src = getData.imageurll;
                                                                  document.getElementById("property-short-1").innerHTML = "<pre class='fulljustify'>" + getData.shortdes + "</pre>";
                                                                  document.getElementById("property-short-2").innerHTML = "<pre class='fulljustify'>" + getData.shortdes1 + "</pre>";                                                                  
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
                                               if (window.localStorage.getItem("appopen")==="0") {
                                                   window.localStorage.setItem("appopen", "84"); 
                                               }
                                                
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/offerListGeo.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   //merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                   merchantcode :window.localStorage.getItem("merchant"),offercode:offercode,offertype:offertype,mdevice:window.localStorage.getItem("mdevicestat"),city:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),segmentcode:segmentcode
                                                              
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  $("#offer-list-view").kendoMobileListView({
                                                                                                                dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                template: $("#offerListTemplate").html()
                                                                                                                    
                                                                                                            });
                                                                  hideSpin(); //hide loading popup
                                                                  if (getData.offerlist.length == 0) {
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
        
                                           showdesc
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
        
                                           showOfferOutlet
                                           : function() {
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
                                               clearListFilter();
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
                                                   window.localStorage.setItem("loginmode", "");
                                                   fbCleanVariables();
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
                                                                      //  firsttime = "1";  
                                                                      googleapikey = getData.googleapikey;  
                                                                      city = getData.citycode;
                                                                      country = getData.countrycode;
                                                                      positiono = getData.position.split(",");
                                                                      lat = positiono[0];
                                                                      lon = positiono[1];
                                                                      window.localStorage.setItem("latl", lat);
                                                                      window.localStorage.setItem("lonl", lon);
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
                                                       firstname = window.localStorage.getItem("firstname");
                                                       birthdate = window.localStorage.getItem("birthdate");
                                                       residentcity = window.localStorage.getItem("residentcity");
                                                       homecountry = window.localStorage.getItem("homecountry");
                                                       initdate = window.localStorage.getItem("initdate");
                                                       spend = window.localStorage.getItem("spend");
                                                       maxspend = window.localStorage.getItem("maxspend");
                                                       fbid = window.localStorage.getItem("fbid");
                                                       alcohol = window.localStorage.getItem("alcohol");
                                                       homecountryname = window.localStorage.getItem("homecountryname");
                                                       residentcityname = window.localStorage.getItem("residentcityname");
                                                   
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
                                                       magicnumber = "";
                                                       firstname = "";
                                                       birthdate = "";
                                                       residentcity = "";
                                                       homecountry = "";
                                                       initdate = "";
                                                       alcohol = "";
                                                       homecountryname = "";
                                                       residentcityname = "";
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
                                           initPin
                                           :function() {
                                               preLogin.set("pin1", "");
                                               preLogin.set("pin2", "");
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
                                               // alert(window.localStorage.getItem("loginmode"));
                                               // alert(window.localStorage.getItem("FBuserID"));
                                               if (window.localStorage.getItem("loginmode") == "") {
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
                                                   
                                               if (!document.getElementById("enrol-tandc-accept-a").checked) {
                                                   navigator.notification.alert("Please accept Terms & Conditions to proceed", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               
                                                  if (!document.getElementById("enrol-tandc-accept-b").checked) {
                                                   navigator.notification.alert("Please accept Data Protection Policy to proceed", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                                   
                                                   customer = this.username;
                                                   password = this.password;
                                               }
                                               
                                               
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
                                                                                   merchantcode :merchant,customer:customer,password:password,mdevice:mdevicestat,mdevicef:mdevice,muuid:muuid,mversion:mversion,mplatform:mplatform,mfirsttime: window.localStorage.getItem("notification"),mmagicnumber:"",fbuserid:window.localStorage.getItem("FBuserID"),loginmode:window.localStorage.getItem("loginmode")
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
                                                                  initdate = getData.initdate;
                                                                  homecountry = getData.homecountry;
                                                                  birthdate = getData.dateofbirth;
                                                                  residentcity = getData.residentcity;
                                                                  pinnumber = getData.pinnumber;
                                                                  spend = getData.spend;
                                                                  maxspend = getData.maxspend;
                                                                  fbid = getData.fbid;  
                                                                  alcohol = getData.alcohol;
                                                                  homecountryname = getData.homecountryname;
                                                                  residentcityname = getData.residentcityname;
                                                                  //set Local Storage as cookies to retain login
                                                                  window.localStorage.setItem("customer", customer);
                                                                  window.localStorage.setItem("customername", customername);
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
                                                                  window.localStorage.setItem("residentcity", residentcity);
                                                                  window.localStorage.setItem("homecountry", homecountry);
                                                                  window.localStorage.setItem("birthdate", birthdate);
                                                                  window.localStorage.setItem("firstname", firstname);
                                                                  window.localStorage.setItem("initdate", initdate);
                                                                  window.localStorage.setItem("spend", spend);
                                                                  window.localStorage.setItem("maxspend", maxspend);
                                                                  window.localStorage.setItem("fbid", fbid);
                                                                  window.localStorage.setItem("alcohol", alcohol);
                                                                  window.localStorage.setItem("homecountryname", homecountryname);
                                                                  window.localStorage.setItem("residentcityname", residentcityname);
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
                                                                  window.localStorage.setItem("loginmode", "");
                                                                  window.localStorage.setItem("FBuserID", "");
                                                                   
                                                                  if ((getData.deviceinfo.length === 0)) {
                                                                      $("body").data("kendoMobilePane").navigate("views/tokenpage.html");      
                                                                  }else if (pinnumber.length===0) {
                                                                      $("body").data("kendoMobilePane").navigate("views/setpin.html");                                                                            
                                                                  }else {
                                                                      password = getData.certificate;
                                                                      window.localStorage.setItem("password", password);
                                                                      window.localStorage.setItem("loggedin", "1");                                                                   
                                                                      $("body").data("kendoMobilePane").navigate("views/pl-home.html"); 
                                                                  }
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Login. " + getData.statusdesc, function() {
                                                                  }, "isme by Jumeirah", "Dismiss")
                                                                  window.localStorage.setItem("loginmode", "");
                                                                  window.localStorage.setItem("FBuserID", "");
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Login.   [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                              }, "isme by Jumeirah", "Dismiss")
                                                              window.localStorage.setItem("loginmode", "");
                                                              window.localStorage.setItem("FBuserID", "");
                                                              
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
                                                                  if (getData.pinnumber.length > 0) {
                                                                      password = getData.certificate;
                                                                      window.localStorage.setItem("password", password); //Get and Store Certificate
                                                                      window.localStorage.setItem("loggedin", "1");
                                                                      $("body").data("kendoMobilePane").navigate("views/pl-home.html");                                                                       
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      $("body").data("kendoMobilePane").navigate("views/setpin.html");  
                                                                  }
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
        
                                           savePIN 
                                           : function () {
                                               if (!this.pin1 || !this.pin2) {
                                                   navigator.notification.alert("Invalid PIN Number", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                               
                                               if (this.pin1 != this.pin2) {
                                                   navigator.notification.alert("PIN Numbers do not match, re-enter", function() {
                                                   }, "isme by Jumeirah", "Dismiss");
                                                   return;
                                               }
                                           
                                               showSpin();
                                               createPIN(this.pin2, "0");
                                               preLogin.set("pin1", "");
                                               preLogin.set("pin2", ""); 
                                           },
    
                                           requestPasswordChangeURL:
                                           function () {
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
                                                                                   merchantcode :merchant,customerid:"",emailid:this.emailid1,mdevice:mdevicestat,mmagicnumber:""
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
                                           plgetfaq
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
                                                                      $("#pl-faqlist-all").kendoMobileListView({
                                                                                                                   dataSource: kendo.data.DataSource.create({data: getData.faqlist}),
                                                                                                                   template: $("#pl-faqTemplate").html()
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
                                            emailid1:"",
                                            mobile1:"",
                                            date1:"",
                                            hotelnumber1:"",
                                            homecountry1:"",
                                            residentcity1:"",
                                            newpin1:"",
                                            newpin2:"",
                                            srpin1:"",
                                            depin1:"",
                                            setpass:"",
                                            msgsequence:"",
                                            lifestyle:"",
        
                                            getSummary:function () {
                                                showSpin();
                                                window.localStorage.setItem("appopen", "0");
                                                clearListFilter();
                                                if (firsttime==="") {
                                                    $.ajax({ 
                                                               type: "POST",
                                                               cache:false,
                                                               async:false,
                                                               timeout:20000,
                                                               url: gurl + "/summaryReport.aspx",
                                                               contentType: "application/json; charset=utf-8",
                                                               data: JSON.stringify({
                                                                                        merchantcode :window.localStorage.getItem("merchant"),customerid:window.localStorage.getItem("customer"),password:window.localStorage.getItem("password"),mdevice:window.localStorage.getItem("mdevicestat")
                                                                                    }),   
                                                               success: function (data) { 
                                                                   var getData = JSON.parse(data);
                                                                   if (getData.statuscode == "000") {
                                                                       //document.getElementById("home-page").style.display = "block";
                                                                       window.localStorage.setItem("spend", getData.spenda);
                                                                       window.localStorage.setItem("maxspend", getData.maxspend);
                                                                   }else {
                                                                       navigator.notification.alert("Cannot retrieve Wallet! " + getData.statusdesc, function() {
                                                                       }, "HD Rewards", "Dismiss")          
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               },
                                                               error: function (errormsg) {
                                                                   navigator.notification.alert("System Error, Cannot retrieve Wallet  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                                   }, "HD Rewards", "Dismiss")
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           });
                                                }
                                                firsttime = "1"; 
                                                window.localStorage.setItem("appopen", "0"); 
                                                if (window.localStorage.getItem("fbid") != "99") {
                                                    document.getElementById("fblink-show").style.display = "none";
                                                }

                                                window.localStorage.setItem("selfredeem", ""); 
                                                document.getElementById("main-title").innerHTML = "Hello, " + window.localStorage.getItem("firstname");
                                                document.getElementById("profile-name").innerHTML = window.localStorage.getItem("customername");
                                                document.getElementById("profile-number").innerHTML = window.localStorage.getItem("customer");
                                                document.getElementById("profile-init").innerHTML = "Member Since " + window.localStorage.getItem("initdate");
                                                if (window.localStorage.getItem("segmentcode") === "1000") {
                                                    document.getElementById("profile-type").innerHTML = "isme ";
                                                }else {
                                                    document.getElementById("profile-type").innerHTML = "isme elite";
                                                }
                                                //Generate Spend Bar
                                                var i = (parseInt(window.localStorage.getItem("spend")) / parseInt(window.localStorage.getItem("maxspend"))) * 100
                                                m = i;
                                                n=i;
                                               
                                                if (m>70){
                                                    n=70;
                                                }
                                                
                                                if(i>=90){
                                                    y=83;
                                                    }else if(i>=17){
                                                        y=i;
                                                        }else{
                                                            y=17;
                                                }
                                                document.getElementById("spend-amount").style.margin = "auto auto auto " + parseInt(y-15) + "%";
                                                document.getElementById("spend-bar").style.width = m + "%";
                                                
                                                 if(i>100){
                                              
                                                    document.getElementById("spend-amount").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("maxspend")+"K+";
                                                    }else{
                                                             
                                                
                                                if(m>=80){
                                                    document.getElementById("spend-amount").innerHTML = "<div style='width:15%;float:right;text-align:right;margin-right:2%'>" +  window.localStorage.getItem("maxspend")+"K" + "</div>";
                                                    }else{
                                                document.getElementById("spend-amount").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("spend")+"K" + "<div style='width:15%;float:right;text-align:right;margin-right:2%'>" +  window.localStorage.getItem("maxspend")+"K" + "</div>" ;
                                                        }
                                                }                
                                                hideSpin(); //hide loading popup
                                            },
                                           
        
        
                                            getSummaryplus:function () {
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/summaryReport.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),   
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (window.localStorage.getItem("fbid") != "99") {
                                                                       document.getElementById("fblink-show-p").style.display = "none";
                                                                   }
                                                                   document.getElementById("home-page-p").style.display = "block";
                                                                   window.localStorage.setItem("spend", getData.spenda);
                                                                   window.localStorage.setItem("maxspend", getData.maxspend);
                                                                 
                                                                   // document.getElementById("wallet-div").style.display = "block";
                                                                   // document.getElementById("summary-1").innerHTML = getData.cashbackbalance;
                                                                   // document.getElementById("summary-2").innerHTML = getData.vouchercount;
                                                                   // document.getElementById("summary-3").innerHTML = getData.vouchercountexpiry;
                                                                   // document.getElementById("summary-4").innerHTML = getData.spendbalance;
                                                                   // document.getElementById("summary-5").innerHTML = getData.referralbalance;
                                                                   // document.getElementById("summary-6").innerHTML = getData.rewardpointbalance;
                                                                   // document.getElementById("summary-7").innerHTML = getData.tierpointbalance;
                                                                   window.localStorage.setItem("selfredeem", ""); 
                                                                   document.getElementById("main-title-p").innerHTML = "Hello, " + window.localStorage.getItem("firstname");
                                                                   document.getElementById("profile-name-p").innerHTML = window.localStorage.getItem("customername");
                                                                   document.getElementById("profile-number-p").innerHTML = window.localStorage.getItem("customer");
                                                                   document.getElementById("profile-init-p").innerHTML = "Member Since " + window.localStorage.getItem("initdate");
                                                                   if (window.localStorage.getItem("segmentcode") === "1000") {
                                                                       document.getElementById("profile-type-p").innerHTML = "isme ";
                                                                   }else {
                                                                       document.getElementById("profile-type-p").innerHTML = "isme elite";
                                                                   }
                                                                   //Generate Spend Bar
                                                                   var i = (parseInt(window.localStorage.getItem("spend")) / parseInt(window.localStorage.getItem("maxspend"))) * 100
                                                                   m = i;
                                                                   if (i > 75) {
                                                                       i = 75;  
                                                                   }
                                                
                                                                   document.getElementById("spend-amount-p").style.margin = "auto auto auto " + parseInt(i + 5) + "%";
                                                                   document.getElementById("spend-bar-p").style.width = m + "%";
                                                                   document.getElementById("spend-amount-p").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("spend");
                                                                  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet! " + getData.statusdesc, function() {
                                                                   }, "HD Rewards", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("System Error, Cannot retrieve Wallet  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "HD Rewards", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            loadProfile
                                            :function() {
                                                document.getElementById("back1-filter").style.display = "none";
                                                document.getElementById("profile-picture-1").src = window.localStorage.getItem("cuspict");
                                                document.getElementById("pro-name").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? "Name : " + window.localStorage.getItem("customername") :"Name : NA" ;
                                                document.getElementById("pro-birthdate").innerHTML = (window.localStorage.getItem("birthdate") != null && window.localStorage.getItem("birthdate").length > 0) ? "My Birtday : " + window.localStorage.getItem("birthdate") : "My Birthday : NA";
                                                document.getElementById("pro-homecountry").innerHTML = (window.localStorage.getItem("homecountry") != null) && window.localStorage.getItem("homecountry").length > 0 ? "Nationality : " + window.localStorage.getItem("homecountryname") : "Nationality : NA";
                                                document.getElementById("pro-residentcity").innerHTML = (window.localStorage.getItem("residentcity") != null && window.localStorage.getItem("residentcity").length > 0) ? "Emirate : " + window.localStorage.getItem("residentcityname") : "Emirate : NA";
                                                //document.getElementById("pro-number").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? "Member # : " + window.localStorage.getItem("customer") : "Member # : NA";
                                                //document.getElementById("pro-init").innerHTML = (window.localStorage.getItem("initdate") != null && window.localStorage.getItem("initdate").length > 0) ? "Member Since : " + window.localStorage.getItem("initdate") : "Member Since : NA";
                                                document.getElementById("pro-expiry").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
                                                document.getElementById("pro-hotelmember").innerHTML = (window.localStorage.getItem("magicnumber") != null && window.localStorage.getItem("magicnumber").length > 0) ? "Jumeirah Sirius No. : " + window.localStorage.getItem("magicnumber") : "Jumeirah Sirius No. : NA";
                                                back1_profile();
                                                if (window.localStorage.getItem("segmentcode") === "1000") {
                                                    document.getElementById("pro-type").innerHTML = "isme Member";
                                                }else {
                                                    document.getElementById("pro-type").innerHTML = "isme elite Member";
                                                }
                                            },
        
                                            logMeOut:function () {
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
                                                               window.localStorage.setItem("muuid", "");
                                                               window.localStorage.setItem("mversion", "");
                                                               window.localStorage.setItem("mplatform", "");
                                                               window.localStorage.setItem("loggedin", "");
                                                               window.localStorage.setItem("residentcity", "");
                                                               window.localStorage.setItem("homecountry", "");
                                                               window.localStorage.setItem("birthdate", "");
                                                               window.localStorage.setItem("firstname", "");
                                                               window.localStorage.setItem("initdate", "");
                                                               window.localStorage.setItem("magicnumber", magicnumber);
                                                               window.localStorage.setItem("loginmode", "");
                                                               window.localStorage.setItem("spend", "");
                                                               window.localStorage.setItem("maxspend", "");
                                                               window.localStorage.setItem("fbid", "");
                                                               fbCleanVariables();
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
                                                               residentcity = "";
                                                               homecountry = "";
                                                               birthdate = "";
                                                               firstname = "";
                                                               initdate = "";
                                                               magicnumber = "";
                                                               window.setTimeout(window.plugins.nativepagetransitions.slide({
                                                                                                                                "duration"         :  500, // in milliseconds (ms), default 400
                                                                                                                                "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                                                                                "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                                                                                "androiddelay"     :  150, // same as above but for Android, default 70

                                                                                                                                'direction': 'right',
                                                                                                                                'href': '#views/home.html'
                                                                                                                            }), 500);  
                                                               hideSpin(); //hide loading popup
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
                                                benefitcode = window.localStorage.getItem("segmentcode"); 
                                                showSpin(); //show loading popup
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/benefitlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,benefitcode:benefitcode,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   //fill the outlet template
                                                                   if (getData.benefitlist.length > 0) {
                                                                       document.getElementById("back1-filter").style.display = "none";
                                                                       document.getElementById("pl-benefit-detail-view").style.display = "block";
                                                                       document.getElementById("benefit-head").innerHTML = getData.benefitlist[0].titlename;
                                                                       document.getElementById("benefit-text6").innerHTML = "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                       window.localStorage.setItem("social_shortmsg", getData.benefitlist[0].shortdes1);
                                                            
                                                                       window.localStorage.setItem("social_message", "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>");
                                                                       window.localStorage.setItem("social_image", getData.benefitlist[0].imageurll); 
                                                                       back1_profile();
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
        
                                            showdesc
                                            : function (e) {
                                                offercode = e.view.params.cpn; //offer code for single offer inquiry
                                                offertype = "2"; //single offer inquiry
                                                back2_profile();
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:window.localStorage.getItem("mdevicestat")
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
                                                                   window.localStorage.setItem("redeemoffer", getData.offerlist[0].itemcode); 
                                                                   $("#pl-tandc-accept").data("kendoMobileSwitch").check(false);
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
                                                                                    merchantcode :merchant,offercode:offercode,mdevice:window.localStorage.getItem("mdevicestat")
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
                                                if (window.localStorage.getItem("appopen")==="0") {
                                                    window.localStorage.setItem("appopen", "85"); 
                                                }
                                      
                                                back_profile();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerListGeo.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    // merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                    merchantcode :window.localStorage.getItem("merchant"),offercode:offercode,offertype:offertype,mdevice:window.localStorage.getItem("mdevicestat"),city:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),segmentcode:segmentcode
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   //fill the outlet template
                                                                   $("#pl-offer-list-view").kendoMobileListView({
                                                                                                                    dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                    template: $("#pl-offerListTemplate").html()
                                                                                                                    
                                                                                                                });
                                                                   hideSpin(); //hide loading popup
                                                                   if (getData.offerlist.length == 0) {
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
                                                                                    merchantcode :merchant,brandcode:"",outletcode:outletcode,mdevice:window.localStorage.getItem("mdevicestat")
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
                                                                   back2_profile();
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
                                                back_profile();
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/propertyList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,brandcode:window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                      
                                                               if (getData.statuscode == "000") {
                                                                   //fill the outlet template
                                                                   $("#pl-property-list").kendoMobileListView({
                                                                                                                  dataSource: kendo.data.DataSource.create({data: getData.propertylist}),
                                                                                                                  template: $("#pl-explorelisttemplate").html()
                                                                                                                    
                                                                                                              });
                                                                   hideSpin(); //hide loading popup
                                                                   if (getData.propertylist.length === 0) {
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
                                                if (window.localStorage.getItem("appopen")==="0") {
                                                    window.localStorage.setItem("brand", e.view.params.brand);  
                                                    window.localStorage.setItem("category", e.view.params.category); 
                                                    window.localStorage.setItem("appopen", "82"); 
                                                }
                                                back_profile();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/outletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:"",preflocation:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),prefrestaurant:window.localStorage.getItem("restaurant"),lat:window.localStorage.getItem("latl"),lon:window.localStorage.getItem("lonl")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               window.localStorage.setItem("brandcode", "");
                                                       
                                                               if (getData.statuscode === "000") {
                                                                   //fill the outlet template
                                                                   $("#pl-outlet-list").kendoMobileListView({
                                                                             
                                                                                                                dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                template: $("#pl-outletTemplate").html()
                                                                                                            });
                                                                   hideSpin(); //hide loading popup
                                                                   if (getData.outletlist.length === 0) {
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
                                                if (window.localStorage.getItem("appopen")==="0") {
                                                    window.localStorage.setItem("brand", e.view.params.brand);  
                                                    window.localStorage.setItem("category", e.view.params.category); 
                                                    window.localStorage.setItem("appopen", "83"); 
                                                }
                                                
                                                back_profile();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/outletlist.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:"",preflocation:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),prefrestaurant:window.localStorage.getItem("restaurant"),lat:window.localStorage.getItem("latl"),lon:window.localStorage.getItem("lonl")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               window.localStorage.setItem("brandcode", "");
                                                               if (getData.statuscode === "000") {
                                                                   if (getData.outletlist.length === 0) {
                                                                       navigator.notification.alert("No locations exists for the selected property", function() {
                                                                       }, "isme by Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                                   //fill the outlet template
                                                                   $("#pl-leisure-list").kendoMobileListView({
                                                                             
                                                                                                                 dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                 template: $("#pl-leisureTemplate").html()
                                                                                                             });
                                                                   hideSpin(); //hide loading popup
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
                                                                                    merchantcode :merchant,brandcode: window.localStorage.getItem("brandcode"),mdevice:window.localStorage.getItem("mdevicestat")
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
                                                                   document.getElementById("pl-property-short-1").innerHTML = "<pre class='fulljustify'>" + getData.shortdes + "</pre>";
                                                                   document.getElementById("pl-property-short-2").innerHTML = "<pre class='fulljustify'>" + getData.shortdes1 + "</pre>";                                                                  
                                                                   document.getElementById("pl-property-long-1").innerHTML = "<pre class='fulljustify'>" + getData.longdes + "</pre>";
                                                            
                                                                   window.localStorage.setItem("social_message", getData.shortdes + "\n\n" + getData.shortdes1 + "\n\n" + getData.longdes);
                                                                   window.localStorage.setItem("social_image", getData.imageurll); 
                                                                   window.localStorage.setItem("lat", lat);
                                                                   window.localStorage.setItem("lon", lon);
                                                                   back2_profile();
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
                                            }
        
                                            ,

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
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:window.localStorage.getItem("mdevicestat"),outletcode:outletcode
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
                                           
                                            activateoffer
                                            : function (e) {
                                                if (!document.getElementById("pl-tandc-accept").checked) {
                                                    navigator.notification.alert("Please Accept Terms & Conditions to proceed", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                showSpin();
                                                
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/issuecoupon.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,customerid:customer,password:password,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   postLogin.set("transactionref", getData.transactionref);
                                                                   postLogin.set("couponcode", getData.couponcode);
                                                                   postLogin.set("couponname", getData.couponname);                
                                                                   postLogin.set("couponcategory", getData.couponcategory);   
                                                                   
                                                                   window.plugins.nativepagetransitions.slide({
                                                                                                                  "duration"         :  500, // in milliseconds (ms), default 400
                                                                                                                  "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                                                                  "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                                                                  "androiddelay"     :  150, // same as above but for Android, default 70

                                                                                                                  'direction': 'up',
                                                                                                                  'href': '#views/pl-confirmpage.html'
                                                                                                              });
                                                                   
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
                                            activateAndRedeem
                                            : function () {
                                                if (!document.getElementById("pl-tandc-accept").checked) {
                                                    navigator.notification.alert("Please Accept Terms & Conditions to proceed", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                window.localStorage.setItem("selfredeem", "V"); 
                                                $("#modalviewenterpin").data("kendoMobileModalView").open(); 
                                            },
                                            walletRedeem
                                            : function () {
                                                if (!document.getElementById("wallet-tandc").checked) {
                                                    navigator.notification.alert("Please Accept Terms & Conditions to proceed", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                window.localStorage.setItem("selfredeem", "M"); 
                                                $("#modalviewenterpin").data("kendoMobileModalView").open(); 
                                            },
        
                                            confirmIssueResponse
                                            :function() {
                                                back8_profile();
                                                document.getElementById("offer-1").innerHTML = postLogin.transactionref;
                                                document.getElementById("offer-2").innerHTML = postLogin.couponname;
                                                //document.getElementById("offer-3").innerHTML = postLogin.couponcategory;
                                            },
                                            mywalletofferlist
                                            : function () {
                                                showSpin();
                                                back1_profile();
                                                document.getElementById("back1-filter").style.display = "none";
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/mywalletvouchers.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,mdevice:window.localStorage.getItem("mdevicestat")
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
                                            showOfferItem
                                            : function (e) {
                                                offercode = e.view.params.cpn; //offer code for single offer inquiry
                                                offertype = "2"; //single offer inquiry
                                                back2_profile();
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/offerList.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:window.localStorage.getItem("mdevicestat")
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
                                                                   window.localStorage.setItem("redeemoffer", getData.offerlist[0].itemcode); 
                                                                   $("#pl-tandc-accept").data("kendoMobileSwitch").check(false);
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
        
                                            mywalletofferdetail
                                            : function (e) {
                                                couponnumber = e.view.params.cpn;
                                                showSpin();
                                                back2_profile();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/mywalletvoucherdetail.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,couponnumber:couponnumber,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode === "000") {
                                                                   if (getData.myvoucherdetail.length > 0) {
                                                                       document.getElementById("wallet-voucher-div").style.display = "block";
                                                                       window.localStorage.setItem("selfredeemVouchernumber", getData.myvoucherdetail[0].itemcode);
                                                                       document.getElementById("myvoucherdetaila").src = getData.myvoucherdetail[0].imageurll;                                                                
                                                                       document.getElementById("voucher-number").innerHTML = getData.myvoucherdetail[0].itemcode;
                                                                       document.getElementById("voucher-name").innerHTML = getData.myvoucherdetail[0].itemname;
                                                                       document.getElementById("voucher-expiry").innerHTML = getData.myvoucherdetail[0].couponexpirydate;
                                                                       document.getElementById("myoffer-description").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].itemdescription + "</pre>";
                                                                       document.getElementById("myoffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].remark + "</pre>";
                                                            
                                                                       document.getElementById("qr-image-3").style.background = "url(" + getData.myvoucherdetail[0].imageurls + ") no-repeat center center";
                                                                       document.getElementById("qr-image-3").style.backgroundSize = "cover";
                                                                       window.localStorage.setItem("selfredeem", "M");
                                                                       offercode = getData.myvoucherdetail[0].couponcode;
                                                                    
                                                                       $("#wallet-tandc").data("kendoMobileSwitch").check(false);    
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No Vouchers available in Wallet", function() {
                                                                       }, "isme By Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet " + getData.statusdesc, function() {
                                                                   }, "isme By Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot retrieve Wallet  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
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
                                         
        
                                            editsettingdata
                                            :function() {
                                                showSpin(); 
                                                listCountry();
                                                window.localStorage.setItem("isset", "0");
                                              
                                                listCity("UAE", document.getElementById("selCity"));  
                                                postLogin.set("emailid1", window.localStorage.getItem("emailid"));
                                                postLogin.set("mobile1", window.localStorage.getItem("mobilenumber"));
                                                postLogin.set("date1", window.localStorage.getItem("birthdate"));
                                                postLogin.set("hotelnumber1", window.localStorage.getItem("magicnumber"));
                                                back7_profile();
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
                                                }else {
                                                    $("#profile-autolocation").data("kendoMobileSwitch").check(false);
                                                }
                                        
                                                if (alcohol == "1") {
                                                    $("#profile-alcohol").data("kendoMobileSwitch").check(true);
                                                }else {
                                                    $("#profile-alcohol").data("kendoMobileSwitch").check(false);
                                                }
                                                hideSpin();
                                            },
                                            getCity
                                            :function() {
                                                showSpin();
                                                // kendo.mobile.application.showLoading(); //show loading popup
                                                var e = document.getElementById("selCountry");
                                                var str = e.options[e.selectedIndex].value;
                                                listCity(str, document.getElementById("selCity"));
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
                                                alert("Image");
                                                var success = function (imageData) {
                                                    var image = document.getElementById('profile-picture-1');
                                                    image.src = "data:image/png;base64," + imageData;
                                                    //image.src = imageURI;
                                                    newimage = imageData;
                                                    saveImageFile(imageData);
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
                                                 alert("Image1");
                                                var success = function (imageData) {
                                                    var image = document.getElementById('profile-picture-1');
                                                    image.src = "data:image/png;base64," + imageData;
                                                    //image.src = imageURI;
                                                    newimage = imageData;
                                                    saveImageFile(imageData);
                                                };
                                                var error = function () {
                                                    navigator.notification.alert("Unfortunately Image cannot be retrieved");
                                                };
                                                  
                                                var config = {
                                                    quality : 75,
                                                    destinationType : Camera.DestinationType.DATA_URL,
                                                    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
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
        
                                            closeEnterModalPasswordandEnterPIN:function() {
                                                if (!this.setpass) {
                                                    navigator.notification.alert("Invalid Password or Empty", function() {
                                                    }, "isme by Jumeirah", "Dismiss")  
                                                    return;
                                                }
                                                showSpin(); 
                                             
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/validatePassword.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,setpass:this.setpass,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode === "000") {
                                                                   postLogin.set("setpass", "");
                                                                   $("#modalviewpassword").data("kendoMobileModalView").close();
                                                                   $("#modalviewpin").data("kendoMobileModalView").open();
                                                                   hideSpin();
                                                               }else {
                                                                   navigator.notification.alert("Error setting PIN " + getData.statusdesc, function() {
                                                                   }, "isme by Jumeirah", "Dismiss")          
                                                                   hideSpin();
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, cannot verify password. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme by Jumeirah", "Dismiss")
                                                               hideSpin();
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            }
                                            ,
                                            plsavePIN 
                                            : function () {
                                                if (!this.newpin1 || !this.newpin2) {
                                                    navigator.notification.alert("Invalid PIN Number", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                               
                                                if (this.newpin1 != this.newpin2) {
                                                    navigator.notification.alert("PIN Numbers do not match, re-enter", function() {
                                                    }, "isme by Jumeirah", "Dismiss");
                                                    return;
                                                }
                                           
                                                showSpin();
                                                createPIN(this.newpin2, "1");
                                                postLogin.set("newpin1", "");
                                                postLogin.set("newpin2", ""); 
                                            },
        
                                            validateredemptionpin
                                            : function () {
                                                if (!this.srpin1) {
                                                    navigator.notification.alert("Invalid Redemption PIN or Empty", function() {
                                                    }, "isme By Jumeirah", "Dismiss");
                                                    return;
                                                }
                                                showSpin();
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/validateVoucherRedemptionCredential.aspx", 
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),password:window.localStorage.getItem("password"),customer:customer,pin:this.srpin1
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode === "000") { //Login Successful
                                                                   postLogin.set("srpin1", "");
                                                                   $("#modalviewenterpin").data("kendoMobileModalView").close();
                                                                   $("#modalviewstaffpin").data("kendoMobileModalView").open();  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Invalid Redemption PIN", function() {
                                                                   }, "isme By Jumeirah", "Dismiss")         
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error. Cannot verify Redemption PIN [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
        
                                            completeRedemptionDiscount
                                            : function () {
                                                if (!this.depin1) {
                                                    navigator.notification.alert("Invalid or Empty Restaurant Staff PIN", function() {
                                                    }, "isme By Jumeirah", "Dismiss");
                                                    return;
                                                }
                                       
                                                $("#modalviewstaffpin").data("kendoMobileModalView").close();
                                                if (window.localStorage.getItem("selfredeem")==="D") {
                                                    redeemDiscount();
                                                } else if (window.localStorage.getItem("selfredeem")==="V") {
                                                    activateRedeemVoucher();
                                                } else if (window.localStorage.getItem("selfredeem")==="M") {
                                                    redeemVoucher();
                                                } else {
                                                    navigator.notification.alert("Invalid Redemption Type. Contact Technical Support", function() {
                                                    }, "isme By Jumeirah", "Dismiss");
                                                    return;  
                                                }
                                            },
        
                                            discountRedeemConfirm
                                            : function () {
                                                document.getElementById("discount-1").innerHTML = window.localStorage.getItem("self-authorization");
                                                document.getElementById("discount-2").innerHTML = window.localStorage.getItem("self-outletname");
                                                document.getElementById("discount-3").innerHTML = window.localStorage.getItem("self-vouchername");
                                            },
                                            selfRedeemConfirm
                                            : function () {
                                                showSpin();  
                                                back8_profile();
                                                document.getElementById("vouchernumber").innerHTML = window.localStorage.getItem("self-vouchernumber");
                                                document.getElementById("vouchername").innerHTML = window.localStorage.getItem("self-vouchername");
                                                document.getElementById("outletname").innerHTML = window.localStorage.getItem("self-outletname");
                                                document.getElementById("authcode").innerHTML = window.localStorage.getItem("self-authorization");
                                                window.localStorage.setItem("self-vouchernumber", "");
                                                window.localStorage.setItem("self-vouchername", "");
                                                window.localStorage.setItem("self-authorization", "");
                                                window.localStorage.setItem("self-outletname", "");
                                                window.localStorage.setItem("selfredeemVouchernumber", "");
                                                window.localStorage.setItem("redeemoffer", "")
                                                window.localStorage.setItem("selfredeem", "")
                                                hideSpin(); //hide loading popup
                                            },
                                            resetPIN:function() {
                                                postLogin.set("srpin1", "");
                                                postLogin.set("depin1", "");
                                            },
        
                                                                                  
                                            myhistorylist
                                            : function () {
                                                var t = "";//document.getElementById("selCountry").value;
                                                showSpin();
                                                back1_profile();
                                                window.localStorage.setItem("appopen", "90");
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/archivehistory.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:window.localStorage.getItem("mdevicestat"),mexcl:""
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.historylist.length > 0) {
                                                                       $("#pl-history-list").kendoMobileListView({
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.historylist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                                                                                     template: $("#pl-historyListTemplate").html()
                                                                                                                     //endlessScroll: true
                                                                                                                      
                                                                                                                 });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("No transaction history available for your membership", function() {
                                                                       }, "isme By Jumeirah", "Dismiss")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get history " + getData.statusdesc, function() {
                                                                   }, "isme By Jumeirah", "Dismiss")          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get history  [" + errormsg.responseText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                            },
                                            showCard
                                            : function () {
                                                back_profile();
                                            },
          showCard1
                                            : function () {
                                                back8_profile();
                                            },
                                            mymessagelist
                                            : function () {
                                                t = "";//Notification and other messages
                                                // alert(merchant);
                                                // alert(customer);
                                                // alert(password);
                                                // alert(mdevicestat);
                                                showSpin();
                                                back1_profile();
                                                document.getElementById("back1-filter").style.display = "none";
                                                $.ajax({ 
                                                           type: "POST",
                                                           cache:false,
                                                           async:true,
                                                           timeout:20000,
                                                           url: gurl + "/archivehistory.aspx",
                                                           contentType: "application/json; charset=utf-8",
                                                           data: JSON.stringify({
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:window.localStorage.getItem("mdevicestat"),mexcl:"1"
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                        
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.historylist.length > 0) {
                                                                       $("#pl-message-list").kendoMobileListView({
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.historylist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                                                                                     template: $("#pl-messageListTemplate").html()
                                                                                                                     //endlessScroll: true
                                                                                                                      
                                                                                                                 });
                                                                   }else {
                                                                       navigator.notification.alert("No message history for your Membership", function() {
                                                                       }, "isme By Jumeirah", "Dismiss")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get message history. " + getData.statusdesc, function() {
                                                                   }, "isme By Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message history.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
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
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                  
                                                               if (getData.statuscode == "000") {
                                                                   if (getData.messageitem.length > 0) {
                                                                       document.getElementById("pl-messageitem-list").style.display = "block";
                                                                       document.getElementById("msgnarration").innerHTML = getData.messageitem[0].narration;
                                                                       document.getElementById("msgday").innerHTML = getData.messageitem[0].mday + " " + getData.messageitem[0].mmonth;
                                                                       postLogin.set("msgsequence", getData.messageitem[0].sequence);
                                                                   }else {
                                                                       navigator.notification.alert("No message available for your Membership", function() {
                                                                       }, "isme By Jumeirah", "Dismiss")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot get message item. " + getData.statusdesc, function() {
                                                                   }, "isme By Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message item.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
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
                                                                                    merchantcode :merchant,customerid:customer,password:password,history:t,mdevice:window.localStorage.getItem("mdevicestat")
                                                                                }),
                                                           success: function (data) { 
                                                               var getData = JSON.parse(data);
                                                               if (getData.statuscode == "000") {
                                                                   $("body").data("kendoMobilePane").navigate("views/pl-mymessagelist.html");  
                                                               }else {
                                                                   navigator.notification.alert("Cannot delete message. " + getData.statusdesc, function() {
                                                                   }, "isme By Jumeirah", "Dismiss")          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot delete message. [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                                                               }, "isme By Jumeirah", "Dismiss")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
           
                                           
                                            initPref: function () {
                                                showSpin();
                                                back6_profile();                        
                                                window.localStorage.setItem("issaved", "0");
                                                getLifeStylePref("#lifestyle-filter", "#lifestyle-filter-template");
                                                getRestaurantDetailPref("#restaurantdetail-filter", "#restaurantdetailfilter-template");
                                                gct("#cuisinetype-filter", "#cuisinetypefilter-template");
                                                getCelebrationTypePref("#celebrationtype-filter", "#celebrationtype-template");
                                                setLifeStylePreference(); 
                                                setRestaurantPreference();
                                                setCelebrationTypePreference();
                                                setCuisineTypePreference();
                                            },
                                            getChecked:function() {
                                                hideSpin();
                                            },
                                            saveMySetting:function() {
                                                saveSetting();
                                            },

        
                                            savePreference:function() {
                                                savePreferenceItem();
                                            },
                                            checkSave:function() {
                                                if (window.localStorage.getItem("issaved") ==="0") {
                                                    navigator.notification.confirm(
                                                        'You have not saved your preferences?', // message
                                                        onConfirm2, // callback to invoke with index of button pressed
                                                        'isme by Jumeirah', // title
                                                        'I will Save Later,Save now'          // buttonLabels
                                                        );
                                                }else {  
                                                    saveLater();
                                                }
                                            },
                                            
                                            checkSaveSetting:function() {
                                                if (window.localStorage.getItem("isset") ==="0") {
                                                    navigator.notification.confirm(
                                                        'You have not saved your settings?', // message
                                                        onConfirm3, // callback to invoke with index of button pressed
                                                        'isme by Jumeirah', // title
                                                        'I will Save Later,Save now'          // buttonLabels
                                                        );
                                                }else {  
                                                    saveLater();
                                                }
                                            },
                                            enableSave:function() {
                                                window.localStorage.setItem("issaved", "0");
                                            },
                                            enableSaveSetting:function() {
                                                window.localStorage.setItem("isset", "0");
                                            },
        
                                            fbLoginDA   
                                            : function () { 
                                                showSpin();
                                        
                                                facebookConnectPlugin.login(["email"], function(response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                                                    if (response.status === "connected") { 
                                                        m = JSON.parse(JSON.stringify(response));                                                       
                                                        window.localStorage.setItem("FBuserID", m.authResponse.userID);
                                                        window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                                                        showSpin();
                                                             
                                                        $.ajax({ 
                                                                   type: "POST",
                                                                   cache:false,
                                                                   async:true,
                                                                   timeout:20000,
                                                                   url: gurl + "/linkFBUser.aspx",
                                                                   contentType: "application/json; charset=utf-8",
                                                                   data: JSON.stringify({
                                                                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),fbuserid:window.localStorage.getItem("FBuserID"),customer:customer,password:window.localStorage.getItem("password"),fbaccesstoken:window.localStorage.getItem("FBAccessToken")
                                                                                        }),
                                                                   success: function (data) { 
                                                                       var getData = JSON.parse(data);
                     
                                                                       if (getData.statuscode === "000") {
                                                                           window.localStorage.setItem("fbLoginModeEnabled", "Y");
                                                                           navigator.notification.alert("The Facebook account on this device linked successfully to the isme membership.", function() {
                                                                           }, "isme By Jumeirah" , "Dismiss");     
                                                                           hideSpin();
                                                                       }else {
                                                                           navigator.notification.alert("The Facebook account in this device is already linked to another isme membership.  cannot link Facebook to this account", function() {
                                                                           }, "isme By Jumeirah" , "Dismiss");  
                                                                           hideSpin();
                                                                       }
                                                                   },
                                                                   error: function (errormsg) {
                                                                       navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function() {
                                                                       }, "isme By Jumeirah" , "Dismiss");     
                                                                       hideSpin();
                                                                   }
                                                               });
                                                    } else { 
                                                        navigator.notification.alert("Error accessing Facebook " + response.status, function() {
                                                        }, "isme By Jumeirah", "Dismiss");
                                                        return;
                                                    } 
                                                }); 
                                            }  ,
        
        
        
                                            postLoginBack:function() {
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
                                                    elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
                                                    elems[i].style.width = "100%";
                                                    elems[i].style.zIndex = 10000;
                                                    elems[i].style.textAlign = "center";
                                                }

                                                $("body").data("kendoMobilePane").navigate("views/pl-home.html");                                                                       
                                                //$("body").data("kendoMobilePane").navigate("#:back");
                                            }
        
                                            
                                        });  
    
    function onConfirm2 (buttonIndex) {
        if (buttonIndex===1) {
            saveLater();
        } else {
            savePreferenceItem();
            saveLater();
        }
    }
    
    function onConfirm3 (buttonIndex) {
        if (buttonIndex===1) {
            saveLater();
        } else {
            saveSetting();
            if (window.localStorage.getItem("isset")==="1") {
                saveLater();
            }
        }
    }
    
    function saveLater() {
        postLoginBack();
    }
    
    function savePreferenceItem() {
        //life style
        showSpin();
        var ul = document.getElementById("lifestyle-filter");
        var items = ul.getElementsByTagName("input");
                                                
        for (var i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";
            setMemberPreference(y, items[i].value);
        }
                                                
        //Cuisine Type
                                        
        ul = document.getElementById("cuisinetype-filter");
        items = ul.getElementsByTagName("input");                                             
        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";
            setMemberPreference(y, items[i].value);
        }

        //celebration Type
                                     
        ul = document.getElementById("celebrationtype-filter");
        items = ul.getElementsByTagName("input");
                                                
        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";
            setMemberPreference(y, items[i].value);
        }

        //Restaurant
        ul = document.getElementById("restaurantdetail-filter");
        items = ul.getElementsByTagName("input");
                                                
        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";
            setMemberPreference(y, items[i].value);
        }
        if (window.localStorage.getItem("errorPreference") === "1") {
            navigator.notification.alert("Preferences Saves Successfully", function() {
            }, "isme By Jumeirah", "Dismiss") ;    
        } else {
            navigator.notification.alert("ERROR : One or more preferences could not be saved!" + window.localStorage.getItem("errorPreference"), function() {
            }, "isme By Jumeirah" , "Dismiss") ;   
        }
        window.localStorage.setItem("errorPreference", "1");
        window.localStorage.setItem("issaved", "1");
        hideSpin(); //hide loading popup
    }
    
    function redeemDiscount() {
        showSpin();
                                             
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/discountRedemption.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,password:password,emppin:this.depin1.value,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           postLogin.set("srpin1", "");
                           postLogin.set("depin1", "");
                           window.localStorage.setItem("self-vouchernumber", getData.customerid);
                           window.localStorage.setItem("self-vouchername", getData.segment);
                           window.localStorage.setItem("self-authorization", getData.transactionref);
                           window.localStorage.setItem("self-outletname", getData.outletname);
                           postLogin.set("depin1", "");
                           window.plugins.nativepagetransitions.slide({
                                                                          "duration"         :  500, // in milliseconds (ms), default 400
                                                                          "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                          "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                          "androiddelay"     :  150, // same as above but for Android, default 70

                                                                          'direction': 'up',
                                                                          'href': '#views/pl-confirmDiscount.html'
                                                                      });
                                                              
                           hideSpin(); //hide loading popup
                       }else {
                           navigator.notification.alert("Unable to Validate Discount ! " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")      
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("System Error, unable to Validate Discount  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function activateRedeemVoucher() {
        showSpin();
                                          
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/activateVoucherRedemption.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,password:password,couponcode:"",emppin:this.depin1.value,mdevice:window.localStorage.getItem("mdevicestat"),offercode:window.localStorage.getItem("redeemoffer")   
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           window.localStorage.setItem("self-vouchernumber", getData.couponcode);
                           window.localStorage.setItem("self-vouchername", getData.couponname);
                           window.localStorage.setItem("self-authorization", getData.transactionref);
                           window.localStorage.setItem("self-outletname", getData.outletname);
                           postLogin.set("depin1", "");
                           window.plugins.nativepagetransitions.slide({
                                                                          "duration"         :  500, // in milliseconds (ms), default 400
                                                                          "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                          "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                          "androiddelay"     :  150, // same as above but for Android, default 70

                                                                          'direction': 'up',
                                                                          'href': '#views/pl-confirmvoucher.html'
                                                                      });
                           hideSpin(); //hide loading popup
                       }else {
                           navigator.notification.alert("Unable to Redeem Voucher! " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")      
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("System Error, unable to Redeem Voucher  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function redeemVoucher() {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/VoucherRedemption.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,password:password,couponcode:window.localStorage.getItem("selfredeemVouchernumber"),emppin:this.depin1.value,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           window.localStorage.setItem("self-vouchernumber", getData.couponcode);
                           window.localStorage.setItem("self-vouchername", getData.couponname);
                           window.localStorage.setItem("self-authorization", getData.transactionref);
                           window.localStorage.setItem("self-outletname", getData.outletname);
                           postLogin.set("depin1", "");
                           window.plugins.nativepagetransitions.slide({
                                                                          "duration"         :  500, // in milliseconds (ms), default 400
                                                                          "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                          "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                          "androiddelay"     :  150, // same as above but for Android, default 70

                                                                          'direction': 'up',
                                                                          'href': '#views/pl-confirmvoucher.html'
                                                                      });
                           hideSpin(); //hide loading popup
                       }else {
                           navigator.notification.alert("Unable to Redeem Voucher! " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")      
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("System Error, unable to Redeem Voucher  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function createPIN(x, y) {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/savePIN.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                                                 
                                                                  
                                                                 
                                            merchantcode :merchant,customer:customer,token:x,mdevice:window.localStorage.getItem("mdevicestat"),mdevicef:mdevice,muuid:muuid,mversion:mversion,mplatform:mplatform,validatetype:""
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                         
                       if (getData.statuscode == "000") { //Login Successful  
                           password = getData.certificate;
                           window.localStorage.setItem("password", password); //Get and Store Certificate
                           window.localStorage.setItem("loggedin", "1");
                           navigator.notification.alert("PIN has been successfully set", function() {
                           }, "isme by Jumeirah", "Dismiss")         
                           if (y === "0") {
                               $("body").data("kendoMobilePane").navigate("views/pl-home.html");                                                                       
                                                                      
                               hideSpin(); //hide loading popup
                           }else {
                               $("#modalviewpin").data("kendoMobileModalView").close();
                               hideSpin();
                           }
                       }else {
                           navigator.notification.alert("Cannot set PIN. " + getData.statusdesc, function() {
                           }, "isme by Jumeirah", "Dismiss")         
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot set PIN.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function saveImageFile(e) {
        showSpin();      
        
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/updateimage.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,customerid:customer,password:password,image1:e,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode != "000") {
                           navigator.notification.alert("Could not update image changes due to error  " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                       hideSpin(); //hide loading popup
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Could not update image  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
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
                                            merchantcode :merchant,customerid:customer,mdevice:window.localStorage.getItem("mdevicestat")
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
                               document.getElementById("selCountry").value = homecountry;
                               hideSpin();
                           }else {
                               plus
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
    
    function listCity(e, y) {
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
                                            merchantcode :merchant,customerid:customer,countrycode:t,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode == "000") {
                           //fill the outlet template
                           for (var i = 0;i < getData.citylist.length;i++) {
                               var x = y;
                               var opt = document.createElement("option");
                               opt.value = getData.citylist[i].cityname;    
                               opt.text = getData.citylist[i].citycode;
                               x.add(opt);
                           }
                           document.getElementById("selCity").value = residentcity;
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
        }, 100); 
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
                                            merchantcode :merchant,brandcode:brandcode,mdevice:window.localStorage.getItem("mdevicestat"),city:geocity,country:geocountry,lat:lat,lon:lon
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
                                            merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:window.localStorage.getItem("mdevicestat"),city:geocity,country:geocountry,lat:lat,lon:lon
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
                                            merchantcode :merchant,offercode:offercode,mdevice:window.localStorage.getItem("mdevicestat"),lat:lat,lon:lon
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
                                            merchantcode :merchant,offercode:offercode,mdevice:window.localStorage.getItem("mdevicestat"),lat:lat,lon:lon
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
    
    function getlocationparams() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            window.localStorage.setItem("latl", position.coords.latitude);                                  
            window.localStorage.setItem("lonl", position.coords.longitude);            
        }
                                                 , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                     showTop("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page or on the device.");
                                                 });
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
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),lat:x,lon:y,customer:"WATCH",segment:segmentcode
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
                                            merchantcode :merchant,brandcode:brandcode,mdevice:window.localStorage.getItem("mdevicestat"),city:geocity,country:e,lat:lat,lon:lon
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
                                                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat"),brandcode:window.localStorage.getItem("brandcode")
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
    
    function getHistoryFilterData() {
        var data = [];
        data.push({code: "1",desc:"Activate Offer"});
        data.push({code: "2",desc:"Change Profile"});
        data.push({code: "3",desc:"New Subscription"});
        data.push({code: "4",desc:"Redeem Spend"});
        data.push({code: "5",desc:"Redeem Voucher"});    
        data.push({code: "6",desc:"Renew Membership"});         
        data.push({code: "7",desc:"Other Transactions"});
  
        return data;
    }
    
    function getFAQData() {
        var data = [];
        data.push({code: "1",desc:"About isme by Jumeirah"});
        data.push({code: "2",desc:"Membership & Validity"});
        data.push({code: "3",desc:"Programme Benefits"});
        data.push({code: "4",desc:"Tier Privilege"});
        data.push({code: "5",desc:"Mobile App Queries"});        
  
        return data;
    }
    
    function back_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name-back").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number-back").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry-back").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment-back").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard-qr1").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
        document.getElementById("mycard-qr1").style.backgroundSize = "cover";
    }
    
    function back1_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name-back1").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number-back1").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry-back1").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment-back1").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard-qr2").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";        
        document.getElementById("mycard-qr2").style.backgroundSize = "cover";        
    }
    
    function back2_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name-back2").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number-back2").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry-back2").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment-back2").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard-qr3").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";        
        document.getElementById("mycard-qr3").style.backgroundSize = "cover";        
    }
    
    function back6_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name6-back").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number6-back").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry6-back").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment6-back").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard-qr6").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";        
        document.getElementById("mycard-qr6").style.backgroundSize = "cover";        
    }
    
    function back7_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name7-back").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number7-back").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry7-back").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment7-back").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard7-qr").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";        
        document.getElementById("mycard7-qr").style.backgroundSize = "cover";        
    }
    
     function back8_profile() {
        window.localStorage.setItem("selfredeem", "D"); 
        document.getElementById("name-back8").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0)? window.localStorage.getItem("customername") :"NA" ;
        document.getElementById("number-back8").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
        document.getElementById("expiry-back8").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Member Expiry : " + window.localStorage.getItem("memberexpiry") : "Member Expiry : No Expiry";
        document.getElementById("segment-back8").innerHTML = (window.localStorage.getItem("segmentcode") === "1000") ? "isme" : "isme elite";
        document.getElementById("mycard-qr8").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";        
        document.getElementById("mycard-qr8").style.backgroundSize = "cover";        
    }
    
    function onConfirm1 (buttonIndex) {  
        if (buttonIndex===1) {
            doExecute();  
        } else {  
            doExit();
        }
    }
    function doExecute() {
        showSpin();
       
        var emirate = document.getElementById("selEmirate").value;
        var gender = document.getElementById("selGender").value;
        var fbuserid = window.localStorage.getItem("FBuserID");
        var fbaccesstoken = window.localStorage.getItem("FBAccessToken");
        // alert(fbuserid + " " + fbaccesstoken);  
        //   alert(emirate);          
        //   alert(gender);          
        //   alert(this.firstname.value);          
        //   alert(this.lastname.value);          
        //   alert(this.mobile.value);          
        //   alert(this.emailid.value);          
        //    alert(this.siriusnumber.value);          
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/firsttime.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :window.localStorage.getItem("merchant"),firstname:this.firstname.value,lastname:this.lastname.value,mobile:this.mobile.value,emailid:this.emailid.value,emirate:emirate,gender:gender,siriusmember:this.siriusnumber.value,mdevice:mdevicestat,segment:"1000",fbuserid:fbuserid,fbaccesstoken:fbaccesstoken
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                        
                       if (getData.statuscode === "000") {
                           window.localStorage.setItem("newmemberid", getData.customerid);
       
                           window.localStorage.setItem("newmembername", getData.customername);
                           window.localStorage.setItem("newmembersegment", getData.segment);
                           clearEnrolPage();                                         
                           window.plugins.nativepagetransitions.slide({
                                                                          "duration"         :  500, // in milliseconds (ms), default 400
                                                                          "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
                                                                          "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                                                                          "androiddelay"     :  150, // same as above but for Android, default 70

                                                                          'direction': 'up',
                                                                          'href': '#views/confirmEnrollment.html'
                                                                      });
                                                              
                           hideSpin(); //hide loading popup
                       }else {
                           navigator.notification.alert("Could not complete enrollment due to an error.  " + getData.statusdesc + ". Please try again.", function() {
                           }, "isme by Jumeirah", "Dismiss")          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Could not complete enrollment.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme by Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    function doExit() {
        return;
    }
    
    function getRestaurantType(x, y) {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/restaurantTypeList.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);                    
                       if (getData.statuscode === "000") {
                           if (getData.preflist.length > 0) {
                               $(x).kendoMobileListView({
                                                            dataSource: kendo.data.DataSource.create({data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                            template: $(y).html()
                                                            //endlessScroll: true
                                                                                                                      
                                                        });
                           }else {
                               navigator.notification.alert("Restaurant Type Preference List not available", function() {
                               }, "isme By Jumeirah", "Dismiss")    
                           }
                       }else {
                           navigator.notification.alert("Cannot get Restaurant Type Preference List. " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                       hideSpin(); //hide loading popup
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant Type Preference List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function getLifeStylePref(x, y) {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/lifeStyleList.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);                    
                       if (getData.statuscode === "000") {
                           if (getData.preflist.length > 0) {
                               $(x).kendoMobileListView({
                                                            dataSource: kendo.data.DataSource.create({data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                            template: $(y).html()
                                                            //endlessScroll: true
                                                                                                                      
                                                        });
                           }else {
                               navigator.notification.alert("Lifestyle Preference List not available", function() {
                               }, "isme By Jumeirah", "Dismiss")    
                           }
                       }else {
                           navigator.notification.alert("Cannot get Lifestyle Preference List. " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                       hideSpin(); //hide loading popup
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Lifestyle Preference List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function getRestaurantDetailPref(x, y) {
        showSpin();

        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/restaurantDetailList.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                        
                       if (getData.statuscode === "000") {
                           if (getData.preflist.length > 0) {
                               $(x).kendoMobileListView({
                                                            dataSource: kendo.data.DataSource.create({data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                            template: $(y).html()
                                                            //endlessScroll: true
                                                                                                                      
                                                        });
                           }else {
                               navigator.notification.alert("Restaurant Details List not available", function() {
                               }, "isme By Jumeirah", "Dismiss")    
                           }
                       }else {
                           navigator.notification.alert("Cannot get Restaurant Details List. " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant Details List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                   }
               });
    }
        
    function gct(x, y) {
        showSpin();
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/cuisineTypeList.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                                                                    
                       if (getData.statuscode === "000") {
                           if (getData.preflist.length > 0) {
                               $(x).kendoMobileListView({
                                                            dataSource: kendo.data.DataSource.create({data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                            template: $(y).html()
                                                            //endlessScroll: true
                                                                                                                      
                                                        });
                           }else {
                               navigator.notification.alert("Cuisine Type List not available", function() {
                               }, "isme By Jumeirah", "Dismiss")    
                           }
                       }else {
                           navigator.notification.alert("Cannot get Cuisine Type List. " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Cuisine Type List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                   }
               });
    }
    
    function getCelebrationTypePref(x, y) {    
        showSpin();
                                       
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
                   timeout:20000,
                   url: gurl + "/celebrationTypeList.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat")
                                        }),
                   success: function (data) {     
                       var getData = JSON.parse(data);
                                        
                       if (getData.statuscode === "000") {
                           if (getData.preflist.length > 0) {
                               $(x).kendoMobileListView({
                                                            dataSource: kendo.data.DataSource.create({data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                                            template: $(y).html()
                                                            //endlessScroll: true
                                                                                                                      
                                                        });
                           }else {
                               navigator.notification.alert("Celebration Type List not available", function() {
                               }, "isme By Jumeirah", "Dismiss")    
                           }
                       }else {
                           navigator.notification.alert("Cannot get Celebration Type List. " + getData.statusdesc, function() {
                           }, "isme By Jumeirah", "Dismiss")          
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Celebration Type List.  [" + errormsg.statusText + "] The Internet connections seems to be weak or not available or check proxy if any or services may not be available. Please check network connection and try again.", function() {
                       }, "isme By Jumeirah", "Dismiss")
                   }
               });
    }
    
    function setMemberPreference(e, m) {
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/setMemberPreference.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),preference:e,itemcode:m,customer:customer,password:password
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           window.localStorage.setItem("errorPreference", "1");
                       }else {
                           //  navigator.notification.alert("ERROR : One or more preferences could not be saved!"  +getData.statusdesc, function() {
                           //                           }, "isme By Jumeirah" , "Dismiss");     
                           window.localStorage.setItem("errorPreference", getData.statusdesc);                                      
                       }
                   },
                   error: function (errormsg) {
                       // navigator.notification.alert("ERROR : One or more preferences could not be saved!"  +errormsg.statusText, function() {
                       //                             }, "isme By Jumeirah" , "Dismiss");     
                       window.localStorage.setItem("errorPreference", errormsg.statusText);                                      
                   }
               });
    }
    
    function setLifeStylePreference() {  
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/mypreferencelist.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),preferencetype:"LS",customer:customer,password:password
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           var ul = document.getElementById("lifestyle-filter");
                           var items = ul.getElementsByTagName("input");
                           // alert("LS" + items.length);
                           for (var n = 0; n < getData.mypreferences.length ;n++) {
                               for (var i = 0; i < items.length; ++i) {  
                                   if (getData.mypreferences[n].prfcode == items[i].value) {
                                       items[i].checked = true;
                                   }
                               }
                           }
                       }else {
                           navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function() {
                           }, "isme By Jumeirah" , "Dismiss");     
                           document.getElementById("prefsave").style.display = "none";
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function() {
                       }, "isme By Jumeirah" , "Dismiss");     
                       document.getElementById("prefsave").style.display = "none";
                   }
               });
    }
    
    function setCuisineTypePreference() {    
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/mypreferencelist.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),preferencetype:"CS",customer:customer,password:password
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           var ul = document.getElementById("cuisinetype-filter");
                           var items = ul.getElementsByTagName("input");
                           // alert("CS" + items.length);
                           for (var n = 0; n < getData.mypreferences.length ;n++) {
                               for (var i = 0; i < items.length; ++i) {  
                                   if (getData.mypreferences[n].prfcode == items[i].value) {
                                       items[i].checked = true;
                                   }
                               }
                           }
                       }else {
                           navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function() {
                           }, "isme By Jumeirah" , "Dismiss");     
                           document.getElementById("prefsave").style.display = "none";
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function() {
                       }, "isme By Jumeirah" , "Dismiss");     
                       document.getElementById("prefsave").style.display = "none";
                   }
               });
    }   
       
    function setCelebrationTypePreference() {  
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/mypreferencelist.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),preferencetype:"CB",customer:customer,password:password
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           var ul = document.getElementById("celebrationtype-filter");
                           var items = ul.getElementsByTagName("input");
                           //  alert("CB" + items.length);
                           for (var n = 0; n < getData.mypreferences.length ;n++) {
                               for (var i = 0; i < items.length; ++i) {  
                                   if (getData.mypreferences[n].prfcode == items[i].value) {
                                       //alert(getData.mypreferences[n].prfcode + "  " + items[i].value);
                                       items[i].checked = true;
                                   }
                               }
                           }
                       }else {
                           navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function() {
                           }, "isme By Jumeirah" , "Dismiss");     
                           document.getElementById("prefsave").style.display = "none";
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function() {
                       }, "isme By Jumeirah" , "Dismiss");     
                       document.getElementById("prefsave").style.display = "none";
                   }
               });
    }
 
    function setRestaurantPreference() {  
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/mypreferencelist.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:window.localStorage.getItem("mdevicestat"),preferencetype:"RD",customer:customer,password:password
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                       if (getData.statuscode === "000") {
                           var ul = document.getElementById("restaurantdetail-filter");
                           var items = ul.getElementsByTagName("input");
                           //   alert("RD" + items.length);
                           for (var n = 0; n < getData.mypreferences.length ;n++) {
                               for (var i = 0; i < items.length; ++i) {  
                                   if (getData.mypreferences[n].prfcode == items[i].value) {
                                       items[i].checked = true;
                                   }
                               }
                           }
                       }else {
                           navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function() {
                           }, "isme By Jumeirah" , "Dismiss");     
                           document.getElementById("prefsave").style.display = "none";
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function() {
                       }, "isme By Jumeirah" , "Dismiss");     
                       document.getElementById("prefsave").style.display = "none";
                   }
               });
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
            elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
            elems[i].style.width = "100%";
            elems[i].style.zIndex = 10000;
            elems[i].style.textAlign = "center";
        }
    
        window.localStorage.setItem("appopen", "0");   

        $("body").data("kendoMobilePane").navigate("views/pl-home.html");                                                                       
    }
    //$("body").data("kendoMobilePane").navigate("#:back");
    
    function getRestTypeData() {
        var data = [];
        data.push({code: "RD1000",desc:"Award Winning"});
        data.push({code: "RD1001",desc:"Bar/Lounge"});
        data.push({code: "RD1002",desc:"Casual Dining"});
        data.push({code: "RD1003",desc:"Corporate/Business"});
        data.push({code: "RD1004",desc:"Family Dining"});
        data.push({code: "RD1005",desc:"OpenAir Dining"});
        data.push({code: "RD1006",desc:"Romantic Dining"});
        data.push({code: "RD1007",desc:"Scenic View"});
        data.push({code: "RD1006",desc:"Romantic Dining"});
        data.push({code: "RD1009",desc:"Spa"});
        data.push({code: "RD1008",desc:"Theme Park"});
        data.push({code: "RD1010",desc:"Night life/Night Club"});
        data.push({code: "RD1012",desc:"Cafe or Bistro"});
        data.push({code: "RD1011",desc:"Sports Bar"});
        data.push({code: "RD1013",desc:"Cocktail Bar"});
        data.push({code: "RD1014",desc:"Signature Fine Dining"});           
           
        return data;
    }
    
    function getRestCuisineData() {
        var data = [];
        data.push({code: "CS1008",desc:"African"});
        data.push({code: "CS1000",desc:"Afternoon Tea"});
        data.push({code: "CS1001",desc:"Asian"});
        data.push({code: "CS1002",desc:"Bar food"});
        data.push({code: "CS1016",desc:"Brunch"});    
        data.push({code: "CS1014",desc:"Business Lunch"});         
        data.push({code: "CS1007",desc:"European"});
        data.push({code: "CS1009",desc:"Healthy"});         
        data.push({code: "CS1003",desc:"International"});
        data.push({code: "CS1004",desc:"Latin American"});
        data.push({code: "CS1010",desc:"Light Bites"});
        data.push({code: "CS1013",desc:"Middle Eastern"});
        data.push({code: "CS1011",desc:"Patisserie"});
        data.push({code: "CS1005",desc:"Seafood"});
        data.push({code: "CS1006",desc:"Steakhouse"});
        data.push({code: "CS1012",desc:"Vegetarian"});
           
        return data;
    }

    function getOfferTypeData() {
        var data = [];
        data.push({code: "LS1007",desc:"Art & Culture"});
        data.push({code: "LS1008",desc:"Beach"});
        data.push({code: "LS1021",desc:"Beauty"});
        data.push({code: "LS1004",desc:"Brunch"});
        data.push({code: "LS1006",desc:"Family & Kids"});    
        data.push({code: "LS1020",desc:"Fashion"});         
        data.push({code: "LS1010",desc:"Fine Dining"});
        data.push({code: "LS1017",desc:"Football"});         
        data.push({code: "LS1025",desc:"Gadgets"});
        data.push({code: "LS1015",desc:"Golf"});         
        data.push({code: "LS1011",desc:"Grape Tasting"});
        data.push({code: "LS1016",desc:"Horse Racing"});
        data.push({code: "LS1001",desc:"Leisure"});
        data.push({code: "LS1028",desc:"Live music"});
        data.push({code: "LS1024",desc:"Luxury Goods"});
        data.push({code: "LS1019",desc:"Motor Sports"});
        data.push({code: "LS1026",desc:"Networking"});
        data.push({code: "LS1012",desc:"No alcohol"});
        data.push({code: "LS1018",desc:"Rugby"});
        data.push({code: "LS1021",desc:"Shopping"});
        data.push({code: "LS1003",desc:"Signature Events"});
        data.push({code: "LS1000",desc:"Spa / Fitness"});
        data.push({code: "LS1005",desc:"Special Holiday Offers"});
        data.push({code: "LS1009",desc:"Travel & Stay Packages"});
        data.push({code: "LS1002",desc:"Watersports"});
        data.push({code: "LS1014",desc:"Weight loss"});
        data.push({code: "LS1013",desc:"Wellness & Wellbeing"});
        data.push({code: "LS1023",desc:"Yoga"});
           
        return data;
    }
    
    function getOfferCeleberationData() {
        var data = [];
        data.push({code: "CB1000",desc:"Birthdays"});
        data.push({code: "CB1012",desc:"Corporate entertainment"});
        data.push({code: "CB1007",desc:"Easter celebrations"});
        data.push({code: "CB1009",desc:"Eid celebrations"});
        data.push({code: "CB1006",desc:"Father`s day"});    
        data.push({code: "CB1005",desc:"Festive"});         
        data.push({code: "CB1004",desc:"Mothers day"});
        data.push({code: "CB1008",desc:"Ramadan"});         
        data.push({code: "CB1011",desc:"Thanks giving day"});
        data.push({code: "CB1010",desc:"UAE National Day"});         
        data.push({code: "CB1003",desc:"Valentines"});
        data.push({code: "CB1001",desc:"Wedding Anniversary"});
        data.push({code: "CB1002",desc:"Women`s Day"});
           
        return data;
    }
    
    function saveSetting() {
        if (!this.emailid1) {
            navigator.notification.alert("Email is required.  Re-enter", function() {
            }, "isme by Jumeirah", "Dismiss");
            return;
        }
                                                
        if (!this.mobile1) {
            navigator.notification.alert("Mobile Number is required.  Re-enter", function() {
            }, "isme by Jumeirah", "Dismiss")
            return;
        }
                                              
        if (document.getElementById("selCountry").value === "") {
            navigator.notification.alert("Select Nationality", function() {
            }, "isme by Jumeirah", "Dismiss");
            return; 
        }
        if (document.getElementById("selCity").value === "") {
            navigator.notification.alert("Select Resident City", function() {
            }, "isme by Jumeirah", "Dismiss");
            return; 
        }
                                                                                                
        if ((!document.getElementById("profile-pushoffer").checked) && (document.getElementById("profile-remindexpiry").checked)) {
            navigator.notification.alert("Please enable Push Notification to receive reminders for expirying vouchers", function() {
            }, "isme by Jumeirah", "Dismiss");
            return;
        }
        
        if (document.getElementById("profile-alcohol").checked) {
            alcohol1 = "1";
        }else {
            alcohol1 = "";
        }
                                                                                           
        if (document.getElementById("profile-alcohol").checked) {
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
        }else {
            autolocation1 = "";
        }   
        if (document.getElementById("selCountry").value != "") {
            homecountry1 = document.getElementById("selCountry").value;
        }else {
            homecountry1 = ""
        }
        if (document.getElementById("selCity").value != "") {
            residentcity1 = document.getElementById("selCity").value;
        }else {
            residentcity1 = "";
        }
        showSpin();  
        mdate = this.date1.value;
        emailid = this.emailid1.value;         
        mobilenumber = this.mobile1.value;                                             
        magicnumber = this.hotelnumber1.value;
       
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/updateprofile_isme.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :window.localStorage.getItem("merchant"),customerid:window.localStorage.getItem("customer"),password:window.localStorage.getItem("password"),mobile:this.mobile1.value,emailid:this.emailid1.value,pushoffer:pushoffer1,remindexpiry:remindexpiry1,showprofile:showprofile,image1:newimage,mdevice:window.localStorage.getItem("mdevicestat"),autolocation:autolocation1,city:residentcity1,country:homecountry1,birthdate:this.date1.value,magicnumber:this.hotelnumber1.value,alcohol:alcohol1
                                        }),
                   success: function (data) { 
                       var getData = JSON.parse(data);
                          
                       if (getData.statuscode == "000") {
                           homecountry = homecountry1;
                           residentcity = residentcity1;  
                           pushoffer = pushoffer1;
                           remindexpiry = remindexpiry1;
                           autolocation = autolocation1;
                           country = homecountry1;
                           city = residentcity1;
                           alcohol = alcohol1;
                                                        
                           window.localStorage.setItem("autolocation", autolocation);
                           window.localStorage.setItem("pushoffer", pushoffer);
                           window.localStorage.setItem("remindexpiry", remindexpiry);
                           window.localStorage.setItem("residentcity", residentcity);
                           window.localStorage.setItem("homecountry", homecountry);  
                           window.localStorage.setItem("emailid", emailid);
                           window.localStorage.setItem("mobilenumber", mobilenumber);  
                           window.localStorage.setItem("birthdate", mdate);  
                           window.localStorage.setItem("magicnumber", magicnumber); 
                           window.localStorage.setItem("hotelmember", magicnumber); 
                           window.localStorage.setItem("alcohol", alcohol); 
                           window.localStorage.setItem("residentcity", residentcity); 
                           window.localStorage.setItem("homecountry", homecountry); 
                           var skillsSelect = document.getElementById("selCity");
                           var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
                           window.localStorage.setItem("residentcityname", selectedText); 
                           skillsSelect = document.getElementById("selCountry");
                           selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
                           window.localStorage.setItem("homecountryname", selectedText);  

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
                           window.localStorage.setItem("isset", "1");
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
    }
    
    function getNearCity() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;                                  
            lon = position.coords.longitude
            alert(lat);
            alert(lon);
            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;
            alert(geocodingAPI);
            $.getJSON(geocodingAPI, function (json) {
                if (json.status === "OK") {
                    //Check result 0
                    var result = json.results[0];
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) {
                            geocity = ac.long_name;
                            window.localStorage.setItem("distance", geoCity)
                        }
	                          
                        if (ac.types.indexOf("country") >= 0) {
                            geocountry = ac.long_name;
                        }
                    }
                                                           
                    if (y==="1") {
                        geocity = "";
                    }
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
                                                         window.localStorage.setItem("distance", geoCity)
                                                     }else {
                                                         geocity = city;
                                                         window.localStorage.setItem("distance", geoCity)
                                                     }
                                                     lat = window.localStorage.getItem("lat");
                                                     lon = window.localStorage.getItem("lon");
                                                     geocountry = country;
                                                                                               
                                                     hideSpin();
                                                 }, positionOption);
    }
}
    )(window);