<template>
  <div>
    <label for="datepicker-full-width"></label>
    <b-form-datepicker
      id="datepicker-full-width"
      v-model="value"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
      :date-format-options="{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }"
    ></b-form-datepicker>
    {{value}}
  </div>
</template>
<script>
import WorkingHour from "./WorkingHour.vue";
export default {
  props: { value: String },
  components: { WorkingHour },
};
</script>
<style>
#datepicker-full-width {
  background-color: #eceef8;
}
.btn .b-icon.bi,
.nav-link .b-icon.bi,
.dropdown-toggle .b-icon.bi,
.dropdown-item .b-icon.bi,
.input-group-text .b-icon.bi {
  color: #0b5efc;
}
.btn-primary:not([disabled]):not(.disabled).active {
  background-color: #0b5efc;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  outline: none;
  box-shadow: none !important;
  border: 1px solid #ced4da;
}
.form-control {
  display: block;
  width: 35%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.b-calendar-header {
  margin-bottom: 0.25rem;
  width: 285%;
}
.b-calendar .b-calendar-header,
.b-calendar .b-calendar-nav {
  margin-bottom: 0.25rem;
  justify-content: center;
}
.b-calendar .b-calendar-grid {
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100%;
}
</style>
