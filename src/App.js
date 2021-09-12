import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';
import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Showing React Skeleton</h1>
      ) : (
        <>
          <AppBar />
        
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>

              <PublicRoute path="/register" restricted>
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}