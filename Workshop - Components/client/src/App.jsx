import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import UserList from "./components/userList.jsx";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
  <main className="main"> 
     <UserList />
  </main>
      <Footer />
    </div>
  );
}

export default App;
