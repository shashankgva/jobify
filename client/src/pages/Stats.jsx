import { useLoaderData } from 'react-router-dom';
import customFetch from '../../../utils/customFetch';
import { ChartsContainer, StatsContainer } from '../components';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();
  const { data } = useQuery(statsQuery);

  // if (isLoading) {
  //   return <h4>Loading...</h4>;
  // }
  // if (isError) {
  //   return <h4>Error</h4>;
  // }
  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
