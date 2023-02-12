import { SearchFormContainer, SearchFormHeader } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        Publicações
        <span>6 publicações</span>
      </SearchFormHeader>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
