import { GiKnifeFork } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

function Stats() {
  return (
    <div className="stats">
      <div className="stat yield">
        <GiKnifeFork style={{ color: "#f2994a", fontSize: "30px" }} />
        <div>
          <h3>Yields</h3>
          <p>12 servings</p>
        </div>
      </div>
      <div className="stat times">
        <div className="prep-time time">
          <AiOutlineClockCircle style={{ fontSize: "30px" }} />
          <div>
            <h3>PREP TIME</h3>
            <p>45 minutes</p>
          </div>
        </div>

        <div className="cook-time time">
          <AiOutlineClockCircle style={{ fontSize: "30px" }} />
          <div>
            <h3>COOK TIME</h3>
            <p>1 hour</p>
          </div>
        </div>

        <div className="total-time time">
          <AiOutlineClockCircle style={{ fontSize: "30px" }} />
          <div>
            <h3>TOTAL TIME</h3>
            <p>7,75 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
