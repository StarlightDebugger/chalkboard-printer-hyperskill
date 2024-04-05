// Welcome to the Chalkboard Printer!
const input = require('sync-input');
const name = input("Enter name: ")
const surname = input("Enter surname: ");
const message = input("Enter message: ");

for(let i = 0; i < 5; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}
