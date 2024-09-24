//internet connection status checker using js. it will check connection status connected or disconnected.
//it will also show ip address and network strength.

//navigator.online to check if internet is connected or not.
//navigator.connection.downlink to check network speed.

//code

//function to check if user is online or not. check after every second.
function statusChecker() {
    if (navigator.onLine) {
        document.getElementById('status').innerHTML = "Connected";
        
    } else {
        document.getElementById('status').innerHTML = "Disconnected";
        
    }
 }
 setInterval(statusChecker, 1000);
 statusChecker();
 
 //get ip address using api json data
 function getIpAddress() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').innerHTML = data.ip;
    })
    .catch(error => {
      document.getElementById('ip').innerHTML = error;
    });
    }
    setInterval(getIpAddress, 1000);
    getIpAddress();
 
    //check network strength.
    function checkNetworkStrength() {
        if (navigator.onLine) {
            var internetSpeed = navigator.connection.downlink;
            document.getElementById('strength').innerHTML = `${internetSpeed} mb/s`;
        } else {
            document.getElementById('strength').innerHTML = "No internet";   
        }
      
        /* if (navigator.connection.downlink < 5) {
            document.getElementById('strength').innerHTML = 'bad connection';
        } else {
            document.getElementById('strength').innerHTML = 'good connection';
        }*/
 
        }
        setInterval(checkNetworkStrength, 1000);
        checkNetworkStrength();
 
 
 
        // we can also get ip address using the following ipify api method. gotoipify.org and copy 
        // code in first box (ipv4). 
        // fetch('https://api.ipify.org?format=json')
        ////this then is used to convert the response that get from api to json format
        // .then(response => response.json())
        ////this then is used to handle the data that we got.
        // .then(data => {
            //   document.getElementById('ip').innerHTML = data.ip;
            // })
            // .catch(error => {
                //   document.getElementById('ip').innerHTML = error;
                // });
 
 
                // //below is optional for you
                // setInterval(() => {
                    //   fetch('https://api.ipify.org?format=json')
                    //   .then(response => response.json())
                    //   .then(data => {
                        //     document.getElementById('ip').innerHTML = data.ip;
                        // })
                        // .catch(error => {
                            //     document.getElementById('ip').innerHTML = error;
                            // });
                            // }, 1000);
                            // }
                            // function getIpAddress() {
                            //   fetch('https://api.ipify.org?format=json')
                            //   .then(response => response.json())
                            //   .then(data => {
                                //     document.getElementById('ip').innerHTML = data.ip;
                                // })
                                // .catch(error => {
                                    //     document.getElementById('ip').innerHTML = error;
                                    // });
                                    // }
                                    // setInterval(getIpAddress, 1000);
                                    // getIpAddress();
 
 
 
 
 
 
 //method to fetch api data. but i did not use this as mainly.
 /*        $(document).ready(function(){
             $.ajax({
                 type: "GET",
                 url: "https://ipapi.co/json/",
                 success: function(data){
                     $("#ip").text(data.ip);
                     }
                     });
                     $.ajax({
                         type: "GET",
                         url: "https://ipapi.co/status/",
                         success: function(data){
                             $("#status").text(data.status);
                             }
                             });
                             $.ajax("https://ipapi.co/network/", {
                                 type: "GET",
                                 success: function(data){
                                     $("#strength").text(data.strength);
                                     }
                                     });
                                     }); */
 