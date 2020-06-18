// Task 1
class Author{
    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        let domains = ["gmail.com", "yahoo.com", "aol.com", "outlook.com", "mail.ru", "yandex.ru"];
        if(domains.includes(value.slice(value.lastIndexOf("@") + 1))){
            this._email = value;
        } else {
            console.log("Invalid email address.")
        }
    }
    get gender(){
        return this._gender;
    }
    set gender(value){
        if(value === "male" || value === "female"){
            this._gender = value;
        } else {
            console.log("Input valid gender")
        }
    }

    toString(){
        return `{Author}`;
    }
}

class Book{
    constructor(title, author, price, quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    get author(){
        return this._author;
    }
    set author(value){
        if(value.__proto__ === Author.prototype){
        this._author = value;
        } else {
            console.log(`${value} is not an instance of Author class`)
        }
    }
    get price(){
        return this._price;
    }
    set price(value){
        if(Number(value)){
            this._price = value;
        } else {
            console.log("You must input a number for price.")
        }
    }
    get quantity(){
        return this._quantity;
    }
    set quantity(value){
        if(Number(value)){
            this._quantity = value;
        } else {
            console.log("You must input a number for quantity.")
        }
    }

    getProfit(){
        return this.quantity * this.price;
    }
    toString(){
        return `{Book}`;
    }

}

// Task 2
class Account{
    constructor(id, name, balance){
        this._id = id;
        this.name = name;
        this.balance = balance;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get balance(){
        return this._balance;
    }
    set balance(value){
        if(Number(value)){
            this._balance = value;
        } else {
            console.log("You must input a number for balance.")
        }
    }

    credit(amount){
        this.balance += amount;
        return this.balance;
    }
    debit(amount){
        if(amount > this.balance){
            console.log("Amount exceeded balance.");
        } else {
            this.balance -= amount;            
        }
    }
    transferTo(anotherAccount, amount){
        if(anotherAccount.__proto__ === Account.prototype){
            if(amount > this.balance){
                console.log("Amount exceeded balance.")
            } else {
                this.debit(amount);
                anotherAccount.credit(amount);
            }
        }
    }
    static identifyAccounts(firstAccount, secondAccount){
        if(firstAccount.__proto__ === secondAccount.__proto__ && secondAccount.__proto__ === Account.prototype){
            const propertyKeys = Object.getOwnPropertyNames(firstAccount);
            for (const key of propertyKeys) {
                if(firstAccount[key] !== secondAccount[key]){
                    return false;
                }
            }
        } else {
            return false;
        }
        return true;
    }
    toString(){
        return `Account { id: "${this.id}", name: "${this.name}", balance: ${this.balance}$ }`;
    }
}

// Task3
class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = value;
    }
    get gender(){
        return this._gender
    }
    set gender(value){
        if(value === "male" || value === "female"){
            this._gender = value;
        } else {
            console.log("Enter correct gender")
        }
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(Number(value)){
            this._age = value;
        } else {
            console.log(`${value} is not a number. Please enter a number for age.`)
        }
    }

    toString(){
        return "{ Person }"     
    } 
}

class Student extends Person{
    #dataObject = {};
    constructor(firstName, lastName, gender, age, program, year, fee){
        super(firstName, lastName, gender, age);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    
    
    get program(){
        return this._program;
    }
    set program(value){
        if(Array.isArray(value)){
            this._program = value;
            debugger
            this.#dataObject = this.setData();
        } else {
            return "Program must be array";
        }
    }
    get year(){
        return this._year;
    }
    set year(value){
        if(Number(value)){
            this._year = value;
        }
    }
    get fee(){
        return this._fee;
    }
    set fee(value){
        if(Number(value)){
            this._fee = value;
        } else{
            console.log(`${value} is not a number. Please enter a number for fee.`)
        }
    }

    setData(){
        let data = {};
        let arr = this.program;
        for(let i = 0; i < arr.length; i++){
            data[arr[i]] = null;
        }
        return data;
    }

    toString(){
        return `{ Student }`
    }

    passExam(subject, grade){
        debugger;
        if(Object.keys(this.#dataObject).includes(subject)){
            this.#dataObject[subject] = grade;
            for (const key in this.#dataObject) {
                if(this.#dataObject[key] < 50){
                    return 
                }
            }
            this.year++;
            return ;
        }
        return `Student haven't subject ${subject}`;
    } 
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }

    get program(){
        return this._program;
    }
    set program(value){
        if(value instanceof String){
            this._program = value;
        } else {
            console.log("Program must be a string")
        }
    }
    get pay(){
        return this._pay;
    }
    set pay(value){
        if(Number(value)){
            this._pay = value;
        } else {
            console.log(`${value} is not a number. Please enter a number for pay.`)
        }
    }

    toString(){
        return "{ Teacher }";
    }
}