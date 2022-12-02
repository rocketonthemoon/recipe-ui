function Ingredients() {
  return (
    <div className="items">
      <h2>Ingredients</h2>
      <div className="item item-1">
        <div className="name">Graham Cracker Crust</div>
        <div className="steps">
          <div className="step">
            <input type="checkbox" className="rectangle"></input>
            <div className="procedure">
              1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{" "}
              (about 10 full sheet graham crackers)
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>
            <div className="procedure">
              5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>
            <div className="procedure">
              1/4 cup (50g) <strong>granulated sugar</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="item item-2">
        <div className="name">Cheesecake</div>
        <div className="steps">
          <div className="step">
            <input type="checkbox" className="rectangle"></input>
            <div className="procedure">
              four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>,
              softened to room temperature
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              1 cup (200g) <strong>granulated sugar</strong>
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              1 cup (240g) full-fat <strong>sour cream</strong>, at room
              temperature
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              1 teaspoon <strong>pure vanilla extract</strong>
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              2 teaspoons <strong>fresh lemon juice</strong> (optional, but
              recommended)
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              3 large <strong>eggs</strong>, at room temperature
            </div>
          </div>

          <div className="step">
            <input type="checkbox" className="rectangle"></input>{" "}
            <div className="procedure">
              topping suggestions:{" "}
              <em>
                salted caramel, lemon curd, strawberry topping, chocolate
                ganache, red wine chocolate ganache, fresh fruit, whipped cream,
                or raspberry sauce
              </em>{" "}
              (recipe in notes)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
