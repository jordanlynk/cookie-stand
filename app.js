'use strict';
// these are the global variables
var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
var addNewStoreForm = document.getElementById('newStoreLocation');
// these are the constructor functions
function Stores(name, minCustomersPerHour, maxCustomersPerHour, averageCookiePerCustomer) {
    this.name = name;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiePerCustomer = averageCookiePerCustomer
    this.customersEachHour = [];
    this.cookiesSoldPerHour = [];
    this.totalCookiesPerDay = 0;
    this.totalHourCookie = 0;
    this.generateCookiesSoldEachHour();
    allStores.push(this);
}

Stores.prototype.generateCustomersPerHour = function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
        var randomNumber = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
        
        return randomNumber;
    }
};
Stores.prototype.generateCookiesPerHour = function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
        var cookiesSoldInThisHour = Math.ceil(this.generateCustomersPerHour() * this.averageCookiesPerCustomer);

        this.totalCookiesPerDay += cookiesSoldInThisHour;
        this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    }

};
function generateHeaderRow() {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent ='Store Location'
    trElement.appendChild(thElement);
    parentElement.appendChild(trElement);
    for (var i = 0; i < hoursOfOperation.length; i++) {
        var headerHours = document.createElement('th');
        headerHours.textContent = storeHours[i];
        trElement.appendChild(headerHours);
    }
    var totals = document.createElement('th');
    totals.textContent = 'Daily Location Totals';
    trElement.appendChild(totals);
    varparentElement = document.getElementById('table');
    parentElement.appendChild(trElement);
}
Stores.prototype.generateTotalRows = function() {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.name;
    trElement.appendChild(tdElement);
    for (var i = 0; i < hourlyGrandTotal.length; i++) {
       tdElement = document.createElement('td');
       tdElement.textContent = `${this.cookiesSoldEachHour[i]}`;
       trElement.appendChild(tdElement);

       var parentElement = document.getElementById('table');
       parentElement.appendChild(trElement);
    }
    var tdElementDos = document.createElement('td');
    tdElementDos.textContent = `$[this.totalCookiesForTheDay]`;
    trElement.appendChild(tdElementDos);
};
function generateHourlyTotal(allStores) {
    var parentElement = document.getElementById('table');
    console.log(parentElement);
    var trDailyTotals = document.createElement('tr');
    parentElement.appendChild(trDailyTotals);
    var thDailyElement = document.createElement('th');
    thDailyElement.textContent = 'Hourly Totals';
    trDailyTotals.appendChild(thDailyElement);
    var hourlyCookies = 0;
    var grandHourlyCookiesTotal = 0;
    for (var k = 0; k < allStores[0].cookiesSoldEachHour.length; k++) {
      for (var m = 0; m < allStores.length; m++) {
        hourlyCookies += allStores[m].cookiesSoldEachHour[k];
  
      }
      var tdTotalHourDay = document.createElement('td');
      tdTotalHourDay.textContent = hourlyCookies;
      trDailyTotals.appendChild(tdTotalHourDay);
      grandHourlyCookiesTotal += hourlyCookies;
      hourlyCookies = 0;
    }
    var tdGrandElement = document.createElement('td');
    tdGrandElement.textContent = grandHourlyCookiesTotal;
    trDailyTotals.appendChild(tdGrandElement);
}
function handleSubmit(event) {
    event.preventDefault();
    console.log('this is my event.target.average', event.target.locationCookie.value);
    var saidLocation = event.target.city.value;
    var saidMinimum = parseInt(event.target.minimumCookie.value);
    var saidMaximum = parseInt(event.target.maximumCookie.value);
    var saidAverage = parseInt(event.target.averageCookies.value);
    new Stores(saidLocation, saidMinimum, saidMaximum, saidAverage);

    document.getElementById('table').innerHTML = '';
    storeHeaderRow();

    allRows(allStores);
}
new Stores('Seattle', 23, 65, 6.3, [], this.totalCookiesPerDay);
new Stores('Tokyo', 3, 24, 1.2, [], this.totalCookiesPerDay);
new Stores('Dubai', 11, 38, 3.7, [], this.totalCookiesPerDay);
new Stores('Paris', 20, 38, 2.3, [], this.totalCookiesPerDay);
new Stores('Lima', 2, 16, 4.6, [], this.totalCookiesPerDay);

storeHeaderRow();

addNewStoreForm.addEventListener('submit', handleSubmit);

function allRows(allStores) {
    for (var i = 0; i < allStores.length; i++) {
       allStores[i].generateRows(); 
    
    }
    generateHourlyTotal(allStores);
}
allRows(allStores);
