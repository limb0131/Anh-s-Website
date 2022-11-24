import { Button } from "./Button";
import "./Description.css";
import "../App.css";

function Description() {
  return (
    <div className="description-container">
      <h1>Bookings Made Easy</h1>
      <p>Fast and convient way to make your online bookings.</p>
      <div className="description-btn">
        <Button className="btn" buttonSize="btn--large">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Description;
