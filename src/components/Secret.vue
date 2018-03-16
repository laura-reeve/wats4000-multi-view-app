<template>
    <div class="component">
        <h2>Thanks for signing up for our newsletter!  Here are some songs to help you get cozy!</h2>
        <ul v-for="song in songs">
            <li><a v-bind:href="'https://youtu.be/'+song.url" target="_blank">{{song.group}}: "{{song.title}}"</a></li>
        </ul>
        <button><router-link id="home-link" to="/">Return to Home page</router-link></button>
    </div>
</template>

<script>
    export default {
        name: 'Secret',
        data() {
            return {
                songs: [
                    {
                        url: "cNXisvrK1_o",
                        group: "Iron & Wine",
                        title: "Each Coming Night"
                    }, 
                    {    url: "OkyrIRyrRdY", 
                        group: "Jack Johnson",
                        title: "Banana Pancakes"
                    }, 
                    {
                        url: "wCEzoOpG1zQ",
                        group: "Alexi Murdoch",
                        title: "Breathe"
                    },
                    {
                        url:"NhqH-r7Xj0E",
                        group: "Mary Lambert",
                        title: "She Keeps Me Warm"
                    },
                    {
                        url: "dQw4w9WgXcQ", 
                        group: "Mystery Artist",
                        title: "The Best Song Ever!"
                    }
                ]
            }
        }
    }

</script>

<style scoped>
    .component {
        background-color: #a7a566;
        min-height: 400px;
        padding-left: 20px;
        border-radius: 5px;
    }
    h2 {
        padding-top: 50px;
        color: #faebd7;
        font-family: "Tangerine", Arial, sans-serif;
        font-weight: normal;
        font-size: 3em;
        line-height: .5em;
    }
    li {
        list-style: none;
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