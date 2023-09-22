import { Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { BiBitcoin } from "react-icons/bi";

export default () => {
  const Wallet = ({
    icon,
    title,
    subtitle,
    percent,
    change,
    loss,
    color1,
    color2,
  }) => (
    <Box>
      <Flex alignItems="center">
        <Box
          borderRadius="lg"
          fontSize="xl"
          p={3}
          bg={color1}
          textColor={color2}
        >
          {icon}
        </Box>
        <Box ml={2}>
          <Heading fontSize="md">{title}</Heading>
          <Text fontSize="xs" mt={1}>
            {subtitle}
          </Text>
        </Box>
        <Spacer />
        <Box textAlign="right">
          <Text fontSize="16" fontWeight="semibold">
            {percent}
          </Text>
          <Text
            fontSize="12"
            textColor={loss ? "red" : "black"}
            fontWeight="thin"
          >
            {change}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box ml={6} mr={4}>
      <Flex mb={4} textColor="gray.400" fontSize="sm">
        <Text>TRANSACTION HISTORY</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          VIEW ALL
        </Text>
      </Flex>
      <Stack>
        <Wallet
          title="Application fee"
          subtitle="Bitcoin"
          icon={<BiBitcoin />}
          percent="100%"
          change="Rs.1000"
          loss
          color1="#FFECE8"
          color2="#FE8F7B"
        />
        <Wallet
          title="Exam fee"
          subtitle="Dai"
          icon={<BiBitcoin />}
          percent="50%"
          change="-Rs.1500"
          color1="#FCF6DD"
          color2="#EDCC48"
        />
        
      </Stack>
    </Box>
  );
};