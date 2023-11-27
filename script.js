let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Eduardo", number: "(71) 99988-7777" },
  { name: "Deise", number: "(71) 97777-8888" },
  { name: "Creuza", number: "(71) 98855-5555" },
  { name: "Luís", number: "(71) 98569-9636" },
  { name: "Ana Paula", number: "(71) 96336-6336" },
];

function search() {
  for (let i = 0; i < contacts.length; i++) {
    if (
      input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()
    ) {
      p.innerHTML = `Contato Encontrado Nome: ${contacts[i].name} Tel: ${contacts[i].number}`;

      break;
    } else {
      p.innerHTML = "Contato não encotrado, tente novamente.";
    }
  }
}
