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
