import Loading from "./components/loading";
import ImageClassification from "./components/imageClassification";
import Form from "./components/form";
import SearchHistory from "./components/searchHistory";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <section className="top-section">
        <ImageClassification />
        <Form />
      </section>
      <section className="bottom-section">
        <SearchHistory />
      </section>
    </div>
  );
}

export default App;
