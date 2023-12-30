// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter function
console.log("----------------------Countries from Asia continent---------------------------------------------------");
let newarr=[];
const url = 'https://restcountries.com/v3.1/all';

	fetch(url)
	.then(response => {return response.json()})  
	.then(data => {
        data.filter((item)=>{
            if(item.region === "Asia"){
                newarr.push(item.name.common);
                return item;
            }
        })
        console.log(newarr);       
    }); 