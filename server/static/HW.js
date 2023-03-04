let hwLocations = document.getElementsByClassName("location-hw");
let monthBtns = document.getElementsByClassName("month");
let selectedLoc = null;
let calDiv = document.getElementById("calendar");
let graphDiv = document.getElementById("graph");

let updateCalendar = (location, month, data) => {
  calDiv.innerHTML = `<h2 class="title">Heatwaves predicted during ${month} 2023 in ${location}</h2>
                      <h5>Heatwave is considered only when the following conditions are met (as per the guidelines given) <h5>
                      <ul>
                        <li>Based on our temperature predictions for 2023 we filter out those days where the maximum temperature predicted was &gt;= 40C </li>
                        <li>We computed the monthly normal station temperature using data from https://en.climate-data.org/. The data was from 1991-2021 </li>
                        <li>Daily difference between predicted max temp and normal station temp was computed</li>
                        <li>As per the condition, heatwave is &quot;considered&quot; <strong>but not reported</strong> when the difference is &gt;=4C</li>
                        <li>If the condition is satisfied for consecutive days, then they are declared as a heatwave day (this is shown as a red cell in the calendar)</li>
                        <li>If the condition is not satisfied for consecutive days, then that day is marked as an anamolous temperature day (marked as a yellow cell in the calendar)</li>
                      </ul>
                      `;

  graphDiv.innerHTML = `
    <h3>Choosing the right model...</h3>
    <h5>The following models were tested based on the given hyperparameters</h5>
    <img class="graph-img" src="static/graphs/${location.toLowerCase()}_HW4.png" height="100px" width="auto"/>
    <h5>Clearly out of the bunch, the best model is ${data['models'][location.toLowerCase()]} and hence it is chosen.</h5>
    <img class="graph-img" src="static/graphs/${location.toLowerCase()}_HW2.png"/>
    <h5>Based on the above parameters it is observed that there is a strong corelation between humidity and temperature and hence this fact is used in modelling...</h5>
    <div class="row">
      <div class="col">
        <img class="graph-img" src="static/graphs/${location.toLowerCase()}_HW3.png"/>
      </div>
      <div class="col">
        <img class="graph-img" src="static/graphs/${location.toLowerCase()}_HW.png"/>
      </div>
    </div>

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
