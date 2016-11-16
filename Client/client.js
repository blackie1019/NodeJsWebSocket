"use strict";

function checkBrowser() {
    if (window.WebSocket) {
        log("This browser supports WebSocket!");
    } else {
        log("This browser does not support WebSocket.");
    }
}

function setup() {
    var wsServer = 'ws://localhost:5566/';
    var protocol = 'echo-protocol';
    var ws = new WebSocket(wsServer, protocol);

    ws.onopen = function (e) {
        log("Connected to WebSocket server.", e);
        sendMessage(ws,"Hi 我是脅制");
    };

    ws.onclose = function (e) {
        log("Disconnected", e);
    };

    ws.onmessage = function (e) {
        log("RECEIVED: " + e.data);
    }

    ws.onerror = function (e) {
        log('Error occured: ' + e.data, e);
    };
}

function sendMessage(ws,msg) {
    ws.send(msg);
    log("SEND : " + msg);
}

function log(s, e) {
    var output = document.getElementById("output");
    var p = document.createElement("p");
    p.style.wordWrap = "break-word";
    p.style.padding = "10px";
    p.style.background = "#eee";
    p.textContent = "LOG : " + s;
    output.appendChild(p);
    console.log("LOG : " + s, e);
}

checkBrowser();
setup();