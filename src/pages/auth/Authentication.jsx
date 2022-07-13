import React, { useState } from "react";
import { Box, Button, CircularProgress, Grow, Typography } from "@mui/material";
import TextField from "../../components/TextFields/TextField";
import { login } from "../../store/reducers/auth-slice";
import { useDispatch } from "react-redux";
import { validators } from "./validators";
import "./style.scss";

const Authentication = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    userName: "",
    password: "",
  };
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(0);
  const [newUser] = useState(true);

  const loginStep = step === 1;
  const registerStep = step === 2;

  const registerHandler = () => {
    setLoading("Creating your account.. ❤ 🔥");
    // setData(initialState);
    setTimeout(() => {
      dispatch(login());
    }, 2000);
  };

  const loginHanlder = () => {
    setLoading("Signing in to your account.. ❤");
    // setData(initialState);
    setTimeout(() => {
      dispatch(login());
    }, 2000);
  };

  const changeStepHandler = () => {
    if (newUser) {
      // Register
      const error = validators.registerValidators[step](data);
      if (error) {
        setError(error);
      } else {
        setError(false);
        if (registerStep) {
          registerHandler();
        } else setStep(step + 1);
      }
    } else {
      // Login
      const error = validators.loginValidators[step](data);
      if (error) {
        setError(error);
      } else {
        setError(false);
        if (loginStep) {
          loginHanlder();
        } else setStep(step + 1);
      }
    }
  };

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    if (name === "userName") {
      value = value.toLowerCase();
    }
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginFields = (
    <>
      {step === 1 && (
        <Grow in={true} timeout={1000}>
          <div>
            <TextField
              autoFocus
              fullWidth
              placeholder="Enter your Password"
              value={data.password}
              name="password"
              onChange={onChangeHandler}
              error={error}
            />
          </div>
        </Grow>
      )}
    </>
  );

  const registerFields = (
    <>
      {step === 1 && (
        <Grow in={true} timeout={1000}>
          <div>
            <TextField
              autoFocus
              fullWidth
              value={data.name}
              placeholder="What's Your Name ?"
              name="name"
              onChange={onChangeHandler}
              error={error}
            />
          </div>
        </Grow>
      )}

      {step === 2 && (
        <Grow in={true} timeout={1000}>
          <div>
            <TextField
              autoFocus
              fullWidth
              placeholder="Create a Password"
              value={data.password}
              name="password"
              onChange={onChangeHandler}
              error={error}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              placeholder="Confirm Password"
              value={data.password}
              name="password"
              onChange={onChangeHandler}
              error={error}
            />
          </div>
        </Grow>
      )}
    </>
  );

  return (
    <Box className="page-center">
      <Box className="info-wrapper">
        <Box sx={{ width: 1 }}>
          {step === 0 && (
            <Grow in={true} timeout={1000}>
              <div>
                <TextField
                  autoFocus
                  fullWidth
                  value={data.userName}
                  placeholder="Enter Your Username"
                  name="userName"
                  onChange={onChangeHandler}
                  error={error}
                />
                <Typography variant="caption" color="#8fa100">
                  For Example Tahir.shareef ❤️
                  <p>Note : It will be Your Authentication username</p>
                </Typography>
              </div>
            </Grow>
          )}

          {newUser ? registerFields : loginFields}
        </Box>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: 1,
            }}
          >
            <CircularProgress size={30} />
            <p>{loading}</p>
          </Box>
        ) : (
          <Button onClick={changeStepHandler}>
            {newUser ? (
              <>{registerStep ? "Finish" : "Continue"}</>
            ) : (
              <>{loginStep ? "Login" : "Continue"}</>
            )}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Authentication;
