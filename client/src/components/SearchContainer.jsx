import { Link, useSubmit } from 'react-router-dom';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import SubmitBtn from './SubmitBtn';
import { useAllJobsContext } from '../pages/AllJobs';

function SearchContainer() {
  const {
    searchValues: { search, jobStatus, jobType, sort },
  } = useAllJobsContext();
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <h5 className="form-title">Search Form</h5>
      <form className="form-center">
        <FormRow
          type="search"
          name="search"
          defaultValue={search}
          onChange={debounce((form) => {
            submit(form);
          })}
        />
        <FormRowSelect
          labelText="job status"
          name="jobStatus"
          list={['all', ...Object.values(JOB_STATUS)]}
          defaultValue={jobStatus}
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        />
        <FormRowSelect
          labelText="job type"
          name="jobType"
          list={['all', ...Object.values(JOB_TYPE)]}
          defaultValue={jobType}
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        />
        <FormRowSelect
          name="sort"
          defaultValue={sort}
          list={[...Object.values(JOB_SORT_BY)]}
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        />
        <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
          Reset Search values
        </Link>
        <SubmitBtn formBtn />
      </form>
    </Wrapper>
  );
}
export default SearchContainer;
