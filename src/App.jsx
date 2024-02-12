import { Header } from "./componenets/Header/Header";
import { Main } from "./componenets/Main/Main";
import { useToken } from "./hooks/useToken";

function App() {
  const [token] = useToken('');
  console.log('token : ', token)

  return (
    <>
      <Header token={token} />
      <Main />
      <footer />
    </>
  );
}

export default App;


