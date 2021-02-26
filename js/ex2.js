
function myFunction() {
    clearValues();
    displayText400();
  }
  
  const displayText400 = () => {
    var doc = document.getElementsByClassName("400level");
        for (var i = 0; i < doc.length; i++) {
            var val = doc[i].innerText;
            console.log(val)
            document.getElementById("lblMessage").innerHTML  += val + '<br/>';
        }   
  }
  
  
  function clearValues() {
    document.getElementById("lblMessage").innerHTML  = '';
  }
  
  