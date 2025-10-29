import './App.css'
import Title from '../src/components/title.jsx'

function App() {
  const site_data = [
    {
      title: "BSIT",
      DESCRIPTION: "This is a very nice website"
    },
    {
      title: "BDS",
      DESCRIPTION: "This is a very nice website"
    },
    {
      title: "Engineering",
      DESCRIPTION: "This is a very nice website"
    }
  ];

  return (
    <div>
    {
      site_data.map(() => {
        return (
        <Title data = {item} />
      )
      })

    }
    </div>
  
)
}

export default App        

