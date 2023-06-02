// Zadatak 1
// objekt = { Key : Value }
var objekt = {
  ime: "Antonio",
  prezime: "Maletic",
  godine: 30,
  adresa: "123 Main Street",
  grad: "New York",
};

function ispisiSvojstva(object) {
  var div = document.getElementById("div1");
  var ispis = "";

  for (var key in object) {
    ispis += key + " = " + object[key] + "<br>";
  }

  div.innerHTML = ispis;
}

ispisiSvojstva(objekt);

// Zadatak 2
const validacija = () => {
  errorField = document.querySelector("#p1");
  email = document.querySelector("#text1").value;

  if (!(email.length > 0 && email.length <= 30 && email.includes("@"))) {
    errorField.innerHTML = "Neispravan email.";
    return false;
  }

  if (
    !document.querySelector("#rad1").checked &&
    !document.querySelector("#rad2").checked
  ) {
    document.querySelector("#p1").innerHTML = "Nije odabrana obavijest.";
    return false;
  }

  return true;
};

// Zadatak 4
function loadXML(file) {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}

const ispisixml = (file) => {
  tableField = document.querySelector("#div2");

  var id = file.getElementsByTagName("n:id");
  var adresa = file.getElementsByTagName("n:adresa");
  var grad = file.getElementsByTagName("n:grad");
  var tip = file.getElementsByTagName("n:tip");

  var tab =
    "<table border=1><tr><td>ID</td><td>Adresa</td><td>Grad</td><td>Tip</td></tr><tbody>";
  for (var i = 0; i < id.length; i++) {
    tab +=
      "<tr><td>" +
      id[i].childNodes[0].nodeValue +
      "</td><td>" +
      adresa[i].childNodes[0].nodeValue +
      "</td><td>" +
      grad[i].childNodes[0].nodeValue +
      "</td><td>" +
      tip[i].childNodes[0].nodeValue +
      "</td></tr>";
  }
  tab += "</tbody></table>";
  tableField.innerHTML = tab;
};

ispisixml(loadXML("zadatak_03.xml"));
