import './App.css'
import { gql, useQuery } from "@apollo/client"

const Dogs = gql`
  query Assets {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`;

function App() {
  // console.log(Dogs);
  // console.log(useQuery(Dogs));
  const { data, loading, error } = useQuery(Dogs);

  if(loading) return "loading...";
  if(error) return `error!!${error}`;

  return (
    <>
      <h1>GraphQL & React</h1>
      <div className="dogsContainer">
        {data.dogs.map((dog) => (
          <div key={dog.id}>
            <div className="dogCard">
              <img src={dog.thumbnail.url} />
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
