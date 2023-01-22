import React from "react";
import { Avatar, Chip, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "../image";

const StyledDiv = styled('div')((props) => ({
    display: 'grid',
    overflowX: 'hidden',
    overflowY: 'hidden',
    color: 'black',
    width: '100vw',
    height: '90vh',
    margin: 0,
    padding: 0,
}));

const Section = (props) => {
    const { classes } = props;

    return (
        <StyledDiv>
            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}>
                <Grid item>
                    <Image />
                </Grid>
                <Grid item>
                    <Stack sx={{ mb: 1, mt: 3 }}>
                        <Typography variant="h5">
                            Hi there! My name is David
                        </Typography>
                        <Typography variant="subtitle1" lineHeight="1">
                            Software Engineer
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip
                            label="Linkedin"
                            color="primary"
                            component="a"
                            href="https://www.linkedin.com/in/david-joshua-reyes-7aa50ab3/"
                            clickable
                        />
                        <Chip
                            label="Github"
                            component="a"
                            href="https://github.com/dajomareyes"
                            clickable
                        />
                    </Stack>

                </Grid>
            </Grid>
        </StyledDiv>
    )
};



export default Section;
