import axiosInstase from "../hepers/axiosInstance"

export async function fetchCoinDetails (id){
        try{
            const coinData = await axiosInstase.get(`/coins/${id}`);
            return coinData.data;
        }
        catch(err){
            console.log(err);
            return [];
        }
}