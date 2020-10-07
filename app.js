'use strict';
var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer, hourlyCookies = [], totalCookiesPerDay = 0) {
    this.name = name
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.hourlyCookies = hourlyCookies;
    this.totalCookiesPerDay = totalCookiesPerDay;

    allStores.push(this);
}

var seattle = new Store('Seattle', 23, 65, 6.3, [], this.totalCookiesPerDay);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], this.totalCookiesPerDay);
var dubai = new Store('Dubai', 11, 38, 3.7, [], this.totalCookiesPerDay);
var paris = new Store('Paris', 20, 38, 2.3, [], this.totalCookiesPerDay);
var lima = new Store('Lima', 2, 16, 4.6, [], this.totalCookiesPerDay);

Store.prototype.generateCustomersPerHour = function (min, max) {
    min = Math.ceil(this.minCustomersPerHour);
    max = Math.floor(this.maxCustomersPerHour);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
Store.prototype.calcCookiesPerHour = function () {

    for (var i = 0; i < hoursOfOperation.length; i++) {
        var cookiesSoldInThisOneHour = Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
        this.hourlyCookies.push(cookiesSoldInThisOneHour);
        this.totalCookiesPerDay += cookiesSoldInThisOneHour;
    }
    return (this.cookiesSoldInThisOneHour);
    return (this.totalCookiesPerDay)
};

Store.prototype.displayHourlyCookiesInList = function () {
    this.calcCookiesPerHour();
    for (var j = 0; j < hoursOfOperation.length; j++) {
        var parent = document.getElementById('cookieSales');
        var listItem = document.createElement('li');
        listItem.textContent = ` ${hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
        parent.appendChild(listItem);
    }
}
Store.prototype.generateContentRow = function () {
    this.calcCookiesPerHour();
    var trElement = document.createElement('tr')
    // appends it to the tr 
    parentElement.appendChild(trElement);
    this.hourlyCookies.unshift(this.name);
    for (var i = 0; i < this.hourlyCookies.length - 1; i++) {
        // create the th
        if (i === 15) {
            var thElement = document.createElement('th');
            // fill it with content - total cookies per day
            thElement.textContent = `${this.totalCookiesPerDay}`;
            // appends to the tr element
            trElement.appendChild(thElement);
        } else if (1 < i < 14) {
            var thElement = document.createElement('th');
            thElement.textContent = `${this.hourlyCookies[i]}`;
            trElement.appendChild(thElement);
        };
    }
}

var parentElement = document.getElementById('cookieSales');

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
}

generateHeaderRow();
seattle.generateContentRow();
tokyo.generateContentRow();
dubai.generateContentRow();
paris.generateContentRow();
lima.generateContentRow();

    
    
    
    
    
    
    

