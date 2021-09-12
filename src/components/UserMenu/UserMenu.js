import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import './UserMenu.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const classes = useStyles();

  return (
    <div className="user-menu-container">
      <img src={avatar} alt="" width="32" className="avatar" />
      <span className="name">Welcome, {name}</span>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button> */}
    </div>
  );
}