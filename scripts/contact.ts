class Contact {
    //important to note: javascript is case sensitive, which is why we can have fullName and FullName, etc
    //priv instance members and public properties is called data hiding or encapsulation
    // private instance members (fields)
    //ctrl-shift-B to transpile
private fullName: string;
private contactNumber: string;
private emailAddress: string;

    //public properties 
//getter    
get FullName():string
{
    return this.fullName;
}

//setter
set FullName(name: string)
{
    this.fullName = name;
}


get ContactNumber():string {
    return this.fullName;
}

set ContactNumber(contactNumber: string)
{
    this.contactNumber = contactNumber;
}

get EmailAddress():string 
{
    return this.emailAddress;
}

set EmailAddress (emailAddress: string)
{
    this.emailAddress = emailAddress;
}

// v i believe this would also work? using lowercase email instead of emailAddress in all the places, just like we did in FullName with name

// get EmailAddress():string {
//     return this.emailAddress;
// }

// set EmailAddress (email: string)
// {
//     this.emailAddress = email;
// }

//why do we need getters and setters?
//why do we not want to work directly with variables?
//why have seperation? why have public properties and private instance members?
// - to avoid being mutated
// - to protect data
// - to be able to test your data if something happens

//constructor
/**
 * Creates an instance of Contact.
 * @param {string} [fullName="unknown name"]
 * @param {string} [contactNumber="no contact number"]
 * @param {string} [emailAddress="unknown email addresss"]
 * @memberof Contact
 */

constructor(fullName: string = "unknown name", contactNumber: string = "no contact number", emailAddress: string = "unknown email addresss") //< these are default values, so if nothing is input this is what gets sent
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
// difference between overloading and overriding:
    // - overloading: having two constructors (?)
    // - overriding: overrides a function so it works differently and more specialized in a child class (compared to how it worked in the parent class)


    //public methods
    
/**
 *  This method overrides the built in toString method for the Contact class
 *
 * @return {*}  {string}
 * @memberof Contact
 */
public toString(): string
    {
        let outputString = "";
        //outputString += "Full Name: " + this.FullName;
        outputString += `Full Name: ${this.FullName}\n`; 
        outputString += `Contact Number: ${this.ContactNumber}\n`; 
        outputString += `Email Address: ${this.EmailAddress}\n`;
        return outputString
        
        //string interporlation, also template literal
        // \n is a new line
    }
//overloaded: different signature in the same class, same function name, other outputs/functionality

//overrided method: exists already in the output superclass, overriding it - taking something inherited (toString), changing the output- what toString will give is different for this class than any other class



    //private methods
}