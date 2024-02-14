import { Header } from "./componenets/Header/Header";
import { Main } from "./componenets/Main/Main";
import { AuthContextProvider } from "./context/authContext";
import { TokenContextProvider } from "./context/tokenContext";

function App() {
  return (
    <TokenContextProvider >
      <AuthContextProvider>
        <Header />
        <Main />
        <footer />
      </AuthContextProvider>
    </TokenContextProvider>
  );
};

export default App;


