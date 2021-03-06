/*
Made by 
Bartłomiej Strama

This code use data from
https://www.nasa.gov/mission_pages/kepler/main/index.html
to search the habitable planets that have been captured by this telescope
 */


const { parse } = require('csv-parse'),
    fs = require('fs');


const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}


fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
            console.log('\x1b[36m%s\x1b[0m', data['kepler_name'])
        }
    })
    .on('error',(err) => {
        console.error(err);
    })
    .on('end', () => {
        console.log('\x1b[42m',`${habitablePlanets.length} habitable planets found ;)`, '\x1b[0m')
        /*
        console.log(habitablePlanets.map(planet => planet['kepler_name']))
        console.log(`${habitablePlanets.length} habitable planets found ;)`);
        */
    })