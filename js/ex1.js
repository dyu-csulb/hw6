
function myFunction() {
  bodyNodes();

}

const bodyNodes = () => {
  document.getElementById("div-body").childNodes.forEach(
    node => {
      console.log(node)
      document.getElementById("lblMessage").innerHTML  += node.textContent + '<br/>';
    }
  )
}


function clearValues() {
  document.getElementById("lblMessage").innerHTML  = '';
}







