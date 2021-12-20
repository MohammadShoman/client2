<template>
  <div class="wokring-hours">
    <div class="title-working-hours">
      <h5>Select your working days</h5>
    </div>
    <div class="body-working-hours">
      <InputDay  day="sun"/> 
      <InputDay  day="mon" @emit="inputFrom"/> 
      <InputDay  day="tue"/> 
      <InputDay  day="wed"/> 
      <InputDay  day="tue"/> 
      <InputDay  day="fri"/> 
      <InputDay  day="sat"/> 
        
      
    </div>
  </div>
</template>

<script>
import InputDay from  "./InputDay.vue"
export default {
  data() {
    return {
      days: [
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
      ],
    };
  },
  components:{
    InputDay,
  },
   methods: {
    
  },
};
</script>

<style>
.wokring-hours {
    display: flex;
    flex-direction: column;
}
body {
  font-family: "roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  margin: 0 auto;
}
.header-cont {
  display: flex;
  justify-content: center;
}
.user-info {
  width: 55%;
  background: rgb(11, 94, 252);
  height: 35px;
  display: flex;
  border-radius: 5px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  color: #fff;
  justify-content: center;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
}
.employee-details {
  display: flex;
  padding-left: 60px;
}
.second-list {
  display: flex;
  justify-content: center;
}
.days-list {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1% 10%;
  background-color: #fff;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 5px;
  color: #949191;
}
.working-days {
  padding-left: 25px;
  color: #949191;
}
.days-container input {
  cursor: pointer;
}

.time {
  width: 110;
  height: 25px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 0px 20px;
  border: none !important;
  background: border-box;
}
.from-to {
  display: flex;
}
</style>
