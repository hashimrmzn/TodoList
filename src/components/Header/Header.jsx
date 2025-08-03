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
                    <Typography variant="h1" component="h1"
                        sx={{
                            color: "#0a0a0a",
                            textAlign:"center"
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