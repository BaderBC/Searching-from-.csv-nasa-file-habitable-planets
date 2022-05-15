const EventEmitter = require('events')
const {response} = require("express");

const BadClup = new  EventEmitter;


BadClup.on('status', (listener) => {
    if(listener === 'udało się'){
        console.log('To była oczywistość B)')
    }else if(listener === 'nie udało się'){
        console.log('Ale jeszcze się uda ;)')
    }
})


BadClup.emit('status', process.argv.slice(2).join(' '))

//console.log(process.argv.slice(2).join(' '))



const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
]


let promise = Promise.all(urls.map(url => fetch(url).then(result => result.json())));
promise.then(result => console.log(result))