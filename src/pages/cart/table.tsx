import React, { FC } from 'react';
import { StyledTable } from './styledTable';

interface TableProps {
  data: { [key: string]: any }[];
  columns: string[];
}

const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;