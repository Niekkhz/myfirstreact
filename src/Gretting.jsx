import "./App.css";

const Greeting = (props) => {
  return (
    <div>
      <h1 className="text">Hello {props.name}</h1>
      <h1>I live in {props.city}</h1>
      <h3>my favourite club is:{props.club}</h3>
      <h3>my favourite food is:{props.food}</h3>
      <h3>my favourite car brand is:{props.brand}</h3>
    </div>
  );
};

export default Greeting;
