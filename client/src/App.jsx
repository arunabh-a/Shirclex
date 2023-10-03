import Canvas from "./canvas"
import Editor from "./pages/editor"
import Home from "./pages/home"






function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Editor /> 
      
    </main>
  )
}

export default App
