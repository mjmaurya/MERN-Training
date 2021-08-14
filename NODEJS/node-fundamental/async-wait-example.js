import axios from 'axios';
import fs from 'fs';

async function getMoviees() {
try {
    var movies= await axios.get('https://ghibliapi.herokuapp.com/films');
    let moviesList = '';
    movies.data.forEach(movie => {
        moviesList += `${movie.title}: ${movie.producer}\n`;
    });

    await fs.writeFile('asyncMovies.txt', moviesList,()=>{});
} catch (e) {
    console.log(`Could not save movies in file ${e}`);
}
}

getMoviees();