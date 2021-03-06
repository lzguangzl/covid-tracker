import React from "react";
import numeral from "numeral";
import "../styles/Table.css";

function Table({ countries }) {
  let index = 0;
  return (
    <div className='table'>
      {countries.map(({ updated, country, cases }) => (
        <tr key={updated}>
          <td>
            {++index}. {country}
          </td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
