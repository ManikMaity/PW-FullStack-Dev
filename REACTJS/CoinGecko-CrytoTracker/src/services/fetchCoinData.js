import axiosInstase from '../hepers/axiosInstance';

export async function fetchCoinData (page, currency = "usd"){
    const perPage = 20;
    try{
        const respose = await axiosInstase.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        // console.log(respose);
        return respose.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}