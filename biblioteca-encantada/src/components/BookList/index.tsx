import { IBook } from "../../books";
import { ListWrapper } from "./style";
import { useNavigate } from "react-router-dom";
interface BookListProps {
    books: IBook[];
    onDeleteBook: (id: string) => void;
}
export function BookList({ books, onDeleteBook }: BookListProps) {
    const navigate = useNavigate();

    if (books.length === 0) {
        return <p>Nenhum livro cadastrado.</p>;
    }

    return (
        <ListWrapper>
            {books.map((book) => (
                <article key={book.id}>
                    <h3>{book.title}</h3>
                    <p><strong>Autor:</strong> {book.author}</p>
                    <p><strong>Ano de Publicação:</strong> {book.year}</p>
                    <button onClick={() => navigate(`/book/${book.id}`)}>Ver Detalhes</button>
                    <button onClick={() => navigate(`/edit/${book.id}`)}>Editar</button>
                    <button onClick={() => onDeleteBook(book.id)}>Excluir</button>
                </article>
            ))}
        </ListWrapper>
    );
}