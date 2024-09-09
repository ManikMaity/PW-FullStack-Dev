import { fetchCoinData } from '../../services/fetchCoinData'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import currencyStore from "../../state/store"
import { useState } from 'react';

const CoinTable = () => {

  const {currency} = currencyStore()
  const navigator = useNavigate();


  let [page, setPage] = useState(1);

  const {data, isLoading, isError, error} = useQuery(["coin", page, currency], () => fetchCoinData(page, currency), {
    retry : 2,
    retryDelay : 1000,
    cacheTime : 1000*60*2,
    staleTime : 1000*60*10
  })

  function handleCoinRedirect (id){
      navigator(`/details/${id}`)
  }

  if (isLoading){
    return  (<div className='w-full h-80 grid place-content-center'>
      <span className="loading loading-spinner loading-lg my-auto"></span>
    </div>)
  }
  if (isError){
    return <div>{error.message}</div>
  }



 
  return (
    <div className='my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto'>

      <div className='w-full grid grid-cols-4 text-center bg-slate-900 rounded-t-md justify-between items-center py-4 px-2 font-semibold '>
        <div>
          Coin
        </div>

        <div>
          Price
        </div>

        <div>
          24h Change value
        </div>

        <div>
          Market Cap
        </div>

      </div>

      <div className='w-full grid grid-flow-row gap-4 text-center rounded-b-md py-4 px-2'>
        {data?.map(coin => {
          return (
            <div key={coin.id} onClick={() => handleCoinRedirect(coin.id)} className='w-full items-center justify-center bg-transparent text-white grid grid-cols-4 text-left font-semibold'>
        
              <div className='flex gap-4 items-center text-left'>
                <div className='w-20 h-20  flex items-center'>

                <img src={coin.image} className='w-full' loading='lazy'/>
                </div>
                <div className=''>
                <p>{coin.name}</p>
                <p className='font-thin tracking-widest '>{coin.symbol}</p>
              </div>
              </div>

              

              <div>
                {coin.current_price}
              </div>

              <div>
                {coin.price_change_24h}
              </div>

              <div>
                {coin.market_cap}
              </div>
            </div>
          )
        })}
      </div>

      {data && <div className='flex gap-5'>
        <button disabled={page==1} onClick={() => {
          if (page > 1){
            setPage(page - 1)
          }
          else{
            return;
          }
        }} className='btn btn-active btn-accent'>Previous</button>
        <button onClick={()=>{setPage(page + 1)}}  className='btn btn-active btn-accent'>Next</button>
      </div>}


    </div>
  )
}

export default CoinTable
