import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    backgroundColor: '#eab676',
    height: 260,
  },
  cardActions: {
    backgroundColor: '#4a4a4a',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));