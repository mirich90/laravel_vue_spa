<template>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <picture><img :src="post.img" :alt="post.title" /></picture>
            </div>

            <div class="card-body">
                <router-link
                    :to="{ name: 'post.show', params: { id: post.id } }"
                >
                    <h2 class="card-title">
                        {{ post.title }}
                    </h2>
                </router-link>

                <time :datetime="post.date">{{ post.date }}</time>

                <p>{{ post.description }}</p>

                <div class="btn-wrapper">
                    <router-link
                        :to="{ name: 'post.edit', params: { id: post.id } }"
                        class="btn"
                    >
                        Редактировать
                    </router-link>

                    <button
                        @click.prevent="deletePost(post.id)"
                        class="btn btn-text"
                    >
                        Удалить
                    </button>
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

<style scoped>
.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 1rem;
    margin: 0;
    padding: 2rem;
    color: var(--text1);
    text-decoration: none;
    background-color: white;
    border-radius: 20px;
    overflow: clip;
}
.card .card-image img {
    width: 100%;
    border-radius: 1rem;
}
.card-body {
    padding: 1rem;
}
.card h2 {
    font-size: 2.4rem;
    line-height: 1.2;
}
.card time {
    color: var(--text2);
    font-size: 1rem;
}
</style>
