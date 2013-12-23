/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 /*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/
jQuery.noConflict();
/*
jQuery(function(){
    loadTweets();
    alert('twwweeeets men');
});
*/
var api = {}
, app = {};
jQuery(function(){
    (function(){
        this.printData = function(){
            console.log(dump_data.responseText);
        }

        this.parserData = function(){
            var l1 = api.data.indexOf('<div id="contenido"')
            , l2 = api.data.indexOf('<div id="footer"');
            api.data = api.data.substr(l1,l2);
        };

        this.changeLinks = function(){
            var reg = /src.*.(gif|png|jpg)/ig
            , regLink = /(.*)\/([-_\w]+).(gif|png|jpg)/
            , matches = api.data.match(reg)
            , length = matches.length
            , dreplace;
            for(var i=0;i<length;i++){
                console.log(matches[i])
                dreplace = matches[i].replace(regLink,"src='img/dump/jQuery2.jQuery3'");
                api.data = api.data.replace(matches[i],dreplace);
                console.log(dreplace);
            }
            
        }

    }).apply(api);

    //dump_data = jQuery.getJSON(url);
    
	jQuery.ajax({
		url: 'http://www.entutele.com/programacion/todos/',
		crossDomain : true,
		success : function(data){
            //console.log(data);
            alert('pues si me lanza esta mauser');
            api.data = data;
            app.init();
		},
        error:function(e){
            alert('erroerrorr');
        }
	});

    alert('yes men repeat');
});

(function(){
    var jQuerydata;
    this.init = function(){
        api.parserData();
        api.parserData();//que pedos! mierda esta.
        api.changeLinks();
        jQuerydata = jQuery(api.data);
        jQuery('.wrap').append(jQuerydata);
        console.log(jQuerydata);
    };

}).apply(app);

/*
function loadTweets() {
    alert('teeewst functions');
    var request = new XMLHttpRequest();
    request.open("GET", "http://search.twitter.com/search.json?q=phonegap", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var tweets = JSON.parse(request.responseText);
                var data = "<table cellspacing='0'>";
                var tableClass;
                for (i = 0; i < tweets.results.length; i++) {
                    if (i % 2 == 0) {
                        tableClass = 'tweetOdd';
                    }
                    else {
                        tableClass = 'tweetEven';
                    }
                    data += "<tr style='border: 1px solid black'>";
                    data += "<td class='" + tableClass + "'>";
                    data += "<img src='" + tweets.results[i].profile_image_url + "'/>";
                    data += "</td>";
                    data += "<td class='" + tableClass + "'>";
                    data += "<b>" + tweets.results[i].from_user + "</b><br/>";
                    data += tweets.results[i].text + "<br/>";
                    data += tweets.results[i].created_at;
                    data += "</td>";
                    data += "</tr>";
                }
                data += "</table>";
                var twitter = document.getElementById("latestTweets");
                twitter.innerHTML = data;
            }
        }
    }
    console.log("asking for tweets");
    request.send();
}
*/
