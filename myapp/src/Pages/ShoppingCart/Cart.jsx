import React, { useContext } from "react";
import { MyContext } from "../../ContextApi/Context";
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

// to display cart Data
function Cart() {
    const myContext = useContext(MyContext);

    // getting cart data from context api
    const cartData = myContext.cart;

    // delete cart product funtion
    const handleDelete = (index) => {
        const data = cartData.filter((item, i) => {
            return i !== index;
        });
        myContext.HandleCart(data);
    };

    // calculating total price of all items present in cart
    const total = cartData.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    // calculating total quantity of all items present in cart
    const totalQty = cartData.reduce((acc, item) => {
        return acc + item.count;
    }, 0);

    return (
        <Box >
            <Box textAlign={"center"} mb={"60px"} pt={"30px"}>
                <Heading as={"h1"} fontSize={"3xl"}>
                    Cart
                </Heading>
            </Box>
            <Flex justify={"space-around"}>
                <TableContainer
                    width={"60%"}
                    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                    <Table variant="simple">
                        {/* <TableCaption fontSize={"xl"} placement='top'>List of all products in cart</TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th>Item</Th>
                                <Th>Name</Th>
                                <Th>Qty</Th>
                                <Th isNumeric>Price</Th>
                                <Th textAlign={"center"}>Remove</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cartData.map((product, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>
                                            <Image src={product.image_url} width={"80px"} />
                                        </Td>
                                        <Td fontSize={"sm"}>{product.brand}</Td>
                                        <Td>{product.count} </Td>
                                        <Td isNumeric color="blue.600" fontSize="sm">
                                            {product.price} ₹
                                        </Td>
                                        <Td textAlign={"center"}>
                                            <Button onClick={() => handleDelete(index)}>
                                                Remove Item
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box w={"30%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={"30px"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} mb={"20px"}>
                        Order Summary
                    </Text>
                    <Flex justify={"space-between"} my={"10px"}>
                        <Text>Subtotal</Text>
                        <Text color="blue.600" fontSize="sm">
                            {" "}
                            {total} ₹
                        </Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Text>Total Quantity</Text>
                        <Text color="blue.600" fontSize="sm">
                            {" "}
                            {totalQty}{" "}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default Cart;
