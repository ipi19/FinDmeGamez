import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <u>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </u>
    </>
  );
};

export default GameGrid;
