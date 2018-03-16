<template>
<div class="container">
<h1>Welcome to your digital cozy atmosphere!</h1>
<h2>Click the play button below to hear some soothing sounds or music.  We hope you feel cozier soon!</h2>
<button><router-link to="/" id="home-link">Go back Home</router-link></button>
</div>
</template>

<script>
export default {
  name: 'Atmosphere',
  data () {
    return {
      
    }  
  },
  methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #a7a566;
  padding: 10px;
  border-radius: 5px;
}
h1, h2 {
  text-align: center;
  color: #faebd7;
  font-family: "Tangerine", Arial, sans-serif;
  font-size: 3em;
  font-weight: normal;
}
h1 {
  font-size: 4em;
  line-height: .5em;
}
button {
  font-size: 1em;
  margin: 10px 10px 40px 10px;
  padding: 5px 15px;
  background-color: white;
  border-radius: 8px;
}
#home-link {
  text-decoration: none;
  font-weight: bold;
  color: brown;
}
</style>