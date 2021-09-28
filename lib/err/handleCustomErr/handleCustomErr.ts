import type { GraphQLError } from 'graphql/error/GraphQLError';
import type { GraphQLFormattedError } from 'graphql/error/formatError';

const handleCustomErr = ({
  locations,
  path,
  message,
  originalError,
}: GraphQLError): GraphQLFormattedError => {
  let res = 'Could not format an error.';

  if (typeof message === 'string') {
    res = message;
  }

  if (typeof originalError?.message === 'string') {
    res = originalError.message;
  }

  // establish Sentry SDK for storing errors
  // such as those hereby reported.

  return {
    locations,
    path,
    message: res,
  };
};

export default handleCustomErr;
