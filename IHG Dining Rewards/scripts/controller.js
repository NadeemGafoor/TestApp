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

    var share_image = "http://exclusiveu.dynns.com:8088/mobileportal/images/ihg_logo.png";
    var share_contact = "Phone: +971 427 66 186 \nEmail: inquiry@ihg.com";
    
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
      
    window.sharingView = kendo.observable({
                                              destroySharingView: function() {
                                                  $("#modalview-offershare").remove();
                                              },
                                                                                    
                                              mysubmitShare: function () {
                                                  if (ctr == 0) { 
                                                      navigator.notification.alert("Please Rate 1 to 5");
                                                      return;
                                                  }
                                                  if (!this.txtremarks) { 
                                                      navigator.notification.alert("Please write a review");
                                                      return;
                                                  }
                                                 
                                                  if (this.txtremarks.length > 256) { 
                                                      navigator.notification.alert("Remarks should be less than 256 characters");
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
                                                                     navigator.notification.alert("Thank You very much for Rating the " + getData.producttype);
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Error, Cannot Publish Rating!" + getData.statusdesc)          
                                                                 }
                                                                 $("body").data().kendoMobilePane.navigate("#:back");
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot Publish Rating!. Try after sometime")
                                                                 // kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 window.plugins.spinnerDialog.hide();
                                                             }
                                                         });
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
    
    window.sharingSocialView = kendo.observable({
                                                    social_subject:"",
                                                    social_message:"",
                                                    social_image:"",
                                                    social_header:"",
                                                    social_shortmsg:"",
                                                    offersocialDestroyView:function() {
                                                        $("#pl-modalview-offersocial").remove();  
                                                    },
        
                                                    offersocialDestroyViewA:function() {
                                                        $("#modalview-offersocial").remove();  
                                                    },
       
                                                 
                                                    socialsharingFacebook: function () {
                                                        showSpin();
                                                       
                                                        window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(sharingSocialView.social_header + "\n" + sharingSocialView.social_message + "\n" + share_contact , null, "http://www.alyamamahrewards.com", "Share with your friends if you like!", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingTwitter:  function () {
                                                        showSpin();
                                                          
                                                        window.plugins.socialsharing.shareViaTwitter(sharingSocialView.social_shortmsg, sharingSocialView.social_image, "http://www.alyamamahrewards.com")
                                                        hideSpin();
                                                    },

                                                    socialsharingWhatsApp: function () {
                                                        showSpin();
                                                      
                                                        window.plugins.socialsharing.shareViaWhatsApp(sharingSocialView.social_shortmsg, null, "http://www.alyamamahrewards.com", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingSMS: function () {
                                                        showSpin();
                                                         
                                                        window.plugins.socialsharing.shareViaSMS(sharingSocialView.social_shortmsg + "http://www.alyamamahrewards.com", null, function (msg) {
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
    
    window.sharingSocialViewA = kendo.observable({
                                                     destroyplaboutustheme:function() {
                                                         $("#pl-aboutus-theme").remove();  
                                                     },
        
                                                     destroymysupporttheme:function() {
                                                         $("#mysupport-theme").remove();  
                                                     },
                                                     destroyaboutustheme:function() {
                                                         $("#aboutus-theme").remove();  
                                                     },
                                                  
                                                     supportEmailA:  function () {
                                                         window.plugins.socialsharing.shareViaEmail(
                                                             '', 
                                                             'Al Yamamah Reward Support', ['info@alyamamahrewards.com'], 
                                                             null, 
                                                             function (msg) {
                                                             }, 
                                                             function (msg) {
                                                                 alert('Error: ' + msg)
                                                             } 
                                                             );
                                                     },
        
                                                     callTel:  function () {
                                                         window.open("tel:+97143813300");
                                                     },
                                                     faqOpen:  function () {
                                                         $("body").data().kendoMobilePane.navigate("views/faq.html");  
                                                     }
                                                 });   
    
    window.networkController = kendo.observable({
                                      
                                                    checkConnectionBool: function () {
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
                                                            kendo.mobile.application.hideLoading(); //show loading popup
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    },

                                                   
                                                    checkConnection: function () {
                                                        kendo.mobile.application.showLoading(); //show loading popup
                                                        var networkState = navigator.connection.type;
                                                        var states = {};
                                                        states[Connection.UNKNOWN] = 'Unknown connection';
                                                        states[Connection.ETHERNET] = 'Ethernet connection';
                                                        states[Connection.WIFI] = 'WiFi connection';
                                                        states[Connection.CELL_2G] = 'Cell 2G connection';
                                                        states[Connection.CELL_3G] = 'Cell 3G connection';
                                                        states[Connection.CELL_4G] = 'Cell 4G connection';
                                                        states[Connection.NONE] = 'No network connection';
                                                        if (states[networkState] != "No network connection") {
                                                            $("body").data().kendoMobilePane.navigate("views/home.html");  
                                                        } else {
                                                            navigator.notification.alert(states[networkState]);                     
                                                            kendo.mobile.application.hideLoading(); //show loading popup
                                                            $("body").data().kendoMobilePane.navigate("views/nonetwork.html");     
                                                        }
                                                    },
        
                                                    fileLocation: function() {
                                                    },
        
                                                    getLocation: function() {
                                                        kendo.mobile.application.showLoading(); //show loading popup
                                                        if (!getgps && gpsfind == "1") {   
                                                            //check whether geolocation is enabled
                                                            navigator.geolocation.getCurrentPosition(onSuccess, onError);
                                                        }     
                                                        getgps = true;
                                                        kendo.mobile.application.hideLoading(); //hideloading popup
                                                    }
                                                }); 
    
    window.locationSetting = kendo.observable({
                                      
                                                  getCountry: function () {
                                                      kendo.mobile.application.showLoading(); //show loading popup
                                                      $.ajax({ 
                                                                 type: "POST",
                                                                 url: gurl + "/getCountry.aspx",
                                                                 contentType: "application/json; charset=utf-8",
                                                                 data: JSON.stringify({
                                                                                          merchantcode :merchant
                                                                                      }),
                                                                 success: function (data) {                                                                 
                                                                     var getData = JSON.parse(data);
                                                                     if (getData.statuscode == "000") {
                                                                         //fill the select dropdown for country
                                                                         for (var i = 0;i < getData.countrylist.length;i++) {
                                                                             var x = document.getElementById("selCountry");
                                                                             var opt = document.createElement("option");
                                                                             opt.value = getData.countrylist[i].code;    
                                                                             opt.text = getData.countrylist[i].desc;
                                                                             x.add(opt);
                                                                         }
                                                                     }else {
                                                                         navigator.notification.alert("Unknown Network Error, Cannot get Country List!" + getData.statusdesc)          
                                                                     }
                                                                     kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 },
                                                                 error: function (errormsg) {
                                                                     navigator.notification.alert("Unknown Error, Cannot get Country List!. Try after sometime")
                                                                     kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 }
                                                             });
                                                      document.getElementById("selCountry").value = "0";
                                                      document.getElementById("selCity").value = "0";
                                                  },

                                                  getCity: function () {
                                                      // kendo.mobile.application.showLoading(); //show loading popup
                                                      var e = document.getElementById("selCountry");
                                                      var str = e.options[e.selectedIndex].value;
                                                      $.ajax({ 
                                                                 type: "POST",
                                                                 url: gurl + "/getCity.aspx",
                                                                 contentType: "application/json; charset=utf-8",
                                                                 data: JSON.stringify({
                                                                                          merchantcode :merchant,country:str
                                                                                      }),
                                                                 success: function (data) {                                                                 
                                                                     var getData = JSON.parse(data);
                                                                     if (getData.statuscode == "000") {
                                                                         //fill the select dropdown for country
                                                                         for (var i = 0;i < getData.countrylist.length;i++) {
                                                                             var x = document.getElementById("selCity");
                                                                             var opt = document.createElement("option");
                                                                             opt.value = getData.citylist[i].code;    
                                                                             opt.text = getData.citylist[i].desc;
                                                                             x.add(opt);
                                                                         }
                                                                     }else {
                                                                         navigator.notification.alert("Unknown Error, Cannot get City List!" + getData.statusdesc)          
                                                                     }
                                                                     kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 },
                                                                 error: function (errormsg) {
                                                                     navigator.notification.alert("Unknown Error, Cannot get City List.  Try after sometime!")
                                                                     kendo.mobile.application.hideLoading(); //hide loading popup
                                                                 }
                                                             });
                                                      document.getElementById("selCountry").value = "0";
                                                      document.getElementById("selCity").value = "0";
                                                  },
                                                  checkConnection: function () {
                                                      kendo.mobile.application.showLoading(); //show loading popup
                                                      var networkState = navigator.connection.type;
                                                      var states = {};
                                                      states[Connection.UNKNOWN] = 'Unknown connection';
                                                      states[Connection.ETHERNET] = 'Ethernet connection';
                                                      states[Connection.WIFI] = 'WiFi connection';
                                                      states[Connection.CELL_2G] = 'Cell 2G connection';
                                                      states[Connection.CELL_3G] = 'Cell 3G connection';
                                                      states[Connection.CELL_4G] = 'Cell 4G connection';
                                                      states[Connection.NONE] = 'No network connection';
                                                      if (states[networkState] != "No network connection") {
                                                          $("body").data().kendoMobilePane.navigate("views/home.html");  
                                                      } else {
                                                          navigator.notification.alert(states[networkState]);                     
                                                          kendo.mobile.application.hideLoading(); //show loading popup
                                                          $("body").data().kendoMobilePane.navigate("views/nonetwork.html");     
                                                      }
                                                  },
        
                                                  fileLocation: function() {
                                                  },
        
                                     
                                                  getLocationO: function() {
                                                      /* var y = $(e.target).data('parameter');
                                                      alert(y);
                                                      if (y=="1"){
                                                      var x = "map_canvas";
                                                      } else{
                                                      var x="map_canvas1";
                                                      }*/
                                                      //window.plugins.spinnerDialog.show(null, null, true);
                                                      //  if (!getgps && gpsfind == "1") {   
                                                      //check whether geolocation is enabled
                                                      navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
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
                                                          console.log(marker);
                                                          console.log("map rendering");
                                                      }
                                                                                               , function onErrorShowMap(error) {
                                                                                                   if (err.code == "1") {
                                                                                                       navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                   } else if (err.code == "2") {
                                                                                                       navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                   }
                                                                                               }
                                                          );
                                                      // }     
                                                      getgps = true;
                                                      //window.plugins.spinnerDialog.hide();
                                                  }
                                              });   
    
    window.programData = kendo.observable({ 
                                              outlettelephone:"",
                                              outletemailid:"",
        
        
                                                  
                                              supportEmailA:  function () {
                                                  window.plugins.socialsharing.shareViaEmail(
                                                      '', 
                                                      'Al Yamamah Reward Support', [programData.outletemailid], 
                                                      null, 
                                                      function (msg) {
                                                      }, 
                                                      function (msg) {
                                                          alert('Error: ' + msg)
                                                      } 
                                                      );
                                              },
        
                                              callTel:  function () {
                                                  window.open("tel:" + programData.outlettelephone);
                                              },
                                              destroymyfaq:function() {
                                                  $("#faq-theme").remove();  
                                              },
        
                                             
        
                                              destroyBenefitDetail:function() {
                                                  $("#benefit-detail").remove();  
                                              },
        
                                              destroyBenefitList:function() {
                                                  $("#benefit-list").remove();  
                                              },
        
                                              destroyOfferListView:function() {
                                                  $("#offerlist-view").remove();  
                                              },
                                              offerDetaildestroyView:function() {
                                                  $("#offerdetail-theme").remove();  
                                              },
                                              outletlistthemedestroyView: function() {
                                                  $("#outletlist-view").remove();
                                              },
                                              
                                              varInit: function() {
                                                  showSpin();
                                                  if (firsttime == "") { //Register Access and device in the platform
                                                      mdevice = device.model;
                                                      muuid = device.uuid;
                                                      mversion = device.version;
                                                      mplatform = device.platform;
                                                      mdevicestat = mdevice + "^" + muuid + "^" + mversion + "^" + mplatform;
                                                      $.ajax({ 
                                                                 type: "POST",
                                                                 cache:false,
                                                                 async:true,
                                                                 timeout:20000,
                                                                 url: gurl + "/initAccess.aspx",
                                                                 contentType: "application/json; charset=utf-8",
                                                                 data: JSON.stringify({
                                                                                          merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                                      }),
                                                                 success: function (data) { 
                                                                     var getData = JSON.parse(data);
                                                                     if (getData.statuscode == "000") {
                                                                         firsttime = "1";  

                                                                         hideSpin(); //hide loading popup
                                                                     }else if (getData.statuscode == "047") {
                                                                         $("body").data().kendoMobilePane.navigate("views/deviceBlock.html");  
                                                                     } else {
                                                                         navigator.notification.alert("Platform Error, Services may not be available!" + getData.statusdesc)          
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 },
                                                                 error: function (errormsg) {
                                                                     navigator.notification.alert("Platform Error, Services may not be available!.  Try after sometime")
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             });
                           
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
                                                          $("body").data().kendoMobilePane.navigate("views/pl-home.html");  
                                                      } else {
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
                                                      }                  
                                                  }
                               
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
                                                  }else {
                                                      currentDevice.getRegistration(function() {
                                                          var badgeNumber = 0;
                                                          currentDevice.setBadgeNumber(badgeNumber,
                                                                                       function onSuccess () {
                                                                                       },
                                                                                       function onError (error) {
                                                                                       });
                                                      }, function(err) {
                                                      });
                                                  }
                     
                                                  if (window.localStorage.getItem("loggedin") == "1" && firsttime == "1") {
                                                      $.ajax({ 
                                                                 type: "POST",
                                                                 cache:false,
                                                                 async:true,
                                                                 timeout:20000,
                                                                 url: gurl + "/logmeout.aspx",
                                                                 contentType: "application/json; charset=utf-8",
                                                                 data: JSON.stringify({
                                                                                          merchantcode :merchant,customerid:customer,password:password,mdevice:mdevicestat
                                                                                      }),
                                                                 success: function (data) {
                                                                     var getData = JSON.parse(data);
                                                                     if (getData.statuscode == "000") {
                                                                         //clear Local Storage on logout
                                                                         window.localStorage.setItem("customer", "");
                                                                         window.localStorage.setItem("customername", "");
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
                                                                        
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("Cannot Logout! " + getData.statusdesc)          
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 },
                                                                 error: function (errormsg) {
                                                                     navigator.notification.alert("Unknown Error, Cannot Logout.  Try after sometime!")
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             });
                                                  } 
                                                
                                                  hideSpin();
                                                  return;
                                              },               
        
        
                                              outletdetailthemedestroyView: function() {
                                                  $("#outletdetail-theme").remove();
                                                  isMapInitialized = false;
                                              },
                                              
                                              homeViewDestroy: function() {
                                                  $("#home-view").remove();
                                              },
                                              
                                         
                                             
                                              exploreDetailthemedestroyView: function() {
                                                  $("#exploredetail-theme").remove();
                                                  isMapInitialized = false;
                                              },
                                             
        
                                              showAllOutlet: function () {
                                                  outletcode = "";
                                                  brandcode="";
                                                  showSpin();
                                                
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/outletlist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.outletlist.length > 0) {
                                                                         //fill the outlet template
                                                                         $("#outletlist-all").kendoMobileListView({
                                                                                                                      dataSource: kendo.data.DataSource.create({data: getData.outletlist, group: "hotelname" }),
                                                                                                                      template: $("#outletListAllTemplate").html(),
                                                                                                                      headerTemplate: "<h2>${value}</h2>",
                                                                                                                      fixedHeaders:true
                                                                                                                  });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No outlet exists for the selected property!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },


        
        
                                              commentList: function () {
                                                  showSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/reviewCommentList.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.ProductComment.length > 0) {
                                                                         $("#outlet-review-1").kendoMobileListView({
                                                                                                                       dataSource: kendo.data.DataSource.create({data: getData.ProductComment}),
                                                                                                                       template: $("#outletreviewTemplate").html()
                                                                                                                   });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No one has provided their review for the Outlet!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Review List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Review List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
        
        
                                              
                                              showOutletAlbum: function () {
                                                  showSpin();
                                                  
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/outletphotolist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.outletphotoalbum.length > 0) {
                                                                         //fill the outlet album
                                                                         $("#outlet-album").kendoMobileListView({
                                                                                                                    dataSource: kendo.data.DataSource.create({data: getData.outletphotoalbum}),
                                                                                                                    template: $("#outletAlbumTemplate").html()
                                                                                                                });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("Album Empty for the selected outlet!") 
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Outlet Album List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet Album List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
                                              
                                              showExploreOutlet: function () {
                                                  showSpin(); //show loading popup
                                                  
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             
                                                             url: gurl + "/outletlist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     //fill the outlet template
                                                                     if (getData.outletlist.length > 0) {
                                                                         $("#outletlistExplore").kendoMobileListView({
                                                                                                                         dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                         template: $("#outletListExploreTemplate").html()
                                                                                                                     });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No outlet exists for the selected property!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              showProperty: function (e) {
                                                  showSpin();
                                                  brandcode = e.view.params.x;
                                                  brandimage = e.view.params.y;
                                                  document.getElementById("brand-imagea").style.background = "url(images/" + brandimage + ".png) no-repeat center center";
                                                  document.getElementById("brand-imagea").style.backgroundSize = "cover";
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/propertyitem.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     m = getData.geolocation.split(",");                                                                     
                                                                     lat = m[0];
                                                                     lon = m[1];
                                                                     
                                                                     document.getElementById("exploredetail-theme-title").innerHTML = getData.hotelname;
                                                                     document.getElementById("exploredetail-theme-1").innerHTML = getData.shortdes;
                                                                     document.getElementById("exploredetail-theme-2").innerHTML = "<pre>" + getData.longdes + "</pre>";
                                                                     sharingSocialView.set("social_shortmsg", "Checkout good discounts on Food and Beverages at " + getData.title + "  \n");
                                                                     sharingSocialView.set("social_header", getData.title);
                                                                     sharingSocialView.set("social_subject", getData.shortdes);
                                                                     sharingSocialView.set("social_message", getData.longdes);
                                                                     sharingSocialView.set("social_image", share_image);                                                                     
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Property Details!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              showOutletItem: function (e) {
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
                                                                                      merchantcode :merchant,brandcode:brandcode,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
   
                                                                 if (getData.statuscode == "000") {
                                                                     m = getData.outletlist[0].geolocation.split(",");  
                                                       
                                                                     lat = m[0];
                                                                     lon = m[1];
                                                                     document.getElementById("outlet-image-large").style.background = "url(" + getData.outletlist[0].imageurll + ") no-repeat center center";
                                                                     document.getElementById("outlet-image-large").style.backgroundSize = "cover";
                                                                     document.getElementById("ooutlet-theme-title").innerHTML = getData.outletlist[0].outletname;
                                                                     document.getElementById("ooutlet-short").innerHTML = getData.outletlist[0].outletshort;
                                                                     document.getElementById("ooutlet-long").innerHTML = "<pre>" + getData.outletlist[0].outletlong + "</pre>";
                                                                     //      document.getElementById("ooutlet-review").innerHTML = getData.outletlist[0].reviewcount + " Review(s)";
                                                                     //      document.getElementById("ooutlet-star").innerHTML = getData.outletlist[0].staraverage + " Star(s)";

                                                                     sharingSocialView.set("social_shortmsg", "Checkout good discounts on Food and Beverages at " + getData.outletlist[0].outletname + "  \n");
                                                                     sharingSocialView.set("social_header", getData.outletlist[0].outletname);
                                                                     sharingSocialView.set("social_subject", getData.outletlist[0].outletshort);
                                                                     sharingSocialView.set("social_message", getData.outletlist[0].outletlong);
                                                                     sharingSocialView.set("social_image", share_image); 
                                                                     programData.set("outlettelephone", getData.outletlist[0].telephone);
                                                                     programData.set("outletemailid", getData.outletlist[0].emailid);
                                                                     shareCustomer = customer;
                                                                     shareProductCode = getData.outletlist[0].outletcode;
                                                                     shareProductType = "1"; //outlet review
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List! Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
        
                                              getLocationE: function() {
                                                  showSpin(); //show loading popup
                                                  if (!isMapInitialized) {
                                                      navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
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
                                                              document.getElementById("map_canvas"),
                                                              mapOptions
                                                              );
    
                                                          var marker = new google.maps.Marker({
                                                                                                  position: latlng,
                                                                                                  map: map
                                                                                              });
                                                          console.log(marker);
                                                          console.log("map rendering");
                                                      }
                                                                                               , function onErrorShowMap(error) {
                                                                                                   if (err.code == "1") {
                                                                                                       navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                   } else if (err.code == "2") {
                                                                                                       navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                   }
                                                                                               }
                                                          );
                                                      isMapInitialized = true;
                                                  }
                                                  hideSpin(); //hide loading popup
                                              },
                                          
    
                                              getLocationO: function() {
                                                  showSpin(); //show loading popup
                                                  if (!isMapInitialized) {
                                                      navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
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
                                                          console.log(marker);
                                                          console.log("map rendering");
                                                      }
                                                                                               , function onErrorShowMap(error) {
                                                                                                   if (err.code == "1") {
                                                                                                       navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                   } else if (err.code == "2") {
                                                                                                       navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                   }
                                                                                               }
                                                          );
                                                      isMapInitialized = true;
                                                  }
                                                  hideSpin(); //hide loading popup
                                              },
        
                                              checkConnection: function () {
                                                  showSpin(); //show loading popup
                                                  var networkState = navigator.connection.type;
                                                  var states = {};
                                                  states[Connection.UNKNOWN] = 'Unknown connection';
                                                  states[Connection.ETHERNET] = 'Ethernet connection';
                                                  states[Connection.WIFI] = 'WiFi connection';
                                                  states[Connection.CELL_2G] = 'Cell 2G connection';
                                                  states[Connection.CELL_3G] = 'Cell 3G connection';
                                                  states[Connection.CELL_4G] = 'Cell 4G connection';
                                                  states[Connection.NONE] = 'No network connection';
                                                  if (states[networkState] != "No network connection") {
                                                      $("body").data().kendoMobilePane.navigate("views/home.html");  
                                                  } else {
                                                      navigator.notification.alert(states[networkState]);                     
                                                      kendo.mobile.application.hideLoading(); //show loading popup
                                                      $("body").data().kendoMobilePane.navigate("views/nonetwork.html");     
                                                  }
                                                  hideSpin();
                                              },
                                         
                                              
        
                                              offerlist: function () {
                                                  offercode = "";
                                                  offertype = "1";
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
                                                                     if (getData.offerlist.length > 0) {
                                                                         //fill the outlet template
                                                                         $("#offer-list-view").kendoMobileListView({
                                                                                                                       dataSource: kendo.data.DataSource.create({data: getData.offerlist, group: "category" }),
                                                                                                                       template: $("#offerListTemplate").html(),
                                                                                                                       headerTemplate: "<h2>${value}</h2>",
                                                                                                                       fixedHeaders:true
                                                                                                                   });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No Offers exists for the selected property!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },

        
        
                                              offeritem: function (e) {
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
                                                                     document.getElementById("offer-image-large").style.background = "url(" + getData.offerlist[0].imageurll + ") no-repeat center center";
                                                                     document.getElementById("offer-image-large").style.backgroundSize = "cover";
                                                                     
                                                                     document.getElementById("ooffer-item-title").innerHTML = getData.offerlist[0].category;
                                                                     document.getElementById("ooffer-shortname").innerHTML = getData.offerlist[0].itemname;
                                                                     document.getElementById("ooffer-description").innerHTML = "<pre>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                     document.getElementById("ooffer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                     document.getElementById("ooffer-remark").innerHTML = "<pre>" + getData.offerlist[0].remark + "</pre>";
                                                                     
                                                                     sharingSocialView.set("social_shortmsg", "Checkout the offer at AlYamamah Rewards - " + getData.offerlist[0].itemname + "  \n");
                                                                     sharingSocialView.set("social_header", getData.offerlist[0].category);
                                                                     sharingSocialView.set("social_subject", getData.offerlist[0].itemname);
                                                                     sharingSocialView.set("social_message", getData.offerlist[0].itemdescription);
                                                                     sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
        
        
                                              oofferOutlet: function () {
                                                  showSpin(); //show loading popup
                                                  
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
                                                                         $("#offer-outlet-list-view").kendoMobileListView({
                                                                                                                              dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                                                              template: $("#offerOutletTemplate").html()
                                                                                                                          });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No outlet exists for the selected offer!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
        
        
                                              benefitlist: function () {
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
                                                                         navigator.notification.alert("No Benefits exists for the selected Program!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Benefit List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Benefit List!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
        
        
                                              benefitdetail: function (e) {
                                                  alert("Hello");
                                                  benefitcode = e.view.params.bd; //benefit code for detail retrieval
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
                                              },
        
        
                                              getfaq: function () {
                                                  showSpin(); //show loading popup
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/faqlist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                                                                                
                                                                 if (getData.statuscode == "000") {
                                                                     //fill the outlet template
                                                                     if (getData.faqlist.length > 0) {
                                                                         $("#faqlist-all").kendoMobileListView({
                                                                                                                   dataSource: kendo.data.DataSource.create({data: getData.faqlist}),
                                                                                                                   template: $("#faqTemplate").html()
                                                                                                               });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No FAQ exists for the selected Program!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get FAQ list!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get FAQ list!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup                                          
                                                             }
                                                         });
                                              }
        
                                          });
    
    window.postProgram = kendo.observable({
                                              username:"",
                                              password:"",
                                              offercode:"",  
                                              offername:"",
                                              offercategory:"",
                                              transactionref:"",
                                              mobilenumber:"",
                                              emailid:"",
                                              tokennum:"",
                                              outlettelephone:"",
                                              outletemailid:"",
                                                  
                                              supportEmailA:  function () {
                                                  window.plugins.socialsharing.shareViaEmail(
                                                      '', 
                                                      'Al Yamamah Reward Support', [postProgram.outletemailid], 
                                                      null, 
                                                      function (msg) {
                                                      }, 
                                                      function (msg) {
                                                          alert('Error: ' + msg)
                                                      } 
                                                      );
                                              },
        
                                              callTel:  function () {
                                                  window.open("tel:" + postProgram.outlettelephone);
                                              },
        
        
                                        
                                              destroyTokenThemeView
                                              :function() {
                                                  postProgram.set("tokennum", "");
                                                  $("#token-theme").remove();
                                              },
        
                                              destroypasswordchange
                                              :function() {
                                                  $("#resetpassword-theme").remove();
                                              },
                                              destroymyprofileview
                                              :function() {
                                                  $("#pl-myprofile-theme").remove();
                                                  newimage = "";
                                              },
        
                                              destroyrenewalreceiptview
                                              :function() {
                                                  $("#pl-myrenewal-receipt-view").remove();
                                              },
                                              
                                              destroymyrenewalview
                                              :function() {
                                                  $("#pl-myrenewal-view").remove();
                                              },
        
                                              destroymyhistory
                                              :function() {
                                                  $("#pl-history-theme").remove();
                                              },
        
                                              destroymyvoucher
                                              :function() {
                                                  $("#myvoucherdetail-theme").remove();
                                              },
        
                                              walletviewdestroy
                                              :function() {
                                                  $("#pl-mywallet-theme").remove();
                                              },
        
                                              destroyreferralredeem
                                              :function() {
                                                  $("#pl-referralredeem-theme").remove();
                                              },
        
                                              destroyReferralRewardListView
                                              :function() {
                                                  $("#pl-referralreward-view").remove();
                                              },
        
                                              destroyrewardredeem
                                              :function() {
                                                  $("#pl-rewardredeem-theme").remove();
                                              },
        
                                              destroySpendRewardListView
                                              :function () {
                                                  $("#pl-spendreward-view").remove(); 
                                              },
        
                                              outletlistthemedestroyView
                                              : function() {
                                                  $("#pl-outletlist-view").remove();
                                              },
        
                                              outletdetailthemedestroyView
                                              : function() {
                                                  $("#pl-outletdetail-theme").remove();
                                                  isMapInitialized = false;
                                              },
                                              offerDetaildestroyView
                                              :function() {
                                                  $("#pl-offerdetail-theme").remove();  
                                              },
                                              
                                              destroyMyCardView
                                              :function() {
                                                  $("#mycard-view").remove();
                                              },
        
                                              destroyOfferListView
                                              :function() {
                                                  $("#pl-offerlist-view").remove();  
                                              },
                                              destroyPLHome
                                              :function() {
                                                  $("#pl-home-view").remove();
                                              },
                                              destroyLoginView
                                              :function() {
                                                  $("#login-theme").remove();  
                                              },
        
                                              loginInit
                                              :function() {
                                                  if (window.localStorage.getItem("rememberMe") != undefined) {
                                                      y = window.localStorage.getItem("rememberMe");           
                                                      if (y == "1") {
                                                          $("#profile-rememberme").data("kendoMobileSwitch").check(true);
                                                          postProgram.set("username", window.localStorage.getItem("memberID"));
                                                      } else {
                                                          postProgram.set("username", "");
                                                          postProgram.set("password", "");
                                                          $("#profile-rememberme").data("kendoMobileSwitch").check(false);                                                          
                                                      }
                                                  }else {
                                                      postProgram.set("username", "");                                                   
                                                  }
                                                  postProgram.set("password", "");
                                              },   
        
                                              initToken
                                              :function() {
                                                  postProgram.set("tokennum", "");
                                              },   
        
                                              destroyRedeemVoucherConfirmation
                                              :function() {
                                                  $("#pl-redeem-confirm-view").remove();  
                                              },
        
                                              confirmIssueResponse
                                              :function() {
                                                  document.getElementById("offer-1").innerHTML = postProgram.transactionref;
                                                  document.getElementById("offer-2").innerHTML = postProgram.couponname;
                                                  document.getElementById("offer-3").innerHTML = postProgram.couponcategory;
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
                                              },        
                                              loadPLDetails
                                              :function() { 
                                                  document.getElementById("nameplate").innerHTML = customername + ', #' + customer + "&nbsp;&nbsp;";  
                                                  if (segmentcode == "1000") {
                                                      document.getElementById("nameplate").style.backgroundColor = "rgba(131,122,63,1)";     
                                                  }else if (segmentcode == "1001") {
                                                      document.getElementById("nameplate").style.backgroundColor = "rgba(160,154,154,1)";     
                                                  }else {
                                                      document.getElementById("nameplate").style.backgroundColor = "rgba(255,255,255,1)";     
                                                  }
                                              },
        
                                              showMyCardData
                                              :function() {
                                                  document.getElementById("mycard-image-pict").style.background = "url(" + segmentimage + ") no-repeat center center";  
                                                  document.getElementById("member-id").innerHTML = "#" + customer + "#";
                                                  document.getElementById("member-name").innerHTML = customername;  
                                                  document.getElementById("segment-name").innerHTML = segmentname;  
                                                  document.getElementById("expiry-date").innerHTML = memberexpiry;    
                                                  document.getElementById("mycard-qr").style.background = "url(" + cusqr + ") no-repeat center center";    
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
                                                  if (!this.username) {
                                                      navigator.notification.alert("Invalid MemberId or Empty");
                                                      return;
                                                  }
                                                  if (!this.password) {
                                                      navigator.notification.alert("Invalid Password or Empty");
                                                      return;
                                                  }
                                                  customer = this.username;
                                                  password = this.password;
                                                  // window.localStorage.setItem("memberID", this.username);
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
                                                                                      merchantcode :merchant,customer:customer,password:password,mdevice:mdevicestat,mdevicef:mdevice,muuid:muuid,mversion:mversion,mplatform:mplatform,mfirsttime: window.localStorage.getItem("notification")
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
                                                                     window.localStorage.setItem("notification", "2")
                                                                     
                                                                     pushSettings = {
                                                                         iOS: {
                                                                             badge: "false",
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
                                                                     
                                                                     if ((getData.deviceinfo.length == 0)) {
                                                                         $("body").data().kendoMobilePane.navigate("views/tokenpage.html");      
                                                                     }else {
                                                                         password = getData.certificate;
                                                                         window.localStorage.setItem("password", password);
                                                                         window.localStorage.setItem("loggedin", "1");

                                                                         $("body").data().kendoMobilePane.navigate("views/pl-home.html");  
                                                                     }
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot Login! " + getData.statusdesc)         
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot Login!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },

                                              validateToken
                                              : function () {
                                                  if (!this.tokennum) {
                                                      navigator.notification.alert("Invalid Token or Empty");
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
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-home.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot Login! " + getData.statusdesc)         
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot Login!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              showAllOutlet
                                              : function () {
                                                  outletcode = "";
                                                  showSpin();
                                                
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/outletlist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.outletlist.length > 0) {
                                                                         //fill the outlet template
                                                                         $("#pl-outletlist-all").kendoMobileListView({
                                                                                                                         dataSource: kendo.data.DataSource.create({data: getData.outletlist, group: "hotelname" }),
                                                                                                                         template: $("#pl-outletListAllTemplate").html(),
                                                                                                                         headerTemplate: "<h2>${value}</h2>",
                                                                                                                         fixedHeaders:true
                                                                                                                     });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No outlet exists for the selected property!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              offerlist
                                              : function () {
                                                  offercode = "";
                                                  offertype = "3";//post login only segmented offers for each member segment
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
                                                                     if (getData.offerlist.length > 0) {
                                                                         //fill the outlet template
                                                                         $("#pl-offer-list-view").kendoMobileListView({
                                                                                                                          dataSource: kendo.data.DataSource.create({data: getData.offerlist, group: "category" }),
                                                                                                                          template: $("#pl-offerListTemplate").html(),
                                                                                                                          headerTemplate: "<h2>${value}</h2>",
                                                                                                                          fixedHeaders:true
                                                                                                                      });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No Offers exists for the selected property!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              offeritem
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
                                                                     document.getElementById("pl-offer-image-large").style.background = "url(" + getData.offerlist[0].imageurll + ") no-repeat center center";
                                                                     document.getElementById("pl-offer-image-large").style.backgroundSize = "cover";
                                                                     
                                                                     document.getElementById("offer-item-title").innerHTML = getData.offerlist[0].category;
                                                                     document.getElementById("offer-shortname").innerHTML = getData.offerlist[0].itemname;
                                                                     document.getElementById("offer-description").innerHTML = "<pre>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                     document.getElementById("offer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                     document.getElementById("offer-remark").innerHTML = "<pre>" + getData.offerlist[0].remark + "</pre>";
                                                                     
                                                                     sharingSocialView.set("social_shortmsg", "Checkout the offer at AlYamamah Rewards  - " + getData.offerlist[0].itemname + "  \n");
                                                                     sharingSocialView.set("social_header", getData.offerlist[0].category);
                                                                     sharingSocialView.set("social_subject", getData.offerlist[0].itemname);
                                                                     sharingSocialView.set("social_message", getData.offerlist[0].itemdescription);
                                                                     sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              activateoffer
                                              : function (e) {
                                                  if (!document.getElementById("tandc-accept").checked) {
                                                      navigator.notification.alert("Please Accept Terms & Conditions to Proceed");
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
                                                                     postProgram.set("transactionref", getData.transactionref);
                                                                     postProgram.set("couponcode", getData.couponcode);
                                                                     postProgram.set("couponname", getData.couponname);                
                                                                     postProgram.set("couponcategory", getData.couponcategory);        
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-confirmpage.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup                                                                 
                                                             }
                                                         });
                                              },        
        
                                              offerOutlet
                                              : function () {
                                                  showSpin(); //show loading popup
                                                  
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
                                                                         $("#pl-offer-outlet-list-view").kendoMobileListView({
                                                                                                                                 dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                                                                 template: $("#pl-offerOutletTemplate").html()
                                                                                                                             });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No outlet exists for the selected offer!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              commentList
                                              : function () {
                                                  showSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/reviewCommentList.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.ProductComment.length > 0) {
                                                                         $("#pl-outlet-review-1").kendoMobileListView({
                                                                                                                          dataSource: kendo.data.DataSource.create({data: getData.ProductComment}),
                                                                                                                          template: $("#pl-outletreviewTemplate").html()
                                                                                                                      });
                                                                     }else {
                                                                         navigator.notification.alert("No one has provided their review for the Outlet!")    
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Review List!" + getData.statusdesc)          
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Review List!.  Try after sometime")
                                                             }
                                                         });
                                                  hideSpin(); //hide loading popup
                                              },
                                              
                                              showOutletAlbum
                                              : function () {
                                                  showSpin();
                                                  
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/outletphotolist.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.outletphotoalbum.length > 0) {
                                                                         //fill the outlet album
                                                                         $("#pl-outlet-album").kendoMobileListView({
                                                                                                                       dataSource: kendo.data.DataSource.create({data: getData.outletphotoalbum}),
                                                                                                                       template: $("#pl-outletAlbumTemplate").html()
                                                                                                                   });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("Album Empty for the selected outlet!")                  
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Outlet Album List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet Album List!. Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              getLocationO
                                              : function() {
                                                  showSpin(); //show loading popup
                                                  if (!isMapInitialized) {
                                                      navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
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
                                                          console.log(marker);
                                                          console.log("map rendering");
                                                      }
                                                                                               , function onErrorShowMap(error) {
                                                                                                   if (err.code == "1") {
                                                                                                       navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                   } else if (err.code == "2") {
                                                                                                       navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                   }
                                                                                               }
                                                          );
                                                      isMapInitialized = true;
                                                  }
                                                  hideSpin(); //hide loading popup
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
                                                                                      merchantcode :merchant,brandcode:brandcode,outletcode:outletcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                                                                              
                                                                 if (getData.statuscode == "000") {
                                                                     m = getData.outletlist[0].geolocation.split(",");  
                                                       
                                                                     lat = m[0];
                                                                     lon = m[1];
                                                                     document.getElementById("pl-outlet-image-large").style.background = "url(" + getData.outletlist[0].imageurll + ") no-repeat center center";
                                                                     document.getElementById("pl-outlet-image-large").style.backgroundSize = "cover";
                                                                     document.getElementById("outlet-theme-title").innerHTML = getData.outletlist[0].outletname;
                                                                     document.getElementById("outlet-short").innerHTML = getData.outletlist[0].outletshort;
                                                                     document.getElementById("outlet-long").innerHTML = "<pre>" + getData.outletlist[0].outletlong + "</pre>";
                                                                     // document.getElementById("outlet-review").innerHTML = getData.outletlist[0].reviewcount + " Review(s)";
                                                                     // document.getElementById("outlet-star").innerHTML = getData.outletlist[0].staraverage + " Star(s)";
                                             
                                                                     sharingSocialView.set("social_shortmsg", "Checkout the offer at AlYamamah Rewards - " + getData.outletlist[0].outletname + "  \n");
                                                                     sharingSocialView.set("social_header", getData.outletlist[0].outletname);
                                                                                
                                                                     sharingSocialView.set("social_subject", getData.outletlist[0].outletshort);
                                                                     sharingSocialView.set("social_message", getData.outletlist[0].outletlong);
                                                                     sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                     postProgram.set("outlettelephone", getData.outletlist[0].telephone);
                                                                     postProgram.set("outletemailid", getData.outletlist[0].emailid);
                                                                     
                                                                     shareCustomer = customer;
                                                                     shareProductCode = getData.outletlist[0].outletcode;
                                                                     shareProductType = "1"; //outlet review
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              spendList
                                              : function () {
                                                  showSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/spendRewardRedeemList.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.spendrewardlist.length > 0) {
                                                                         document.getElementById("spend-value").innerHTML = "Spend Available: " + getData.spendbalance;
                                                                         $("#pl-spend-reward-list").kendoMobileListView({
                                                                                                                            dataSource: kendo.data.DataSource.create({data: getData.spendrewardlist}),
                                                                                                                            template: $("#pl-spendrewardlisttemplate").html()
                                                                                                                        });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("There are currently no rewards listed for the spend!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Cannot get spend reward list! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot retrieve spend reward list. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                                  hideSpin(); //hide loading popup
                                              },
        
                                              spendDetail
                                              : function (e) {
                                                  rc = e.view.params.rco;
                                                  rn = e.view.params.rno;
                                                  offercode = e.view.params.cco;
                                                  cn = e.view.params.cno;
                                                  sr = e.view.params.sro;
                                                  ur = e.view.params.iurl
                                                  showSpin();
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/spendRewardRedeemDetail.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,rewardref:rc,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     document.getElementById("spend-image").style.background = "url(" + ur + ") no-repeat center center";
                                                                     document.getElementById("spend-image").style.backgroundSize = "cover";
               
                                                                     document.getElementById("reward-title-1").innerHTML = rn;
                                                                     document.getElementById("spend-coupon-1").innerHTML = cn;
                                                                     document.getElementById("spend-coupon-expiry-1").innerHTML = "Voucher Expiry : " + memberexpiry;
                                                                     document.getElementById("reward-name-1").innerHTML = rn;
                                                                     document.getElementById("spend-required-1").innerHTML = "Spend Required : " + sr;
                                                                     document.getElementById("spend-balance-1").innerHTML = "Spend Available : " + getData.availablespend;
                                                                     document.getElementById("spend-remark").innerHTML = "<pre>" + getData.remarks + "</pre>";
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot get spend reward details! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot retrieve spend reward details. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              spendRedeemTransaction
                                              : function () {
                                                  if (!document.getElementById("tandc").checked) {
                                                      navigator.notification.alert("Please Accept Terms & Conditions to Proceed");
                                                      return;
                                                  }
                                                  writeSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/spendrewardredeemtransaction.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,rewardref:rc,offercode:offercode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     postProgram.set("transactionref", getData.transactionref);
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-spendredeemvoucher.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot issue voucher for spend! " + getData.statusdesc)      
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot issue voucher for spend. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              redeemConfirm
                                              : function () {
                                                  showSpin();
                                                  document.getElementById("reward-name-2").innerHTML = rn;
                                                  document.getElementById("voucher-name-2").innerHTML = cn;
                                                  document.getElementById("transaction-ref-2").innerHTML = postProgram.transactionref;
                                                  offercode = "";
                                                  cn = "";
                                                  rn = "";
                                                  rc = "";
                                                  sr = "";                                                  
                                                  hideSpin(); //hide loading popup
                                              },
        
                                              referralList
                                              : function () {
                                                  showSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/referralRewardRedeemList.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.referralrewardlist.length > 0) {
                                                                         document.getElementById("referral-value").innerHTML = "Referral Available : " + getData.referralbalance;
                                                                         $("#pl-referral-reward-list").kendoMobileListView({
                                                                                                                               dataSource: kendo.data.DataSource.create({data: getData.referralrewardlist}),
                                                                                                                               template: $("#pl-referralrewardlisttemplate").html()
                                                                                                                           });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("There are currently no rewards listed for the referral!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Cannot get referral reward list! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot retrieve referral reward list. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                                  hideSpin(); //hide loading popup
                                              },
                                              referralDetail
                                              : function (e) {
                                                  rc = e.view.params.rco;
                                                  rn = e.view.params.rno;
                                                  offercode = e.view.params.cco;
                                                  cn = e.view.params.cno;
                                                  sr = e.view.params.sro;
                                                  ur = e.view.params.iurl;
                                                  showSpin();
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/referralRewardRedeemDetail.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,rewardref:rc,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     document.getElementById("referral-image").style.background = "url(" + ur + ") no-repeat center center";
                                                                     document.getElementById("referral-image").style.backgroundSize = "cover";
                                                                     
                                                                     document.getElementById("reward-title-1").innerHTML = rn;
                                                                     document.getElementById("referral-coupon-1").innerHTML = cn;
                                                                     document.getElementById("referral-coupon-expiry-1").innerHTML = "Voucher Expiry : " + memberexpiry;
                                                                     document.getElementById("reward-name-1").innerHTML = rn;
                                                                     document.getElementById("referral-required-1").innerHTML = "Referrals Required : " + sr;
                                                                     document.getElementById("referral-balance-1").innerHTML = "Referrals Available : " + getData.availablereferral;
                                                                     document.getElementById("referral-remark").innerHTML = "<pre>" + getData.remarks + "</pre>";
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot get referral reward details! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot retrieve referral reward details. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              referralRedeemTransaction
                                              : function () {
                                                  if (!document.getElementById("tandc1").checked) {
                                                      navigator.notification.alert("Please Accept Terms & Conditions to Proceed");
                                                      return;
                                                  }
                                                  writeSpin();
                                             
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/referralrewardredeemtransaction.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,segmentcode:segmentcode,rewardref:rc,offercode:offercode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     postProgram.set("transactionref", getData.transactionref);
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-spendredeemvoucher.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot issue voucher for referrals! " + getData.statusdesc)      
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot issue voucher for referrals. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
                                              getSummary
                                              : function () {
                                                  showSpin();
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/summaryReport.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     document.getElementById("summary-1").innerHTML = getData.cashbackbalance;
                                                                     document.getElementById("summary-2").innerHTML = getData.vouchercount;
                                                                     document.getElementById("summary-3").innerHTML = getData.vouchercountexpiry;
                                                                     document.getElementById("summary-4").innerHTML = getData.spendbalance;
                                                                     document.getElementById("summary-5").innerHTML = getData.referralbalance;
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot retrieve Wallet! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("System Error, Cannot retrieve Wallet. Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
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
                                                                         navigator.notification.alert("No Vouchers available in Wallet!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Cannot retrieve Wallet! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  Try after sometime!")
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
                                                                         document.getElementById("myvoucher-load").style.background = "url(" + getData.myvoucherdetail[0].imageurll + ") no-repeat center center";
                                                                         document.getElementById("myvoucher-load").style.backgroundSize = "cover";
                                                                                                                                         
                                                                         document.getElementById("voucher-number").innerHTML = getData.myvoucherdetail[0].itemcode;
                                                                         document.getElementById("voucher-name").innerHTML = getData.myvoucherdetail[0].itemname;
                                                                         document.getElementById("voucher-expiry").innerHTML = getData.myvoucherdetail[0].couponexpirydate;
                                                                         //document.getElementById("coupon-description-1").innerHTML = getData.myvoucherdetail[0].itemdescription;
                                                                     
                                                                         document.getElementById("qr-image-3").style.background = "url(" + getData.myvoucherdetail[0].imageurls + ") no-repeat center center";
                                                    
                                                                         offercode = getData.myvoucherdetail[0].couponcode;
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No Vouchers available in Wallet!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Cannot retrieve Wallet! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
        
                                              myhistorylist
                                              : function () {
                                                  var t = document.getElementById("selCountry").value;
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
                                                                                                                       template: $("#pl-historyListTemplate").html()
                                                                                                                       //endlessScroll: true
                                                                                                                      
                                                                                                                   });
                                                                     }else {
                                                                         navigator.notification.alert("No transaction history available for your membership!")    
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get history!" + getData.statusdesc)          
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get history!.  Try after sometime")
                                                             }
                                                         });
                                                  hideSpin(); //hide loading popup
                                              },
        
                                              getrenewal
                                              :function() {
                                                  document.getElementById("renewal-image-1").style.background = "url(" + segmentimage + ") no-repeat center center";  
                                                  document.getElementById("renewal-id-1").innerHTML = customer;
                                                  document.getElementById("renewal-name-1").innerHTML = customername;  
                                                  document.getElementById("renewal-segment-1").innerHTML = segmentname;  
                                                  document.getElementById("renewal-expiry-1").innerHTML = memberexpiry;    
                                              },
        
                                              renewmymembership
                                              : function () {
                                                  if (!document.getElementById("renew-checked").checked) {
                                                      navigator.notification.alert("Please Accept Terms & Conditions!");
                                                      return;
                                                  }
                                                  showSpin();
                                                
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/memberrenewrequest.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-renewalreceipt.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Cannot place renewal request! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot place renewal request.  Try after sometime!")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },
                                              renewalconfirm
                                              :function() {
                                                  document.getElementById("prenewal-image-1").style.background = "url(" + segmentimage + ") no-repeat center center";  
                                                  document.getElementById("prenewal-id-1").innerHTML = customer;
                                                  document.getElementById("prenewal-name-1").innerHTML = customername;  
                                                  document.getElementById("prenewal-segment-1").innerHTML = segmentname;  
                                                  document.getElementById("prenewal-expiry-1").innerHTML = memberexpiry;    
                                              },
        
                                              editprofiledata
                                              :function() {
                                                  document.getElementById("profile-picture-1").src = cuspict;  
                                                  postProgram.set("mobilenumber", mobilenumber);
                                                  postProgram.set("emailid", emailid);
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
                                                  
                                                  if (showprofile == "1") {
                                                      $("#profile-showprofile").data("kendoMobileSwitch").check(true);
                                                  }else {
                                                      $("#profile-showprofile").data("kendoMobileSwitch").check(false);
                                                  }
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
        
                                              saveProfile:
                                              function () {
                                                  //  if (newimage.length > 0) {
                                                  //     uploadPhoto(newimage);
                                                  //     return;
                                                  //   }else {
                                                  //      alert("No Photo to Upload");     
                                                  //   }      
                                                  if (!this.mobilenumber) {
                                                      navigator.notification.alert("Invalid Mobile or Empty");
                                                      return;
                                                  }
                                                  if (!this.emailid) {
                                                      navigator.notification.alert("Invalid EmailId or Empty");
                                                      return;
                                                  }
                                                  
                                                  if ((!document.getElementById("profile-pushoffer").checked) && (document.getElementById("profile-remindexpiry").checked)) {
                                                      navigator.notification.alert("You need to enable Push Notification to enable reminders for expirying vouchers");
                                                      return;
                                                  }
                                                                                           
                                                  mobilenumber1 = this.mobilenumber;
                                                  emailid1 = this.emailid;  

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
                                                  
                                                  if (document.getElementById("profile-showprofile").checked) {
                                                      showprofile1 = "1";
                                                  }else {
                                                      showprofile1 = "";
                                                  }      
                                                  showSpin();                                                  
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/updateprofile.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,customerid:customer,password:password,mobile:mobilenumber1,emailid:emailid1,pushoffer:pushoffer1,remindexpiry:remindexpiry1,showprofile:showprofile1,image1:newimage,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     mobilenumber = mobilenumber1;
                                                                     emailid = emailid1;
                                                                     pushoffer = pushoffer1;
                                                                     remindexpiry = remindexpiry1;
                                                                     showprofile = showprofile1;
                                                                     
                                                                     pushSettings = {
                                                                         iOS: {
                                                                             badge: "false",
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
                                                                     }else {
                                                                         currentDevice.unregister()
                                                                             .then(
                                                                                 function() {
                                                                                 },
                                                                                 function (err) {
                                                                                     //alert('unregister 2 ' + err);
                                                                                 }
                                                                                 );
                                                                     }
                                                                     
                                                                     navigator.notification.alert("Profile changes successfully updated!")   
                                                                     $("body").data().kendoMobilePane.navigate("views/pl-home.html");  
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Could not update profile changes due to error! " + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (error) {
                                                                 navigator.notification.alert("Unknown Error, Could not update profile!.  Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                                  hideSpin(); //hide loading popup
                                              },
        
                                              requestPasswordChageURL:
                                              function () {
                                                  if (!this.username) {
                                                      navigator.notification.alert("Invalid MemberId or Empty");
                                                      return;
                                                  }
                                                  if (!this.emailid) {
                                                      navigator.notification.alert("Invalid EmailID or Empty");
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
                                                                                      merchantcode :merchant,customerid:this.username,emailid:this.emailid,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") { //Login Successful
                                                                     navigator.notification.alert("A URL has been sent to your registered Email ID with a link to set your new password!");   
                                                                     postProgram.set("username", "");
                                                                     postProgram.set("emailid", "");
                                                                     hideSpin(); //hide loading popup
                                                                 }else {
                                                                     navigator.notification.alert("Unable to send the password reset URL! " + getData.statusdesc)         
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Unable to send the password reset URL!")
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