import { Author, IAuthor } from "./"

export interface IBook {
    key: string,
    title: string,
    author: IAuthor,
    publishYear: number,
    isbn: number,
    cover?: string,
    description?: string
}

export class Book implements IBook {
    key: string
    title: string
    author: Author
    publishYear: number
    isbn: number
    cover?: string
    description?: string

    constructor(key: string, title: string, author: Author, publishYear: number, isbn: number, cover?: string, description?: string) {
        this.key = key,
        this.title = title,
        this.author = author,
        this.publishYear = publishYear,
        this.isbn = isbn,
        this.cover = cover,
        this.description = description
    }

}