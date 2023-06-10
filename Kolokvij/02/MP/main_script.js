const testObject = {
  ime: "TestIme",
  prezime: "TestPrezime",
  adresa: "TestAdresa",
};

const printObject = (obj) => {
  let text = "";
  for (let key in obj) {
    text += `${key} = ${obj[key]} <br />`;
  }

  document.getElementById("div1").innerHTML = text;
};

const validacija = () => {
  const email = document.querySelector("#text1").value;
  const radio1 = document.querySelector("#rad1").checked;
  const radio2 = document.querySelector("#rad2").checked;

  if (email === "" || email.length > 30 || email.indexOf("@") === -1) {
    document.querySelector("#p1").innerHTML = "Neispravan email";
    return false;
  }

  if (radio1 === false && radio2 === false) {
    document.querySelector("#p1").innerHTML = "Neispravan odabir";
    return false;
  }

  return true;
};

printObject(testObject);

function loadXML(file) {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}

const printXML = () => {
  const doc = loadXML("nekretnine.xml");

  const id = doc.getElementsByTagName("h:ID");
  const adresa = doc.getElementsByTagName("h:Adresa");
  const grad = doc.getElementsByTagName("h:Grad");
  const tip = doc.getElementsByTagName("h:Tip");

  let text = "<tr><td>Id</td><td>Adresa</td><td>Grad</td><td>Tip</td></tr>";
  for (let i = 0; i < id.length; ++i) {
    text += `<tr><td>${id[i].childNodes[0].nodeValue}</td> 
    <td>${adresa[i].childNodes[0].nodeValue}</td> 
    <td>${grad[i].childNodes[0].nodeValue}</td> 
    <td>${tip[i].childNodes[0].nodeValue}</td></tr>`;
  }

  document.querySelector("#div2").innerHTML =
    "<table border='1'>" + text + "</table>";
};

printXML();
