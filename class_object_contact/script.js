import Contact from "./Contact.js";

const contact_person1 = new Contact(
    "Patricia",
    "Bielikova",
    "pata@gmail.com",
    "@twitter",
    "http://patriciabielikova.sk"
);

const contact_person2 = new Contact(
    "Anna",
    "Smith",
    "smith.anna@gmail.com",
    "@asmith",
    "http://www.annas.com"
);

const contact_person3 = new Contact(
    "Lucia",
    "Moska",
    "luciamoska@gmail.com",
    "@moska",
    "http://www.lm.sk"
);
console.log(contact_person1);
console.log(contact_person2);
console.log(contact_person3);