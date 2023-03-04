<template>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Location
  </a>

  <ul class="dropdown-menu">
    <li id="adilabad"><a class="dropdown-item" href="#">Adilabad</a></li>
    <li id="warangal"><a class="dropdown-item" href="#">Warangal</a></li>
    <li id="khammam"><a class="dropdown-item" href="#">Khammam</a></li>
    <li id="nizamabad"><a class="dropdown-item" href="#">Nizamabad</a></li>
    <li id="karimnagar"><a class="dropdown-item" href="#">Karimnagar</a></li>
  </ul>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    March
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    April
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    May
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    June
  </label>
</div>

<Calendar/>
</template>

<script>

import Calendar from '@/components/Calendar.vue'

export default {
  name: 'HeatView',
  components: {
    Calendar
  }
}
</script>
