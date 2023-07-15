import React, { useContext } from 'react'
import { MyContext } from '../../ContextApi/Context'
import { Box, Button, Heading, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

function TodoTable() {
    const myContext = useContext(MyContext)

    const data = myContext.todo

    // delete todo task
    const handleDelete = (index) => {
        let updatedData = data.filter((todo, i) => index !== i)
        myContext.handleSetTodo(updatedData)

    }

    // toggling the status of task
    const handleToggle = (index) => {
        let updatedData = data.map((todo, i) => index === i ? { ...todo, status: !todo.status } : todo)
        myContext.handleSetTodo(updatedData)

    }
    return (
        <Box my={20}>
            <Heading as="h1" m={"50px"} textAlign="center">
                Todos
            </Heading>
            <TableContainer width={"90%"} m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} textAlign={"center"}>
                <Table variant='simple'>
                    {/* <TableCaption fontSize={"xl"} placement='top'>List of all products in cart</TableCaption> */}
                    <Thead >
                        <Tr >
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>Status</Th>
                            <Th>Toggle Status</Th>
                            <Th textAlign={"center"}>Remove Todo</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((product, index) => {
                                return <Tr key={index} >

                                    <Td fontWeight={"bold"} fontSize={"xl"} textDecoration={!product.status ? undefined : "line-through"}>{product.title}</Td>
                                    <Td width={"30%"} textDecoration={!product.status ? undefined : "line-through"}>{product.task} </Td>
                                    <Td fontWeight={"bold"} width={"20%"} color={product.status ? "green.500" : "red.500"} >{product.status ? "Completed" : "Pending"} </Td>
                                    <Td textAlign={"start"}>
                                        <Button onClick={() => handleToggle(index)} colorScheme={product.status ? "green" : "red"} width={"180px"}>{
                                            product.status ? "Mark Pending" : "Mark Completed"
                                        }</Button>
                                    </Td>
                                    <Td textAlign={"center"}>

                                        <IconButton onClick={() => handleDelete(index)} icon={<DeleteIcon />} aria-label="Delete All Tasks" colorScheme="red" size="sm" />

                                    </Td>
                                </Tr>
                            })
                        }

                    </Tbody>

                </Table>
            </TableContainer>
        </Box>
    )
}

export default TodoTable