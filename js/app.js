'use strict';
let times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let body = document.getElementById('contener');
    
let table = document.createElement('table');
body.appendChild(table);

function randomValue(min, max) {
         return Math.floor(Math.random() * (max - min + 1) + min); 
   }
                                     //parameter
function Cookiess (location,maxHourlyCustomers,minHourlyCustomers,avgCookiesPerCustomer){
    this.location = location;
    this.maxHourlyCustomers = maxHourlyCustomers ;
    this.minHourlyCustomers = minHourlyCustomers ;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;   //this is properities
    this.hourCustomer = [];
    this.hourCookies = [];
    this.totel = 0
}

Cookiess.prototype.customersPerHour = function () {     

    for (let i = 0; i < times.length; i++) {

        this.hourCustomer.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

    }

},

Cookiess.prototype.cookiesPerHour = function () {
    for (let i =0; i < times.length; i++) {
        this.hourCookies.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers) *Math.floor (this.avgCookiesPerCustomer));

        this.totel = this.totel + this.hourCookies[i];                                   //Math.floor remove after dot
    }
},



Cookiess.prototype.render = function () {
    let tr2=document.createElement('tr');
    table.appendChild(tr2);
    let td=document.createElement('td');
    tr2.appendChild(td);
    td.textContent=this.location;
    for(let i=0; i<times.length; i++){
        let td1 =document.createElement('td');
        tr2.appendChild(td1);
        td1.textContent=this.hourCookies[i];
    }
    let td1=document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent=this.totel

}
function tablehead(){                            //between bracites mean local var.
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let th = document.createElement('th');      // empty cell
    tr.appendChild(th);
    let th3 = document.createElement('th');
    tr.appendChild(th3);
    for(let i=0; i < times.length; i++){
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent=times[i];
    }
    let thTo=document.createElement('th');
    tr.appendChild(th)
    th.textContent='Daily Location Total';
    }
   
    
    
    


 tablehead();
let seattle = new Cookiess('seattle', 65, 23, 6.3) ;     //new instense
seattle.customersPerHour();                             // call for method
seattle.cookiesPerHour();
seattle.render();

let tokyo = new Cookiess('tokyo', 24, 3, 1.2) 
tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.render();

let Dubai = new Cookiess('Dubai', 38, 11, 3.7)
Dubai.customersPerHour();
Dubai.cookiesPerHour();
Dubai.render();

let lima = new Cookiess('lima', 16, 2, 1.6)
lima.customersPerHour();
lima.cookiesPerHour();
lima.render();


function totel1(){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let th=document.createElement('th');
    tr.appendChild(th);
    th.textContent='Total';
    for(let i=0; i<times.length; i++){
    let td1=document.createElement('th');
    tr.appendChild(td1); 
    let sum=0;
    sum=sum+seattle.hourCookies[i]+tokyo.hourCookies[i]+Dubai.hourCookies[i]+lima.hourCookies[i];
    td1.textContent=sum;
}
let td2=document.createElement('th');
tr.appendChild(td2); 
let sumTotle=0;
sumTotle=sumTotle+seattle.totel+tokyo.totel+Dubai.totel+lima.totel;
td2.textContent=sumTotle;
}
totel1();


let form = document.getElementById('newlocation');
form.addEventListener('submit', locationForm)

function locationForm(event){
    event.preventDefault ();   //to remove default refrash from webpage
    //console.log(event);

    let location = event.target.locationfield.value;
    let maxHourlyCustomers = event.target.maxfield.value;
    let minHourlyCustomers = event.target.minfield.value;            // to save user's value
    let avgCookiesPerCustomer = event.target.avgfield.value;

   
    //console.log(avgCookiesPerCustomer);
    let newCity = new Cookiess (location, maxHourlyCustomers, minHourlyCustomers, avgCookiesPerCustomer); //to show new value
    newCity.customersPerHour();
    newCity.cookiesPerHour();
    newCity.render();
}
//table.deleteRow(raw.length);


console.log(table.length);






// let times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let seattle = {
//     location: 'seattle',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     avgCookiesPerCustomer: 6.3,       //this is parameter
//     hourCustomer: [],
//     hourCookies: [],
//     totel: 0,

//     customersPerHour: function () {     //.push(): to add random value to parameter array

//         for (let i = 0; i < times.length; i++) {

//             this.hourCustomer.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

//         }

//     },


//     cookiesPerHour: function () {
//         for (let i =0; i < times.length; i++) {
//             this.hourCookies.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers) * this.avgCookiesPerCustomer)

//             this.totel = this.totel + this.hourCookies[i];
//         }
//     },

//     //to create a new dynamic element=> document.createElement(tagName)
//     //to add content we need to get the reference of the element => let divElementText = document.createTextNode('Dynamically created div element')
//     //// append text node to div=>divElement.appendChild(divElementText)

//     render: function () {
//         let bodyEl = document.getElementById('contener');
//         let mainEl = document.createElement('main');
//         bodyEl.appendChild(mainEl);

//         let parghEl = document.createElement('p')
//         mainEl.appendChild(parghEl);
//         parghEl.textContent = `${this.location}`;

