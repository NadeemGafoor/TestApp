 

(function (global) {
    var googleapikey = "";
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
    var lat = "";
    var lon = "";
    var city = "";
    var country = "";
    var geocity = "";
    var geocountry = "";
   
    var autolocation = "";
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
    var social_subject = "IHG Dining Rewards";
    var share_image = "http://exclusiveu.dynns.com:8088/mobileportal/images/ihg_logo.png";
    var share_contact = "Phone: +971 427 66 186 \nEmail: inquiry@ihg.com";
    var short_msg = "Check out the IHG Dining Rewards at ";
    var offertelephone = "0097142766186";
    var enrollmenttelephone="0097142766213";
    var customercaretelephone="0097142766186";
    var cardimage = "";
    
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
                                                       
                                                        window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(sharingSocialView.social_header + "\n" + sharingSocialView.social_message + "\n" + share_contact , null, "http://www.ihgdiningrewards.com", "Share with your friends if you like.", function () {
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
                                           username:"",
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
                                           pldestroyBenefitList:function() {
                                               $("#pl-benefit-list").remove();  
                                           },
        
                                           destroyBenefitList:function() {
                                               $("#benefit-list").remove();  
                                           },
        
            
                                           destroypasswordchange:function() {
                                               $("#resetpassword-theme").remove();
                                           },
                                           destroyTokenThemeView
                                           :function() {
                                               preLogin.set("tokennum", "");
                                               $("#token-theme").remove();
                                           },
        
                                           destroyLoginView
                                           :function() {
                                               $("#login-theme").remove();  
                                           },
        
                                           destroyOfferListNearMeView:function() {
                                               $("#offerlistnearme-view").remove();  
                                           },
                                           destroyOfferListView:function() {
                                               $("#offerlist-view").remove();  
                                           },
                
                                           offerDetaildestroyView
                                           :function() {
                                               $("#offerdetail-theme").remove();  
                                           },
                                          
                                           offerDetaildestroyViewNearMe
                                           :function() {
                                               $("#offerdetailnearme-theme").remove();  
                                           },
                                          
        
                                           outletdetailthemedestroyView: function() {
                                               $("#outletdetail-theme").remove();
                                               isMapInitialized = false;
                                           },
        
                                           outletdetailthemedestroyViewNearMe: function() {
                                               $("#outletdetailnearme-theme").remove();
                                               isMapInitialized = false;
                                           },
        
                                           outletlistnearmethemedestroyView: function() {
                                               $("#outletlistnearme-theme").remove();
                                           },
                                           outletlistthemedestroyView: function() {
                                               $("#outletlist-theme").remove();
                                           },
        
                                           destroyCustomerService:function() {
                                               $("#customerservice-theme").remove();  
                                           },
                                           destroyTermsofService:function() {
                                               $("#termsofservice-theme").remove();  
                                           },
                                           destroyJoin:function() {
                                               $("#join-theme").remove();  
                                           },
                                           destroyBrandPage:function() {
                                               $("#brandpage-theme").remove();  
                                           },
                                           destroyBenefitDetail:function() {
                                               $("#benefit-detail").remove();  
                                           },
                                           pldestroyBenefitDetail:function() {
                                               $("#pl-benefit-detail").remove();  
                                           },                                         
                                      
                                           benefitdetail: function (e) { 
                                               benefitcode = e.view.params.bd; 
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
                                                                      document.getElementById("item-title").innerHTML = getData.benefitlist[0].titlename;
                                                                      document.getElementById("benefit-text3").innerHTML = "<pre class='fulljustify'>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                      sharingSocialView.set("social_subject", getData.benefitlist[0].shortdes1);
                                                                      sharingSocialView.set("social_message", getData.benefitlist[0].shortdes2);
                                                                      sharingSocialView.set("social_header", getData.benefitlist[0].shortdes1 + "\n");
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("There are no Benefits for the selected Program")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Benefit details. " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit details.  [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           },
        
                                           showAllOutlet: function (e) {
                                               y = e.view.params.geo;
                                               outletcode = "";
                                               brandcode = "";
                                          
                                               showSpin();
        
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
                                                         
                                                           listOutlet();
                                                       }
                                                   });
                                               }
                                                                                        , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                            //  if (err.code == "1") {
                                                                                            //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                            //  } else if (err.code == "2") {
                                                                                            //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                            //  }
                                                                                            if (y==="1") {
                                                                                                geocity = "";
                                                                                            }else {
                                                                                                geocity = city;
                                                                                            }
                                                                                            geocountry = country;
                                                                                         
                                                                                            // locationErrorToast();
                                                                                            lat = window.localStorage.getItem("lat");
                                                                                            lon = window.localStorage.getItem("lon");
                                                                                            listOutlet();
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
                                                                                   merchantcode :merchant,brandcode:brandcode,outletcode:outletcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);

                                                              if (getData.statuscode == "000") {
                                                                  m = getData.outletlist[0].geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                  lat = m[0];
                                                                  lon = m[1];
                                                                  
                                                                  document.getElementById("outlet-detail-div").style.display = "block";
                                                                  document.getElementById("outlet-image-large").style.background = "url(" + getData.outletlist[0].imageurll + ") no-repeat center center";
                                                                  document.getElementById("outlet-image-large").style.backgroundSize = "cover";
                                                                  document.getElementById("item-title").innerHTML = getData.outletlist[0].outletname;
                                                                  document.getElementById("ooutlet-short").innerHTML = "<pre class='fulljustifybold'>" + getData.outletlist[0].outletshort + "</pre>";
                                                                  document.getElementById("ooutlet-long").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";
                                                                  // document.getElementById("outlet-review").innerHTML = getData.outletlist[0].reviewcount + " Review(s)";
                                                                  // document.getElementById("outlet-star").innerHTML = getData.outletlist[0].staraverage + " Star(s)";
                                             
                                                                  sharingSocialView.set("social_shortmsg", "Checkout the offer at IHG Dining Rewards - " + getData.outletlist[0].outletname + "  \n");
                                                                  sharingSocialView.set("social_header", getData.outletlist[0].outletname);
                                                                                
                                                                  sharingSocialView.set("social_subject", getData.outletlist[0].outletshort);
                                                                  sharingSocialView.set("social_message", getData.outletlist[0].outletlong);
                                                                  sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                  preLogin.set("outlettelephone", getData.outletlist[0].telephone);
                                                                     
                                                                  shareCustomer = customer;
                                                                  shareProductCode = getData.outletlist[0].outletcode;
                                                                  shareProductType = "1"; //outlet review
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get outlet List " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Outlet List. [" + errormsg.statusText + "]")
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
                                                                      navigator.notification.alert("No Offers exists for the selected Restaurant!")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Offer List " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Offer List.  [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
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
                                                   }
                                                                                            , function onErrorShowMap(error) {
                                                                                                if (error.code == "1") {
                                                                                                    navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location");  
                                                                                                } else if (error.code == "2") {
                                                                                                    navigator.notification.alert("Device is unable to get the GPS position. Location services seems disabled");  
                                                                                                }
                                                                                            }
                                                       );
                                                   isMapInitialized = true;
                                               }
                                               hideSpin(); //hide loading popup
                                           },
        
                                           offerlist: function (e) {
                                               y = e.view.params.geo;
                                        
                                               showSpin();
        
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
                                                           listOffer();
                                                       }
                                                   });
                                               }
                                                                                        , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                            //  if (err.code == "1") {
                                                                                            //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                            //  } else if (err.code == "2") {
                                                                                            //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                            //  }
                                                                                            if (y==="1") {
                                                                                                geocity = "";
                                                                                            }else {
                                                                                                geocity = city;
                                                                                            }
                                                                                            lat = window.localStorage.getItem("lat");
                                                                                            lon = window.localStorage.getItem("lon");
                                                                                            geocountry = country;
                                                                                            //locationErrorToast();
                                                                                            listOffer();
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
                                                                  document.getElementById("offer-detail-div").style.display="block";
                                                                  document.getElementById("offer-image-large").style.background = "url(" + getData.offerlist[0].imageurll + ") no-repeat center center";
                                                                  document.getElementById("offer-image-large").style.backgroundSize = "cover";
                                                                     
                                                                  document.getElementById("item-title").innerHTML = getData.offerlist[0].category;
                                                                  document.getElementById("ooffer-shortname").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + " </pre>";
                                                                  document.getElementById("ooffer-description").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                  document.getElementById("ooffer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                  document.getElementById("ooffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                                                                  preLogin.set("outlettelephone", offertelephone);   
                                                                  sharingSocialView.set("social_shortmsg", "Checkout the offer at IHG Dining Rewards - " + getData.offerlist[0].itemname + "  \n");
                                                                  sharingSocialView.set("social_header", getData.offerlist[0].category);
                                                                  sharingSocialView.set("social_subject", getData.offerlist[0].itemname);
                                                                  sharingSocialView.set("social_message", getData.offerlist[0].itemdescription);
                                                                  sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Offer List. " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Offer List. [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
        
        
                                           oofferOutlet: 
                                               
                                               
                                               
                                           function () {
                                               showSpin(); //show loading popup
                                              
                                               navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                   lat = position.coords.latitude;                                  
                                                   lon = position.coords.longitude;
                                                   listOfferOutlet();
                                               }
                                                                                        , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                            //  if (err.code == "1") {
                                                                                            //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                            //  } else if (err.code == "2") {
                                                                                            //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                            //  }
                                                                                            lat = window.localStorage.getItem("lat");
                                                                                            lon = window.localStorage.getItem("lon");
                                                                                            listOfferOutlet();
                                                                                        }
                                                   );
                                           },
        
                                           getTermsofService:
                                           function () {  
                                               window.open("http://www.ihg.com/hotels/gb/en/global/customer_care/member-tc#diningrewards", "_blank", "location=yes");
                                           },
        
                                           getCustomerService
                                           : function () {  
                                               window.open("https://www.ihg.com/hotels/gb/en/customer-care/", "_blank", "location=yes");
                                           },
                                           callTel
                                           :  function () {
                                               window.open("tel:" + preLogin.outlettelephone);
                                           },
          callTelc
                                           :  function () {
                                               window.open("tel:" + preLogin.enrollmenttelephone);
                                           },
          customerCare
                                           :  function () {
                                               window.open("tel:" + preLogin.customercaretelephone);
                                           },
        
                                           shareOutlet
                                           :  function () {
                                               showSpin();
                                               $("body").data("kendoMobilePane").navigate("views/socialshare.html");  
                                               hideSpin();
                                           },
                                           varInit
                                           : function() {
                                               showSpin();
                                               if (firsttime == "") { //Register Access and device in the platform
                                                   mdevice = device.model;
                                                   muuid = device.uuid;
                                                   mversion = device.version;
                                                   mplatform = device.platform;
                                                   mdevicestat = mdevice + "^" + muuid + "^" + mversion + "^" + mplatform;
                                                   preLogin.set("mdevice", mdevicestat);
                                                   preLogin.set("merchantcode", merchant);
                                                   preLogin.set("customer", customer);
                                                   preLogin.set("segmentcode", segmentcode);
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
                                                                      //alert(googleapikey);
                                                                      hideSpin(); //hide loading popup
                                                                  }else if (getData.statuscode === "047") {
                                                                      $("body").data("kendoMobilePane").navigate("views/deviceBlock.html");  
                                                                  } else {
                                                                      navigator.notification.alert("Platform Error, Services may not be available. " + getData.statusdesc)          
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              },
                                                              error: function (errormsg) {
                                                                  navigator.notification.alert("Platform Error, Services may not be available. [" + errormsg.statusText + "]")
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          });
                                                   
                                                   //var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                                                   // if (mplatform==="iOS") {
                                                   //     var options = {enableHighAccuracy:false,timeout: 30000,frequency:600000 }
                                                   //    mywatch = navigator.geolocation.watchPosition(meWatchPos, watchPosError, options);
                                                   // } else {
                                                   //Check whether GPS enabled
                                                   navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                                                       lat = position.coords.latitude;                                  
                                                       lon = position.coords.longitude;
                                                       // window.setInterval(meWatchPos(), 30000);
                                                       
                                                       //nwatch = window.setInterval(meWatchPosTime(), 60000);
                                                       
                                                       var callbackFn = function (location) {
                                                           //  console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
                                                           // Do your HTTP request here to POST location to your server.
                                                           //
                                                           //
                                                           lat = location.latitude;
                                                           lon = location.longitude;
                                                           $.ajax({ 
                                                                      type: "POST",
                                                                      cache:false,
                                                                      async:true,
                                                                      timeout:20000,
                                                                      url: gurl + "/trackDevice.aspx",
                                                                      contentType: "application/json; charset=utf-8",
                                                                      data: JSON.stringify({
                                                                                               merchantcode :merchant,mdevice:mdevicestat,lat:lat,lon:lon,customer:customer,segment:segmentcode
                                                                                           }),
                                                                      success: function (data) {
                                                                      },
                                                                      error: function (error) {
                                                                      }
                                                                  });
                                                           
                                                           bgGeo.finish();
                                                       };

                                                       var failureFn = function (error) {
                                                           //alert(error);
                                                           watchPosError(error);
                                                       }
                                                           
                                                       //--------------Background Tracking------------------
                                                       var bgGeo = window.plugins.backgroundGeoLocation;

                                                       var androidOptions = {
                                                           url: gurl + "/trackDeviceAndroid.aspx", 
                                                           params:{
                                                               merchantcode: preLogin.merchantcode,    
                                                               mdevice:preLogin.mdevice,
                                                               lat:window.localStorage.getItem("lat"), 
                                                               lon:window.localStorage.getItem("lon"),
                                                               customer:preLogin.customer,
                                                               segment:preLogin.segmentcode
                                                           },
                                                           desiredAccuracy: 0,
                                                           stationaryRadius: 10,
                                                           distanceFilter: 30,
                                                           notificationTitle:"IHG Dining Rewards Service",
                                                           activityType: 'AutomotiveNavigation',
                                                           debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
                                                           stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
                                                       }
                                                                                                                 
                                                       // BackgroundGeoLocation is highly configurable.
                                                       bgGeo.configure(callbackFn, failureFn, androidOptions);

                                                       // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
                                                       bgGeo.start(callbackFn, failureFn, androidOptions);
                                                       //--------------End Background Tracking------------------
                                                   }
                                                                                            , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                                                                                                //  if (err.code == "1") {
                                                                                                //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                //  } else if (err.code == "2") {
                                                                                                //      navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                //  }
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
                                                      
                                                       $("body").data("kendoMobilePane").navigate("views/pl-myprofile.html"); 
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
                                            
                                                   if (window.localStorage.getItem("notification") == undefined || window.localStorage.getItem("notification") == '' || window.localStorage.getItem("notification") == 'null') {
                                                       //Enable and Register
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
                                                               Segment:segmentcode,
                                                               devicecode:muuid
                                                           }
                                                       };
                                                       
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
                                               }
                                                
                                               hideSpin();
                                               return;
                                           },
        
                                           logMeOut
                                           :function() {
                                               // if (window.localStorage.getItem("loggedin") == "1" && firsttime == "1") {
                                               showSpin();
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
                                                                  $("body").data("kendoMobilePane").navigate("views/home.html");   
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Logout. " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Logout. [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                               // }   
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
                                                                  autolocation = getData.autolocation;
                                                                  city = getData.city;
                                                                  country = getData.country;

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
                                                                  window.localStorage.setItem("autolocation", autolocation);
                                                                  window.localStorage.setItem("city", city);
                                                                  window.localStorage.setItem("country", country);
                                                                  
                                                                 
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
                                                                          Segment:segmentcode,
                                                                          devicecode:muuid
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
                                                                      $("body").data("kendoMobilePane").navigate("views/tokenpage.html");      
                                                                  }else {
                                                                      password = getData.certificate;
                                                                      window.localStorage.setItem("password", password);
                                                                      window.localStorage.setItem("loggedin", "1");

                                                                      $("body").data("kendoMobilePane").navigate("views/pl-myprofile.html");  
                                                                  }
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Login. " + getData.statusdesc)         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Login.   [" + errormsg.statusText + "]")
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
                                                                  $("body").data("kendoMobilePane").navigate("views/pl-myprofile.html");  
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Cannot Login. " + getData.statusdesc)         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot Login.  [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },  
                                           requestPasswordChangeURL:
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
                                                                  navigator.notification.alert("A URL has been sent to your registered Email ID with a link to set your new password.");   
                                                                  preLogin.set("username", "");
                                                                  preLogin.set("emailid", "");
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Unable to send the password reset URL. " + getData.statusdesc)         
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Unable to send the password reset URL [" + errormsg.statusText + "]")
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
                                                                      navigator.notification.alert("There are no Benefits for the selected Program!")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Benefit List " + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit List. [" + errormsg.statusText + "]")
                                                              hideSpin(); //hide loading popup
                                                          }
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
                                            destroysettingview                  
                                            :function() {
                                                $("#pl-setting-theme").remove();
                                            },
                                            destroymyvoucher
                                            :function() {
                                                $("#myvoucherdetail-theme").remove();
                                            },
                                            walletviewdestroy
                                            :function() {
                                                $("#pl-mywallet-theme").remove();
                                            },
                                            destroyreceipt
                                            :function() {
                                                $("#receipt-view").remove();  
                                            },
        
                                            plofferDetaildestroyView
                                            :function() {
                                                $("#pl-offerdetail-theme").remove();  
                                            },
        
                                            plofferDetaildestroyViewNearMe
                                            :function() {
                                                $("#pl-offerdetailnearme-theme").remove();  
                                            },
                                            pldestroyOfferListViewnearme:function() {
                                                $("#pl-offerlistnearme-view").remove();  
                                            },
                                            pldestroyOfferListView:function() {
                                                $("#pl-offerlist-view").remove();  
                                            },

                                            ploutletlistthemenearmedestroyView: function() {
                                                $("#pl-outletlistnearme-theme").remove();
                                            },
                                            ploutletdetailthemedestroyView: function() {
                                                $("#pl-outletdetail-theme").remove();
                                                isMapInitialized = false;
                                            },
        
                                            ploutletdetailthemedestroyViewNearMe: function() {
                                                $("#pl-outletdetailnearme-theme").remove();
                                                isMapInitialized = false;
                                            },
                                            ploutletlistthemedestroyView: function() {
                                                $("#pl-outletlist-theme").remove();
                                            },
                                            destroymyprofileview:function() {
                                                $("#myprofile-view").remove();
                                            },
                                            destroymessageitem:function() {
                                                $("#messageitem-theme").remove();
                                            },
                                            pldestroyBrandPage:function() {
                                                $("#pl-brandpage-theme").remove();
                                            },
                                            destroymymessages:function() {
                                                $("#mymessagelist-theme").remove();
                                            },
                                            loginSuccess:function() {
                                                if (segmentcode==="") {
                                                    $("body").data("kendoMobilePane").navigate("views/home.html"); 
                                                    return;
                                                }
                                                
                                                if (autolocation != "1") {
                                                    gpsErrorApp();
                                                }
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
                                                document.getElementById("mycardid").innerHTML = "#" + customer + "#";
                                                document.getElementById("mycardexpiry").innerHTML = memberexpiry;
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
                                                                       navigator.notification.alert("No message history available for your Membership.")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get message history. " + getData.statusdesc)          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message history.  [" + errormsg.statusText + "]")
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
                                                                       document.getElementById("msgnarration").innerHTML = getData.messageitem[0].narration;
                                                                       document.getElementById("msgmonth").innerHTML = getData.messageitem[0].mmonth;
                                                                       document.getElementById("msgday").innerHTML = getData.messageitem[0].mday;
                                                                       postLogin.set("msgsequence", getData.messageitem[0].sequence);
                                                                   }else {
                                                                       navigator.notification.alert("No message item available for your Membership.")    
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get message item. " + getData.statusdesc)          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get message item.  [" + errormsg.statusText + "]")
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
                                                                                                 if (y==="1") {
                                                                                                     geocity = "";
                                                                                                 }else {
                                                                                                     geocity = city;
                                                                                                 }
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 geocountry = country;
                                                                                             
                                                                                                 //locationErrorToast();
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
                                                    //locationErrorToast();
                                                    pllistOutlet();
                                                    hideSpin();
                                                }
                                            } ,
        
                                            plshowOutletItem
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
                                                                   document.getElementById("pl-outletdetail-div").style.display="block";
                                                                   document.getElementById("pl-outlet-image-large").style.background = "url(" + getData.outletlist[0].imageurll + ") no-repeat center center";
                                                                   document.getElementById("pl-outlet-image-large").style.backgroundSize = "cover";
                                                                   document.getElementById("item-title").innerHTML = getData.outletlist[0].outletname;
                                                                   document.getElementById("pl-ooutlet-short").innerHTML = "<pre class='fulljustifybold'>" +  getData.outletlist[0].outletshort + "</pre>";
                                                                   document.getElementById("pl-ooutlet-long").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";
                                             
                                                                   sharingSocialView.set("social_shortmsg", "Checkout the offer at IHG Dining Rewards - " + getData.outletlist[0].outletname + "  \n");
                                                                   sharingSocialView.set("social_header", getData.outletlist[0].outletname);
                                                                                
                                                                   sharingSocialView.set("social_subject", getData.outletlist[0].outletshort);
                                                                   sharingSocialView.set("social_message", getData.outletlist[0].outletlong);
                                                                   sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                   postLogin.set("outlettelephone", getData.outletlist[0].telephone);
                                                                     
                                                                   shareCustomer = customer;
                                                                   shareProductCode = getData.outletlist[0].outletcode;
                                                                   shareProductType = "1"; //outlet review
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get outlet List. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Outlet List.  [" + errormsg.statusText + "]")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
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
                                                                                                 if (error.code == "1") {
                                                                                                     navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location.");  
                                                                                                 } else if (error.code == "2") {
                                                                                                     navigator.notification.alert("Device is unable to get the GPS position. Location services seems disabled.");  
                                                                                                 }
                                                                                             }
                                                        );
                                                    isMapInitialized = true;
                                                }
                                                hideSpin(); //hide loading popup
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
                                                                       $("#pl-outlet-offer").kendoMobileListView({
                                                                                                                     dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                     template: $("#pl-outletOfferTemplate").html()
                                                                                                                    
                                                                                                                 });
                                                                       hideSpin(); //hide loading popup
                                                                   }else {
                                                                       navigator.notification.alert("There are no offers for the selected Restaurant.")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get Offer List. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Offer List.   [" + errormsg.statusText + "]")
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
                                                                                                 if (y==="1") {
                                                                                                     geocity = "";
                                                                                                 }else {
                                                                                                     geocity = city;
                                                                                                 }
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 geocountry = country;
                                                                                                 
                                                                                                 //locationErrorToast();
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
                                                    //locationErrorToast();
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
                                                                   document.getElementById("pl-offerdetail-div").style.display="block";
                                                                   document.getElementById("pl-offer-image-large").style.background = "url(" + getData.offerlist[0].imageurll + ") no-repeat center center";
                                                                   document.getElementById("pl-offer-image-large").style.backgroundSize = "cover";
                                                                     
                                                                   document.getElementById("item-title").innerHTML = getData.offerlist[0].category;
                                                                   document.getElementById("pl-ooffer-shortname").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + " </pre>";
                                                                   document.getElementById("pl-ooffer-description").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                                                                   document.getElementById("pl-ooffer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                                                                   document.getElementById("pl-ooffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                                                                   postLogin.set("outlettelephone", offertelephone);
                                                                   sharingSocialView.set("social_shortmsg", "Checkout the offer at IHG Dining Rewards - " + getData.offerlist[0].itemname + "  \n");
                                                                   sharingSocialView.set("social_header", getData.offerlist[0].category);
                                                                   sharingSocialView.set("social_subject", getData.offerlist[0].itemname);
                                                                   sharingSocialView.set("social_message", getData.offerlist[0].itemdescription);
                                                                   sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get Offer List. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Offer List.  [" + errormsg.statusText + "]")
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
                                                                                                 //locationErrorToast();
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 pllistOfferOutlet();
                                                                                             });
                                                }else {
                                                    //locationErrorToast();
                                                    lat = window.localStorage.getItem("lat");
                                                    lon = window.localStorage.getItem("lon");
                                                    pllistOfferOutlet();
                                                }
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
                                                                   postLogin.set("transactionref", getData.transactionref);
                                                                   postLogin.set("couponcode", getData.couponcode);
                                                                   postLogin.set("couponname", getData.couponname);                
                                                                   postLogin.set("couponcategory", getData.couponcategory);        
                                                                   $("body").data("kendoMobilePane").navigate("views/pl-confirmpage.html");  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Unknown Network Error, Cannot get Offer List. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot get Offer List. [" + errormsg.statusText + "]")
                                                               hideSpin(); //hide loading popup                                                                 
                                                           }
                                                       });
                                            }, 
        
                                            confirmIssueResponse
                                            :function() {
                                                document.getElementById("offer-1").innerHTML = postLogin.transactionref;
                                                document.getElementById("offer-2").innerHTML = postLogin.couponname;
                                                document.getElementById("offer-3").innerHTML = postLogin.couponcategory;
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
                                                                       navigator.notification.alert("No Vouchers available in Wallet.")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet.  " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  [" + errormsg.statusText + "]")
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
                                                                       
                                                                       document.getElementById("wallet-div").style.display="block";
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
                                                                       navigator.notification.alert("No Vouchers available in Wallet.")    
                                                                       hideSpin(); //hide loading popup
                                                                   }
                                                               }else {
                                                                   navigator.notification.alert("Cannot retrieve Wallet. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot retrieve Wallet.  [" + errormsg.statusText + "]")
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
                                                                                                 //locationErrorToast();
                                                                                                 lat = window.localStorage.getItem("lat");
                                                                                                 lon = window.localStorage.getItem("lon");
                                                                                                 myOfferListOutlet();
                                                                                             });
                                                }else {
                                                    //locationErrorToast();
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
                                                                   navigator.notification.alert("Unknown Network Error, Cannot delete message. " + getData.statusdesc)          
                                                               }
                                                           },
                                                           error: function (errormsg) {
                                                               navigator.notification.alert("Unknown Error, Cannot delete message. [" + errormsg.statusText + "]")
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
        
                                            editsettingdata
                                            :function() {
                                                listCountry();
                                                listCity(country);
                                               
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
                                                    document.getElementById("selCountry").value = country;
                                                    document.getElementById("selCity").value = city;
                                                }
                                                hideSpin(); //hide loading popup
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
                                                        navigator.notification.alert("Select Country");
                                                        return; 
                                                    }
                                                    if (document.getElementById("selCity").value == "") {
                                                        navigator.notification.alert("Select City");
                                                        return; 
                                                    }
                                                }      
                                                                                                
                                                if ((!document.getElementById("profile-pushoffer").checked) && (document.getElementById("profile-remindexpiry").checked)) {
                                                    navigator.notification.alert("You need to enable Push Notification to enable reminders for expirying vouchers");
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
                                                                   window.localStorage.setItem("city", city);
                                                                   window.localStorage.setItem("country", country);  
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
                                                                     
                                                                   navigator.notification.alert("Profile changes successfully updated.")   
                                                                   $("body").data().kendoMobilePane.navigate("views/pl-myprofile.html");  
                                                                   hideSpin(); //hide loading popup
                                                               }else {
                                                                   navigator.notification.alert("Could not update profile changes due to error. " + getData.statusdesc)          
                                                                   hideSpin(); //hide loading popup
                                                               }
                                                           },
                                                           error: function (error) {
                                                               navigator.notification.alert("Unknown Error, Could not update profile.  [" + errormsg.statusText + "]")
                                                               hideSpin(); //hide loading popup
                                                           }
                                                       });
                                                hideSpin(); //hide loading popup
                                            },
        
                                            showBrandPage
                                            : function () {
                                                // alert("Hello");
                                                $("body").data("kendoMobilePane").navigate("views/pl-brandpage.html");  
                                            }        
                                        });
    
    function listCountry() {
        showSpin(); //show loading popup
                                      
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:false,
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
                               navigator.notification.alert("Unknown Network Error, Cannot get Country list. " + getData.statusdesc)          
                               hideSpin(); //hide loading popup
                           }
                       }
                   },
                   error:
                   function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Country list. [" + errormsg.statusText + "]")
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
                   async:false,
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
                           navigator.notification.alert("Unknown Network Error, Cannot get City list. " + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get City list. [" + errormsg.statusText + "]")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function hideSpin() {
        setTimeout(function() {
            window.plugins.spinnerDialog.hide();
        }, 2000);  //hide Loading Popup
    }
         
    function showSpin() {
        if (!checkConnectionBool()) {
                   navigator.notification.alert("Cannot complete the request.  Network unavailable.  Please check your network and re-try.");  
            //        //$("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
              } else {
            window.plugins.spinnerDialog.show(null, null, true); //show loading popup
        }
    }
    
    function writeSpin() {
        if (!checkConnectionBool()) {
           navigator.notification.alert("Cannot complete the request.  Network unavailable.  Please check your network and re-try.");              
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
            navigator.notification.alert(states[networkState]);                     
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
    
    function listOutlet() {
        alert(lat);
        alert(lon);
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
                               $("#outletlist-all").kendoMobileListView({
                                                                             
                                                                            dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                            template: $("#outletListAllTemplate").html(),
                                                                          
                                                                            filterable: {
                                       autoFilter: true,
                                       placeholder:"Search By Restaurant Name",                                         
                                       field: "outletname",
                                       operator: "contains"
                                   }
                                                                                                                    
                                                                        });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("No Restaurant exists for the selected property")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Restaurant List." + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.  [" + errormsg.responseText + "]")
                       hideSpin(); //hide loading popup
                   }
               });
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
                                       operator: "contains"
                                   }
                                                                                                                    
                                                                           });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no Restaurant for the selected Hotel")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Restaurant List. " + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.  [" + errormsg.statusText + "]")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function listOffer() {
        offercode = "";
        offertype = "1";
                                               
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
                               $("#offer-list-view").kendoMobileListView({
                                                                             dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                             template: $("#offerListTemplate").html(),
                                                                          
                                                                             filterable: {
                                       autoFilter: true,
                                       placeholder:"Search By Offer Name",                                         
                                       field: "itemname",
                                       operator: "contains"
                                   }
                                                                                                                    
                                                                         });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no offers for the selected Hotel.")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Offer List." + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Offer List.   [" + errormsg.statusText + "]")
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
                                       operator: "contains"
                                   }
                                                                                                                    
                                                                            });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no offers exists for the selected Hotel.")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Offer List." + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (errormsg) {
                       navigator.notification.alert("Unknown Error, Cannot get Offer List.   [" + errormsg.statusText + "]")
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
                               navigator.notification.alert("There are no Restaurant for the selected offer.")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Restaurant List. " + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.   [" + errormsg.statusText + "]")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function listOfferOutlet() {
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
                               $("#offer-outlet-list-view").kendoMobileListView({
                                                                                    dataSource: kendo.data.DataSource.create({data: getData.offeroutletlist}),
                                                                                    template: $("#offerOutletTemplate").html()
                                                                                });
                               hideSpin(); //hide loading popup
                           }else {
                               navigator.notification.alert("There are no Restaurant for the selected offer.")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Restaurant List. " + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Restaurant List.  [" + errormsg.statusText + "]")
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
                               navigator.notification.alert("There are no Restaurants for the selected offer.")    
                               hideSpin(); //hide loading popup
                           }
                       }else {
                           navigator.notification.alert("Unknown Network Error, Cannot get Outlet List." + getData.statusdesc)          
                           hideSpin(); //hide loading popup
                       }
                   },
                   error: function (error) {
                       navigator.notification.alert("Unknown Error, Cannot get Outlet List. [" + errormsg.statusText + "]")
                       hideSpin(); //hide loading popup
                   }
               });
    }
    
    function locationErrorToast() {
        // window.plugins.showLongBottom('Location Settings are disabled, distance might not be correct',functiom(){},function(){});
    }
    
    function watchPosError(error) {
        //Check whether GPS enabled
        x = error.code;                                  
        y = error.message;
        $.ajax({ 
                   type: "POST",
                   cache:false,
                   async:true,
                   timeout:20000,
                   url: gurl + "/trackDevice.aspx",
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify({
                                            merchantcode :merchant,mdevice:mdevicestat + " " + y,lat:lat,lon:lon,customer:x,segment:segmentcode
                                        }),
                   success: function (data) { 
                   },
                   error: function (error) {
                   }
               });
    }
    
    function gpsError() {
        navigator.notification.alert("Location Settings are disabled for this app. This will result in incorrect display of distance.  Please enable the Location settings for the app on the device Settings.");
    }
    
    function gpsErrorApp() {
        navigator.notification.alert("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page.");
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
    
    //Check whether GPS enabled
    function meWatchPosTime() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            x = position.coords.latitude;                                  
            y = position.coords.longitude;
            // window.setInterval(meWatchPos(), 30000);
                                                       
            $.ajax({ 
                       type: "POST",
                       cache:false,
                       async:true,
                       timeout:20000,
                       url: gurl + "/trackDevice.aspx",
                       contentType: "application/json; charset=utf-8",
                       data: JSON.stringify({
                                                merchantcode :merchant,mdevice:mdevicestat,lat:x,lon:y,customer:"TIME",segment:"MYTIME"
                                            }),
                       success: function (data) { 
                       },
                       error: function (error) {
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
                                                 });   
    }
}
)(window);