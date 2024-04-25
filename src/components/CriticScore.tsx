import { Badge } from "@chakra-ui/react";

interface Proops {
  score: number;
}

const CriticScore = ({ score }: Proops) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="15px" paddingX="2" borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
