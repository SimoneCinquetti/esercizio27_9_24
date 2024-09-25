const container = document.getElementById("container");

//tabella base
const template= "<table>"+
                "<tr><td>NOME</td><td>NUMERO</td></tr>"+
                "#TEXT"+
                "</table>";

const randomNames = [
  "Liam", "Olivia", "Noah", "Emma", "Elijah", "Ava", "James", "Sophia",
  "William", "Isabella", "Benjamin", "Mia", "Lucas", "Amelia", "Henry",
  "Evelyn", "Alexander", "Harper", "Jackson", "Scarlett", "Sebastian",
  "Luna", "Michael", "Aria", "Daniel", "Chloe", "Matthew", "Grace",
  "David", "Aurora"
  ];

const randomNumbers = [
  56, 23, 89, 15, 78, 42, 67, 9, 33, 85, 
  94, 3, 61, 71, 50, 18, 29, 64, 92, 37, 
  21, 74, 8, 47, 99, 12, 58, 6, 84, 26
  ];

function convert(listaA,listaB){
  let risultato= {};
  if(listaA.length==listaB.length){
    listaA.forEach((element)=> {
      risultato[element]=listaB[listaA.indexOf(element)];
    })
  }
  return risultato;
}

const dizionario= convert(randomNames,randomNumbers);

const render = () => {
  let html="";
  for (const key in dizionario) {
    let riga="<tr>"+
               "<td>#NUMERO</td>"+
               "<td>#NOME</td>"+
             "</tr>";
    riga=riga.replace("#NOME",dizionario[key]);
    riga=riga.replace("#NUMERO",key);
    html=html+riga;
  }
  let risultato=template.replace("#TEXT",html);
  container.innerHTML=risultato;
  console.log(container);
}

render();