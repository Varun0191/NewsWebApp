import { useEffect, useState } from 'react'
import './App.css'
import NewsGrid from './assets/Components/NewsGrid';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {
  const [news, setNews] = useState([]);
  const [apichange, setApiChange] = useState("cricket");
  const [searchQuery, setSearchQuery] = useState('')


  function change(e) {
    setSearchQuery(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    searchQuery ? setApiChange(searchQuery) : setApiChange('android')

  }

  const api = async () => {
    try {
      let response = await fetch(`https://newsapi.org/v2/everything?q=${apichange}&apiKey=4c50b8918ad641c899b77bfded3ad521`)
      let result = await response.json();
      console.log(result);
      setNews(result.articles)
    } catch (error) {
      console.error('Error fetching news:', error)
      setNews([])
    }
  }
  useEffect(() => {
    api()
  }, [apichange])

  // console.log();


  return (

    <>
    <div style={{ backgroundColor: '#94a3b8', minHeight: '100vh' }}>
      <div className="fixed top-0 left-0 right-0 bg-gray-400 p-4 shadow-md flex justify-between z-10 ">
      <div className="text-lg font-bold mr-4">NewsHub</div>
        <form onSubmit={submit} className=''>
          <span className='py-2 m-3 '> <SearchIcon /> <input type='text' className='bg-gray-600 text-black border-none outline-none rounded p-1 mr-3'  placeholder='Eg: Business'  onChange={change} /></span>

          <Button type='submit' variant="contained"   style={{ paddingBottom:'2.3px', fontSize: '0.875rem' , color:"black" , borderBlockColor:"black" , backgroundColor:'gray-600'}}> Search </Button>
          
        </form>
        <nav className="text-black"><a href="https://github.com/Varun0191"> made by <GitHubIcon /></a></nav>
      </div>
      <NewsGrid news={news} />
      </div>
    </>
  )
}

export default App
