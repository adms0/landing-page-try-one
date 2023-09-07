import React, {useState} from 'react';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LoginUserDialog from './LoginUserDialog';

export default function CreateLoginButton(props) {
  const dialogState = useState(false);
  return (
    <>
      <Button
        disableElevation
        variant="contained"
        color="primary"
        onClick={() => {
          dialogState[1](true);
        }}
      >
        Login
      </Button>
      <LoginUserDialog stateData={props?.data} openCloseState={dialogState} />
    </>
  );
}
