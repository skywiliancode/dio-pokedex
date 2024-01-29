
const pokemonList = document.getElementById('pokemonList')
const loudMoreButton = document.getElementById('loudMore')
const limit = 10
const maxRecords = 151
let offset = 0


function loudPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons.map((pokemon) =>
      `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <a href="assets/page/details.html"><span class="name">${pokemon.name}</span></a>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}"">${type}</li>`).join("")}
            </ol >
            
            <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>
      </li >
  `).join("")
    pokemonList.innerHTML += newHTML
  })
}

loudPokemonItens(offset, limit)

loudMoreButton.addEventListener("click", () => {
  offset += limit
  const qtdRecordNextPage = offset + limit
  if (qtdRecordNextPage >= maxRecords) {
    const noLimit = maxRecords - offset
    loudPokemonItens(offset, noLimit)
    loudMoreButton.parentNode.removeChild(loudMoreButton)
  } else {
    loudPokemonItens(offset, limit)
  }
})