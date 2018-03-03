<template>
    <div class="component">
        <h2>Thanks for signing up for our newsletter!  Here are some songs to help you get cozy!</h2>
        <ul v-for="song in songs">
            <li><a v-bind:href="'https://youtu.be/'+song.url" target="_blank">{{song.group}}: "{{song.title}}"</a></li>
        </ul>
        <router-link id="home-link" to="/">Return to Home page</router-link>
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
        background: #f1efef;
        min-height: 400px;
        padding-left: 20px;
    }
    h2 {
        padding-top: 50px;
        color: #ca401d;
    }
    li {
        list-style: none;
    }
    li:last-of-type {
        margin-bottom: 10px;
    }

</style>