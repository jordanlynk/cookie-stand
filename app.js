'use strict';
// these are the global variables
var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
var parentElement = document.getElementById('cookieSales');
var hourlyGrandTotal = [];
var grandTotal = 0;
var formElement = document.getElementById('form');
// these are the constructor functions
function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer, perHourCookies = [], totalCookiesPerDay = 0) {
    this.name = name;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.perHourCookies = perHourCookies;
    this.totalCookiesPerDay = totalCookiesPerDay;

    allStores.push(this);
}
// objects; standalone entity w/ properties & type
new Store('Seattle', 23, 65, 6.3, [], this.totalCookiesPerDay);
new Store('Tokyo', 3, 24, 1.2, [], this.totalCookiesPerDay);
new Store('Dubai', 11, 38, 3.7, [], this.totalCookiesPerDay);
new Store('Paris', 20, 38, 2.3, [], this.totalCookiesPerDay);
new Store('Lima', 2, 16, 4.6, [], this.totalCookiesPerDay);

Store.prototype.generateCustomersPerHour = function (min, max) {
    min = Math.ceil(this.minCustomersPerHour);
    max = Math.floor(this.maxCustomersPerHour);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
Store.prototype.calcCookiesPerHour = function () {

    for (var i = 0; i < hoursOfOperation.length; i++) {
        var cookiesSoldInThisHour = Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
        this.perHourCookies.push(cookiesSoldInThisHour);
        this.totalCookiesPerDay += cookiesSoldInThisHour;
    }

};
function generateTotalRow() {
    var trElement = document.createElement('tr');
    parentElement.appendChild(trElement);
    hourlyGrandTotal.unshift('Totals');
    for (var i = 0; i < hourlyGrandTotal.length + 1; i++) {
        if (i === 15) {
            var thElement = document.createElement('th');
            thElement.textContent = grandTotal;
            trElement.appendChild(thElement);
        } else {
            var thElement = document.createElement('th');
            thElement.textContent = `${hourlyGrandTotal[i]}`;
            trElement.appendChild(thElement);
        }
        
    }
}
Store.prototype.generateContentRow = function () {
    var trElement = document.createElement('tr')
    // appends it to the tr 
    parentElement.appendChild(trElement);
    this.perHourCookies.unshift(this.name);
    for (var i = 0; i < this.perHourCookies.length + 1; i++) {
        console.log(i);
        // create the th
        if (i === 15) {
            var thElement = document.createElement('th');
            // fill it with content - total cookies per day
            thElement.textContent = `${this.totalCookiesPerDay}`;
            // appends to the tr element
            trElement.appendChild(thElement);
        } else {
            var thElement = document.createElement('th');
            thElement.textContent = `${this.perHourCookies[i]}`;
            trElement.appendChild(thElement);
        };
    }
}
function generateHeaderRow() {
    hoursOfOperation.push('Daily Location Total')
    hoursOfOperation.unshift('');
    var trElement = document.createElement('tr');
    parentElement.appendChild(trElement);
    var headerArray = hoursOfOperation;
    for (var i = 0; i < hoursOfOperation.length; i++) {
        var thElement = document.createElement('th');
        thElement.textContent = hoursOfOperation[i];
        trElement.appendChild(thElement);
    }
};

function generateTotalCookies(allStores) {
    var newTotalForHour = 0;
    for (var k = 0; k < allStores.length; k++) {
        allStores[k].calcCookiesPerHour();
    }
    for (var i = 0; i < allStores[0].perHourCookies.length; i++) {
        for (var j = 0; j < allStores.length; j++){
        newTotalForHour += allStores[j].perHourCookies[i];
    }
    hourlyGrandTotal.push(newTotalForHour);
    grandTotal += newTotalForHour;
    newTotalForHour = 0
    }   
}
function inputData(event) {
    event.preventDefault();
    var city = event.target.city.value;
    var minCustomers = event.target.minCustomers.value;
    var maxCustomers = event.target.maxCustomers.value;
    var avgCookiesPerCustomer = event.target.avgCookiesSoldPerCustomer.value;
    var newStore = new Store(city, minCustomers, maxCustomers, avgCookiesPerCustomer);
    newStore.calcCookiesPerHour();
    parentElement.innerHTML = '';
    hoursOfOperation.pop('Daily Locations Total')
    hoursOfOperation.shift('');
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].perHourCookies.shift(allStores[i].name);
    }
  hourlyGrandTotal.shift('Totals');
  generateHeaderRow();
  generateAllContentRow();
  generateTotalRow();
}
function generateAllContentRow() {
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].generateContentRow();
    }
}
  formElement.addEventListener('submit', inputData);
  generateTotalCookies(allStores);
  generateHeaderRow();
  generateAllContentRow();
  generateTotalRow();