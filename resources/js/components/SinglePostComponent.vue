<template>
    <div class="container mb-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <router-link
                            :to="{ name: 'post.show', params: { id: post.id } }"
                        >
                            <h2 class="card-title">
                                {{ post.title }}
                            </h2>
                        </router-link>
                    </div>

                    <div class="card-body">
                        {{ post.description }}
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
    name: "SinglePostComponent",
    props: ["post", "posts"],
    data() {
        return {};
    },
    methods: {
        deletePost(id) {
            this.$store.dispatch("deletePost", id);
        },
    },
};
</script>

<style></style>
