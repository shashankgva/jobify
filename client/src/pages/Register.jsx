import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../../../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful! Please login to continue.');
    return redirect('/login');
  } catch (error) {
    console.log(`error>>>`, error);
    toast.error(
      error?.response?.data?.error || 'An error occurred. Please try again.'
    );
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Shash" />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="Adiga"
          labelText="Last name"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="shash@mail.com" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <p>
          Already have an account?{' '}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
