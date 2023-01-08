export const store = {
    state: {
        questions: []
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
        }
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions
        }
    },
    actions: {
        async loadQuestions(ctx) {
            return await fetch('/db.json')
                .then(r => r.json())
                .then(r => ctx.commit('setQuestions', r))
                .then(() => true)
        }
    }
}