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
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            //vanilla javascript
            //document.getElementsByTagName("header")[0].innerHTML = html_data; //returns the first one on the page
            $("header").html(html_data); //this is jQuery
            //console.log(html_data);
            //$("#homePage").addClass("active"); <- we want this to be done automatically though, so how?
            switch (document.title) {
                case "Home":
                    $("#homePage").addClass("active");
                    break;
                case "About Us":
                    $("#aboutPage").addClass("active");
                    break;
                case "Our Projects":
                    $("#projectsPage").addClass("active");
                    break;
                case "Our Services":
                    $("#servicesPage").addClass("active");
                    break;
                case "Contact Us":
                    $("#contactPage").addClass("active");
                    break;
            }
            //vanilla javascript
            // let navLinks = document.querySelectorAll("li>a.nav-link");
            // for (const link of navLinks as HTMLAnchorElement[]) {
            //     console.log(link.href);
            // }
            //    $("li>a.nav-link").each(function(link){
            //         console.log($(this).prop("href")); 
            //     })
        });
    }
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            //document.getElementsByTagName("footer")[0].innerHTML = html_data; //returns the first one on the page, regular javascript
            $("footer").html(html_data); //this is jQuery
            //console.log(html_data);
        });
    }
    //First way of using functions - named function
    function Start() {
        console.log("App Started!");
        LoadHeader();
        LoadFooter();
    } //btw ctrl-/ to comment multiple things out at once
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map