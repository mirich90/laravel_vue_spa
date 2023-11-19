<template>
    <div>
        index
        <div v-for="post in posts">
            <SinglePostComponent :post="post" :posts.sync="posts" />
        </div>
    </div>
</template>

<script>
import SinglePostComponent from "../SinglePostComponent";

export default {
    name: "Index",

    data() {
        return {
            editPostId: null,
        };
    },

    components: {
        SinglePostComponent,
    },

    mounted() {
        this.$store.dispatch("getPosts");
    },

    computed: {
        posts() {
            return this.$store.getters.posts;
        },
    },
};
</script>

<style></style>
