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
        <div className="border border-gray-300 rounded-lg max-w-[300px] overflow-hidden shadow-lg">
          <img src="/images/xbox.jpg" alt="" />
          <div className="relative flex flex-col px-3 pt-3 pb-20">
            <h1 className="text-base mb-1 text-gray-400 font-medium">By {card.creator}</h1>
            <h1 className="text-2xl font-bold">{card.title}</h1>

            <div className="grid grid-cols-2 justify-between gap-5 mt-2">
              <div className="flex flex-col gap-2  ">
                <div className="flex gap-3">
                  <img src="/icons/level-icon.svg" alt="" className="w-5 opacity-50" />
                  <h1 className="text-gray-400 text-sm font-medium">{card.level}</h1>
                </div>
                <div className="flex gap-3">
                  <img src="/icons/clock-icon.svg" alt="" className="w-5 opacity-50" />
                  <h1 className="text-gray-400 text-sm font-medium">{card.duration} Jam</h1>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <img src="/icons/group-icon.svg" alt="" className="w-5 opacity-50" />
                  <h1 className="text-gray-400 text-sm font-medium">{card.capacity} Siswa</h1>
                </div>
                <div className="flex gap-3">
                  <img src="/icons/book-icon.svg" alt="" className="w-5 opacity-50" />
                  <h1 className="text-gray-400 text-sm font-medium">{card.modul} Modul</h1>
                </div>
              </div>
            </div>

            <h1 className="mt-5 text-gray-400">4.9 (24) Penilaian</h1>

            <button className="absolute w-full left-0  bottom-0 mt-5 py-2 bg-black text-white">Beli lewat Roadmap</button>
          </div>
        </div>
      );
    });
  };

  return <>{renderCard()}</>;
}

export default CardComponent;
