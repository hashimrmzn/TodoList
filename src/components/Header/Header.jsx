import React from 'react'
import { Box, Typography } from '@mui/material';
function Header() {
    return (
        <>
            <Box
                component="header"
                sx={{
                    backgroundColor: '#fff705',
                    color: '#000',
                    p: "20px 0",
                }}
            >
                <div className='container'>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: "#0a0a0a",
                            textAlign: "center",
                            fontSize: {
                                xs: "2rem",  
                                sm: "3rem",   
                                md: "4rem",   
                                lg: "5rem",   
                            },
                            fontWeight: "bold",
                            mt: 4,
                            mb: 2,
                        }}
                    >
                        My To-Do List
                    </Typography>

                </div>
            </Box>
        </>
    )
}

export default Header