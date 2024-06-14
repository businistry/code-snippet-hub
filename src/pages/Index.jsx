import { Container, VStack, Heading, Box, Text, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaShareAlt, FaFolderOpen } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Code Snippet Management Tool
        </Heading>
        
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Store Your Snippets
          </Heading>
          <Text mb={4}>
            Save your frequently used code snippets in one place for easy access and reuse.
          </Text>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Add New Snippet
          </Button>
        </Box>
        
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Categorize Snippets
          </Heading>
          <Text mb={4}>
            Organize your snippets into categories for better management and quick retrieval.
          </Text>
          <Button leftIcon={<FaFolderOpen />} colorScheme="teal" variant="solid">
            Manage Categories
          </Button>
        </Box>
        
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Share Snippets
          </Heading>
          <Text mb={4}>
            Share your code snippets with your team or the community.
          </Text>
          <Button leftIcon={<FaShareAlt />} colorScheme="teal" variant="solid">
            Share a Snippet
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;