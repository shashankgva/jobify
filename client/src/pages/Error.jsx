import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import notFound from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  console.log(`error>>>`, error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={notFound} alt="Not Found" />
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/dashboard">Back Home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h1>Something went wrong!!!</h1>
      </div>
    </Wrapper>
  );
};
export default Error;
