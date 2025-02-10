import React, {useEffect,useState} from 'react'

// const ExUseEffect = () => {
//     const[count , setCount]=useState(0);
//     useEffect(()=>{
//         document.title = "MRU";
//         setTimeout(()=>{
//             setCount(1000);
//         },4000)
//     })
//   return (
//     <div>ExUseEffect

//         <h1>{count}</h1>
//     </div>
//   )
// }

const ExUseEffect = () => {

    const[users, setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data=>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    } , []); 
    
    return(
        <div>ExUseEffect
            {
                users.map((users,i)=>{
                    return(
                        <>
                        <h1>{users.name}</h1>
                        <h3>{users.email}</h3>
                    
                        </>

                    )
                })
            }

        </div>
    )

    
}


export default ExUseEffect

