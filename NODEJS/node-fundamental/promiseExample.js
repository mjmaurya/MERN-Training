import axios from 'axios';
import fs from 'fs';

axios.get('https://ghibliapi.herokuapp.com/films')
.then((respnce)=>{
    var moviesList='';
    respnce.data.forEach(function(movie) {
        moviesList += `${movie.title} : ${movie.producer} \n`;
        // console.log(`Movie Title: ${movie.title}`)
        // console.log(`Movie Producer: ${movie.producer}`)
});
return fs.writeFile('promiseMovies.csv', moviesList,()=>{
    console.log('File saved successfully');
})
})

.then(()=>{
    console.log('file saved');
})
.catch(err=>{
    console.log(err);
});