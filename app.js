// First create an object literal that has the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:
// 1st and Pike

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// 8pm: 29 cookies
// Total: 657 cookies

// Display lists on sales.html

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

var pikeStore = {
  locationName: '1st And Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesPerHour: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
      );
    }
  },
  calcTotalCookies: function() {
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalDailyCookies += this.cookiesEachHour[i];
    }
  },
  render: function() {
    this.calcCustPerHour();
    this.calcCookiesPerHour();
    this.calcTotalCookies();

    var header = document.createElement('h2');
    header.textContent = this.locationName;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

pikeStore.render();

var seatacStore = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesPerHour: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
      );
    }
  },
  calcTotalCookies: function() {
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalDailyCookies += this.cookiesEachHour[i];
    }
  },
  render: function() {
    this.calcCustPerHour();
    this.calcCookiesPerHour();
    this.calcTotalCookies();

    var header = document.createElement('h2');
    header.textContent = this.locationName;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

seatacStore.render();

var seattleStore = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerSale: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesPerHour: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
      );
    }
  },
  calcTotalCookies: function() {
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalDailyCookies += this.cookiesEachHour[i];
    }
  },
  render: function() {
    this.calcCustPerHour();
    this.calcCookiesPerHour();
    this.calcTotalCookies();

    var header = document.createElement('h2');
    header.textContent = this.locationName;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

seattleStore.render();

var capitolStore = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerSale: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesPerHour: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
      );
    }
  },
  calcTotalCookies: function() {
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalDailyCookies += this.cookiesEachHour[i];
    }
  },
  render: function() {
    this.calcCustPerHour();
    this.calcCookiesPerHour();
    this.calcTotalCookies();

    var header = document.createElement('h2');
    header.textContent = this.locationName;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

capitolStore.render();

var alkiStore = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerSale: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesPerHour: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
      );
    }
  },
  calcTotalCookies: function() {
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalDailyCookies += this.cookiesEachHour[i];
    }
  },
  render: function() {
    this.calcCustPerHour();
    this.calcCookiesPerHour();
    this.calcTotalCookies();

    var header = document.createElement('h2');
    header.textContent = this.locationName;
    document.body.appendChild(header);

    var unorderedList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies;
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

alkiStore.render();
