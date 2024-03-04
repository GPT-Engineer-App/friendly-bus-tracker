import { ChakraProvider, Box, VStack, Heading, Text, Button, Input, Menu, MenuButton, MenuList, MenuItem, Image, IconButton, useToast } from "@chakra-ui/react";
import { FaBusAlt, FaPhoneAlt, FaSms, FaChevronDown, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const routes = [
    "Route 10",
    "Route 11",
    "Route 12",
    "Route 13",
    // ... add other routes here
  ];

  const handleRouteSelection = (route) => {
    // Placeholder for actual route selection logic
    console.log(`Selected ${route}`);
  };

  const sendMessageToDriver = () => {
    // Placeholder for sending message logic
    toast({
      title: "Message Sent.",
      description: "You've sent a message to the bus driver.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const callBusCompany = () => {
    // Placeholder for calling company logic
    window.alert("Calling the bus company...");
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg" textAlign="center">
            City Bus Tracker
          </Heading>
          <Text textAlign="center">Find and track your bus in real time.</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              Select your route
            </MenuButton>
            <MenuList>
              {routes.map((route) => (
                <MenuItem key={route} onClick={() => handleRouteSelection(route)}>
                  {route}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Box borderWidth="1px" p={4} borderRadius="lg">
            <Heading size="md">Bus Details:</Heading>
            <Text>Time of Arrival: 12:30 PM</Text>
            <Text>Time it leaves: 12:35 PM</Text>
            <Text>Duration to next point: 15 mins</Text>
            <IconButton aria-label="Track bus location" icon={<FaMapMarkedAlt />} m={2} />
            <IconButton aria-label="Send message to driver" icon={<FaSms />} m={2} onClick={sendMessageToDriver} />
          </Box>
          <Box borderWidth="1px" p={4} borderRadius="lg">
            <Heading size="md">Bus Delay Notifications:</Heading>
            <Input placeholder="Your bus number" />
            <Button leftIcon={<FaSms />} onClick={sendMessageToDriver} mt={2}>
              Notify Me
            </Button>
          </Box>
          <Box textAlign="center">
            <Button leftIcon={<FaPhoneAlt />} colorScheme="teal" onClick={callBusCompany}>
              Call Bus Company
            </Button>
          </Box>
        </VStack>
        <Box textAlign="center" mt={10}>
          <Image src="https://images.unsplash.com/photo-1546604306-52e655c109b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzfGVufDB8fHx8MTcwOTUzNzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="City Bus" boxSize="200px" objectFit="cover" borderRadius="full" />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
