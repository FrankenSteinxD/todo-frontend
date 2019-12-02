import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ServerErrorImg from 'assets/500.svg';

const FullPageError = (src, title = '', decsription = '') => () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    pt={20}
    pb={20}
  >
    <Box mb={5}>
      <img width="256" src={src} alt={title} />
    </Box>
    <Typography color="primary" variant="h5">
      {title}
    </Typography>
    <Box maxWidth="512px" textAlign="center">
      <Typography color="primary" variant="body2">
        {decsription}
      </Typography>
    </Box>
  </Box>
);

export const FullPage500Error = FullPageError(
  ServerErrorImg,
  'Something went wrong!',
  'Sorry for having troubles, it might be a network connection error. Please refresh the page and try again!',
);
