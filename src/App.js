// import logo from './logo.svg';
import  './App.css';
import React,{useState, useEffect} from 'react';
import Jobposts from './components/Jobposts';
import data from './data/data.json';
console.log(data);

function App() {

  const [jobs, setJobs] =useState([]);
  const [filters, setFilters] =useState([]);
  useEffect(()=>{
    setJobs(data);
  }, []);
  const filterFunc = ({role, level, tools, languages}) =>{

    if(filters.length===0){
      return true;
    }

    const tags =[role, level];  
    if (tools){
        tags.push(...tools);
    }
    if(languages){
        tags.push(...languages)


    }
    return tags.some(tag => filters.includes(tag));
  }
  const handleTagClick =(tag)=>{
    if (filters.includes(tag)) return;
    setFilters([filters, tag]);
  }
const handleFilterClick =(clicked) => {
  setFilters(filters.filter((f)=> f !==clicked));
};

const clearFilters=()=>{
  setFilters([])  
};
  const filteredJobs =jobs.filter(filterFunc);

  console.log(jobs);
   return (
  <div className="App">

    <header className='header'>
      <img src="/images/bg-header-desktop.svg" alt="" />
    </header>
    <div className='filter'>
      {filters.length >0 && 
        filters.map(
        (filter) =>( <span onClick={()=> handleFilterClick(filter)}>
          
          {filter}
          
          <span>X</span>
       </span>
      ))}
      <button onClick={clearFilters}>clear</button>
    </div>
    ;
    {
      jobs.length === 0 ?(
        <p>Jobs loading</p>
      ) :(
        filteredJobs.map(job =>(
          <Jobposts 
          job={job} 
          key={job.id}
          handleTagClick={handleTagClick}
          />

        ))
      )
    }
  </div>
   )
  ;
}

export default App;
