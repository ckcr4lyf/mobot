import { VStack, Box, Text, Fab } from "native-base";
import React from "react";
import OverviewText from "../../components/home/OverviewText";
import { Ionicons } from "@expo/vector-icons";
import CourseUpdateTile from "../../components/home/CourseUpdateTile";

const CourseHomePage = () => {
  const [expandIndex, setExpandIndex] = React.useState(-1);
  const courseTileList = [
    {
      name: "STAT1603: Introduction to Statistics",
      p: 75,
    },
    {
      name: "GEOG1012: Urbanization in Globalizing World",
      p: 35,
    },
    {
      name: "COMP3258: Functional Programming",
      p: 45,
    },
    {
      name: "COMP4801: FYP",
      p: 95,
    },
  ];
  return (
    <VStack paddingTop='3'>
      <Fab
        position='fixed'
        borderRadius='full'
        colorScheme='emerald'
        icon={<Ionicons name='refresh' size={24} color='white' />}
        label={
          <Text fontWeight='semibold' fontSize='xl' color='white'>
            Refresh
          </Text>
        }
        onPress={() =>
          console.log(
            "Opening loading modal, making network req, projecting..."
          )
        }
      />
      <Box paddingX='4'>
        <Box>
          <Text fontSize='2xl' fontWeight='semibold'>
            Last Update:
          </Text>
        </Box>
        <Box paddingLeft='2'>
          <Box marginBottom='5'>
            <Text fontSize='lg' fontWeight='semibold'>
              Last updated at 23/10/2021 3:17PM
            </Text>
          </Box>
          <Box>
            <OverviewText
              text='3 modules added'
              iconColor='#0ea5e9'
              iconName='add-circle'
            />
            <OverviewText
              text='2 modules modified'
              iconColor='#f59e0b'
              iconName='information-circle'
            />
            <OverviewText
              text='8 modules completed'
              iconColor='#10b981'
              iconName='checkmark-circle'
            />
          </Box>
        </Box>
        <Box marginY='2'>
          <Text fontSize='2xl' fontWeight='semibold'>
            Updates:
          </Text>
        </Box>
      </Box>
      {courseTileList.map((val, index) => (
        <CourseUpdateTile
          key={index}
          myIndex={index}
          selIndex={expandIndex}
          action={(i: number) => setExpandIndex(i)}
          name={val.name}
          progress={val.p}
        />
      ))}
    </VStack>
  );
};

export default CourseHomePage;
