// Zadatak 1 - var objekt nije potrebno, tu je samo za testiranje
var objekt = {
  ime: "antonio",
  prezime: "maletic",
  godine: "33",
  grad: "jastrebarsko",
};

const ispisiObjekt = (objekt) => {
  var ispisField = document.getElementById("div1");
  var ispisMsg = "";

  for (var svojstvo in objekt) {
    ispisMsg += `${svojstvo} : ${objekt[svojstvo]} </br>`;
  }
  ispisField.innerHTML = ispisMsg;
};

ispisiObjekt(objekt);

// Zadatak 2
const validacija = () => {
  var errorField = document.getElementById("p1");
  var emailField = document.getElementById("text1").value;
  var obavijestRadio1 = document.getElementById("rad1");
  var obavijestRadio2 = document.getElementById("rad2");

  if (
    emailField === "" ||
    emailField.length > 30 ||
    !emailField.includes("@")
  ) {
    errorField.innerHTML = "Neispravna email adresa.";
    return false;
  }

  if (!obavijestRadio1.checked && !obavijestRadio2.checked) {
    errorField.innerHTML = "Obavijest nije odabrana.";
    return false;
  }

  return true;
};

// Zadatak 4 - loadXML funkcija je zadana u zadatku
function loadXML(file) {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}

const xmlToTable = (xmlFile) => {
  var tableField = document.getElementById("div2");
  var file = loadXML(xmlFile);

  var header = "<tr><td>ID</td><td>Adresa</td><td>Grad</td><td>Tip</td></tr>";
  var data = "";

  var id = file.getElementsByTagName("n:id");
  var adresa = file.getElementsByTagName("n:adresa");
  var grad = file.getElementsByTagName("n:grad");
  var tip = file.getElementsByTagName("n:tip");

  for (let i = 0; i < id.length; i++) {
    data += `<tr> 
                <td>${id[i].childNodes[0].nodeValue}</td> 
                <td>${adresa[i].childNodes[0].nodeValue}</td>
                <td>${grad[i].childNodes[0].nodeValue}</td>
                <td>${tip[i].childNodes[0].nodeValue}</td>
             </tr>`;
  }
  tableField.innerHTML = `<table border=1>
                            ${header}
                            ${data}
                          </table>`;
};

xmlToTable("zadatak_03.xml");
