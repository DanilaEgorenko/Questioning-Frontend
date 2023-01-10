export const store = {
    state: {
        questions: [],
        reviews: {},
        isLogin: true
    },
    getters: {
        getQuestionById: state => id => state.questions.find(q => q.id == id),
        getQuestionByProfile: state => author => state.questions.filter(q => q.author == author),
        getQuestions: state => input => {
            if (!input) return state.questions
            return state.questions.filter(({ title }) => title.toLowerCase().includes(input))
        },
        getSorted: (state, getters) => (type, questions, searchInput) => {
            if (type === 'default') return getters.getQuestions(searchInput)
            if (type === 'A') return [...questions].sort((a, b) => a.title > b.title ? 1 : -1)
            if (type === 'Z') return [...questions].sort((a, b) => b.title > a.title ? 1 : -1)
        },
        getFiltered: (state, getters) => (edited, questions, searchInput) => {
            return edited ? [...questions].filter(({ edited_at }) => edited_at) : getters.getQuestions(searchInput)
        },
        isReviewed: state => id => Boolean(state.reviews[id]),
        isLogin: state => state.isLogin
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions
        },
        setReview(state, { id, reviewText }) {
            state.reviews[id] = reviewText
        },
        setLogin(state) {
            state.isLogin = !state.isLogin
        }
    },
    actions: {
        async loadQuestions(ctx) {
            return await fetch('/db.json')
                .then(r => r.json())
                .then(r => ctx.commit('setQuestions', r))
                .then(() => true)
        },
        addReview(ctx, review) {
            ctx.commit('setReview', review)
        },
        login(ctx) {
            ctx.commit('setLogin')
        }
    }
}