<template>
    <div class="container mb-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">
                            {{ post.title }}
                        </h2>

                        <div class="card-title">
                            {{ post.description }}
                        </div>
                    </div>

                    <div class="card-body">
                        {{ post.text }}
                    </div>

                    <div class="card-footer bg-transparent">
                        <router-link
                            :to="{ name: 'post.edit', params: { id: post.id } }"
                            class="btn btn-outline-success"
                        >
                            edit
                        </router-link>
                        <button
                            @click.prevent="deletePost(post.id)"
                            class="btn btn-outline-danger"
                            value="create"
                        >
                            delete
                        </button>
                    </div>
                </div>
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

<style lang=""></style>
