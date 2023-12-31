import {useState} from 'react';
import {MainDiaog} from '../MainDialog';
import {Grid, TextField, Typography} from '@mui/material';

export default function LoginUserDialog(props) {
  const edit = props?.edit;
  const data = props?.data;
  const openCloseState = props.openCloseState;
  const [open, setOpen] = openCloseState;
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);

  const resetState = () => {
    setOpen(false);
    setUserName(undefined);
    setUserEmail(undefined);
  };

  const handleSubmit = () => {};
  const handleEdit = () => {};

  return (
    <MainDiaog
      showDivider
      datatesid="button-test"
      open={open}
      title={'Login'}
      okLabel={'Submit'}
      onCancel={() => {
        resetState();
      }}
      onOkey={() => {
        resetState();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id={'userName'}
            variant={'standard'}
            placeholder="John Doe"
            type="text"
            label={'User Name'}
            value={userName}
            error={false}
            onChange={(e) => {
              const value = e?.target.value;
              setUserName(value);
            }}
            inputProps={{
              'data-testid': 'account-name',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id={'userEmail'}
            variant={'standard'}
            placeholder="John.Doe@mail.com"
            type="email"
            label={'User Email'}
            value={userEmail}
            error={false}
            onChange={(e) => {
              const value = e?.target.value;
              setUserEmail(value);
            }}
            inputProps={{
              'data-tesid': 'account-email',
            }}
          />
        </Grid>
      </Grid>
    </MainDiaog>
  );
}
