import api from '../index';
import { Author, IAuthor } from '../author/Author';

const SUCCESS = 'success';
const OK = 'OK';
const ERROR = 'error';

export interface IBook {
    key: string,
    title: string,
    author?: IAuthor,
    publishYear?: Date,
    cover?: string,
    description?: string,
    bio?: string
}

export class Book implements IBook {
    key: string
    title: string
    author?: Author
    publishYear?: Date
    cover?: string
    description?: string
    bio?: string

    constructor(key: string, title: string, author?: Author, publishYear?: Date, cover?: string, description?: string, bio?: string) {
        this.key = key,
        this.title = title,
        this.author = author,
        this.publishYear = publishYear,
        this.cover = cover,
        this.description = description,
        this.bio = bio
    }

}

const searchBooks = async (name: string) => {

  try {
    const response = await api.get(`/search.json?q=${name}`);
    return {
      status: SUCCESS,
      message: OK,
      data: response.data
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }

}

const getBookByName = async (name: string) => {
  
  try {
    const response = await api.get(`/works/${name}`);
    return {
      status: SUCCESS,
      message: OK,
      data: response.data
    }
  } catch(error) {
    throw {
      status: ERROR,
      message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
      error: JSON.stringify(error)
    }
  }
  
}

export default { searchBooks, getBookByName }