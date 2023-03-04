let aqiLocations = document.getElementsByClassName("location-aqi");
let aqiDiv = document.getElementById("aqi");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let graphDiv = document.getElementById("graph");
let modelTxt = document.getElementById("model-list-text"); 

let updateAQI = (location, data) => {
  aqiDiv.innerHTML = `
    <h2 class="title">Monthly predicted AQI for ${location} in 2023</h2>
    <img src="/static/graphs/${location.toLowerCase()}_AQI4.png">
  `;
  modelTxt.innerHTML = `
    <h5>The following models were tested to check their performance based on chosen hyperparameters: <h5>
    <img src="static/graphs/${location.toLowerCase()}_AQI3.png" width="900px" height="auto"/>
    <h5>Clearly out of the bunch ${data['model']} was chosen due to its superior performance</h5>
    <div class="col">
        <img src="static/graphs/${location.toLowerCase()}_AQI.png" width="100%" height="auto"/>
    </div>
    <div class="col">
        <img src="static/graphs/${location.toLowerCase()}_AQI2.png" width="100%" height="auto"/>
    </div>
    `;
};

Array.from(aqiLocations).forEach((element) => {
  element.addEventListener("click", async (event) => {
    const res = await fetch(
      window.location.origin + "/AQI/" + element.textContent.toLowerCase()
    );
    let data = await res.json();
    console.log(data);
    updateAQI(element.textContent, data);
  });
});
