// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Print the country that uses US dollars as currency.


const url = 'https://restcountries.com/v3.1/all';
fetch(url)
	.then(response => {return response.json()})  
	.then(data => {
        data.map((item)=>{
            for (const iter in item.currencies) {
                if(item.currencies[iter].name==="United States dollar"){
                    console.log(`${item.name.common}: ${item.currencies[iter].name}`);
                }
            }
        })            
    });
