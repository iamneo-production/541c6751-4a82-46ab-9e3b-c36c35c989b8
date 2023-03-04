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

let updateAQI = (location, data) => {
  aqiDiv.innerHTML = `<h2 class="title">Monthly predicted AQI for ${location} in 2023</h2>`;
  let count = 0;
  for(let i = 0; i < 3; i++) {
    aqiDiv.innerHTML += `<div class="row">`;
    for(let j=0;j<4;j++) {
        aqiDiv.innerHTML += `
            <div class="col">${months[count]} : ${data[count]}</div>
        `;
        count ++ ;
    }
    aqiDiv.innerHTML += '</div>';
  }
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
