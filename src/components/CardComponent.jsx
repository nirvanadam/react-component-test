import React from "react";

function CardComponent() {
  const data = [
    {
      creator: "Bot1",
      title: "Card1",
      level: "Beginner",
      duration: "1",
      capacity: "46",
      modul: "11",
    },
    {
      creator: "Bot2",
      title: "Card2",
      level: "Intermediate",
      duration: "2",
      capacity: "50",
      modul: "15",
    },
    {
      creator: "Bot3",
      title: "Card3",
      level: "Pro",
      duration: "1",
      capacity: "30",
      modul: "20",
    },
  ];

  const renderCard = () => {
    return data.map((card) => {
      return (
        <div className="border border-black rounded-lg max-w-[300px] overflow-hidden">
          <img src="/images/xbox.jpg" alt="" />
          <div className="flex flex-col px-3 pt-3 pb-5">
            <h1 className="text-base mb-1 text-gray-400 font-medium">By {card.creator}</h1>
            <h1 className="text-xl font-bold">{card.title}</h1>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-2">
              <h1 className="text-gray-400 font-medium">{card.level}</h1>
              <h1 className="text-gray-400 font-medium">{card.duration} jam</h1>
              <h1 className="text-gray-400 font-medium">{card.capacity} Siswa</h1>
              <h1 className="text-gray-400 font-medium">{card.modul} Modul</h1>
            </div>

            <h1 className="mt-5 text-gray-400">4.9 (24) Penilaian</h1>
            <button className="w-full mt-5 py-3 rounded-lg bg-black text-white">Beli lewat Roadmap</button>
          </div>
        </div>
      );
    });
  };

  return <>{renderCard()}</>;
}

export default CardComponent;
