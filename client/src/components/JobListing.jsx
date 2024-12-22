import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext';
import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {

const { searchFiler, isSearched, setSearchFilter } = useContext(Appcontext);

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
        {/* sidebar */}
        
        <div className='w-full lg:w-1/4 bg-white px-4'>
            {/* search filter from hero component */}
            {
               isSearched && (searchFiler.title !== "" || searchFiler.location !== "") && (
                   <>
                     <h3 className='font-medium text-lg mb-4'>Search Results</h3>
                     <div className='mb-4 text-gray-600'>
                        {searchFiler.title && (
                            <span className='inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                                {searchFiler.title}
                                <img onClick={e => setSearchFilter(prev => ({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                        {searchFiler.location && (
                            <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded'>
                                {searchFiler.location}
                                <img onClick={e => setSearchFilter(prev => ({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                     </div>
                   </>
               )
            }
            {/* job type filter */}

              <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-1'>Search by Categories</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobCategories.map((category,index) => (
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox" name="" id="" />
                                {category}
                            </li>
                        ))
                    }
                </ul>
              </div>

              {/* job location filter */}

              <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4 pt-14'>Search by Locations</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobLocations.map((location,index) => (
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox" name="" id="" />
                                {location}
                            </li>
                        ))
                    }
                </ul>
              </div>

        </div>

        {/* job listing */}

        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8'>Get your desired job from top companies</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
               {jobsData.map((job,index) => (
                <JobCard key={index} job={job} />
               ))}
            </div>

        </section>

    </div>
  )
}

export default JobListing