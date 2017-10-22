<template>
    <div class="component">
        <h2>{{message}}</h2>
        <router-link to="/">Return to Login page</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Secret',
        data() {
            return {
                message: 'You have reached the Secret page!'
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