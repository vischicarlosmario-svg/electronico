
import { Navigate, Outlet } from "react-router"


const ProtectorAdmin = ({ children, usuarioLogueado}) => {
 
    if(!usuarioLogueado || usuarioLogueado.role !== "admin") {
        return <Navigate to={"/login"}/>
    }
    return <Outlet></Outlet>
}
export default ProtectorAdmin
