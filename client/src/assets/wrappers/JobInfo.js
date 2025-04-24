import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .job-icon {
    margin-right: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }

  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;
export default Wrapper;
