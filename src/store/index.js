export const store = {
    state: {
        questions: []
    },
    getters: {
        getQuestions: state => state.questions,
        getQuestionById: state => id => state.questions.find(q => q.id == id),
        getQuestionByProfile: state => author => state.questions.filter(q => q.author == author)
    },
    mutations: {
        setQuestions(state, questions) {
            state.questions = questions
        }
    },
    actions: {
        async loadQuestions(ctx) {
            const questions = await fetch('/db.json').then(r => r.json())
            if (questions) ctx.commit('setQuestions', questions)
        }
    }
}