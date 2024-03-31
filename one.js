function connect() {
    var result = document.getElementById("searchBox").value;
    var searchN = result.toLowerCase();
    console.log(searchN);

    var url = `https://restcountries.com/v3.1/name/${searchN}`;
    fetch(url)
        .then(res => res.json())
        .then(data => show(data))
        .catch(error => console.error('Error fetching data:', error));
}

function show(data) {
    var countryDataContainer = document.getElementById("countryData");
    countryDataContainer.innerHTML = ""; // Clear previous data

    if (data.length === 0) {
        countryDataContainer.innerHTML = "No matching country found.";
        return;
    }

    data.forEach(country => {
        var countryElement = document.createElement("div");
        countryElement.classList.add("country");

        var name = document.createElement("h2");
        name.textContent = country.name.common;

        var capital = document.createElement("p");
        capital.textContent = "Capital: " + country.capital;

        var population = document.createElement("p");
        population.textContent = "Population: " + country.population;

        countryElement.appendChild(name);
        countryElement.appendChild(capital);
        countryElement.appendChild(population);

        countryDataContainer.appendChild(countryElement);
    });
}
