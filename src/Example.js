// import React, { useState,useEffect } from 'react'
// import Loading from './Loading'
// import Tours from './Tours'

// function Example() {
// const [loading,setLoading]= useState(true);
// const [tours,setTours]=useState([]);
// const removeTour =(id)=>{
//   const filterState = tours.filter((tour)=>tour.id !==id);
//   setTours(filterState);
// }
//   useEffect (()  => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(response => response.json())
// .then(json => setTours(json))
// setLoading(false);

// },[])


// if(loading){  
//     return(
//       <div>
//       <Loading />
//       </div>
//     );
//   }
//   if(tours.length ===0){
//     return(
//     <div>
//       <h2>no tour left</h2>
//       <button >refresh</button>
//     </div>);
//   }
//   return (
//     <div>
//     <Tours tours={tours} removeTour={removeTour} />
//     </div>
//   );
// }
// export default Example;
