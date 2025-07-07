import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import { ways } from "./data" 


 
 export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map(way => <WayToTeach title={way.title} description={way.description}/>)}
          </ul>
        </section>

        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button>Подход</Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>

        </section>
      
      </main>
    </div>
  )
}

