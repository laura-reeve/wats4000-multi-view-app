<template>
  <div class="container"> 
    <h1>Welcome to your digital cozy atmosphere!</h1>
    <h2>Click the play button below to hear some soothing music.  We hope you feel cozier soon!</h2>
      <div id="audio-player"><audio controls>
        <!-- <source src="horse.ogg" type="audio/ogg"> -->
        <source v-bind:src="currentMood.audio" type="audio/mpeg">
        Your browser does not support this audio element.
      </audio></div>
    <p>Royalty free music provided by <a href="https://www.bensound.com">Bensound</a></p>  
      <img v-bind:src="currentMood.img" width="100%">
    <button><router-link to="/" id="home-link">Go back Home</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'Atmosphere',
  data () {
    return {
      moods: {
        'fireplace': {
          img: require('../assets/Fireplace.jpg'),
          audio: require('../assets/bensound-tenderness.mp3')
        },
        'cocoa': {
          img: require('../assets/book-and-mug.jpg'),
          audio: require('../assets/bensound-acousticbreeze.mp3')
        },
        'friends': {
          img: require('../assets/friends-and-mugs.jpg'),
          audio: require('../assets/bensound-happiness.mp3')
        },
        'book': {
          img: require('../assets/book-in-bed-with-window.jpg'),
          audio: require('../assets/bensound-november.mp3')
        },
        'kitty': {
          img: require('../assets/Cozy-by-tamaraR-deviantart.jpg'),
          audio: require('../assets/bensound-memories.mp3')
        },
        'puppy': {
          img: require('../assets/puppy-staying-cozy-in-a-towel.jpg'),
          audio: require('../assets/bensound-cute.mp3')
        }
      },
      currentMood: {}
    }  
  },
  created () {
      this.currentMood = this.moods[this.$route.params.mood];
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
#audio-player, p {
  text-align: center;
  color: #faebd7;
}
a {
  color:#faebd7;
}
a:hover {
  color: #c6b26c;
}
a:visited {
  color: brown;
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