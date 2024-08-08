import React, { useEffect, useRef } from 'react';
import { Alert, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import useAlert from '../hooks/useAlert';

const CustomAlert = () => {
  const { message, closeAlert, severity } = useAlert();
  const alertRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        closeAlert();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeAlert]);

  return (
    <Zoom in={Boolean(message)}>
      <Box
        sx={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
        }}
        ref={alertRef}
      >
        <Alert severity={severity || 'success'} sx={{ display: message ? 'flex' : 'none' }}>
          {message}
        </Alert>
      </Box>
    </Zoom>
  );
};

export default CustomAlert;