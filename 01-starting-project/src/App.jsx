import reactImg from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Core", "Crucial", "Fundamental"];

function genRandomInt(max){
  return Math.floor(Math.random() * max+1);
}

function MyHeader() {
  const descriptions = reactDescriptions[genRandomInt(2)]
  return(<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {descriptions} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}

function CoreConcepts({image, title, description}) {

  return (
    <li>
      <img src = {image} alt ={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <MyHeader/> 
      <main>
        <section id ="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
