"use strict";
//not allowed to use var in code in JS course
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
//do not code in app.js file, just app.ts file

(function()
{

    //First way of using functions - named function

      function Start()
      {
         console.log("App Started!");

         $.getJSON("./Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[0]);
         });
      } //btw ctrl-/ to comment multiple things out at once

      window.addEventListener("load", Start);
})();