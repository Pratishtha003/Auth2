// import React,{useEffect} from 'react'
// import axios from 'axios';
// import Layout from '../components/Layout';
// const HomePage = () => {
//   const [userData, setUserData] = useState(null);
//   const getUserData= async ()=>{
//     try{
//       const res = await axios.post('/api/v1/user/getUserData',{},{
//         headers:{
//           Authorization:"Bearer" + localStorage.getItem("token"),
//         }
//       })
//         setUserData(res.data.data);
//     }catch(error){
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     getUserData()
//   },[]);
//   return (
//     <Layout>
//       <h1>Home page</h1>
//     </Layout>
//   )
// }

// export default HomePage


import React,{useEffect} from 'react'
import axios from 'axios';
import Layout from '../components/Layout';
const HomePage = () => {
  const getUserData= async ()=>{
    try{
      const res = await axios.post('/api/v1/user/getUserData',{},{
        headers:{
          Authorization:"Bearer" + localStorage.getItem("token"),
        }
      })
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserData()
  },[])
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  )
}

export default HomePage
