const personagemUtils = {
  data() {
    return {
      personagens: []
    }
  },
  methods: {
    addToPersonagens(personagem) {
      this.personagens.push(personagem)
    }
  }
}
export default personagemUtils
