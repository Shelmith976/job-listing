import React from 'react';

const Jobposts =({ 
    job: {
id,
company,
logo,
update,
featured,
position,
role,
level,
postedAt,
contract,
location,
languages,
tools,
    },
    handleTagClick,


}) =>{


    const tags =[role, level];  
    if (tools){
        tags.push(...tools);
    }
    if(languages){
        tags.push(...languages)


    }


return (

    <div className='box'>
    <div>
        <img src={logo} alt="" />
    </div>
    <div>
        <h3>{company}
        {update && (<span>NEW</span>)}
        {featured && (<span>Featured</span>)}
        </h3>
        <h2>{position}</h2>
<p>{postedAt} . {contract} . {location}</p>
    </div>
    <div className='tags'>   
{
tags ?(
tags.map(tag =>(
        <span onClick={()=> handleTagClick(tag)} className='lang'>{tag}</span>
    ))
): ('')
}

</div>

</div>
 );

};

 
{
    // tools ?(
        // tools.map(tool =>(
                // <span>{tool}</span>
            // ))
        // ): ('')
}
{/* { */}
    {/* role ?( */}
        {/* role.map(tool =>( */}
                {/* <span>{role}</span> */}
            {/* )) */}
        {/* ): ('') */}
{/* } */}
{/* { */}
    {/* level ?( */}
        {/* level.map(tool =>( */}
                {/* <span>{level}</span> */}
            {/* )) */}
        {/* ): ('') */}
{/* } */}
       {/* <h1 className='heads'>{props.job.company}</h1>  */}
       {/* <p>welcome </p> */}

    


export default Jobposts;