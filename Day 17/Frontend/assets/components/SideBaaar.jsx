import { VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { RiHomeLine, RiPieChart2Fill, RiShareBoxFill } from "react-icons/ri";
import '../css/Dashboard.css'

export default () => {
  const Item = ({ icon, active }) => (
    <Box
      _hover={{ cursor: "pointer" }}
      p={4}
      borderRadius="md"
      textColor={"white"}

      // bg={active ? "#FE8872" : "white"}
      // textColor={active ? "white" : "gray"}
    >
      {icon}
    </Box>
  );
  return (
    <div className="side-icons">
    <Box>
      <VStack>
        <ul>
          <br />
        <li><Item active icon={<RiHomeLine fontSize='25px'/>}  /></li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <li><Item icon={<RiShareBoxFill fontSize='25px' />} /></li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <li><Item icon={<RiPieChart2Fill fontSize='25px' />} /></li>
        </ul>
      </VStack>
    </Box>
    </div>
  );
};