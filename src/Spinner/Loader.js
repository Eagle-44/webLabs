import styled from "styled-components";
import React from "react";

function Loader() {
  return(
    <div className="d-flex justify-content-center">
            <div className="spinner-border m-5" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
  );
}

export default Loader;