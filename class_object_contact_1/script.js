import Contact from "./contact.js";

const contactCard1 = new Contact(
    "Lucia",
    "Jasna",
    "jasna@gmail.com",
    "@jasna",
    "hviezdajasna.sk"
);
const contactCard2 = new Contact(
    "Jana",
    "Kosna",
    "jana@gmail.com",
    "@jajana",
    "jaja.sk"
);
const contactCard3 = new Contact(
    "Mira",
    "Ka",
    "mira.ka@gmail.com",
    "@miraka",
    "mirraka.com"
);
const main = document.querySelector(".mainclass");

const content = `
<article class = "first_contact">
  <h3 class = "contact_firstname">${contactCard1.firstName} ${contactCard1.lastName}</h3>
  <p>email: <span>${contactCard1.email}</span></p>
  <p>twitter: <span>${contactCard1.twitter}</span></p>
  <p>url: <span>${contactCard1.url}</span></p>
</article>
<article class = "second_contact">
  <h3 class = "contact_firstname">${contactCard2.firstName} ${contactCard2.lastName}</h3>
  <p>email: <span>${contactCard2.email}</span></p>
  <p>twitter: <span>${contactCard2.twitter}</span></p>
  <p>url: <span>${contactCard2.url}</span></p>
</article>
<article class = "third_contact">
  <h3 class = "contact_firstname">${contactCard3.firstName} ${contactCard3.lastName}</h3>
  <p>email: <span>${contactCard3.email}</span></p>
  <p>twitter: <span>${contactCard3.twitter}</span></p>
  <p>url: <span>${contactCard3.url}</span></p>
</article>
`;

main.innerHTML = content;