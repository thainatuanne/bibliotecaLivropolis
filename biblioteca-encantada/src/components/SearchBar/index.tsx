import { useBooks } from "../../hooks/useBooks";
import { Input, SearchContainer, FloatingParticles } from "./style";

function SearchBar() {
    const { searchTerm, setSearchTerm } = useBooks();

    return (
        <SearchContainer>
            <FloatingParticles />
            <Input
                type="text"
                placeholder="Pesquise por título ou autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchContainer>
    );
}

export default SearchBar;

