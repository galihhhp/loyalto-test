import { Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "state/genres.slice";
import Loading from "components/Spinner";

const Genre = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  if (loading)
    return (
      <Flex align="center" justify="center" maxWidth="100vw" p={8}>
        <Loading />
      </Flex>
    );
  if (error) return <p>Error!</p>;

  return (
    <Flex align="center" justify="center" maxWidth="100vw" p={8}>
      <Table variant="simple" colorScheme="linkedin" w="70%">
        <Thead>
          <Tr align="center" justify="center">
            <Th fontWeight="bold" color="yellow.900" borderColor="blue.700">
              Genre
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((genre) => {
            return (
              <Tr key={genre.id}>
                <Td align="center" justify="center">
                  {genre.name}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default Genre;
