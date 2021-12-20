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
        <input class="time" type="time" name="time" @input-From="handleInputFrom"/>
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
      this.$emit("input-Day", e.target.value);
    },
    handleInputFrom(e) {
      console.log(e.target.value);
      this.$emit("input-From", e.target.value);
    },
    handleInputTo(e) {
      console.log(e.target.value);
      this.$emit("input-To", e.target.value);
    },
  },
};
</script>

<style></style>
