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

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiePerSale) {
  (this.locationName = locationName),
  (this.minCustPerHour = minCustPerHour),
  (this.maxCustPerHour = maxCustPerHour),
  (this.avgCookiePerSale = avgCookiePerSale),
  (this.customersEachHour = []),
  (this.cookiesEachHour = []),
  (this.totalDailyCookies = 0);
}

Store.prototype.calcCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) +
        this.minCustPerHour
    );
  }
};

Store.prototype.calcCookiesPerHour = function() {
  for (var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour.push(
      Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale)
    );
  }
};

Store.prototype.calcTotalCookies = function() {
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalDailyCookies += this.cookiesEachHour[i];
  }
};

var renderTable = document.getElementById('store-data');
var renderFooter = document.getElementById('data-totals');

Store.prototype.render = function() {
  this.calcCustPerHour();
  this.calcCookiesPerHour();
  this.calcTotalCookies();

  // create row
  var tableRow = document.createElement('tr');

  // create first td
  var storeName = document.createElement('td');
  storeName.textContent = this.locationName;
  tableRow.appendChild(storeName);
  // loop through array and create rest of td
  for (var i = 0; i < hours.length; i++) {
    var cookieCountPerHour = document.createElement('td');
    cookieCountPerHour.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(cookieCountPerHour);
  }
  // append td to table
  renderTable.appendChild(tableRow);
};

var pikeStore = new Store('1st And Pike', '23', '65', '6.3');
var seatacStore = new Store('SeaTac Airport', '3', '24', '1.2');
var seattleCenter = new Store('Seattle Center', '11', '38', '3.7');
var capitolStore = new Store('Capitol Hill', '20', '38', '3.7');
var alkiStore = new Store('Alki', '2', '16', '4.6');

var storesArr = [pikeStore, seatacStore, seattleCenter, alkiStore];
pikeStore.render();
seatacStore.render();
seattleCenter.render();
capitolStore.render();
alkiStore.render();

// ===================
// FORM
// ===================

var formEl = document.getElementById('store-form');

function handleForm(e) {
  e.preventDefault();
  var location = e.target.location.value;
  var minimum = parseInt(e.target.min.value, 10);
  var maximum = parseInt(e.target.max.value, 10);
  var cookiesPerCustomer = parseInt(e.target.cookies.value);
  var newStore = new Store(location, minimum, maximum, cookiesPerCustomer);
  storesArr.push[newStore];
  newStore.render();
  // computeTotals();
}

formEl.addEventListener('submit', handleForm);

// create footer row
var totalRow = document.createElement('tr');
// create footer table data
var timeTotal = document.createElement('td');
timeTotal.textContent = 'Totals';
totalRow.appendChild(timeTotal);

function computeTotals() {
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    var totalForHour = document.createElement('td');
    storesArr.forEach(function(store) {
      console.log(store.cookiesEachHour[i]);
      total += store.cookiesEachHour[i];
    });
    totalForHour.textContent = total;
    totalRow.appendChild(totalForHour);
  }
  renderFooter.appendChild(totalRow);
}
computeTotals();

totalRow.className = 'footer-totals';
