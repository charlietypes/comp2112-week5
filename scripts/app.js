"use strict";
//not allowed to use var in code in JS course
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
//do not code in app.js file, just app.ts file
(function () {
    /**
     * This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        //load your data into objects
        //    let contact = new Contact();
        //    console.log(contact.toString());
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            //console.log(newContact.toString());
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
            //taken data from file, converted to comma-seperated format in localStorage
        }
    }
    /**
     * This method reads our data from localStorage and returns a COntact array
     *
     * @returns {Contact[]}
     */
    function LoadContactListData() {
        //create an empty Contact Array Container
        let ContactArray = new Array(); //new array of type Contact
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            //console.log(localStorage.getItem(key)); <- was using this to debug
            //console.log(newContact.toString());
            // console.log(`${key}: ${localStorage.getItem(key)}`);
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    //First way of using functions - named function
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            //Get your data from the data source  
            let contactList = DataSource.ContactList; //array of type any
            SaveContactListData(contactList); //passes contactList to SaveData
            let ContactArray = LoadContactListData();
            for (const contact of ContactArray) {
                console.log(contact.toString());
            }
        });
        //localStorage.setItem("0", "Tom");
    } //btw ctrl-/ to comment multiple things out at once
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map