import { Flex, Image } from "@chakra-ui/react";
// import { LOADER_URL } from "../../constants/constants";


export default function Loader({ gif }) {


    return <Flex top={"120px"} bg={"white"} justify={"center"} alignItems={"center"} w={"100%"} position={"fixed"} h={"100%"} zIndex={10}>

        <Image w={"100px"} src={gif}></Image>


    </Flex>
}