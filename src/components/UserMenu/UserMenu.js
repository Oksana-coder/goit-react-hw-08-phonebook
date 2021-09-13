import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import './UserMenu.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0",
  },
  blue: {
    color: "#000000",
    backgroundColor: "#ff8000",
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const classes = useStyles();

  return (
    <div className="user-menu-container">
      <Avatar className={classes.blue}>
        <FaceIcon />
      </Avatar>
      <div className="welcome">
        <span className="name">Welcome,</span>
        <span className="name">{name}!</span>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ExitToAppIcon />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}



/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button> */