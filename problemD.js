// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Print the total population of countries using reduce function

const url = 'https://restcountries.com/v3.1/all';
    let newarr=[];
	fetch(url)
	.then(response => {return response.json()})  
	.then(data => {
        data.forEach(element => {
           newarr.push(element.population); 
        }); 
        let sum=newarr.reduce((acc,curr)=>{return acc+curr});
        console.log(`Total Population of Countries: ${sum}`);      
    });