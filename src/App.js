import { React } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Header />
        <Container>
          <Home />
        </Container>
      <Footer />
    </div>
  );
}

export default App;
