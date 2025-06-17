import { createContext, useState } from "react";
import { baseUrl } from "../BaseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();


export default function AppContextProvider({children}){

    const[loading,setloading]=useState(false)

    const[page,setpage]=useState(1)

    const[posts,setposts]=useState([])

    const[TotalPage,SetTotalPage]=useState(null)

    const navigate=useNavigate();

    
    async function fetchData(page,tag=null,category){

        let url=`${baseUrl}?page=${page}`;

        if(tag){
            url+=`&tag=${tag}`;
        }

        if(category){
            url+=`&category=${category}`;
        }

        try {
           setloading(true);

           let fetching=await fetch(url);

           let output=await fetching.json();

           setposts(output.posts);

           SetTotalPage(output.totalPages);

           setpage(output.page);

           setloading(false);
        } 

        catch (error) {
           alert("Please Wait!!") 
        }
    }

    function clickHandler(page){
        
        navigate({search:`?page=${page}`},{ replace: true });

        setpage(page);
    }

    const value={

        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        fetchData,
        clickHandler,
        TotalPage,
        SetTotalPage

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}
