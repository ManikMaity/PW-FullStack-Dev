import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinDetails } from '../services/fetchCoinDetails';
import parse from 'html-react-parser';
import currencyStore from "../state/store"

function CoinDetailsPage() {

    const {currency} = currencyStore();

    const {coinId } = useParams();

    const {data, isError, isLoading} = useQuery(["coinDetail", coinId], () => fetchCoinDetails(coinId), {
        cacheTime : 1000*60*2,
        staleTime : 1000*60*10
    })
    useEffect(() => {
        console.log(data);
    }, [data])

    if (isLoading){
        return (<div className='w-full h-80 grid place-content-center'>
            <span className="loading loading-spinner loading-lg my-auto"></span>
          </div>)
    }

    if (isError){
        return <div>Something Went Wrong</div>
    }

  return (
    <div className='w-full flex flex-col md:flex-row p-3'>

        <div className='w-full md:w-1/3 items-center flex flex-col md:border-r-4 md:p-6'>
            <div className='max-w-40'>
                <img src={data?.image?.large} alt="" />
            </div>

            <div className='w-full'>
                <h1 className='my-3 text-3xl font-bold text-center'>{data?.name}</h1>
                <p className='text-wrap text-justify'>{parse(data?.description.en)}</p>
            </div>

            <div className='mt-6 flex flex-col text-center md:flex-row md:text-left justify-between w-full px-4'>
                <h3 className='font-bold text-xl'>Rank: <span className='text-yellow-400'>{data?.market_cap_rank}</span></h3>
                <h3 className='font-bold text-xl'>Current Price: <span className='text-yellow-400'>{data?.market_data?.current_price[currency]}</span></h3>

            </div>

        </div>
        
    </div>
  )
}

export default CoinDetailsPage;
