import React from 'react';
import {
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import './assets/scss/index.scss';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const schema = Yup.object().shape({
  email: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const useStyles = makeStyles(theme => ({
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
  },
  field: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
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
          <Form className={classes.form}>
            <Typography variant="h4">Login</Typography>
            <Field
              className={classes.field}
              component={TextField}
              label="Email"
              name="email"
              type="email"
              variant="outlined"
            />
            <Field
              className={classes.field}
              component={TextField}
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{
                label: <Typography variant="subtitle1">Lembre-me</Typography>,
              }}
              name="rememberMe"
              type="checkbox"
            />
            <Button
              className={classes.submitButton}
              color="primary"
              disabled={isSubmitting}
              disableElevation
              onClick={submitForm}
              variant="contained"
            >
              Submit
            </Button>
            {isSubmitting && <LinearProgress color="secondary" />}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
