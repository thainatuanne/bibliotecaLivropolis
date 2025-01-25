import { createContext } from "react";
import { IBook } from "../books";

export interface BookContextType {
    books: IBook[];
    filteredBooks: IBook[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    addBook: (book: Omit<IBook, "id">) => void;
    editBook: (id: string, updatedBook: Partial<IBook>) => void;
    deleteBook: (id: string) => void;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);
