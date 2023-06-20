const axiosInstance = require('../utils/axiosInstance');

const MINIMUM_COLUMN_COUNT = 4;
const TEXT_INDEX = 1;
const NUMBER_INDEX = 2;
const HEX_INDEX = 3;

const processCsvLine = (line) => {
    const columns = line.split(',');
  
    if (columns.length < MINIMUM_COLUMN_COUNT) {
      return null;
    }
  
    const text = columns[TEXT_INDEX].trim();
    const number = parseInt(columns[NUMBER_INDEX]);
    const hex = columns[HEX_INDEX].trim();
  
    return (text && !isNaN(number) && hex)
      ? { text, number, hex }
      : null;
  };
  
  const processFile = async (file) => {
    try {
      const fileResponse = await axiosInstance.get(`/secret/file/${file}`);
      const csvData = fileResponse.data;
      const csvLines = csvData.split('\n');
      
      const lines = csvLines
        .map(processCsvLine)
        .filter(Boolean);
  
      return (lines.length > 0) ? { file, lines } : undefined;
    } catch (error) {
      console.error(`Error downloading file: ${file}`);
      return undefined;
    }
  };

module.exports = { processCsvLine, processFile };