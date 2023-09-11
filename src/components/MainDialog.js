import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const MainDiaog = (props) => {
  return (
    <Dialog
      open={props.open}
      fullWidth={true}
      fullScreen={props.fullScreen || false}
      maxWidth={props.maxWidth ? props.maxWidth : 'sm'}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: {
          borderRadius: 20,
          zIndex: 200,
        },
      }}
    >
      <DialogTitle disableTypography style={{padding: '16px 24px'}}>
        <Typography variant="h6">
          <b>{props.title}</b>
        </Typography>
        <IconButton
          aria-label="close"
          onClick={props.onCancel}
          sx={{position: 'absolute', right: 4, top: 4, color: 'grey'}}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={props.showDivider}>
        {props.children}
      </DialogContent>
      <DialogActions>
        {props?.hideCancelButton ? null : (
          <Button
            data-testid={props.datatesid}
            disableElevation
            sx={{minWidth: 100, margin: '12px'}}
            variant={'outlined'}
            color={'primary'}
            onClick={props.onCancel}
          >
            {props.cancelLabel ? props.cancelLabel : 'Cancel'}
          </Button>
        )}
        <Button
          style={{
            minWidth: 150,
            backgroundColor: '#EF2531',
          }}
          disabled={props.disabledOkButton}
          disableElevation
          sx={{minWidth: 100, margin: '12px'}}
          variant={
            props.submitButtonVariant ? props.submitButtonVariant : 'contained'
          }
          onClick={props.onOkey}
        >
          {'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
