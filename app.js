'use strict';

var seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiePerCustomer: 6.3,

    generateCustomersPerHour: function(min, max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
    },
    hoursOfOperation: ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],
    hourlyCookies: [],

    calcCookiesPerHour: function(){
        for (var i = 0; i < this.hoursOfOperation.length; i++){
             var hourCookies = this.calcCookiesInHour();
             this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },
    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('seattleCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = `${this.hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
        }    
    }
}

var tokyo = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiePerCustomer: 1.2,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hoursOfOperation: ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < this.hoursOfOperation.length; i++){
             var hourCookies = this.calcCookiesInHour();
             this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('tokyoCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = `${this.hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
        }
    }
  }

  var dubai = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiePerCustomer: 3.7,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hoursOfOperation: ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < this.hoursOfOperation.length; i++){
            var hourCookies = this.calcCookiesInHour();
            this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('dubaiCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = `${this.hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

var paris = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiePerCustomer: 2.3,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hoursOfOperation: ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < this.hoursOfOperation.length; i++){
             var hourCookies = this.calcCookiesInHour();
             this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('parisCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = `${this.hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

var lima = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiePerCustomer: 4.6,
    generateCustomersPerHour: function(min , max){
        min = Math.ceil(this.minCustomersPerHour);
        max = Math.floor(this.maxCustomersPerHour);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calcCookiesInHour: function (){
        return Math.round(this.generateCustomersPerHour(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiePerCustomer);
     },
     hoursOfOperation: ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'],
     hourlyCookies: [],
     calcCookiesPerHour: function(){
        for (var i = 0; i < this.hoursOfOperation.length; i++){
            console.log(i);
             var hourCookies = this.calcCookiesInHour();
             console.log(hourCookies);
             this.hourlyCookies.push(hourCookies);
        }
        return(this.hourlyCookies);
    },

    displayHourlyCookies: function(){
        this.calcCookiesPerHour();
        for (var j = 0; j < this.hourlyCookies.length; j++){
            var parent = document.getElementById('limaCookieSales');
            var listItem = document.createElement('li');
            listItem.textContent = `${this.hoursOfOperation[j]} : ${this.hourlyCookies[j]} cookies`;
            parent.appendChild(listItem);
    }
  }
}

seattle.displayHourlyCookies();
tokyo.displayHourlyCookies();
dubai.displayHourlyCookies();
paris.displayHourlyCookies();
lima.displayHourlyCookies();
