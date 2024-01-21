<template lang="ru">
    <div class="form container-small">
        <h1>Создать статью</h1>
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
                placeholder="Введите ссылка на картинку..."
            />
        </div>
        <div class="input-wrapper">
            <button
                :disabled="isDisabled"
                @click.prevent="storePost"
                class="btn"
            >Создать</button>
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

<style scoped>
.form {
    color: var(--text1);
    background-color: white;
    border-radius: 20px;
    padding: 3rem;
}
</style>
