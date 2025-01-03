import plane from "../assets/airplane 1.png";
import luggage from "../assets/luggage.png";
export default function Logo() {
  return (
    <div className="logo">
      <img src={plane} style={{ width: "150px" }} />
      <h1>Travel Checklist</h1>
      <img src={luggage} style={{ width: "120px" }} />
    </div>
  );
}
