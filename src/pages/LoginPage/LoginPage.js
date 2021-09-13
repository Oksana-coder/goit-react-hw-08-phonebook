import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import './LoginPage.scss';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '350px',
  },
  button: {
    margin: theme.spacing(1),
    width: '350px',
  },
}));

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            labelWidth={70}
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

        <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<MeetingRoomIcon />}
        >
        Enter
        </Button>
        
      </form>
    </div>
  );
}






/* <label className="login-form__label">
          Email
          <input
            type="email"
            name="email"
            value={email}
            className="login-form__input"
            onChange={handleChange}
          />
        </label> */
/* <label className="login-form__label">
          Password
          <input
            type="password"  // type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            className="login-form__input"
            onChange={handleChange}
          />
        </label> */

/* <button type="submit">Enter</button> */