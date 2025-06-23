import "../admin/Admin.css"
import Content from './layout/Content/Content';
import MySideBar from "./layout/Sidebar/MySideBar";

function AdminPage() {
  return (
    <>
      <div className='app'>
        <MySideBar/>
        <Content />
      </div>
    </>
  )
}

export default AdminPage