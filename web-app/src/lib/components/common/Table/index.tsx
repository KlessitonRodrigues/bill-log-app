import {
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
} from "src/lib/base/styled/Table";

type Table = {
  headers: { key: string; label: string }[];
  rows: { [key: string]: string | number }[];
};

const TableView = (Props: Table) => {
  const { headers, rows } = Props;

  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          {headers.map((header) => (
            <TableHeaderData key={header.key}>{header.label}</TableHeaderData>
          ))}
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {headers.map((header) => (
              <TableData key={header.key}>{row[header.key]}</TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
