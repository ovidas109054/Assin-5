import { Suspense, useState } from 'react'
import Nav from './Nav'
import Baner from './Baner'
import Footer from './Footer'
import Cards from './Cards'
import './App.css'

const fetchcarddata = async () =>{
  const res = await fetch('/data.json')
  const data = await res.json()

  return data
}


const CardPromis = fetchcarddata()
function App() {
  

  return (
    <><Nav></Nav>
    <Baner></Baner>
    <main>
      <section className='container mx-auto my-10'>
        <div className='grid grid-cols-4 gap-5'>
          <Suspense fallback = {<h2>Loading...</h2>}>
              <Cards CardPromis = {CardPromis}></Cards> 
          </Suspense>

        </div>
      </section>
    </main>

    <Footer></Footer>
    </>
  )
}

export default App
