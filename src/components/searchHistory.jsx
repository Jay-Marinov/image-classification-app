import { useGlobalContext } from "../context";

const SearchHistory = () => {
  const { history, setImgURL } = useGlobalContext();
  return (
    history.length > 0 && (
      <section className="searchHistory-section">
        <h3>Search history</h3>
        <div className="underline-searchHistory"></div>
        <div className="searchHistory-div row">
          {history.map((img, index) => {
            return (
              <div key={index} className="col s12 m4 l3 xl2">
                <img
                  className="responsive-img"
                  src={img}
                  alt="Image"
                  onClick={() => {
                    setImgURL(img);
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default SearchHistory;
