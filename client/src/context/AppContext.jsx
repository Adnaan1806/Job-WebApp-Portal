import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const Appcontext = createContext()

export const AppContextProvider = (props) =>{

  const [searchFiler, setSearchFilter] = useState({
        title:"",
        location:""
  })

  const [isSearched, setIsSearched] = useState(false)
  const [jobs, setJobs] = useState([])

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

  //function to fetch jobdata
  const fetchJobs = async () => {
      setJobs(jobsData)
  }

  useEffect(() => {
    fetchJobs()
  },[])

    const value = {
        searchFiler,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin,
        setShowRecruiterLogin
    }

    return (<Appcontext.Provider value={value}>
        {props.children}
    </Appcontext.Provider>)
}