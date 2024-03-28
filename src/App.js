import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [cards, setCards] = useState([])

  const onNewCardAdded = (newCard) => {    
    setCards([...cards, newCard])
  }

  return (
    <div className="App">
      <Banner />
      <Form onCardSaved={onNewCardAdded} />
    </div>
  );
}

export default App
