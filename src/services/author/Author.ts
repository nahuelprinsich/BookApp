import api from '../index';

const SUCCESS = 'success';
const OK = 'OK';
const ERROR = 'error';

export interface IAuthor {
    key: string,
    name: string,
    bio?: string
}

export class Author implements IAuthor {
    key: string
    name: string
    bio?: string

    constructor(key: string, name: string, bio?: string) {
        this.key = key,
        this.name = name,
        this.bio = bio
    }

}

const getBioByKey = async (key: string) => {
  
    try {
      const response = await api.get(`/authors/${key}`);
      return {
        status: SUCCESS,
        message: OK,
        data: response.data.bio ? response.data.bio : ''
      }
    } catch(error) {
      throw {
        status: ERROR,
        message: 'Ocurrió un error al traer los datos, intentá nuevamente en unos minutos.',
        error: JSON.stringify(error)
      }
    }
    
  }
  
  export default { getBioByKey }