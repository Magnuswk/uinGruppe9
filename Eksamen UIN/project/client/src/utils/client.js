import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
  token: process.env.REACT_APP_SANITY_WRITE_TOKEN
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
  ignoreBrowserTokenWarning: true,
  apiVersion: '2021-04-21'
});

export default client;
