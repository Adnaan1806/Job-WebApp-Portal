import { createContext, useState } from "react";

export const Appcontext = createContext()

export const AppContextProvider = (props) =>{

  const [searchFiler, setSearchFilter] = useState({
        title:"",
        location:""
  })

  const [isSearched, setIsSearched] = useState(false)

    const value = {
        searchFiler,
        setSearchFilter,
        isSearched,
        setIsSearched
    }

    return (<Appcontext.Provider value={value}>
        {props.children}
    </Appcontext.Provider>)
}