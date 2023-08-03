import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React App</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numOfPizzas > 0 ? (
        <React.Fragment>
          <p>Indian Pizzas</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        ""
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <React.Fragment>
      <li className={`pizza ${pizzaObj.soldOut} ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
        <div>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
    </React.Fragment>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour <= open && hour <= close;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={close} openHour={open} /> : "Sorry"}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} to {closeHour}
      </p>
    </div>
  );
}
export default App;
