import React, { useEffect, useState } from "react";
import { Grid, Image, Box, Text, Heading } from "@chakra-ui/react";
import Loader from "./Loader";
const Movie = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //getting all movies data
    const getMoviesData = () => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fc759f3b&s=thor`)
            .then((data) => data.json()).then((res) => {
                setData(res.Search);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        // on component render getting movie data through omdb api
        getMoviesData();
    }, []);

    return loading ? (
        <Loader gif={"https://i.giphy.com/media/xelHBioIJDyoSqu0z1/giphy.webp"} />
    ) : (
        <Box my={"30px"} >
            <Heading as="h1" mb="20px" textAlign="center">
                Movies App
            </Heading>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)"
                }}
                gap={12}
                p={"20px"}
            >
                {data.map((el, index) => (
                    <Box display={"flex"} justifyContent={'space-around'} flexDirection={"column"} key={index} >
                        <Box>
                            <Image
                                h={{ base: "350px", sm: "200px", lg: "250px" }}
                                w={{ base: "100%", sm: "100%", lg: "100%" }}

                                src={el.Poster}
                                alt={el.Poster}
                            />
                        </Box>
                        <Box h={{ base: "80px", sm: '100px' }}
                            w={{ base: "100%", sm: "100%", lg: "100%" }}
                            py={'20px'}
                            bg={"orange.100"}
                            borderBottomEndRadius={"20px"}
                            borderBottomStartRadius={"20px"}
                            boxShadow={'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'}
                        >
                            <Text fontWeight={"bold"} fontSize={"xl"}>{el.Title}</Text>
                            <Text>Release Year : {el.Year}</Text>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Movie;