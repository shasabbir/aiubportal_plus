// ==UserScript==
// @name         aiub dark (with auto signin)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  These are set of codes i did for my university portal(portal.aiub.edu). features like auto signin, auto teacher review and a good dark theme is available here.
// @author       Sabbir Hossain(shasabbir234@gmail.com)
// @match        https://portal.aiub.edu/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var id="";//put your id here
var pass="";//put your password here

(function() {var css = [
    /* "#country-code.ytd-topbar-logo-renderer {",
	"    color: var(--yt-spec-text-secondary);",
	"    margin: 10px 0 0px 0px;",
	"}",*/
    "body,#curriculumCoursesModal > div > div,#divCurriculumCourses > div > h3,#main-content > div > div.panel-body > * > * > div,#notifications > div.col-md-12,#notifications > *>h3,.seeAll,caption{",
    "    background-color: #372B2B !important;",

    "}",
    ".panel-body, .topbar-container, tbody {",
    "    background-color: #372B2B !important;",
    "    color: #ffffff !important;",

    "}",

    ".list-group-item {",
    "    background-color: #4A3737 !important;",
    "    color: #ffffff !important;",

    "}",

    " #bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(2) > li > p > a:hover,span,h6,p , em,h5,h3, h4, td, .aiub_slogan, .aiub_title,.login_header,a {",
    "    color: #ffffff !important;",

    "}",
    "#main-content > form > div > div > div.panel-body > div:nth-child(6) > table > caption > h4,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(1) > div.row.bg-info > div.col-md-8 > h4 > small > em,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(1) > div.row.bg-info > div.col-md-8 > h4,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(1) > div.row.bg-info > div.col-md-4.text-right > h4,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(3) > div.row.bg-info > div.col-md-8 > h4,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(3) > div.row.bg-info > div.col-md-8 > h4 > small > em,#main-content > div > div.panel-body > div.list-group > div:nth-child(2) > div:nth-child(3) > div.row.bg-info > div.col-md-4.text-right > h4 {",
    "    color: #150D0D !important;",

    "}",


    ".aiub_slogan {",
    "    color: #ffffff !important;",

    "}",
    ".login-form {",
    "    background-color: #4A3737 !important;",
    "}",
    "#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li.dropdown > a:hover,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li:nth-child(3) > a:hover,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li:nth-child(1) :hover,body > div.container > div.row.ng-scope > nav > div > ul > li:nth-child(3) a:hover,body > div.container > div.row.ng-scope > nav > div > ul > li:nth-child(2) a:hover,body > div.container > div.row.ng-scope > nav > div > ul > li:nth-child(1) a:hover,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li.dropdown > a > span.fa.fa-cog a:hover,#noti_Button > div > span.fa.fa-bell a:hover,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li:nth-child(3) > a > span.fa.fa-sign-out a:hover {",
    "    background: #4A3737 !important;",
    "    color: #ffffff !important;",
    "}",
    "#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li.dropdown > a > span.fa.fa-cog,#noti_Button > div > span.fa.fa-bell,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li:nth-child(3) > a > span.fa.fa-sign-out {",
    "    color: blue !important;",
    "}",
    /*"#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li.dropdown > a > span.fa.fa-cog :hover,#noti_Button > div > span.fa.fa-bell :hover,#bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li:nth-child(3) > a > span.fa.fa-sign-out :hover {",
	"    background: #4A3737 !important;",
    "    color: #ffffff !important;",
	"}",*/
    " #bs-example-navbar-collapse-00000000-0000-0000-0000-000000000000 > ul:nth-child(1) > li.dropdown > a > span.fa.fa-cog:hover {",
    "    background: #4A3737 !important;",
    "    color: #ffffff !important;",
    "}"
    ,
    " #tsfTab > div > table > tbody > tr > td:nth-child(1) > h5{",
    "    color: black !important;",

    "}",

    // Your code here...
].join("\n");
             var k=document.URL;
             if (typeof GM_addStyle != "undefined") {
                 GM_addStyle(css);
             } else if (typeof PRO_addStyle != "undefined") {
                 PRO_addStyle(css);
             } else if (typeof addStyle != "undefined") {
                 addStyle(css);
             } else {
                 var node = document.createElement("style");
                 node.type = "text/css";
                 node.appendChild(document.createTextNode(css));
                 var heads = document.getElementsByTagName("head");
                 if (heads.length > 0) {
                     heads[0].appendChild(node);
                 } else {
                     // no head yet, stick it whereever
                     document.documentElement.appendChild(node);
                 }
             }
             if(k=="https://portal.aiub.edu/Student/Tpe/Start"){
                 setTimeout(() => {document.querySelector("body > div.container > div.portal-body > div > fieldset > div:nth-child(10) > a:nth-child(1)").click();}, 1000);
             }
             else if(k.substring(0,50)=="https://portal.aiub.edu/Student/Tpe/Select?teacher"){
                 setTimeout(() => {(function(){ [].forEach.call(document.querySelectorAll('input[type="radio"][value="5"]'), function(el){el.checked=true});
                                               document.getElementById('Comment').value = 'good'; })();
                                   document.querySelector("body > div.container > div.portal-body > fieldset > form > div.text-center > input").click();}, 1000);
             }
             else if(k=="https://portal.aiub.edu/Student/Tpe/End"){
                 setTimeout(() => {if(document.querySelector("body > div.container > div.portal-body > fieldset > div:nth-child(4) > a")!=null){document.querySelector("body > div.container > div.portal-body > fieldset > div:nth-child(4) > a").click();}
                                   else{document.querySelector("body > div.container > div.portal-body > fieldset > div:nth-child(3) > a").click();}
                                  }, 1000);
             }
             setTimeout(() => {
							 if(document.querySelector("body > div > div > div > div > div:nth-child(2) > form > div:nth-child(4) > button")!=null){ document.querySelector("#username").value=id;document.querySelector("#password").value=pass;document.querySelector("body > div > div > div > div > div:nth-child(2) > form > div:nth-child(4) > button").click();}
                              }, 1000);
            })();
