import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { App , Animals} from './app'
import Default from './Default'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Default children={<App name="Tim" age={70}></App>}></Default>}></Route>
        <Route path="/Animals" element={<Default children={<Animals></Animals>}></Default>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router