import { Wrapper, Container, MagicParticles } from "./style";
import { FaBookOpen } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";

function Header() {
    return (
        <Wrapper>
            <Container>
                <MagicParticles />
                <FaBookOpen />
                <h1>Livrópolis</h1>
                <SearchBar /> 
            </Container>
        </Wrapper>
    );
}

export default Header;
