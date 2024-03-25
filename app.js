const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function myFunction() {
    alert("Wings, I could eat them everyday!");
  }

  function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("valid").innerHTML = "You chose poorly";
    } else {
      document.getElementById("valid").innerHTML = "You chose wisely";
    } 
  } 