const os = require('os');
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Dawid', 'Marek', 'Krzysztof', 'Andrzej', 'Michał', 'Patryk'];
const femaleNames = ['Weronika', 'Natalia', 'Paulina', 'Ola', 'Julia', 'Wiktoria'];
const lastNames = ['Biały', 'Jakobshe', 'Poznańska', 'Kowalski', 'Smith'];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const people = [];
  const minAge = 18;
  const maxAge = 78;
  
  for(let i = 0; i < 20; i++){
    const person = {};
  
    person.genders = randChoice(genders);
    if (person.genders === 'M') {
      person.firstName = randChoice(maleNames);
    } else if(person.genders === 'F') {
      person.firstName = randChoice(femaleNames);
    }
  
    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  
    const p1 = (Math.floor(Math.random() * (699 - 500 + 1)) + 500).toString();
    const p2 = (Math.floor(Math.random() * (999 - 100 + 1)) + 100).toString()
    const p3 = (Math.floor(Math.random() * (999 - 100 + 1)) + 100).toString()
    
    person.phone =  p1 + '-' + p2 + '-' + p3 ;
    person.email = person.firstName.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
  
    people.push(person);
  }
  
  const data = JSON.stringify(people);
  
  fs.writeFile('people.json', data, (err) => {
    if (err) throw console.log('Something went wrong', err);
    console.log('File has been successfully generated! Check people.json');
  })