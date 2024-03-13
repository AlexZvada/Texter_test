export function searchHelper(data, code, startFrom) {
  const searchAfter = data.indexOf(code);
  const startIndex = data.indexOf(startFrom, searchAfter);
  
  if (code === "time") {
    const string = data.substring(startIndex);
    const array = string.split("\n");
    const result = [];
    array.forEach((str) => {
      const res = str.substring(str.indexOf(":") + 1);
      const time = res.trim().split(" ");
      result.push(time[0]);
    });
    return result;
  }

  const end = "\n";
  const endIndex = data.indexOf(end, startIndex);
  const string = data.substring(startIndex, endIndex);
  return string.substring(string.indexOf(":") + 1);
}
