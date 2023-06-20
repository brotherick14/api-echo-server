const axiosInstance = require('../utils/axiosInstance');
const { processFile } = require('./helperService');

const echoService = {
  filesData: async (req, res) => {
    try {
      const response = await axiosInstance.get('/secret/files');
      const fileDataPromises = response.data.files.map(processFile);
      const formattedData = (await Promise.all(fileDataPromises)).filter(Boolean);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(formattedData);
    } catch (error) {
      console.error(`Error downloading files`);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
};

module.exports = echoService;