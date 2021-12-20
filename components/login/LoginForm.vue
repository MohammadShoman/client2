<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <input type="username" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="Password" />
      <a href="/forgotPassword">Forgot your password?</a>
      <button @click.prevent="login" class="second-button">Sign In</button>
      <p style="color: red">{{ getMessage }}</p>
    </form>
  </div>
</template>

<script>

export default {
  name: "LoginForm",
  data() {
    return {
      fullName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          username: this.username,
          password: this.password,
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
};
</script>

<style scoped>
.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

h1 {
  font-weight: bold;
  margin: 0;
}

</style>
