import React from "react";
import { Container, Table } from "react-bootstrap";
import { GiRolledCloth, GiSpellBook } from "react-icons/gi";

import "./index.css"; // Import the CSS file for styling

const data = [
  {
    profession: "Наложение чар",
    icon: <GiSpellBook />,
    recipes: [
      {
        tiers: [
          {
            tier: "Гребни",
            crafters: ["Лератель", "Клиерма"],
            itemLevel: "-",
          },
        ],
      },
      // Add more tiers and crafters here
    ],
  },
  {
    profession: "Портняжное дело",
    icon: <GiRolledCloth />,
    recipes: [
      {
        tiers: [
          {
            tier: "Пульсирующий плащ из спор",
            crafters: ["Чоски"],
            itemLevel: "T5",
          },
        ],
      },
      // Add more tiers and crafters here
    ],
  },

  // Add more professions here with their corresponding icons and recipe data
];

function CraftingPage() {
  return (
    <Container fluid>
      <div className="crafting-grid">
        {data.map((professionData) => (
          <div key={professionData.profession} className="profession">
            <h2>
              {professionData.icon} {professionData.profession}
            </h2>
            {professionData.recipes.map((recipe) => (
              <Table
                key={professionData.profession}
                striped
                bordered
                hover
                className="recipe-table"
              >
                <thead>
                  <tr>
                    <th>Рецепт</th>
                    <th>Мастер</th>
                    <th>Тир</th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.tiers.map((tier) => (
                    <React.Fragment key={tier.tier}>
                      {tier.crafters.map((crafter, index) => (
                        <tr key={crafter}>
                          {index === 0 && (
                            <td rowSpan={tier.crafters.length}>{tier.tier}</td>
                          )}
                          <td>{crafter}</td>
                          <td>{tier.itemLevel}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CraftingPage;
