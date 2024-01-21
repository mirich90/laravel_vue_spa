<template lang="ru">
    <div class="form container-small">
        <div class="input-wrapper">
            <label>Название</label>
            <input
                v-model="post.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="Введите название статьи..."
            />
        </div>
        <div class="input-wrapper">
            <label>Описание</label>
            <input
                v-model="post.description"
                type="text"
                class="form-control"
                id="description"
                placeholder="Введите описание статьи..."
            />
        </div>
        <div class="input-wrapper">
            <label>Текст</label>
            <input
                v-model="post.text"
                type="text"
                class="form-control"
                id="text"
                placeholder="Введите текст статьи..."
            />
        </div>
        <div class="input-wrapper">
            <label>Картинка</label>
            <input
                v-model="post.img"
                type="text"
                class="form-control"
                id="img"
                placeholder="Введите ссылку на картинку..."
            />
        </div>
        <div class="input-wrapper">
            <button
                :disabled="isDisabled"
                @click.prevent="updatePost"
                class="btn"
            >Редактировать</button>
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
<style scoped>
.form {
    color: var(--text1);
    background-color: white;
    border-radius: 20px;
    padding: 3rem;
}
</style>
