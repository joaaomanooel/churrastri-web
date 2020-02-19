/* eslint-disable no-console */
import Reactotron, { trackGlobalErrors } from 'reactotron-react-js';

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  const tron = Reactotron
    .configure()
    .use(trackGlobalErrors())
    .connect();

  tron.clear();

  console.tron = tron;
}
