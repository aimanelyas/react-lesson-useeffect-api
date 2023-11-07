import './App.css';
import Axios from "axios";
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home} from "./pages/Home";
import { Developers} from "./pages/Developers";
import { Funny} from "./pages/Funny";
import { Family} from "./pages/Family";
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';

export const AppContext = createContext();

// // Example 1
// function App() {
// // // common ways to use fetch()
// //   fetch("https://catfact.ninja/fact")
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(data);
// //   });

// const [catFact, setCatFact] = useState("");

// const fetchCatFact = () => {
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//   });
// };

// // use Axios to do fetch()
// useEffect(() => {
//   fetchCatFact()
// }, []);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}> Generate Cat Fact</button>
//     <p> {catFact}</p>
//     </div>
//   );
// }

// // Example 2
// function App() {

//   const [name, setName] = useState("");
//   const [predictedAge, setPredictedAge] = useState(null);
  
//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setPredictedAge(res.data);
//     });
//   };
  
//     return (
//       <div className="App">
//         <input 
//         placeholder="Ex. Aiman..." 
//         onChange={(event) => {
//           setName(event.target.value)
//         }}/>
//         <button onClick={fetchData}> Predict Age</button>
// {/* put ? before .properties when define state to null */}
//         <h1> name: {predictedAge?.name}</h1>
//         <h1> Predicted Age: {predictedAge?.age}</h1>
//         <h1> Count: {predictedAge?.count}</h1>
//       </div>
//     );
//   }

// Exercise
function App() {

  const [excuse, setExcuse] = useState("");
  const [username, setUsername] = useState("Aiman Elyas");
  
  const fetchData = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };
  
    return (
      <div className="App">
        <AppContext.Provider value={{ username, setUsername, fetchData, excuse}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/family" element={<Family category={"family"}/>} />
              <Route path="/funny" element={<Funny category={"funny"}/>} />
              <Route path="/developers" element={<Developers category={"developers"}/>} />
              <Route path="*" element={<h1> Page Not Found</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    );
  }

export default App;
