import { Transaction } from "../shared/interfaces/transactions";

export const convertToCSV = (
  objArray: Record<string, string | number | boolean | Date | Transaction>[]
) => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str = "";
  const headers = Object.keys(array[0]).join(",") + "\r\n";
  str += headers;

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line !== "") line += ",";
      line += array[i][index];
    }
    str += line + "\r\n";
  }
  return str;
};
