import { useBooks } from "../../hooks/useBooks";
import { BookForm } from "../../components/BookForm";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { IBook } from "../../books";
export default function AddBook() {
    const { addBook } = useBooks();
    const navigate = useNavigate();

    const handleAddBook = (book: Omit<IBook, "id">) => {
        console.log("Livro enviado para addBook:", book);
        addBook(book);
        navigate("/");
    };

    return (
        <Container>
            <h1>Adicionar Livro</h1>
            <BookForm onAddBook={handleAddBook} />
            <button onClick={() => navigate(-1)}>Voltar</button>
        </Container>
    );
}