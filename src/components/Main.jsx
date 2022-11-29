function Main({ assets }) {
  return (
    <main>
      <h1 className="main-head">Classic Cheesecake Recipe</h1>
      <div className="main-desc">
        <img src={assets.dots} />
        <p>
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>
      <img src={assets.photo1} className="main-content" />
    </main>
  );
}

export default Main;
