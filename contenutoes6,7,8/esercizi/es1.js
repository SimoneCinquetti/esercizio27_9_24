const container = document.getElementById("container");

//tabella base
const template= "<table>"+
                "#TEXT"+
                "</table>";

const listaA=[1,3,5,7,9];

function swap(lista,pos1,pos2){
  let num3= lista[pos1];
  lista[pos1]= lista[pos2];
  lista[pos2]= num3;
}

const render = () => {
  let html="";
  let riga="<tr>"+
               "<td>#LISTA</td>"+
             "</tr>";
  html+=riga.replace("#LISTA",listaA);
  swap(listaA,0,3);
  html+=riga.replace("#LISTA",listaA);
  console.log(html);
  container.innerHTML=template.replace("#TEXT",html);
}

render();


