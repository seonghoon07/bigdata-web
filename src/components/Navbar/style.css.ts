import { style } from '@vanilla-extract/css';

export const navbar = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
  width: '100%',
  height: '72px',
});

export const navItem = style({
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
    padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
