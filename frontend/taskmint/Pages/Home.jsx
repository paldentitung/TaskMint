import React from "react";
import Header from "../Components/Header";
const Home = () => {
  const OverviewCards = [
    {
      id: 1,
      cardName: "Completed",
      Task: 3,
    },
    {
      id: 2,
      cardName: "Pending",
      Task: 9,
    },
    {
      id: 3,
      cardName: "High Priority",
      Task: 10,
    },
    {
      id: 4,
      cardName: "Due Today",
      Task: 4,
    },
  ];
  return (
    <section className="w-full ">
      <Header title="Home" subtitle="Hers's your Productivity overview" />
      <section className="p-6">
        {/* overview cards */}
        <div className="flex flex-col gap-3">
          <h3>Overview Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-20 ">
            {OverviewCards.map((card) => (
              <div
                key={card.id}
                className="bg-[rgb(31,31,31)] flex flex-col gap-2 p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg "
              >
                <span className="text-gray-400">{card.cardName}</span>
                <span className="text-3xl">{card.Task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
