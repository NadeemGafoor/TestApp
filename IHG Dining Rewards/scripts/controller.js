(function (global) {
    var firsttime = "";
    var mdevice = "";
    var muuid = "";
    var mversion = "";
    var mdevicestat = "";
    var ctr = 0;
    var gurl = "http://exclusiveu.dynns.com:8088/mobilePortal";
    var merchant = "INTER09705";
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
    var getgps = false;//First time to look for location, do not look when the page is reloaded
    var gpsfind = "1";//Auto location enabled
    var lat, lon;
   
    var outletcode = "";
    var brandcode = "";
    var benefitcode = "";
    var isMapInitialized = false;
    var m = [];  
    var shareCustomer, shareProductCode, shareProductType;
    var offertype = "1"; //prelogin ofer
    var offercode = ""; //All Offers default
    var couponnumber = "";
    var newimage = "";
    var rc = "";
    var rn = "";
    var cn = "";
    var sr = "";
    var social_subject="IHG Dining Rewards";
    var share_image = "http://exclusiveu.dynns.com:8088/mobileportal/images/ihg_logo.png";
    var share_contact = "Phone: +971 427 66 186 \nEmail: inquiry@ihg.com";
    var short_msg="Check out the IHG Dining Rewards at ";
    var pushSettings = {
        iOS: {
            badge: "1",
            sound: "default",
            alert: "true",
            clearBadge: "true"
        },
        android: {
            senderID: googleApiProjectNumber
        },
        wp8: {
            channelName: 'EverlivePushChannel'
        },
        notificationCallbackIOS: function(args) {
        },
        notificationCallbackAndroid: function(args) {
        },
        notificationCallbackWP8: function(args) {
        },
        customParameters: {
            Memberid: customer,
            Merchant:merchant,
            Segment:segmentcode
        }
    };
    
    
     window.sharingSocialView = kendo.observable({
                                                    social_subject:"",
                                                    social_message:"",
                                                    social_image:share_image,
                                                    social_header:"",
                                                    social_shortmsg:short_msg,
                                                    offersocialDestroyView:function() {
                                                        $("#pl-modalview-offersocial").remove();  
                                                    },
        
                                                    offersocialDestroyViewA:function() {
                                                        $("#modalview-offersocial").remove();  
                                                    },
       
                                                 
                                                    socialsharingFacebook: function () {
                                                        showSpin();
                                                       
                                                        window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(sharingSocialView.social_header + "\n" + sharingSocialView.social_message + "\n" + share_contact , null, "http://www.ihgdiningrewards.com", "Share with your friends if you like!", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingTwitter:  function () {
                                                        showSpin();
                                                          
                                                        window.plugins.socialsharing.shareViaTwitter(sharingSocialView.social_shortmsg, sharingSocialView.social_image, "http://www.ihgdiningrewards.com")
                                                        hideSpin();
                                                    },

                                                    socialsharingWhatsApp: function () {
                                                        showSpin();
                                                      
                                                        window.plugins.socialsharing.shareViaWhatsApp(sharingSocialView.social_shortmsg, null, "http://www.ihgdiningrewards.com", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingSMS: function () {
                                                        showSpin();
                                                         
                                                        window.plugins.socialsharing.shareViaSMS(sharingSocialView.social_shortmsg + "http://www.ihgdiningrewards.com", null, function (msg) {
                                                        }, function (msg) {
                                                            alert('Error: ' + msg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingEmail:  function () {
                                                        showSpin();
                                                        window.plugins.socialsharing.shareViaEmail(
                                                            sharingSocialView.social_header + "\n\n" + sharingSocialView.social_message + "\n\n" + share_contact, // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
                                                            sharingSocialView.social_shortmsg, null, null, null, // TO: must be null or an array
                                                            [sharingSocialView.social_image], // FILES: can be null, a string, or an array
                                                            function (msg) {
                                                            }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
                                                            function (msg) {
                                                                alert('Error: ' + msg)
                                                            } // called when sh*t hits the fan
                                                            );
                                                        hideSpin();
                                                    }
                                                });   
    
    window.preLogin = kendo.observable({
                                        
                                           destroyBenefitDetail:function() {
                                               $("#benefit-detail").remove();  
                                           },
                                                                                    
                                      
                                           benefitdetail: function () { 
                                               benefitcode = "1000"; //Gold Elite Segment
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
                                                                      document.getElementById("benefit-title-1").innerHTML = getData.benefitlist[0].titlename;
                                                                      document.getElementById("benefit-text3").innerHTML = "<pre>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                       sharingSocialView.set("social_subject", getData.benefitlist[0].shortdes1);
                                                                      sharingSocialView.set("social_message", getData.benefitlist[0].shortdes2);
                                                                                                                                            sharingSocialView.set("social_header", getData.benefitlist[0].shortdes1+"\n");
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No Benefits exists for the selected Program!")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Benefit details!" + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit details!.   Try after sometime")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           }
        
                                       });
    
    function hideSpin() {
        setTimeout(function() {
            window.plugins.spinnerDialog.hide();
        }, 2000);  //hide Loading Popup
    }
      
    function showSpin() {
        if (!checkConnectionBool()) {
            $("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            window.plugins.spinnerDialog.show(null, null, true); //show loading popup
        }
    }
    
    function writeSpin() {
        if (!checkConnectionBool()) {
            $("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
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
            navigator.notification.alert(states[networkState]);                     
            return false;
        } else {
            return true;
        }
    }
})(window);