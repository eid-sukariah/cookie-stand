// 'use strict';

// let times = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// let seattle ={
//     location:'seattle',
//     maxHourlyCustomers :65,
//     minHourlyCustomers :23,
//     avgCookiesPerCustomer:6.3,
//     hourCustomer:[],
//     hourCookies:[],
//     totel:0,

//   customersPerHour :function (){

//     for(let i=o; i<times.length; i++){

//         this.hourCustomer.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers));

//     }

//   },  


//     cookiesPerHour :function(){
//         for(let i=o; i<times.length; i++){
//             this.hourCookies.push(randomValue(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgCookiesPerCustomer)

//             this.totel= this.totel + this.hourCookies[i];
//         }
//     } 

// }

// seattle.customersPerHour();
// console.log(seattle);

// seattle.cookiesPerHour();
// console.log(seattle)

// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }





'use strict';
let hourWork=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let Seattle ={
    locationName:'Seattle',
    minCust:23,
    maxCust:65,
    avgCookieSale:6.3,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
       }
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;
    },
}
Seattle.updateCockiesPH();
Seattle.createUList();
Seattle.updateCustomersPerHour();
console.log(Seattle);
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





