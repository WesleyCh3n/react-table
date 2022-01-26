import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";

import type { ReactElement } from "react";
import { generateData, generateColumns } from "./utils";

export interface TableProps {}

const columns = generateColumns(10);
const data = generateData(columns, 10);

export function MyTable(_props: TableProps): ReactElement {
  return (
    <BaseTable fixed data={data} width={600} height={400}>
      {columns.map((col) => (
        <Column {...col} />
      ))}
    </BaseTable>
  );
}
