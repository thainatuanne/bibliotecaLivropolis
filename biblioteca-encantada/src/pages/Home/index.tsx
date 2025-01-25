import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BookList } from "../../components/BookList";
import { FormWrapper, Container } from "./style";
import { useBooks } from "../../hooks/useBooks";
import { useNavigate } from "react-router-dom";

function Home() {
    const { filteredBooks, deleteBook } = useBooks();
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <FormWrapper>
                <Container>
                    <div>
                        <h1>Biblioteca de Livros Mágicos</h1>
                        <button onClick={() => navigate("/add")}>Adicionar Livro</button>
                    </div>

                    <BookList books={filteredBooks} onDeleteBook={deleteBook} />
                </Container>
            </FormWrapper>

            <Footer />
        </>
    );
}

export default Home;