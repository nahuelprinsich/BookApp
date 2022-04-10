import api from '../index';
import { Author, IAuthor } from '../author/Author';

const SUCCESS = 'success';
const OK = 'OK';
const ERROR = 'error';

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

const searchBooks = async (params) => {

  try {
    const response = await api.get(`/search.json?q=${params.name}&page=${params.page}`);
    let books = [];
    if(response.data.docs.length > 0){
      books = response.data.docs.map((book: any) => {
        return mapBook(book)
      });
    }
    return {
      status: SUCCESS,
      message: OK,
      data: books
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }

}

const getDescriptionByKey = async (key: string) => {
  
  try {
    const response = await api.get(key);
    return {
      status: SUCCESS,
      message: OK,
      data: response.data.description.value ? response.data.description.value : response.data.description
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }
  
}

const mapBook = (data: any) => {

  const author = new Author(
    data.author_key ? data.author_key.shift() : 'not determined',
    data.author_name ? data.author_name.shift() : 'not determined'
  );

  const book = new Book(
    data.key,
    data.title,
    author,
    data.first_publish_year,
    data.isbn ? data.isbn.pop() : null
  ); 

  return book;

}

export default { searchBooks, getDescriptionByKey }