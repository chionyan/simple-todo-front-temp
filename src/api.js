const ENDPOINT = 'http://localhost:3000';

export const index = () =>
  fetch(`${ENDPOINT}/todos`)
    .then(response => response.json());
