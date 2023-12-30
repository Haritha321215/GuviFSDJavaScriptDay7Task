// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Print the following details name, capital, flag, using forEach function

const url = 'https://restcountries.com/v3.1/all';

	fetch(url)
	.then(response => {return response.json()})  
	.then(data => {
        data.forEach(element => {
            console.log(`Country Name: ${element.name.common} - Capital: ${element.capital} - Flag: ${element.flag}`);
        });      
    });