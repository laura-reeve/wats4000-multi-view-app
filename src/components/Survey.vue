<template>
  <div class="survey">
      <h1>New Member Survey</h1>
      <p>Please complete the new member survey.</p>
      <form v-on:submit.prevent="validateForm"> 

        <p class="error" v-show="showError">Error - You must answer all of the questions to continue!</p>
        <p><label for="q1">Q1: How long have you been building websites?<br><input type="text" id="q1" v-model="q1" tabindex="0"></label></p>

        <p>Q2: What languages interest you the most?<br>
          <label v-for="language in languageOptions">
            <input type="checkbox" v-model="q2" :value="language.value">
            {{language.text}}
          </label>
        </p>

        <p>Q3: What other topics interest you?<br>
          <label v-for="topic in topicOptions"> 
            <input type="checkbox" v-model="q3" :value="topic.value">
            {{topic.text}}
          </label>
        </p>
        <p>
          <label for="q4">Q4: What kinds of websites would you like to build someday?<br>
            <textarea cols="70" rows="8" id="q4" v-model="q4" tabindex="0" placeholder="Type your response here."></textarea>
          </label>
        </p>
        <p>
          <label for="q5">Q5: Spaces or Tabs?
            <select id="q5" v-model="q5">
              <option value="">Select your preference.</option>
              <option value="spaces">Spaces</option>
              <option value="tabs">Tabs</option>
            </select>
          </label>
        </p>
        <p><input type="submit" value="Submit"></p>
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
      q2: [],
      q3: [],
      q4: '',
      q5: '',
      languageOptions: [
        {
            text: 'JavaScript',
            value: 'js'
        },
        {
            text: 'Python',
            value: 'py'
        },
        {
            text: 'Ruby',
            value: 'ruby'
        },
        {
            text: 'Java',
            value: 'java'
        },
        {
            text: 'PHP',
            value: 'php'
        }
      ],
      topicOptions: [
        {
            text: 'Accessibility',
            value: 'axe'
        },
        {
            text: 'Experience Design',
            value: 'ux'
        },
        {
            text: 'Operations',
            value: 'ops'
        },
        {
            text: 'Search Engine Optimization',
            value: 'seo'
        },
        {
            text: 'Multimedia',
            value: 'media'
        }
      ]
    }
  },
  methods: {
    validateForm: function () {
      // q1 must not be blank
      if ((this.q1 != '') &&
      // q2.length must be greater than 0
        (this.q2.length > 0) &&
      // q3.length must be greater than 0
        (this.q3.length > 0) &&
      // q4 must not be blank
        (this.q4 != '') &&
      // q5 must not be blank
        (this.q5 != '')) {
      // If all of the data is valid, then use the $router to move the user to the Secret page.
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


a {
  color: #42b983;
}
</style>
