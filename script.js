var cinema = {
    name:"Cavea Cinemas",
    languages: ["English" , "Georgian", "Subtitles"],
    address: ["City Mall" , "East Point" , "Tbilisi Mall" , "Galleria"],
    movie: {
        name:"Black Adam",
        imdb_rating:7.1},
    other_movies: [
        {other_name:"Halloween Ends", other_imdb_rating:5.0},
        {other_name:"Spider-Man: No Way Home", other_imdb_rating:8.3},
        {other_name:"Where the Crawdads Sing", other_imdb_rating:7.1}
    ]
}
// console.log(cinema.movie.name)
// console.log(cinema.movie.imdb_rating)

document.write("<h3>address</h3>")
for (var i=0; i<cinema.address.length; i++) {
    document.write(cinema.address[i] + "</br>")
}