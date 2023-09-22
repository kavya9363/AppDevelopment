import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import '../css/Dashboard.css'
export default () => {
  return (
    <div className="headline">
    <Box p={8}>
      <Flex>
        <Image src="https://production-partner-website-cms-uploads.s3.ap-south-1.amazonaws.com/LEFT_ALIGN_a9d7a6e17d.png" w={250} h={65} />
        <Spacer />
        <HStack fontSize="xl" spacing="4">
          <FiSearch />
          <FiBell />
          <FiSettings />
          <Avatar
            w={12}
            src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
          />
        </HStack>
      </Flex>
    </Box>
    </div>
  );
};