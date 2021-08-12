import request from 'request';
import fs from 'fs';

request('https://ghibliapi.herokuapp.com/films', (error,responce,body) => {
    if (error) {
        console.log(error);
        return;
    }
    else if (responce.statusCode !== 200) {
        console.error(responce.statusCode);
        return;
    } 
    else {
        var movies = JSON.parse(body);
        var moviesList='';
        movies.forEach(function(movie) {
            moviesList += `${movie.title} : ${movie.producer} \n`;
            // console.log(`Movie Title: ${movie.title}`)
            // console.log(`Movie Producer: ${movie.producer}`)
    });
    fs.writeFile('movies.csv',moviesList,(err) => {
        if (err) throw err;
        console.log('file saved');
    });
}
        
    });