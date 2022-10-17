import "../assets/sass/home.scss";
import {
  UilAlignJustify,
  UilDollarSignAlt,
  UilMoneyBill,
  UilCoins,
  UilAnalysis,
} from "@iconscout/react-unicons";

export function HomePage() {
  const cards = [
    {
      id: 1,
      title: "Saldo",
      icon: <UilCoins />,
      value: "R$: 1.600,00",
    },
    {
      id: 2,
      title: "Saldo Total",
      icon: <UilMoneyBill />,
      value: "R$: 1.600,00",
    },
    {
      id: 3,
      title: "Consumo",
      icon: <UilAnalysis />,
      value: "R$: 1.600,00",
    },
    {
      id: 4,
      title: "Consumo Total",
      icon: <UilDollarSignAlt />,
      value: "R$: 1.600,00",
    },
  ];
  return (
    <div className="container-home">
      <div className="header">
        <UilAlignJustify />
        <h5 className="title-header">Julius Finances</h5>
      </div>
      <div className="content-home">
        <div className="cards">
          {cards.map((item) => (
            <div className="card" key={item.id}>
              <strong>
                {item.title} {item.icon}
              </strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
