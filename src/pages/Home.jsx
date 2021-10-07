import { Button, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Center display="flex" flexDirection="column" p={8}>
      Home
      <Flex justify="center" p={8} w="50%" justifyContent="space-around">
        <Button>
          <Link to="/genre">Genres</Link>
        </Button>
        <Button>
          <Link to="/movie">Movies</Link>
        </Button>
      </Flex>
    </Center>
  );
};

export default Home;
