const testObject = {
  ime: "TestIme",
  prezime: "TestPrezme",
  adresa: "TestAdresa",
};

const printObject = (obj) => {
  let text = "";
  //   for (let key in obj) {
  //     text += `${key} = ${obj[key]} <br />`;
  //   }

  Object.keys(obj).forEach((key) => {
    text += `${key} = ${obj[key]} <br />`;
  });

  document.querySelector("#div1").innerHTML = text;
};

printObject(testObject);

//Zadatak2
const validacija = () => {
  const email = document.querySelector("#text1").value;
  const radio1 = document.querySelector("#rad1").checked;
  const radio2 = document.querySelector("#rad2").checked;
  if (email === "" || email.length > 30 || email.indexOf("@") == -1) {
    document.getElementById("p1").innerHTML = "Neispravan e-mail!";
    return false;
  }
  if (radio1 === false && radio2 === false) {
    document.getElementById("p1").innerHTML = "Neispravan odabir!";
    return false;
  }
  return true;
};

function loadXML(file) {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}

const foo = () => {
  let text = "";
  const doc = loadXML("nekretnine.xml");
  const id = doc.getElementsByTagName("h:ID");
  const adresa = doc.getElementsByTagName("h:Adresa");
  const grad = doc.getElementsByTagName("h:Grad");
  const tip = doc.getElementsByTagName("h:Tip");

  for (let i = 0; i < id.length; ++i) {
    text += `ID = ${id[i].childNodes[0].nodeValue}, Adresa = ${adresa[i].childNodes[0].nodeValue}, Grad = ${grad[i].childNodes[0].nodeValue}, Tip = ${tip[i].childNodes[0].nodeValue}`;
  }
  document.querySelector("#div2").innerHTML = text;
};

foo();
