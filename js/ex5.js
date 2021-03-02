
function myFunction() {
  clearValues();
  createTable();
}
  

function createTable() {
      
    let myTableDiv = document.getElementById("output");
      
    let table = document.createElement('table');
    table.style.border='1';
    
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
      
    for (let i=1; i<13; i++){
      let tr = document.createElement('tr');
       tableBody.appendChild(tr);
       
       for (let j=0; j<1; j++){
        let td = document.createElement('td');
           td.width='75';
           td.style.border = 'solid';
           td.appendChild(document.createTextNode( i ));
           tr.appendChild(td);
           if (i % 4 === 0  ) {
            td.style.background = 'aquamarine';
           }
       }
    }
    myTableDiv.appendChild(table);
    
}

 
function clearValues() {
  document.getElementById("output").innerHTML  = '';
}

  

