import React from 'react';
import {
  Button,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import './assets/scss/index.scss';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '30rem',
    
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        validationSchema={schema}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.form}>
            <Typography variant="h4">Login</Typography>
            <Field
              component={TextField}
              label="Email"
              name="email"
              type="email"
              variant="outlined"
            />
            <Field
              component={TextField}
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
            {isSubmitting && (
              <Grid item>
                <LinearProgress />
              </Grid>
            )}
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              onClick={submitForm}
              variant="contained"
            >
                  Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
