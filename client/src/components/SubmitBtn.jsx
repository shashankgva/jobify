import { useNavigate } from 'react-router-dom';

const SubmitBtn = (formBtn) => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button type="submit" className={`btn btn-block ${formBtn && 'form-btn'}`}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export default SubmitBtn;
