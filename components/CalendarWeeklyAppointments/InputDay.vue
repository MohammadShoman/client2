<template>
  <div>
    <label >
      <input
        type="checkbox"
        id="checkboxes"
        :value="day"
        
        @input="handleInputDay"
      />
      <span class="check-box-custom"></span>
      <label class="checkbox-label"> {{ day }} </label>
      <div class="from-to">
        <input class="time" type="time" name="time" @input="handleInputFrom"/>
        To
        <input class="time" type="time" name="time" @input="handleInputTo" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
  props:{
      day:String,
  },
  methods: {
    handleInputDay(e) {
      console.log(e.target.value);
      this.$emit("inputDay", e.target.value);
    },
    handleInputFrom(e) {
      console.log(e.target.value);
      this.$emit("inputFrom", e.target.value);
    },
    handleInputTo(e) {
      console.log(e.target.value);
      this.$emit("inputTo", e.target.value);
    },
  },
};
</script>

<style></style>
