import {
  UilDollarSignAlt,
  UilMoneyBill,
  UilCoins,
  UilAnalysis,
} from "@iconscout/react-unicons";
import { Chart } from "../../components/Chart";
import { Header } from "../../components/Header/Header";
import { chart } from "../../utils/chart";
import "./home.scss";

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
          <section className="section-charts">
            <h2>Fluxo do caixa</h2>
            <div className="charts">
              <Chart
                options={chart.chartMensal.options}
                series={chart.chartMensal.series}
                width={"540"}
                type={"bar"}
              />
              <Chart
                options={chart.chartDiario.options}
                series={chart.chartDiario.series}
                width={"540"}
                type={"line"}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
