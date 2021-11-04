import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { setImgURL, identify } = useGlobalContext();

  const inputValue = useRef();

  return (
    <section className="form-section">
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Image URL"
            onClick={() => {
              inputValue.current.value = "";
            }}
            onChange={(event) => {
              setImgURL(event.target.value);
            }}
            ref={inputValue}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={() => {
            identify();
            inputValue.current.value = "";
          }}
        >
          Identify
        </button>
      </form>
    </section>
  );
};

export default Form;
