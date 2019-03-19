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
  '7pm'
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
      listItem.textContent =
        hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

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
      listItem.textContent =
        hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

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
      listItem.textContent =
        hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

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
      listItem.textContent =
        hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

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
      listItem.textContent =
        hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(total);
    document.body.appendChild(unorderedList);
  }
};

var allStores = [pikeStore, seatacStore, seattleStore, capitolStore, alkiStore];

for (var i = 0; i < allStores.length; i++) {
  allStores[i].render();
}
