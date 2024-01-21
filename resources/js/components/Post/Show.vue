<template>
    <div class="container-small">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">
                    {{ post.title }}
                </h2>

                <div class="card-image">
                    <picture><img :src="post.img" :alt="post.title" /></picture>
                </div>

                <div class="card-description">
                    {{ post.description }}
                </div>
            </div>

            <div class="card-body">
                {{ post.text }}
            </div>

            <div class="btn-wrapper">
                <router-link
                    :to="{ name: 'post.edit', params: { id: post.id } }"
                    class="btn btn-outline-success"
                >
                    Редактировать
                </router-link>
                <button
                    @click.prevent="deletePost(post.id)"
                    class="btn btn-outline-danger"
                    value="create"
                >
                    Удалить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    data() {
        return {
            id: null,
        };
    },
    mounted() {
        this.initId();
        this.$store.dispatch("getPost", this.id);
    },
    methods: {
        initId() {
            this.id = this.$route.params.id;
        },

        deletePost(id) {
            this.$store.dispatch("deletePost", this.id);
            this.$router.push({ name: "post.index" });
        },
    },

    computed: {
        post() {
            return this.$store.getters.post;
        },
    },
};
</script>

<style scoped>
.card {
    padding: 2rem 6rem;
    color: var(--text1);
    background-color: white;
    border-radius: 20px;
}
.card .card-image img {
    width: 100%;
    border-radius: 1rem;
}
.card-description {
    background: #eee;
    padding: 1em 2em;
    margin: 1em 0;
    font-weight: 500;
    border-left: 0.5em solid oklch(59% 0.27 303);
}
.card-body {
    margin: 3rem 0;
}
</style>
