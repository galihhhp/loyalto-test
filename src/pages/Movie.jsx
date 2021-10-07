import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Center,
} from "@chakra-ui/react";
import Loading from "components/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMoviePerPage, nextPage, prevPage } from "state/movie.slice";

const Movie = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, loading, error, page } = useSelector(
    (state) => state.moviePerPage
  );

  useEffect(() => {
    dispatch(getMoviePerPage(page));
  }, [page]);

  if (loading)
    return (
      <Flex align="center" justify="center" maxWidth="100vw" p={8}>
        <Loading />
      </Flex>
    );
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Flex align="center" justify="center" maxWidth="100vw" p={8}>
        <Table variant="simple" colorScheme="linkedin" w="70%">
          <Thead>
            <Tr align="center" justify="center">
              <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
                Title
              </Th>
              <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
                Release Date
              </Th>
              <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
                Overview
              </Th>
              <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
                Popularity
              </Th>
              <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
                See Details
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.results &&
              Object.keys(data.results).map((key) => {
                return (
                  <Tr align="center" justify="center" key={data.results.id}>
                    <Td key={data.results.id}>{data.results[key].title}</Td>
                    <Td>{data.results[key].release_date}</Td>
                    <Td>{data.results[key].overview || "Not yet available"}</Td>
                    <Td>{data.results[key].popularity}</Td>
                    <Td>
                      <Button
                        onClick={() =>
                          history.push({
                            pathname: `/movie/${data.results[key].id}`,
                            state: data.results[key],
                          })
                        }>
                        Details
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Flex>
      <Center display="flex" w="100%">
        <Button
          isDisabled={page === 1}
          onClick={() => dispatch(prevPage())}
          colorScheme="blue"
          m={4}
          w="100px">
          Previous
        </Button>
        <Button
          isDisabled={page === 19}
          onClick={() => dispatch(nextPage())}
          colorScheme="blue"
          m={8}
          w="100px">
          Next
        </Button>
      </Center>
    </div>
  );
};

export default Movie;
