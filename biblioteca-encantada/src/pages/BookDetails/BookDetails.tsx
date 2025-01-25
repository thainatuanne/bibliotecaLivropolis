import { useParams, useNavigate } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";
import { Container } from "./style";
export default function BookDetails() {
    const { id } = useParams<{ id: string }>();
    const { books } = useBooks();
    const navigate = useNavigate();

    // Encontra o livro com o ID correspondente
    const book = books.find((b) => b.id === id);

    if (!book) {
        return <p>Livro não encontrado!</p>;
    }

    return (
        <Container>
            <h1>{book.title}</h1>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Ano de Publicação:</strong> {book.year}</p>
            <p><strong>Gênero:</strong> {book.genre}</p>
            <p><strong>Descrição:</strong> {book.description}</p>
            <p><strong>Adicionado em:</strong> {new Date(book.dateAdded).toLocaleDateString()}</p>
            {/* Botão para voltar */}
            <button onClick={() => navigate(-1)}>Voltar</button>
        </Container>
    );
}
