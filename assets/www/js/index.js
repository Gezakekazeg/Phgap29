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
    },
    
    szabadsagszamitas: function(szulev , gyerekszam) {
        var ev = new Date().getFullYear();
    	var alapszabadsag = 20;
    	var eletkor = ev - szulev;
        
        var eletkoralapjan = app.getEletkorNapok( eletkor );
        var gyerekekutan = app.getEltartottNapok( gyerekszam );
        var osszesen = alapszabadsag + eletkoralapjan + gyerekekutan;
		return osszesen;
	},
	
	getEletkorNapok: function( eletkor ) {
	    var ret = 0;
	    if ( eletkor >= 45 ) {
	      ret = 10;
	    }
	    else if ( eletkor >= 43 ) {
	      ret = 9;
	    }
	    else if ( eletkor >= 41 ) {
	      ret = 8;
	    }
	    else if ( eletkor >= 39 ) {
	      ret = 7;
	    }
	    else if ( eletkor >= 37 ) {
	      ret = 6;
	    }
	    else if ( eletkor >= 35 ) {
	      ret = 5;
	    }
	    else if ( eletkor >= 33 ) {
	      ret = 4;
	    }
	    else if ( eletkor >= 31 ) {
	      ret = 3;
	    }
	    else if ( eletkor >= 28 ) {
	      ret = 2;
	    }
	    else if ( eletkor >= 25 ) {
	      ret = 1;
	    }
	    else if ( eletkor <= 18 ) {
	      ret = 5;
	    }
	    else {
	      ret = 0;
	    }
	    return ret;
	},
	
	getEltartottNapok: function( eltszam ) {
	    var ret = 0;
	    if ( eltszam > 2 ) {
	      ret = 7;
	    }
	    else if ( eltszam == 2 ) {
	      ret = 4;
	    }
	    else if ( eltszam == 1 ) {
	      ret = 2;
	    }
	    return ret;
	}
};
