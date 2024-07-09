import Search from "./Search.jsx";
import UserListTable from "./UserListTable.jsx";
const UserList = () =>{
    return (
        <section className="card users-container">
       <Search />

       <UserListTable />

       <button className="btn-add btn">Add new user</button>

        </section>
    )
}

export default UserList;