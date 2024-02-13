import { Header } from "./componenets/Header/Header";
import { Main } from "./componenets/Main/Main";
import { tokenContext } from "./context/tokenContext";
import { useToken } from "./hooks/useToken";

function App() {
  const [token, delToken] = useToken('');
  // console.log('token : ', token);
  const { Provider } = tokenContext;

  return (
    <Provider value={{ token, delToken }}>
      <Header />
      <Main />
      <footer />
    </Provider>
  );
}

export default App;


