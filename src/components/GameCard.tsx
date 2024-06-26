import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import PlatfornIconList from "./PlatfornIconList";
import CriticScore from "./CriticScore";

interface proops {
  game: Game;
}

const GameCard = ({ game }: proops) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatfornIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
