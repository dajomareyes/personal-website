import React from "react";
import PropTypes from 'prop-types';
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledDiv = styled('div')((props) => ({
    display: 'grid',
    overflowX: 'hidden',
    overflowY: 'hidden',
    color: 'black',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
}));

const Section = (props) => {
    const { classes } = props;

    return (
        <StyledDiv>
            <Typography
                textAlign={'left'}
                lineHeight={'16px'}
                justifyContent={'center'}>
                Hi, I'm David.<br />
                Software Engineer
            </Typography>
        </StyledDiv>
    )
};



export default Section;
