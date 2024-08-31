import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0,  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexDirection: 'column', py: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Diversity3Icon sx={{ mr: 1, color: 'white' }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Denta Flex
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Link href="/" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px' }}>
                Home
              </Link>
              <Link href="/pricing" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px' }}>
                Pricing
              </Link>
              <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', fontSize: '14px' }}>
                Contact Us
              </Link>
              
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2, borderTop: '1px solid #555', pt: 2 }}>
            <Typography variant="body2" color="white">
              © 2024 Denta Flex. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link to="/privacy-policy" color="inherit" sx={{ textDecoration: 'none', fontSize: '12px' }}>
                Privacy Policy
              </Link>
              
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
