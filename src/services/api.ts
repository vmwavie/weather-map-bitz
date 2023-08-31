import axios from 'axios';
import { useToast } from 'vue-toastify';

const baseURL = "https://api.openweathermap.org/";
const apiKey = "&appid=<token>";

const toast = useToast()

function showToastError(message: string) {
    toast.error(message, 'ERRO!');
}

export const fetchDay = async (cityName: string, stateName: string) => {
    try {
        const getCoordinates = await axios.get(`${baseURL}/data/2.5/weather?q=${cityName},${stateName},Brazil&units=metric&lang=pt_br${apiKey}`);
        const response = await axios.get(`${baseURL}/data/2.5/onecall?lat=${getCoordinates?.data.coord.lat}&lon=${getCoordinates?.data.coord.lon}&units=metric&lang=pt_br${apiKey}`);
        return response?.data;
    } catch (error) {
        showToastError(`Erro no servidor, tente novamente.`);
        throw error;
    }
};

export const fetchDayByCoordinates = async (latitude: number, longitude: number) => {
    try {
        const response = await axios.get(`${baseURL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br${apiKey}`);
        return response.data;
    } catch (error) {
        showToastError(`Erro no servidor, tente novamente.`);
        throw error;
    }
};

export const fetchCityName = async (latitude: number, longitude: number) => {
    try {
        const response = await axios.get(`${baseURL}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&lang=pt_br${apiKey}`);
        return response.data;
    } catch (error) {
        showToastError(`Erro no servidor, tente novamente.`);
        throw error;
    }
};
