<template>
  <div>
    <nav id="navigator" class="navbar" :class="{ navbaropen: opened }"></nav>
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <a href="#" @click="opened = !opened">
        <div class="component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </div>
      </a>
      <a href="#">H</a>
      <a href="#">A</a>
      <a href="#">S</a>
      <a href="#">C</a>
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <span class="open-slide"> </span>
      <Header />
      <Filters />
      <RightComponents />
      <div class="calendar-view">
        <MiddleCalendar />
        <TableOfCalendar />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters";
import RightComponents from "./RightComponents.vue";
import Header from "./Header.vue";
import MiddleCalendar from "./MiddleCalendar.vue";
import TableOfCalendar from "./TableOfCalendar.vue";
export default {
  data() {
    return {
      opened: false,
    };
  },
  components: {
    RightComponents,
    Header,
    Filters,
    MiddleCalendar,
    TableOfCalendar,
  },
};
</script>

<style>
.side-nav a {
  font-size: 12px;
}

.side-nav:hover {
  height: 100%;
  width: 20%;
  position: fixed;
}
#main {
  transition: margin-left 0.5s;
  overflow: hidden;
}
.mainopen {
  transition: margin-left 0.3s;
  overflow: hidden;
  margin-left: 18%;
}
.side-nav {
  height: 100%;
  width: 3%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.sidenavopen {
  height: 100%;
  width: 18%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
}
.side-nav:hover {
  height: 100%;
  width: 18%;
  position: fixed;
}

.side-nav a {
  padding: 10px 10px 20px 20px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10%;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}
.side-nav a:focus {
  color: #0b5efc;
}

.side-nav a:hover {
  color: #0b5efc;
}

.open-slide {
  float: left;
  margin-left: 30px;
}

@media (max-width: 768px) {
  .side-nav {
    height: 100%;
    width: 20%;
    position: fixed;
  }

  .side-nav a {
    font-size: 12px;
  }
}
</style>
