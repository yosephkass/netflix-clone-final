import "./App.css";
import request from "./Components/request";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      {/* <h1>Netflix Clone</h1> */}
      <Nav />
      <Banner />
      <Row title="Trending" getURL={request.getTrending} />
      <Row
        title="Netflix Originals"
        getURL={request.getNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated Movies" getURL={request.getTopRatedMovies} />
      <Row title="Action Movies" getURL={request.getActionMovies} />
      <Row title="Comedy Movies" getURL={request.getComedyMovies} />
      <Row title="Horror Movies" getURL={request.getHorrorMovies} />
      <Row title="Romance Movies" getURL={request.getRomanceMovies} />
      <Row title="Documentaries" getURL={request.getDocumentaries} />
      <Row title="History Movies" getURL={request.getHistoryMovies} />
    </div>
  );
}

export default App;
