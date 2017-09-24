
var primeNumbers = {

    primeList: [],

    primalityCheck: function(n) { //checks if a number is prime
        if (n < 2 || n != (Math.round(n))) { return false };
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {isPrime = false}
        }
        return isPrime
    },

    primeCollector: function(topNumber) { //fills primeList array with all prime numbers smaller than topNumber
        var topNumber = document.getElementById("numberInput").valueAsNumber;
        this.primeList.length = 0; //this line clears the primeList array from previous user querries
        for (var i = 0; i <= topNumber; i++) {
            if (this.primalityCheck(i) === true) {
                this.primeList.push(i);
            }
        }
        this.primeListPrinter();
    },


    primeListPrinter: function() {
        var listRecipient = document.getElementById("grid");
        listRecipient.innerHTML = "";
        this.primeList.forEach(function(item) {
            var newListItem = document.createElement("div");
            newListItem.setAttribute("class", "grid-cell");
            newListItem.textContent += item;
            listRecipient.appendChild(newListItem);
        })
    },



} 





