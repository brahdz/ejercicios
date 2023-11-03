let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("Personas iniciales:");
console.log(people);

// Eliminar "Dani" 
people.splice(people.indexOf("Dani"), 1);

// Eliminar "Juan" 
people.splice(people.indexOf("Juan"), 1);

// Mover "Luis" al principio 
if (people.includes("Luis")) {
  people.splice(people.indexOf("Luis"), 1);
}
people.unshift("Luis");

people.push("Brayan");

console.log("Personas después de las operaciones:");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

console.log("Número de personas después de las operaciones: " + people.length);
console.log(people);