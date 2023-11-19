<template lang="ru">
    <div>
        <div class="w-25">
            <div class="mb-3">
                <input
                    v-model="post.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="title"
                />
            </div>
            <div class="mb-3">
                <input
                    v-model="post.description"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="description"
                />
            </div>
            <div class="mb-3">
                <input
                    v-model="post.text"
                    type="text"
                    class="form-control"
                    id="text"
                    placeholder="text"
                />
            </div>
            <div class="mb-3">
                <input
                    v-model="post.img"
                    type="text"
                    class="form-control"
                    id="img"
                    placeholder="img"
                />
            </div>
            <div class="mb-3">
                <input
                    :disabled="isDisabled"
                    @click.prevent="storePost"
                    class="btn btn-primary"
                    value="create"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Create",

    mounted() {
        this.$store.commit("setPost", {
            title: "",
            description: "",
            text: "",
            img: "",
        });
    },

    methods: {
        storePost() {
            this.$store.dispatch("storePost", this.post);
            this.$router.push({ name: "post.index" });
        },
    },

    computed: {
        ...mapGetters({
            isDisabled: "isDisabled",
            post: "post",
        }),
    },
};
</script>

<style></style>
