"use strict";
//not allowed to use var in code in JS course
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
//do not code in app.js file, just app.ts file

(function()
{

    /**
     * This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any[]):void
    {
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
    }

    /**
     * This method reads our data from localStorage and returns a COntact array
     *
     * @returns {Contact[]}
     */
    function LoadContactListData(): Contact[]
    {
        //create an empty Contact Array Container
        let ContactArray = new Array<Contact>(); //new array of type Contact

        let keys = Object.keys(localStorage);
            for (let key of keys)
            {
                let newContact = new Contact();
                newContact.fromJSON(localStorage.getItem(key));
                //console.log(localStorage.getItem(key)); <- was using this to debug

                //console.log(newContact.toString());
                // console.log(`${key}: ${localStorage.getItem(key)}`);
                ContactArray.push(newContact);
            }
            return ContactArray;
    }

    function LoadHeader():void
    {
        $.get("./Views/components/header.html", function(html_data)
        {

            $("header").html(html_data); //this is jQuery
            //console.log(html_data);
            //$("#homePage").addClass("active"); <- we want this to be done automatically though, so how?
            $("li>a").on("click", function()
            {
                let title = $(this).prop("id") as string;
                //capitalize the link and make it the document title
                document.title = title.substring(0, 1).toUpperCase() + title.substring(1);

                LoadContent();
            });
            
        });  
    }

    function LoadContent():void 
    {
        switch(document.title) 
        {
            case "Home":
            $.get("./Views/content/home.html", function (html_data){$("main").html(html_data);});
            break;

            case "About": 
            $.get("./Views/content/about.html", function (html_data){$("main").html(html_data);});
            break;

            case "Projects":
           $.get("./Views/content/projects.html", function (html_data){$("main").html(html_data);});
            break;

            case "Services":
            $.get("./Views/content/services.html", function (html_data){$("main").html(html_data);});
            break;

            case "Contact":
            $.get("./Views/content/contact.html", function (html_data){$("main").html(html_data);});
            break;
        }
    }

    function LoadFooter(): void
    {
        $.get("./Views/components/footer.html", function(html_data)
        {
            //document.getElementsByTagName("footer")[0].innerHTML = html_data; //returns the first one on the page, regular javascript

            $("footer").html(html_data); //this is jQuery
            //console.log(html_data);
        });
    }

    //First way of using functions - named function

      function Start()
      {
         console.log("App Started!");

         //initial load
         document.title = "Home";
         LoadContent();

         LoadHeader();
         
         LoadFooter();
        
         
         
      } //btw ctrl-/ to comment multiple things out at once

      window.addEventListener("load", Start);
})();