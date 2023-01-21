import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
const navigate=useNavigate()
    const data =JSON.parse(localStorage.getItem('datakey'))

useEffect(()=>{

if(!data){
navigate('/')
}else if(data){
    navigate('/dasboard')

}


},[data])

return(
    <props.Component/>
)
}
export default ProtectedRoute;
