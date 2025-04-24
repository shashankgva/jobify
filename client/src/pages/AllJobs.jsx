import { toast } from 'react-toastify';
import customFetch from '../../../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import SearchContainer from '../components/SearchContainer';
import JobsContainer from '../components/JobsContainer';
import { createContext, useContext } from 'react';

export const loader = async ({ request }) => {
  console.log(request.url);

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);

  try {
    const { data } = await customFetch.get('/jobs', { params });
    console.log(`data>>>`, data);
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(
      error?.response?.data?.error || 'An error occurred. Please try again.'
    );
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
