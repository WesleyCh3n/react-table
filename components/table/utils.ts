export const generateColumns = (
  count: number = 10,
  prefix: string = "column-"
) =>
  new Array(count).fill(0).map((column, columnIndex) => ({
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150
  }));

export const generateData = (
  columns: ReturnType<typeof generateColumns>,
  count = 200,
  prefix = "row-"
) =>
  new Array(count).fill(0).map((row, rowIndex) => {
    return columns.reduce(
      (rowData: Record<string, any>, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`
      }
    );
  });
