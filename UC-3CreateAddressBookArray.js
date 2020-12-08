//UC1 - Create Contact class
class Contact{

    // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    //getter and setter methods
    get firstName()
    {
        return this._firstName;
    }
    set firstName(firstName)
    {
        //regex for first name
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
        //regex for last name
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
        let phoneNumberRegex= RegExp('^[0-9]{2}[ ]*[0-9]{10}$');
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
        return "\nFirstName: " + this.firstName + "\nLastName: " + this.lastName + "\nAddress : " + this.address + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhoneNumber : " + this.phoneNumber + "\nEmail : " + this.email;
    }
}

// UC 3 : New address book array to store contacts
let addressBook = new Array();
try {
    console.log("Hello, Welcome To Address Book Using Javascript!")
    contact = new Contact("Ramya","Uday","Vijaynagar","Bangalore","Karnataka","567678","91 9898989898","ramya@gmail.com");
    //appends into array
    addressBook.push(contact);
    addressBook.push(new Contact("Riya", "Wooj", "Nagarbhavi", "Mangalore", "Mumbai", "588678", "91 8765432345", "riya@gmail.com"));
    addressBook.push(new Contact("Disha", "Madan", "Graden", "Gubbi", "Andhra", "593678", "91 9842123456", "disha@gmail.com"));
    addressBook.push(new Contact("Rohan", "Sharma", "Bandish", "Bandits", "Rajasthan", "532678", "91 7854567890", "rohan@gmail.com"));
    addressBook.push(new Contact("Darshan", "Yadav", "Euphoria", "Zendaya", "ZacEffron", "510236", "91 8765432720", "yadavdarshan@gmail.com"));
    addressBook.forEach(contact=>console.log(contact.toString()));
}
catch (e) {
    console.error(e);
}
