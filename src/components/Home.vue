<template>
  <div class="home">
    <h1>Cozy Home Life</h1>
    <h2>Everything you need to make your life more cozy</h2>
    <div id="center">
      <button id="event-click"><router-link onCLick="ga('send','event','newsletter','click','home-to-survey');" id="newsletter" to="/survey">Sign up for our Newsletter</router-link></button>
    </div>
    <carousel>
      <slide>
        <img src="../assets/Fireplace.jpg" width="450px">
      </slide>
      <slide>
        <img src="../assets/book-and-mug.jpg" width="450px">
      </slide>
      <slide>
        <img src="../assets/friends-and-mugs.jpg" width="450px">
      </slide>
      <slide>
        <img src="../assets/book-in-bed-with-window.jpg" width="450px">
      </slide>
      <slide>
        <img src="../assets/Cozy-by-tamaraR-deviantart.jpg" width="450px">
      </slide>
      <slide>
        <img src="../assets/puppy-staying-cozy-in-a-towel.jpg" width="450px">
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
h1, h2 {
  text-align: center;
  color: #ca401d;
}
button {
  margin: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
}
#center {
  text-align: center;
}
#newsletter {
  text-decoration: none;
  font-weight: bold;
  color: orangered;
}
</style>
