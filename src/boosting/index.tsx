import React, { useState } from "react";

const BoostingPricesContext = React.createContext<{
  [key: string]: number;
}>({
  // Default values for boosting prices
  mythicPlus: 0,
  raid: 0,
  pvp: 0,
});

interface BoostingPricesProviderProps {
  children: React.ReactNode;
}

const BoostingPricesProvider: React.FC<BoostingPricesProviderProps> = ({
  children,
}) => {
  const boostingPrices = {
    mythicPlus: 100,
    raid: 200,
    pvp: 50,
  };

  return (
    <BoostingPricesContext.Provider value={boostingPrices}>
      {children}
    </BoostingPricesContext.Provider>
  );
};

const BoostingPrices: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("mythicPlus");
  const prices = React.useContext(BoostingPricesContext);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="card w-100 mt-4" style={{ height: "inherit" }}>
      <div className="card-header">
        <h5 className="card-title">Цены на бустинг</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-3 border-right">
            <div
              className={`p-2 cursor-pointer ${
                selectedOption === "mythicPlus" ? "bg-light" : ""
              }`}
              onClick={() => handleOptionSelect("mythicPlus")}
            >
              Ключи
            </div>
            <div
              className={`p-2 cursor-pointer ${
                selectedOption === "raid" ? "bg-light" : ""
              }`}
              onClick={() => handleOptionSelect("raid")}
            >
              Рейды
            </div>
          </div>
          <div className="col-9">
            {selectedOption === "mythicPlus" && (
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div className="col-6" key={item}>
                    <div className="card mb-3">
                      <img src="placeholder" className="card-img-top" alt="" />
                      <div className="card-body">
                        <h6 className="card-title">Placeholder Title</h6>
                        <p className="card-text">Placeholder Description</p>
                        <p className="card-text text-primary">
                          {prices.mythicPlus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {selectedOption === "raid" && (
              <div className="card">
                <img src="placeholder" className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">Placeholder Title</h6>
                  <p className="card-text">Placeholder Description</p>
                  <p className="card-text text-primary">{prices.raid}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BoostingPricesPage: React.FC = () => {
  return (
    <BoostingPricesProvider>
      <BoostingPrices />
    </BoostingPricesProvider>
  );
};

export default BoostingPricesPage;
