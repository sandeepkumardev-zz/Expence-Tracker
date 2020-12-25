import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

const ExpenseTracker = ({handleChange, state}) => {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" action={
        <FormGroup row>
        <FormControlLabel
          control={
            <Switch checked={state} onChange={handleChange} name="checkedA" />
          }
          label="use Voice"
        />
      </FormGroup>
        }/>
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {state && <InfoCard />}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
