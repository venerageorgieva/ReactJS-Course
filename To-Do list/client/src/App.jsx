import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  return(
    <div>
 <Header />
  <main className="main">

 <TodoList />
  </main>


<Footer />
   
   </div>
  )
}

export default App;
