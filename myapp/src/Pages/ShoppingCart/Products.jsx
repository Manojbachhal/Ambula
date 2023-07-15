import React, { useContext } from "react";
import skinData from "../../assets/ProductData";
import {
    Box,
    Button,
    Card,
    CardBody,
    Divider,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { MyContext } from "../../ContextApi/Context";
function Products() {
    const myContext = useContext(MyContext);

    // checking if item already present in cart
    const handleCheck = (itemArray, item) => {
        let check = false;
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].name === item.name) {
                itemArray[i].count++;
                check = true;
                break;
            }
        }
        if (!check) {
            item.count = 1;
            itemArray = [...itemArray, item];
        }
        return itemArray;
    };

    //   adding items in cart 
    const AddtoCart = (element) => {
        const cartData = myContext.cart;

        // checking if item already present in cart
        const updatedData = handleCheck(cartData, element);

        myContext.HandleCart(updatedData);
    };

    return (
        <Box
        >
            <Box mb={"60px"} pt={"30px"}>
                <Heading as={"h1"} fontSize={"3xl"}>
                    Product Page
                </Heading>
            </Box>
            <Grid templateColumns="repeat(4, 1fr)" p={"10px"} gap={6}>
                {skinData?.map((product, index) => {
                    return (
                        <Card key={index} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                            <CardBody>
                                <Image src={product.image_url} height={"200px"} m={"auto"} />
                                <Stack>
                                    <Heading size="md">{product.brand}</Heading>
                                    <Text>{product.name}</Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <Box p={"10px"}>
                                <Flex justifyContent={"space-around"}>
                                    <Box>
                                        <Text color="blue.600" fontSize="xl">
                                            {product.price} ₹
                                        </Text>
                                    </Box>
                                    <Button onClick={() => AddtoCart(product)}>
                                        Add To Cart
                                    </Button>
                                </Flex>
                            </Box>
                        </Card>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Products;
