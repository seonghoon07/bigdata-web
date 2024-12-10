import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '430px',
  height: '932px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
});

export const header = style({
  backgroundColor: '#007bff',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
});

export const main = style({
  flex: 1,
  padding: '20px',
});

export const linkList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const link = style({
  display: 'block',
  padding: '10px',
  margin: '10px 0',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#007bff',
  ':hover': {
    backgroundColor: '#e9ecef',
  },
});
