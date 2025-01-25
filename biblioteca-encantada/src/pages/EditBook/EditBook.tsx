import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";
import { IBook } from "../../books";
import { Form, Input, Button } from "./style";

export default function EditBook() {
    const { books, editBook } = useBooks();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [form, setForm] = useState<Omit<IBook, "id" | "dateAdded">>({
        title: "",
        author: "",
        year: new Date().getFullYear(),
        genre: "",
        description: "",
    });

    useEffect(() => {
        const bookToEdit = books.find((book) => book.id === id);
        if (bookToEdit) {
            setForm({
                title: bookToEdit.title,
                author: bookToEdit.author,
                year: bookToEdit.year,
                genre: bookToEdit.genre,
                description: bookToEdit.description,
            });
        }
    }, [id, books]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        editBook(id!, form);
        navigate("/");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Editar Livro</h1>
            <Input
                name="title"
                placeholder="Título"
                value={form.title}
                onChange={handleChange}
            />
            <Input
                name="author"
                placeholder="Autor"
                value={form.author}
                onChange={handleChange}
            />
            <Input
                name="year"
                type="number"
                placeholder="Ano de Publicação"
                value={form.year}
                onChange={handleChange}
            />
            <Input
                name="genre"
                placeholder="Gênero"
                value={form.genre}
                onChange={handleChange}
            />
            <Input
                name="description"
                placeholder="Descrição"
                value={form.description}
                onChange={handleChange}
            />
            <Button type="submit">Salvar Alterações</Button>
            <Button type="button" onClick={() => navigate(-1)}>
                Cancelar
            </Button>
        </Form>
    );
}
