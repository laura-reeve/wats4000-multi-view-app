<template>
    <div class="component">
        <h2>Thanks for completing our survey!  Here are some songs that are awesome!</h2>
        <ul v-for="song in songs">
            <li><a v-bind:href="'https://youtu.be/'+song.url" target="_blank">{{song.group}}: "{{song.title}}"</a></li>
        </ul>
        <router-link to="/">Return to Login page</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Secret',
        data() {
            return {
                songs: [
                    {
                        url: "pBkHHoOIIn8",
                        group: "Portugal. The Man",
                        title: "Feel It Still"
                    }, 
                    {    url: "B9FzVhw8_bY", 
                        group: "The Dead South",
                        title: "In Hell I'll Be In Good Company"
                    }, 
                    {
                        url: "P_SlAzsXa7E",
                        group: "Miike Snow",
                        title: "Ghengis Khan"
                    },
                    {
                        url:"lDeB5sDealI",
                        group: "Paloma Faith",
                        title: "Upside Down"
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
        background: #e8e8e8;
        min-height: 400px;
        padding-left: 20px;
    }
    h2 {
        padding-top: 50px;
    }
    li {
        list-style: none;
    }

</style>