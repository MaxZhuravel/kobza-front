import { InputGroup, FormControl, Button } from "react-bootstrap"

const SearchForm = ({searchQuery,setSearchQuery}) => {
  return (
    <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Пошук"
          aria-label="Пошук"
          aria-describedby="basic-addon2"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Пошук
        </Button>
    </InputGroup>
  )
}

export default SearchForm