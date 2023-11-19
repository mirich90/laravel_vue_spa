const state = {
    post: {},
    posts: [],
};

const getters = {
    post: (state) => state.post,
    posts: (state) => state.posts,
    isDisabled: () =>
        state.post.title === "" ||
        state.post.description === "" ||
        state.post.text === "" ||
        state.post.img === "",
};

const actions = {
    getPost({ commit }, id) {
        axios.get(`/api/post/${id}`).then((res) => {
            commit("setPost", res.data.data);
        });
    },
    getPosts({ commit }) {
        axios.get("/api/post").then((res) => {
            commit("setPosts", res.data.data);
        });
    },
    deletePost({ dispatch }, id) {
        axios.delete(`/api/post/${id}`).then((res) => {
            dispatch("getPosts");
        });
    },
    updatePost({}, data) {
        axios.patch(`/api/post/${data.id}`, data).then((res) => {});
    },
    storePost({}, data) {
        axios
            .post("/api/post", data)
            .then((res) => {})
            .catch((err) => {
                console.log(err);
            });
    },
};

const mutations = {
    setPost(state, post) {
        state.post = post;
    },
    setPosts(state, posts) {
        state.posts = posts;
    },
};

export default {
    state,
    mutations,
    getters,
    actions,
};
