import React, { useState } from "react";
import { Form, Input, Button } from "./style";
import { IBook } from "../../books";

interface BookFormProps {
    onAddBook: (book: Omit<IBook, "id">) => void;
}
export function BookForm({ onAddBook }: BookFormProps) {
    const [form, setForm] = useState({
        title: "",
        author: "",
        year: "",
        genre: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title || !form.author || !form.year || !form.genre || !form.description) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        if (Number(form.year) > new Date().getFullYear()) {
            alert("O ano de publicação não pode ser no futuro.");
            return;
        }

        const newBook = {
            title: form.title,
            author: form.author,
            year: Number(form.year),
            genre: form.genre,
            description: form.description,
            dateAdded: new Date().toISOString(),
        };

        onAddBook(newBook);
        setForm({ title: "", author: "", year: "", genre: "", description: "" });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
            <Input name="author" placeholder="Autor" value={form.author} onChange={handleChange} />
            <Input name="year" placeholder="Ano de Publicação" value={form.year} onChange={handleChange} />
            <Input name="genre" placeholder="Gênero" value={form.genre} onChange={handleChange} />
            <Input name="description" placeholder="Descrição" value={form.description} onChange={handleChange} />
            <Button type="submit">Adicionar Livro</Button>
        </Form>
    );
}
