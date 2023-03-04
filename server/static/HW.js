let hwLocations = document.getElementsByClassName("location-hw");
let monthBtns = document.getElementsByClassName("month");
let selectedLoc = null;
let calDiv = document.getElementById("calendar");
let graphDiv = document.getElementById("graph");

let updateCalendar = (location, month, data) => {
  calDiv.innerHTML = `<h2 class="title">Heatwaves predicted during ${month} 2023 in ${location}</h2>`;

  graphDiv.innerHTML = `
    <h2>Model Prediction Graph</h2>
    <img class="graph-img" src="static/graphs/${location.toLowerCase()}_HW.png"/>
  `;
  let count = 0;

  for (let i = 0; i < 6; i++) {
    calDiv.innerHTML += `
            <div class="row">
        `;
    for (let j = 0; j < 7; j++) {
      count++;
      if (count > data["start_cell"]) {
        calDiv.innerHTML += `<div class="col d-flex flex-column align-items-end" id="${
          count - data["start_cell"]
        }"></div>`;
      } else {
        calDiv.innerHTML += `<div class="col"></div>`;
      }
    }
    calDiv.innerHTML += "</div>";
  }

  for ([k, v] of Object.entries(data)) {
    let cell = document.getElementById(k);
    let temp;
    let cls="normal";
    if (cell != null) {
        temp=v[location.toLowerCase()];
        if(temp.endsWith('*')) {
            temp = temp.substring(0,temp.length-1);
            cls = "anomaly"
        } else if (temp.endsWith('^')) {
            temp = temp.substring(0,temp.length-1);
            cls = "heatwave"
        }
    }
    cell.innerHTML = `
            <div class="row"><h3 class="">${k}</h3></div>
            <div class="row align-self-end"><h1>${temp}°C</h1></div>
        `;
    cell.classList.add(cls);
    
  }


};

Array.from(hwLocations).forEach((element) => {
  element.addEventListener("click", (event) => {
    selectedLoc = element.textContent;
  });
});

Array.from(monthBtns).forEach((element) => {
  element.addEventListener("click", async (event) => {
    if (selectedLoc != null) {
      const res = await fetch(window.location.origin + `/HW/${element.value}`);
      let data = await res.json();
      console.log(data);
      updateCalendar(selectedLoc, element.textContent, data);
    }
  });
});
