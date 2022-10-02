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
            
            let count = 0;
            //load your data into objects
        //    let contact = new Contact();
        //    console.log(contact.toString());
            for (const contact of contactList) 
            {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
                //console.log(newContact.toString());
                localStorage.setItem(count.toString(), newContact.toJSON());
                count++;
                //taken data from file, converted to comma-seperated format in localStorage
            }

            let keys = Object.keys(localStorage);
            for (let key of keys)
            {
                let newContact = new Contact();

                newContact.fromJSON(localStorage.getItem(key));
                //console.log(localStorage.getItem(key)); <- was using this to debug
                
                console.log(newContact.toString());
                // console.log(`${key}: ${localStorage.getItem(key)}`);
            }


         });
         
         //localStorage.setItem("0", "Tom");
         
      } //btw ctrl-/ to comment multiple things out at once

      window.addEventListener("load", Start);
})();