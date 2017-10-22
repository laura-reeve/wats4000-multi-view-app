<template>
    <div class="component">
        <h2><a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">{{message}}</a></h2>
        <router-link to="/">Return to Login page</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Secret',
        data() {
            return {
                message: 'Click here to claim your prize!'
            }
        }
    }

</script>

<style scoped>
    .component {
        background: #e8e8e8;
        min-height: 400px;
        text-align: center;
    }
    h2 {
        padding-top: 50px;
    }
</style>