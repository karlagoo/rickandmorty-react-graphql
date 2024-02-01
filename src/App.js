import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from "@apollo/client";
import GetAllCharacters from "./components/GetAllCharacters.js";


const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
})

function App(){
  return (
    <ApolloClient client={client}><GetAllCharacters /></ApolloClient>
  )
}


export default App;
