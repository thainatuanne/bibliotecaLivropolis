import React, { useState, ReactNode, useEffect } from "react";
import { IBook } from "../books";
import { BookContext } from "./BookContext";
import { v4 as uuidv4 } from "uuid";

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<IBook[]>(() => {
        const storedBooks = localStorage.getItem("books");
        return storedBooks ? JSON.parse(storedBooks) : [];
    });

    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredBooks, setFilteredBooks] = useState<IBook[]>(books); 

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredBooks(books); 
        } else {
            setFilteredBooks(
                books.filter(
                    (book) =>
                        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        book.author.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, books]);

    const addBook = (book: Omit<IBook, "id">) => {
        const newBook: IBook = { ...book, id: uuidv4() };
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    const editBook = (id: string, updatedBook: Partial<IBook>) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, ...updatedBook } : book
            )
        );
    };

    const deleteBook = (id: string) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este livro?");
        if (confirmDelete) {
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        }
    };

    return (
        <BookContext.Provider
            value={{
                books,
                addBook,
                editBook,
                deleteBook,
                searchTerm,
                setSearchTerm,
                filteredBooks,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};
