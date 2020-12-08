class contact
{
    //constructor
    constructor(...params)
    {
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }

    //getter setters
    get firstName()
    {
        return this._firstName;
    }
    set firstName(firstName)
    {
        //regex for firstname
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else throw "Invalid firstname";
    }

    get lastName()
    {
        return this._lastName;
    }
    set lastName(lastName)
    {
        //regex for lastname
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid lastname";
    }

    get address()
    {
        return this._address;
    }
    set address(address)
    {
        //regex for address
        let addressRegex= RegExp('^[A-Za-z0-9]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Invalid address";
    }

    get city()
    {
        return this._city;
    }
    set city(city)
    {
        //regex for city
        let cityRegex= RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Invalid city";
    }

    get state()
    {
        return this._state;
    }
    set state(state)
    {
        //regex for state
        let stateRegex= RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Invalid state";
    }

    get zip()
    {
        return this._zip;
    }
    set zip(zip)
    {
        //regex for zip
        let zipRegex= RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Invalid zip";
    }

    get phoneNumber()
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber)
    {
        //regex for phonenumber
        let phoneNumberRegex= RegExp('^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Invalid phone number";   
    }

    get email()
    {
        return this._email;
    }
    set email(email)
    {
        //regex for email
        let emailRegex= RegExp('^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$')
        if(emailRegex.test(email))
            this._email = email;
        else throw "Invalid Email";
    }

    //To string method for displaying contacts
    toString()
    {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city 
        + " State: " + this.state + " Zipcode: " + this.zip + " Phone Number: " + this.phoneNumber + " email: " + this.email; 
    }
}

function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email)
{
    try
    {
        let newcontact = new contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        AddressBook.push(newcontact);    
    }
    catch(e)
    {
        console.error(e);
    }
}

function Edit()
{
    console.log("Hello, Welcome To Address Book Using Javascript!")
    //Adding contacts
    console.log("-------------Adding contact-----------------");
    AddContact("Ramya","Uday","Vijaynagar","Bangalore","Karnataka","567678","91 9898989898","ramya@gmail.com");
    AddContact("Riya", "Wooj", "Nagarbhavi", "Mangalore", "Mumbai", "588678", "91 8765432345", "riya@gmail.com");
    AddContact("Disha", "Madan", "Graden", "Gubbi", "Andhra", "593678", "91 9842123456", "disha@gmail.com");
    AddContact("Rohan", "Sharma", "Bandish", "Bandits", "Rajasthan", "532678", "91 7854567890", "rohan@gmail.com");
    //Printing Array
    AddressBook.forEach(contact=>console.log(contact.toString()));
    //Editing Contact by name
    console.log("-------------Editing contact-----------------");
    AddressBook.filter(contact=>contact.firstName=="Ramya"&& contact.lastName =="Uday").forEach(contact=>{contact.address ="DamohNaka"; contact.city="Bangalore"; contact.state="Karnataka"});
    AddressBook.forEach(contact=>console.log(contact.toString()));
}
let AddressBook = new Array();
Edit();