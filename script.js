const request = new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send();
request.onload = function(){
    let data = JSON.parse(this.response);

    // Get all the countries from Asia continent /region using Filter function 
    console.log("Get all the countries from Asia continent /region using Filter function:")
    let asianCountires = data.filter(country=>country.region==="Asia")
    console.log(asianCountires)
    console.log("\n\n")


    // Get all the countries with population of less than 2 lacs using Filter function
    console.log("Get all the countries with population of less than 2 lacs using Filter function:")
    let population = data.filter(country=>country.population<200000)  
    console.log(population)
    console.log("\n\n")

    // Print the following details name, capital, flag using forEach function 
    console.log("Print the following details name, capital, flag using forEach function :")
    data.forEach(country=>console.log(`Country: ${country.name} Capital: ${country.capital} flagURL: ${country.flag}`))
    console.log("\n\n")

    // Print the total population of countries using reduce function 
    console.log("Print the total population of countries using reduce function :")
    let populationArray = [];
    data.forEach(country => populationArray.push(country.population))
    let populationCount = populationArray.reduce((accumulator,current)=>{return accumulator+current})
    console.log(populationCount)
    console.log("\n\n")

    // Print the country which use US Dollars as currency.
    console.log("Print the country which use US Dollars as currency:")
    let UScountries = data.filter(country=>country.currencies[0].code==="USD")
    console.log(UScountries)

}