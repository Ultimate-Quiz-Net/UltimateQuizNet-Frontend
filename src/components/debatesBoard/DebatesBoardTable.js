import React from "react";
import * as St from "../style";

function DebatesBoardTable({ headersName, children }) {
  return (
    <St.Table>
      <thead>
        <tr>
          {headersName.map((item) => {
            return (
              <St.TableHeaderColumn key={item.id}>{item}</St.TableHeaderColumn>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </St.Table>
  );
}

export default DebatesBoardTable;
