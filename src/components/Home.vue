<template>
  <div class="home">
    <h1>Cozy Home Life</h1>
    <h2>Click on a picture below to create a cozy atmosphere on your device!</h2>
    <div id="center">
      <button id="event-click"><router-link onCLick="ga('send','event','newsletter','click','home-to-survey');" id="newsletter" to="/survey">Sign up for our Newsletter</router-link></button>
    </div>
    <div class="grid-container">
        <div class="grid-item">
          <router-link to="/atmosphere/fireplace">
          <img src="../assets/Fireplace-resized.jpg" alt="fireplace" width="100%">
          </router-link>
          </div>
        <div class="grid-item"><img src="../assets/book-and-mug-resized.jpg" alt="book and cococa with blanket" width="100%"></div>
        <div class="grid-item"><img src="../assets/friends-and-mugs-resized.jpg" alt="cheers with mugs" width="100%"></div>
        <div class="grid-item"><img src="../assets/book-in-bed-with-window-resized.jpg" alt="book in bed near a window" width="100%"></div>
        <div class="grid-item"><img src="../assets/Cozy-by-tamaraR-deviantart-resized.jpg" alt="cat near fireplace with fairy" width="100%"></div>
        <div class="grid-item"><img src="../assets/puppy-staying-cozy-in-a-towel-resized.jpg" alt="cute puppy in towel" width="100%"></div>
    </div>
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
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  object-fit: cover;
}
.home {
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
#center {
  text-align: center;
}
#newsletter {
  text-decoration: none;
  font-weight: bold;
  color: brown;
}
</style>
