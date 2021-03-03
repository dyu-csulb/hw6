
function myFunction() {
  loadDictionary();
}
  
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];



function loadDictionary() {
  let outputDiv = document.getElementById("output");

  let message = '';
  outputDiv.style.textAlign = 'left';


  for (var i = 0; i < words.length; i++) {

    let elm1 = document.createElement('span');
    let elm2 = document.createElement('span');
    elm1.innerHTML = words[i].term + '<br/>'
    elm1.style.textAlign = 'left';
    elm1.style.fontWeight = 'bold'

    elm2.innerHTML = words[i].definition + '<br/>'
    elm2.style.textAlign = 'left';
    elm2.style.padding = '25px';


    outputDiv.appendChild(elm1);
    outputDiv.appendChild(elm2);
  
    }

  console.log(results)
  document.getElementById("lblMessage").innerHTML  = message;
}

function clearValues() {
  document.getElementById("output").innerHTML  = '';
}

  

