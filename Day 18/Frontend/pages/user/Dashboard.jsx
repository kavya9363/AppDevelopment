import { IconButton } from "@chakra-ui/button";
import "../../assets/css/Dashboard.css";
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiPlus } from "react-icons/fi";
import BigCard from "../../assets/components/content/Bigcard";
import Security from "../../assets/components/content/Security";
import SmallCard from "../../assets/components/content/Smallcard";
import Transactions from "../../assets/components/content/Transactions";
import Header from "../../assets/components/Header";
import Sidebar from "../../assets/components/SideBaaar";
import Wallets from "../../assets/components/Wallets";
import Profile_Card from "../../assets/components/Profile-Card";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box>
      <Header />
      <SimpleGrid columns={10} gap={3}>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={5} gap={8}>
            <GridItem colSpan={3}>
              <br />
              <BigCard />
            </GridItem>
            <GridItem colSpan={2} className="small-card">
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textColor="gray"
                my={2}
                ml={8}
              >
                USERS
              </Text>
              <Stack spacing={6}>
                <SmallCard value="70%" text="Admissions" />
                <SmallCard value="89%" text="Total Users" />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={3}>
          <br />
          <Profile_Card />
        </GridItem>
      </SimpleGrid>

      <SimpleGrid className="problemGrid" columns={10} gap={0} mt={12}>
        <GridItem colSpan={1}>
          {/* <Center>
            <IconButton
              bg="#5C4E7A"
              textColor="white"
              position="fixed"
              bottom={12}
              size="lg"
              icon={<FiPlus />}
            />
          </Center> */}
        </GridItem>
        <GridItem colSpan={1}>
          <Wallets />
        </GridItem>
        <GridItem colSpan={1}>
          {/* <CircularProgress
            className="dashboard-percentagecircle"
            value={64}
            size={100}
            color="green.600"
            thickness="12px"
          /> */}
          <CircularProgress isIndeterminate color='green.300' className="dashboard-percentagecircle" value={64}
          thickness="12px"
          size={100}>
              <CircularProgressLabel>68.4%</CircularProgressLabel>
          </CircularProgress>
        </GridItem>
        {/* <GridItem colSpan={3}>
          <Security />
        </GridItem> */}
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
