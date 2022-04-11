import api from '../index';

const SUCCESS = 'success';
const OK = 'OK';
const ERROR = 'error';

const getBioByKey = async (key: string) => {
  
    try {
        const response = await api.get(`/authors/${key}`);
        return {
            status: SUCCESS,
            message: OK,
            data: response.data.bio.value ? response.data.bio.value : response.data.bio
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