//         let ulEl = document.createElement('ul');
//         mainEl.appendChild(ulEl);
//         let liEl;
//         for (let i = 0; i < times.length; i++) {
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${times[i]} : ${this.hourCookies[i]} `
//         }

//         let pargh = document.createElement('p');
//         mainEl.appendChild(pargh);
//         pargh.textContent = `totel ${this.totel} cookies`;
//     }


// }

// seattle.customersPerHour();    //call the fun.

// seattle.cookiesPerHour();

// seattle.render();
// console.log(seattle)

// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }


// let tokyo = {
//     location: 'tokyo',
//     maxHourlyCustomers: 24,
//     minHourlyCustomers: 3,
//     avgCookiesPerCustomer: 1.2,       //this is parameter
//     hourCustomer: [],
//     hourCookies: [],
//     totel: 0,

//     customersPerHour: function () {     //.push(): to add random value to parameter array

//         for (let i = 0; i < times.length; i++) {

//             this.hourCustomer.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

//         }

//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < times.length; i++) {
//             this.hourCookies.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers) * this.avgCookiesPerCustomer)

//             this.totel = this.totel + this.hourCookies[i];
//         }
//     },

//     render: function () {
//         let bodyEl = document.getElementById('contener');
//         let mainEl = document.createElement('main');
//         bodyEl.appendChild(mainEl);

//         let parghEl = document.createElement('p')
//         mainEl.appendChild(parghEl);
//         parghEl.textContent = `${this.location}`;

//         let ulEl = document.createElement('ul');
//         mainEl.appendChild(ulEl);
//         let liEl;
//         for (let i = 0; i < times.length; i++) {
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${times[i]} : ${this.hourCookies[i]} `
//         }

//         let pargh = document.createElement('p');
//         mainEl.appendChild(pargh);
//         pargh.textContent = `totel ${this.totel} cookies`;
//     }


// }

// tokyo.customersPerHour();
// tokyo.cookiesPerHour();
// tokyo.render();
// console.log(tokyo)

// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }


// let Dubai = {
//     location: 'Dubai',
//     maxHourlyCustomers: 38,
//     minHourlyCustomers: 11,
//     avgCookiesPerCustomer: 3.7,       //this is parameter
//     hourCustomer: [],
//     hourCookies: [],
//     totel: 0,

//     customersPerHour: function () {     //.push(): to add random value to parameter array

//         for (let i = 0; i < times.length; i++) {

//             this.hourCustomer.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

//         }

//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < times.length; i++) {
//             this.hourCookies.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers) * this.avgCookiesPerCustomer)

//             this.totel = this.totel + this.hourCookies[i];
//         }
//     }, 

//     render: function () {
//         let bodyEl = document.getElementById('contener');
//         let mainEl = document.createElement('main');
//         bodyEl.appendChild(mainEl);

//         let parghEl = document.createElement('p')
//         mainEl.appendChild(parghEl);
//         parghEl.textContent = `${this.location}`;

//         let ulEl = document.createElement('ul');
//         mainEl.appendChild(ulEl);
//         let liEl;
//         for (let i = 0; i < times.length; i++) {
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${times[i]} : ${this.hourCookies[i]} `
//         }

//         let pargh = document.createElement('p');
//         mainEl.appendChild(pargh);
//         pargh.textContent = `totel ${this.totel} cookies`;
//     }


// }

// Dubai.customersPerHour();
// Dubai.cookiesPerHour();
// Dubai.render();
// console.log(Dubai)

// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// let lima = {
//     location: 'lima',
//     maxHourlyCustomers: 16,
//     minHourlyCustomers: 2,
//     avgCookiesPerCustomer: 4.6,       //this is parameter
//     hourCustomer: [],
//     hourCookies: [],
//     totel: 0,

//     customersPerHour: function () {     //.push(): to add random value to parameter array

//         for (let i = 0; i < times.length; i++) {

//             this.hourCustomer.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers));

//         }

//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < times.length; i++) {
//             this.hourCookies.push(randomValue(this.minHourlyCustomers, this.maxHourlyCustomers) * this.avgCookiesPerCustomer)

//             this.totel = this.totel + this.hourCookies[i];
//         }
//     }, 

//     render: function () {
//         let bodyEl = document.getElementById('contener');
//         let mainEl = document.createElement('main');
//         bodyEl.appendChild(mainEl);

//         let parghEl = document.createElement('p')
//         mainEl.appendChild(parghEl);
//         parghEl.textContent = `${this.location}`;

//         let ulEl = document.createElement('ul');
//         mainEl.appendChild(ulEl);
//         let liEl;
//         for (let i = 0; i < times.length; i++) {
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${times[i]} : ${this.hourCookies[i]} `
//         }

//         let pargh = document.createElement('p');
//         mainEl.appendChild(pargh);
//         pargh.textContent = `totel ${this.totel} cookies`;
//     }


// }

// lima.customersPerHour();
// lima.cookiesPerHour();
// lima.render();
// console.log(lima)

// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }



