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

    /**
     * This method loads the header and the page content
     *
     */
    function LoadHeader():void
    {
        $.get("./Views/components/header.html", function(html_data)
        {

            $("header").html(html_data); //this is jQuery
            //console.log(html_data);
            //$("#homePage").addClass("active"); <- we want this to be done automatically though, so how?

            //activate the current link
            $("li>a#Home").addClass("active");

            $("li>a").on("click", function(event)
            {
                event.preventDefault();  
                
                //change title
                document.title=$(this).prop("id") as string;

                // change url
                history.pushState({}, "", "/" + document.title);

                //removes the active class from each list item
                $("li>a").each(function(){
                    $(this).removeClass("active");
                });

                $("li>a#" + document.title).addClass("active")
                //reset all the links
                //$("li>a").off("click"); //remove event listener

                LoadContent();
                
                
                //let title = $(this).prop("id") as string;
                //capitalize the link and make it the document title
                //document.title = title.substring(0, 1).toUpperCase() + title.substring(1);

                

                //activate the current link
                //$("li>a#" + document.title).addClass("active");

               
            });
            
        });  
    }

    /**
     *This method injects the page content
     *
     */
    function LoadContent():void 
    {
        let contentLink = document.title.toLowerCase();

        $.get("./Views/content/" + contentLink + ".html", function (html_data){
            $("main").html(html_data);
        });
        // switch(document.title) 
        // {
        //     case "Home":
        //     $.get("./Views/content/home.html", function (html_data){$("main").html(html_data);});
        //     break;

        //     case "About": 
        //     $.get("./Views/content/about.html", function (html_data){$("main").html(html_data);});
        //     break;

        //     case "Projects":
        //    $.get("./Views/content/projects.html", function (html_data){$("main").html(html_data);});
        //     break;

        //     case "Services":
        //     $.get("./Views/content/services.html", function (html_data){$("main").html(html_data);});
        //     break;

        //     case "Contact":
        //     $.get("./Views/content/contact.html", function (html_data){$("main").html(html_data);});
        //     break;
        // }
    }

    /**
     *This method loads and injects the footer content
     *
     */
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

         // change url
         history.pushState({}, "", "/Home");

         //activate the current link
        $("li>a#Home").addClass("active");

         LoadContent();

         LoadHeader();
         
         LoadFooter();
        
         
         
      } //btw ctrl-/ to comment multiple things out at once

      window.addEventListener("load", Start);
})();