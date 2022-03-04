import axios from "axios";

const client = axios.create({
    baseURL: `https://api.fastforex.io`
});

const api_key = `api_key=0f7ad57a74-7523a3a38b-r7uhxg`;

class CurrencyExchangeService {

    async getRate(from, to) {
        return await client.get(`/fetch-one?from=${from}&to=${to}&${api_key}`)
            .then((res) => {
                return (res.data);
            }).catch(({ response }) => {
                alert(response.data.error);
            });
    }

    async getAllCurrencies(from) {
        return await client.get(`/fetch-all?from=${from}&${api_key}`)
            .then((res) => {
                return (res.data);
            }).catch(({ response }) => {
                alert(response.data.error);
            });
    }

    async getMultiCurrencyRates(from,to) {
        return await client.get(`/fetch-multi?from=${from}&to=${to}&${api_key}`)
            .then((res) => {
                return (res.data);
            }).catch(({ response }) => {
                alert(response.data.error);
            });
    }
}

export default CurrencyExchangeService;