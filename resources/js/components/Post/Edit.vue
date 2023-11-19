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
                    @click.prevent="updatePost"
                    class="btn btn-primary"
                    value="update"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Edit",

    mounted() {
        this.getId();
        this.$store.dispatch("getPost", this.id);
    },
    methods: {
        getId() {
            this.id = this.$route.params.id;
        },

        updatePost() {
            this.$store.dispatch("updatePost", this.post);
            this.$router.push({
                name: "post.show",
                params: { id: this.post.id },
            });
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
<style lang=""></style>
