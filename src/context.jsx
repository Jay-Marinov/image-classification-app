import React, { useState, useEffect, useContext, useReducer } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import reducer from "./reducer";

const initialState = {
  loading: false,
  model: null,
  imgURL: "",
  imgRef: null,
  result: [],
  history: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { model, imgRef, imgURL } = state;

  const loadModel = async () => {
    setLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const identify = async () => {
    try {
      const result = await model.classify(imgRef.current);
      setResult(result);
      setHistory(imgURL);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const setLoading = (value) => {
    dispatch({ type: "SET_LOADING", payload: value });
  };

  const setModel = (value) => {
    dispatch({ type: "SET_MODEL", payload: value });
  };

  const setImgURL = (value) => {
    dispatch({ type: "SET_IMGURL", payload: value });
  };

  const setImgRef = (value) => {
    dispatch({ type: "SET_IMGREF", payload: value });
  };

  const setResult = (value) => {
    dispatch({ type: "SET_RESULT", payload: value });
  };

  const setHistory = (value) => {
    dispatch({ type: "SET_HISTORY", payload: value });
  };

  return (
    <AppContext.Provider
      value={{ ...state, setImgURL, setImgRef, identify, setHistory }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
