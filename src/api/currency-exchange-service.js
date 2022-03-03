import axios from "axios";

const client = axios.create({
    baseURL: `https://api.fastforex.io`
});

const api_key = `api_key=0f7ad57a74-7523a3a38b-r7uhxg`;

class CurrencyExchangeService {

    getRate = (from, to) => {
        return client.get(`/fetch-one?from=${from}&to=${to}&${api_key}`)
            .then((res) => {
                return (res.data);
            });
    }

    getAllCurrencies = (from) => {
        return client.get(`/fetch-all?from=${from}&${api_key}`)
            .then((res) => {
                return (res.data);
            });
    }
}

export default CurrencyExchangeService;