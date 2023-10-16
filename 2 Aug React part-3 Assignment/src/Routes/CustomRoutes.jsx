import { Routes, Route } from "react-router-dom"
import ImageList from "../components/ImageList/ImageList"
import ImageDetail from "../components/ImageDetail/ImageDetail"

function CustomRoutes(){
return(
    <>
        <Routes>
            <Route path="/" element={<ImageList />} />
            <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
    </>
)
}

export default CustomRoutes