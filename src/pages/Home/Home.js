import css from "./Home.module.css";
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';


  export default function Home() {
    const { isLoggedIn, user } = useAuth();

    return (
      <div className={css.container}>
        {isLoggedIn ? (
          <div >
            <h1 className={css.title}>Welcome to Task manager, {user.name}!</h1>
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </div>
        ) : (
          <div className={css.container}>
            <h1 className={css.title}>Welcome to Task manager!</h1>
            <p className={css.logReg}>
              Please{' '}
              <Link to="/login" className={css.link}>
                login
              </Link>{' '}
              or{' '}
              <Link className={css.link} to="/register">
                register
              </Link>{' '}
            </p>
          </div>
        
        )}
      </div>
    );
  }
  