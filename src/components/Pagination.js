import React from "react";

function Pagination(props) {
  const {sendUrl} = props;
  return <div className="pagination">
  <div className="pagination-container">
    <div
      className="pagination-cell"
      onClick={() =>
        sendUrl("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
      }
    >
      1
    </div>
    <div
      className="pagination-cell"
      onClick={() =>
        sendUrl("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
      }
    >
      2
    </div>
    <div
      className="pagination-cell"
      onClick={() =>
        sendUrl("http://www.mocky.io/v2/59ac293b100000d60bf9c239")
      }
    >
      3
    </div>
  </div>
</div>;
}

export default Pagination;
