import "./analysis.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import pic1 from "../../graphs/Graph1.png"
import pic2 from "../../graphs/Graph2.png"
import pic3 from "../../graphs/Graph3.png"
import pic4 from "../../graphs/Graph5.png"


const Analysis = () => {
  return (
    <div className="analysis">
        <Sidebar/>
        <div className="analysis-container">
            <Navbar/>
            <table className="table">
                <tr className="table-row">
                    <td>
                        <img src={pic1} alt="" className="img"/>
                    </td>
                    <td>
                        <img src={pic2} alt="" className="second-img"/>
                    </td>
                </tr>
                <tr className="table-row">
                    <td>
                        <img src={pic3} alt="" className="img"/>
                    </td>
                    <td>
                        <img src={pic4} alt="" className="img"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Analysis
