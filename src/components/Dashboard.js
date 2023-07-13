import {Router, Routes, Route} from "react-router-dom"

function Dashboard({results}) {

return(
  <div className="Dashboard">
   <h1 className='text-center mb-3 mt-3'>Products dashborad</h1>
      <div className="container">
        <div className='row s-30'>
          {results}
        </div>
      </div>
  </div>
  )
}
export default Dashboard;