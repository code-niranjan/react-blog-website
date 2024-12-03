import { Header } from "./components/header/Header"

function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
    <Header/>
    </>
  )
}

export default App
