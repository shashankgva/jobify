import {
  Link,
  redirect,
  Form,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../../../utils/customFetch.js';
import { toast } from 'react-toastify';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors = { msg: '' };
    if (data.password.length < 6) {
      errors.msg = 'Password must be at least 6 characters long';
      return errors;
    }
    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login successful!');
      return redirect('/dashboard');
    } catch (error) {
      console.log(`error>>>`, error);
      toast.error(error?.msg || 'An error occurred. Please try again.');
      return error;
    }
  };

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'zippy@gmail.com',
      password: 'abc123',
    };

    try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(
        error?.response?.data?.error || 'An error occurred. Please try again.'
      );
    }
  };

  const errors = useActionData();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {errors?.msg && (
          <p className="error" style={{ color: 'red' }}>
            {errors.msg}
          </p>
        )}
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="shash@mail.com"
        />
        <FormRow type="password" name="password" labelText="Password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>

        <p>
          Not a member yet?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
