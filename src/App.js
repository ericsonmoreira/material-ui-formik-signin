import React from 'react';
import {
  Button,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
} from '@material-ui/core';
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
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
          <Form>
            <Grid
              alignItems="center"
              component={Paper}
              container
              direction="column"
              justify="center"
              spacing={2}
            >
              <Grid item>
                <Field
                  component={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
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
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  onClick={submitForm}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
