const container = document.getElementById("liste_handicaps");

fetch("./handicap.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    afficherHandicaps(data);
  });


  // La console m'indique une erreur sur ".catch" et bloque mon code.J'ai testé plusieurs écritures.sans succès. Je ne comprends pas ce qui cloche.

  .catch
    ((error) => console.error("Erreur de chargement:", error));

function afficherHandicaps(handicaps) {
  const liste = document.getElementById("liste-handicaps");
  handicaps.innerHTML.forEach((handicap) => {
    const item = document.createElement("li");
    item.textContent = handicap.type;
    item.addEventListener("click", () => afficherDetails(handicap));
    liste.appendChild(item);
  });
}
function afficherDetails(handicap) {
  const details = document.getElementById("details-handicap");
  details.innerHTML = `        
        <h2>${handicap.type}</h2>        
        <p>${handicap.description}</p>        <h3>Solutions :</h3>        
        <ul>${handicap.solutions
          .map((sol) => `<li>${sol}</li>`)
          .join("")}</ul>    
         `;
}
