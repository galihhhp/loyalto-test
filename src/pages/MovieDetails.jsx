import { Flex, Heading, Box, Tag, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  let location = useLocation();

  const { adult, overview, poster_path, title, released_date } = location.state;

  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      maxWidth="100vw"
      p={8}>
      <Box>
        <Heading> {title} </Heading>
        <Image my={4} src={poster_path} alt={title} />
        <Tag
          bgColor={adult ? "red" : "green"}
          color="white"
          p={2}
          fontWeight="bold">
          {adult ? "DEWASA" : "SEMUA UMUR"}
        </Tag>
        <Text my={4}> {overview} </Text>
        <Text> {released_date} </Text>
      </Box>
    </Flex>
  );
};

export default MovieDetails;
