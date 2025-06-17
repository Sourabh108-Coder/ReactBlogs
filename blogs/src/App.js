import './App.css';
import NavBar from './components/NavBar'
import BlogsCard from './components/BlogsCard'
import Pagenation from './components/Pagenation'
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';

import Home from './Pages/Home';
import Tag from './Pages/Tag';
import Category from './Pages/Category';
import Blog from './Pages/Blog';

import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';


function App() {
  const{fetchData}=useContext(AppContext)

  const[searchParams,setSearchParams]=useSearchParams();

  const location=useLocation();

  useEffect(()=>{

    let page=searchParams.get("page") ?? 1;


    if(location.pathname.includes("tags")){

      // const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      const tag=location.pathname.split("/").at(-1);
      fetchData(Number(page),tag);
    }

    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category)
    }

    else{

      fetchData(Number(page),null);
    }


  },[location.pathname,location.search])
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tags/:tagid" element={<Tag/>}/>
        <Route path="/blogs/:blogsid" element={<Blog/>}></Route>
        <Route path="/categories/:categoryid" element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;

