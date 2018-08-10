const update = data => {
    $("#films_link").attr("href", data["films"]);
    $("#people_link").attr("href", data["people"]);
    $("#planets_link").attr("href", data["planets"]);
    $("#species_link").attr("href", data["species"]);
    $("#starships_link").attr("href", data["starships"]);
    $("#vehicles_link").attr("href", data["vehicles"]);
};

$.get("https://swapi.co/api/", update);

const loadStarWars = () => {
    event.preventDefault();
    console.log(event.target.getAttribute("href"));
    $(event.target).attr('href');
};
