import { useRouteError } from 'react-router-dom';

const Error: React.FC = () => {
  const error = useRouteError();

  console.log(`route error >>>`, error);

  if (error.status === 404) {
    return (
      <div>
        <h1>404 not found!</h1>
      </div>
    );
  }

  return <h3>Something went wrong!</h3>;
};

export default Error;
