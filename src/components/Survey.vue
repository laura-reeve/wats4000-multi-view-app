<template>
  <div class="survey">
      <h1>Sign up for our Newsletter</h1>
      <p>Please complete of the *required questions below to sign up!</p>
      <form id="signup-form" v-on:submit.prevent="validateForm"> 

        <p class="error" v-show="showError">Error - You must answer all of the *required questions to continue!</p>
        <p><label for="q1">*Name:<br><input type="text" id="q1" v-model="q1" tabindex="0"></label></p>

        <p><label for="q1a">*Email: <br><input type="email" id="q1.5" v-model="q1a"></label></p>

        <p>What is your favorite warm beverage?<br>
          <label v-for="beverage in beverageOptions">
            <input type="checkbox" v-model="q2" :value="beverage.value">
            {{beverage.text}}
          </label>
        </p>

        <p>What other cozy things interest you?<br>
          <label v-for="topic in topicOptions"> 
            <input type="checkbox" v-model="q3" :value="topic.value">
            {{topic.text}}
          </label>
        </p>
        <p>
          <label for="q4">What does "being cozy" mean to you?<br>
            <textarea cols="35" rows="8" id="q4" v-model="q4" tabindex="0" placeholder="Type your response here."></textarea>
          </label>
        </p>
        <p>
          <label for="q5">Snuggie or Onesie?
            <select id="q5" v-model="q5">
              <option value="">Select your preference:</option>
              <option value="spaces">Snuggie</option>
              <option value="tabs">Onesie</option>
              <option value="other">Both</option>
              <option value="other">Neither</option>
            </select>
          </label>
        </p>
        <p><input id="button" type="submit" value="Submit"></p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data () {
    return {
      showError: false,
      q1: '',
      q1a: '',
      q2: [],
      q3: [],
      q4: '',
      q5: '',
      beverageOptions: [
        {
            text: 'Coffee',
            value: 'coffee'
        },
        {
            text: 'Tea',
            value: 'tea'
        },
        {
            text: 'Cider',
            value: 'cider'
        },
        {
            text: 'Cocoa',
            value: 'cocoa'
        },
        {
            text: 'Other',
            value: 'other'
        }
      ],
      topicOptions: [
        {
            text: 'Books',
            value: 'books'
        },
        {
            text: 'Binge-watching TV',
            value: 'TV'
        },
        {
            text: 'Internet',
            value: 'internet'
        },
        {
            text: 'Fuzzy socks',
            value: 'socks'
        },
        {
            text: 'Blankets',
            value: 'blankets'
        }
      ]
    }
  },
  methods: {
    validateForm: function () {
      // q1 must not be blank
      if ((this.q1 != '') &&
      // q1a must not be blank
        (this.q1a != '')) {
      // If all of the data is valid
      // then use the $router to move the user to the Secret page.
        this.$router.push('Secret');
      } else {
      // If the data is not valid, alter the value of showError to show the error message.      
        this.showError = true;
      }
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.survey {
  background-color: #a7a566;
  padding: 10px;
  border-radius: 5px;
  color: #faebd7;
}
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
  font-family: "Tangerine", Arial, sans-serif;
  font-size: 3em;
}
h1 {
  font-size: 4em;
  margin: .5em;
}
ul {
  list-style-type: none;
  padding: 0;
}
#button {
  font-size: 1em;
  margin: 10px 10px 40px 10px;
  padding: 5px 15px;
  background-color: white;
  border-radius: 8px;
  color: brown;
}
</style>
