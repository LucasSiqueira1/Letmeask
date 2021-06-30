//rotas do react
import { NewHome } from "./pages/NewHome";

//pages
import { Home } from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom'

//context
import { AuthContextProvider } from './context/AuthContext'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewHome} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
