import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Layout from '../../pages/Layout'
import { lazy, Suspense } from "react";
import CustomErrorBoundary from '../../ErrorBoundry/ErrorBoundryComponent';


const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'))

function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/details/:coinId' element={

              <Suspense fallback={<div>Loading..</div>}>
                <CoinDetailsPage/>
              </Suspense>

              }/>
        </Route>
      </Routes>
      </CustomErrorBoundary>
  )
}

export default Routing
