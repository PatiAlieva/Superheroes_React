import './style/App.css';
import Card from './components/Card.jsx';
import data from './data.json'

function App() {
  return (
    <div className="App">
      {
        data.map((hero) =>
        <Card 
          name={hero.name} 
          universe={hero.universe} 
          alterEgo={hero.alterEgo} 
          typeOfActivity={hero.typeOfActivity} 
          friends={hero.friends} 
          superpower={hero.superpowers} 
          rating={hero.rating}
          url={hero.image}>
        </Card>
        )
      }
    </div>
  );
}

export default App;
