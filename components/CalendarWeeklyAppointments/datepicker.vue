<template>
  <div class="allparts">
    <h5 class="duration">Select dates to define work duration</h5>
    <div class="date-picker1">
      <div class="part1"><Datefrom /></div>
      <div>To</div>
      <div class="part2">
        <Datefrom />
      </div>
    </div>
    <div class="a">Kindly fill the information below</div>
    <WorkingHour />
  </div>
</template>
<script>
import Datefrom from "./Datefrom.vue";
import WorkingHour from "./workingHour.vue";
export default {
  components: {
    Datefrom,
    WorkingHour,
  },
  props: {},
};
</script>
<style>
.a {
  background-color: #0b5efc;
  text-align: center;
  color: white;
  width: 70%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius:5px;

}
body {
  font-family: "Roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  color: #949191;
}
.duration {
  color: #949191;
  font-size: 17px;
  font-weight: bold;
  width: 93%;
  margin: 20px auto 0px auto;
}
.date-picker1 {
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.b-form-btn-label-control.form-control > .form-control {
  display: flex;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.b-form-btn-label-control.form-control {
  display: flex;
  align-items: stretch;
  height: auto;
  padding: 0;
  background-image: none;
  width: 500px;
}
.b-form-btn-label-control.form-control > .form-control {
  display: flex;
  width: 250px !important;
}
.part1 .part2 {
  display: flex;
}
</style>
