<template lang="ru">
    <div>
        <nav class="navbar">
            <router-link :to="{name:'post.index'}">Главная</router-link>
            <router-link :to="{name:'post.create'}">Создать статью</router-link>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
};
</script>

<style scoped>
.navbar {
    padding: 1rem 2rem;
    font-size: 1.6rem;
}
.navbar > * {
    margin-right: 2rem;
}
.navbar > *:hover {
    text-decoration: underline;
}
</style>
