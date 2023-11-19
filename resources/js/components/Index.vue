<template lang="ru">
    <div class="container">
        <router-link :to="{name:'post.index'}">Posts</router-link>
        <router-link :to="{name:'post.create'}">Create</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
};
</script>

<style scoped></style>
