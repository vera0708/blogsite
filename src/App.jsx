import { Header } from "./componenets/Header/Header";
import { Main } from "./componenets/Main/Main";
import { AuthContextProvider } from "./context/authContext";
import { PostsContextProvider } from "./context/postsContext";
import { TokenContextProvider } from "./context/tokenContext";

function App() {
  return (
    <TokenContextProvider >
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
          <footer />
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
};

export default App;


