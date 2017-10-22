<template>
  <div class="home">
    <div class="form-container" v-show="showForm">
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>
      <p class="error" v-show="showError">Error - You must answer all of the questions to continue!</p>
        <form v-on:submit.prevent="validateForm">
          <fieldset>
          <legend>Login Information</legend>
            <p><label for="username"></label><input type="text" id="username" v-model="username" tabindex="0" placeholder="Username"></p>
            <p><label for="email"></label><input type="email" id="email" v-model="email" tabindex="0" placeholder="Email"></p>
            <p><label for="password"></label><input type="password" id="password" v-model="password" tabindex="0" placeholder="Password"></p>
            <p><label for="passwordVerify"></label><input type="password" id="passwordVerify" v-model="passwordVerify" tabindex="0" placeholder="Verify Password"></p>
            <p class="error" v-show="showPasswordError">Error - Passwords do not match!</p>
            <p><input type="submit" value="Submit"></p>
          </fieldset>
      </form>
    </div>
    <div class="success-message" v-show="!showForm">
      <h1>Thank you for signing up!</h1>
      <p>Please take our new member survey. <router-link to="/survey">Click here</router-link></p><!-- TODO: Link "Click here" to the survey page. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      showForm: true,
      showError: false,
      showPasswordError: false
    }
  },
  methods: {
    validateForm: function () {
      // username must not be blank
      if ((this.username != '') &&
      // email must not be blank
        (this.email != '') &&
      // password and passwordVerify must be equal
        (this.password === this.passwordVerify)) {
      // When the form is validated, show the .success-message content
      this.showForm = false;
      } else if (this.password !== this.passwordVerify) {
        this.showPasswordError = true;
      } else {
      // If the form is invalid, show the form error message
       this.showError = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
