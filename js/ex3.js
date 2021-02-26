
function myFunction() {
    displayText400();
  }
  
  const displayText400 = () => {
    var doc = document.getElementsByTagName("p");
        for (var i = 0; i < doc.length; i++) {
            var val = doc[i].style.backgroundColor = "yellow";
        }   
  }
  
  
  
  