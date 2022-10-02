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

         let contactList;

         $.getJSON("./Data/contacts.json", function(DataSource){
            //Get your data from the data source
            contactList = DataSource.ContactList;
            
            //load your data into objects
           let contact = new Contact();
           console.log(contact.toString());

         });
         
         //localStorage.setItem("0", "Tom");
         
      } //btw ctrl-/ to comment multiple things out at once

      window.addEventListener("load", Start);
})();