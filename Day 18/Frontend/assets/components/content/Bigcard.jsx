import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { selectUser } from "../../../services/redux/userSlice";
import { useNavigate } from "react-router-dom";
export default ({ title, balance, balance2, income, expense }) => {
  const user=useSelector(selectUser);
  const navigate= useNavigate();
  return (
    <Box p={8} borderRadius="3xl" bg="#5D4E7B" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
      </Text>
      <Heading mt={6}>Welcome {user?.firstname} ,</Heading>
      {/* <Text fontSize="sm" textColor="gray.200" mt={1}>
        to Dashboard
      </Text> */}
      {/* <HStack mt={4}>
        <Box w="50%">
          <Heading size="sms">$3,256.00</Heading>
          <Text fontSize="xs">Income</Text>
        </Box>
        <Box w="50%">
          <Heading size="sms">$2,289.00</Heading>
          <Text fontSize="xs">Expense</Text>
        </Box>
      </HStack> */}
      {/* Buttons */}
      <HStack mt={4}>
        {/* <Box w="100%">
          <Button w="full" textColor="#5D4E7B">
            RECEIVE
          </Button>
        </Box> */}
        <Box w="100%">
          <Button w="full" bg="#FE8872" onClick={()=>navigate("/appstatussuccess")}>
            View Application Status
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};