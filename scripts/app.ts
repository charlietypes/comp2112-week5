"use strict";
//not allowed to use var in code in JS course
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function

(function()
{
    /**
     * This function loads data asynchronously from a URL.
     * It calls the callback function when the data loading is complete
     * 
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */

    function LoadData(method: string, url: string, callback: Function):void //XHR - allows you to get data from a server without doing a full page refresh // we right clicked here and selected rename symbol and changed it from XHRRequest to LoadData
    {
        //Step 1- Create an empty XHR object
        let XHR = new XMLHttpRequest();

        //Step 2- Compose the Request
        XHR.open(method, url);

        //Step 3- Send the request to the server
        XHR.send();

        //Step 4- Set up an event listener
        XHR.addEventListener("readystatechange", function(){

        if(XHR.status == 200 && XHR.readyState == 4)
        {
            //console.log(XHR.responseText); //200= everything is ok, ready state of 4= everything is loaded
            // let contactDataSource = JSON.parse(XHR.responseText);
            // console.log(contactDataSource.ContactList[0]);
            //return XHR.responseText;
            callback(XHR.responseText);
        }

    });

    }

    function Start()
      {
        console.log("App Started!");
        // LoadData("GET", "/Data/contacts.json", function(XHR){
        //     console.log(XHR);
        // });

        //this is jQuery
        $.getJSON("/Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[0]);
        });
     }

    window.addEventListener("load", Start);

    //First way of using functions - named function

    //  function Start()
    //  {
    //     console.log("App Started!");
    //  } //btw ctrl-/ to comment multiple things out at once

    // //Second way of using functions - anonymous function
    // let Start = function()
    // {
    //     console.log("App Started!");
    // }

    //Third  way of using functions - arrow function
    // let Start = () => 
    // {
    //     console.log("App Started!");
    // }

    

})();