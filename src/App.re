[%bs.raw {| require('./assets/style.css')|}];
[@react.component]
let make = _ => {
    <div className="app-container">
      <Timer />
    </div>;
};