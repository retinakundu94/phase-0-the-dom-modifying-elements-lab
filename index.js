const newHeader = document.createElement("h1");
newHeader.textContent = "RETINA is the champion"; 
newHeader.id = "victory"; 
document.body.append(newHeader);

const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const elementToUpdate = document.getElementById("main");
elementToUpdate.style.height = "300px";
elementToUpdate.style.backgroundColor = "#27647B";
elementToUpdate.textContent = "You've changed what's on the screen!";
elementToUpdate.style.fontSize = "24px";
elementToUpdate.style.marginLeft = "30px";
elementToUpdate.style.lineHeight = 2;
elementToUpdate.className = "pet-listing dog";

const ulToRemove = document.getElementsByTagName("ul")[0];
const secondChildToRemove = ulToRemove.querySelector("li:nth-child(2)");
ulToRemove.removeChild(secondChildToRemove);

ulToRemove.remove();
