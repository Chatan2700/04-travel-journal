import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import data from '../data'

function App() {

  const entryComponent = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      // {...entry} //Spread operator
      />
    )
  })

  return (
    <>
      <div className="container">
        <Header />
        {entryComponent}
      </div>

    </>
  )
}

export default App
