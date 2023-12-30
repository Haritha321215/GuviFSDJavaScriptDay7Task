// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// Get all the countries with a population of less than 2 lakhs using Filter function
console.log("-------------The countries with a population of less than 2 lakhs--------------------------------------")
let newarr=[];
const url = 'https://restcountries.com/v3.1/all';

	fetch(url)
	.then(response => {return response.json()})  
	.then(data => {
        data.filter((item)=>{
            if(item.population<200000){
                newarr.push(`${item.name.common} : ${item.population}`);
                return item;
            }
        })
        console.log(newarr);       
    });