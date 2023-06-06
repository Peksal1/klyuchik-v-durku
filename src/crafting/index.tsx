import { Container, Table } from "react-bootstrap";
import { FaCampground, FaFlask } from "react-icons/fa";

const data = [
  {
    profession: "Кузнечное дело",
    icon: <FaCampground />,
    recipes: [
      { name: "Plate Helmet", crafters: ["John", "Lisa"], itemLevel: 200 },
      { name: "Plate Gauntlets", crafters: ["Mark", "Sarah"], itemLevel: 195 },
    ],
  },
  {
    profession: "Алхимия",
    icon: <FaFlask />,
    recipes: [
      { name: "Health Potion", crafters: ["Tom"], itemLevel: 50 },
      { name: "Mana Potion", crafters: ["Emily", "Mike"], itemLevel: 55 },
    ],
  },
  // Add more professions here with their corresponding icons and recipe data
];

function CraftingPage() {
  return (
    <Container>
      {data.map((professionData) => (
        <div key={professionData.profession}>
          <h2>
            {professionData.icon} {professionData.profession}
          </h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Рецепт</th>
                <th>Мастер</th>
                <th>Максимальный тир</th>
              </tr>
            </thead>
            <tbody>
              {professionData.recipes.map((recipe) => (
                <tr key={recipe.name}>
                  <td>{recipe.name}</td>
                  <td>{recipe.crafters.join(", ")}</td>
                  <td>{recipe.itemLevel}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Container>
  );
}

export default CraftingPage;
