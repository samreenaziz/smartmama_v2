import "./productDetails.scss";


function productDetails({ selectedProduct }) {
  if (!selectedProduct) {
    return <p>loading...</p>;
  }
  return (
    <main>
      <article className="description">
        <h1 className="description__title"> {selectedProduct.name}</h1>
        <section className="description__details">
          <div className="description__details--display">
            <p className="description__author">By {selectedVideo.link}</p>
          </div>
       </section>

        <p className="description__article-text ">
          {selectedVideo.description}
        </p>
      </article>

    </main>
  );
}

export default VideoDetails;
