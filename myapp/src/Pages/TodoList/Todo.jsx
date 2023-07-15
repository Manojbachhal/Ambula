import {
    Box,
    Heading,
    Input,
    Stack,
    Button,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MyContext } from "../../ContextApi/Context";
import TodoTable from "./TodoTable";

const Todo = () => {
    const [inputData, setInputData] = useState({
        title: "",
        task: "",
        status: false,
    });

    // toast for alert
    const toast = useToast();

    const myContext = useContext(MyContext);


    const todoData = myContext.todo;

    // adding the todo data and check if length is appropriate
    const handleTodo = () => {

        if (inputData.title.length < 4) {
            toast({
                title: 'Title length must be greater than or equal to 4',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
        } else if (inputData.task.length < 4) {
            toast({
                title: 'Task length must be greater than or equal to 4',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
        } else {
            myContext.handleSetTodo([...todoData, inputData]);
            document.querySelector("form").reset();
            toast({
                title: 'Todo Added',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
        }
    };

    return (
        <Box>
            <Box
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}
                maxWidth="600px"
                mx="auto"
                mt="50px"
                p="20px"
                borderWidth="1px"
                borderRadius="md"
            >
                <Heading as="h1" mb="20px" textAlign="center">
                    Add Todo
                </Heading>
                <Stack spacing="10px">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleTodo();
                        }}
                    >
                        <Input
                            required={true}
                            my={"10px"}
                            placeholder="Enter Task Title"
                            name="title"
                            onChange={(e) =>
                                setInputData({ ...inputData, [e.target.name]: e.target.value })
                            }
                        />

                        <Text
                            pl={"6px"}
                            textAlign={"left"}
                            fontSize={"sm"}
                            color={inputData.title.length < 4 ? "red.500" : "green.500"}
                            fontWeight={"bold"}
                            fontStyle={"italic"}

                        >
                            {
                                inputData.title.length < 4 ? "Please enter a task title with a minimum of 4 characters." : "Enter Title Name"
                            }
                        </Text>

                        <br />

                        <Input
                            required={true}
                            my={"10px"}
                            placeholder="Enter Task Details"
                            name="task"

                            onChange={(e) =>
                                setInputData({ ...inputData, [e.target.name]: e.target.value })
                            }

                        />

                        <Text
                            pl={"6px"}
                            textAlign={"left"}
                            fontSize={"sm"}
                            color={inputData.task.length < 4 ? "red.500" : "green.500"}
                            fontWeight={"bold"}
                            fontStyle={"italic"}

                        >
                            {inputData.task.length < 4 ? "Please enter a task description with a minimum of 4 characters." : "Enter Task Details"}
                        </Text>

                        <Stack direction="row" justify="flex-end" my={"40px"}>
                            <Button type="submit" colorScheme='green' size="xl" width={"100px"} height={"40px"}>
                                Add Task
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Box>

            <TodoTable />
        </Box>
    );
};

export default Todo;
