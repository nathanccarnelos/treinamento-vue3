import { ref } from 'vue'

export default function personagemUtils () {
  const personagens = ref([])

  function addToPersonagens(personagem) {
    personagens.value.push(personagem)
  }


  return {
    personagens,
    addToPersonagens
  }
}
