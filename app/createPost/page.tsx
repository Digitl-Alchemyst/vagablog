'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {}

const createPost
 = (props: Props) => {
  return (
    <div className='flex flex-row '> 
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <div className='flex'>

              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Post Title"
                variant="filled"
                rootStyle={{ width: '100%' }}
                />
            </div>
        </Box>

    </div>
  )
}

export default createPost
