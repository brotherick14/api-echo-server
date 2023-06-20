const axiosInstance = require('../utils/axiosInstance')
const { processFile } = require('./helperService')

const echoService = {
  filesData: async (req, res) => {
    try {
      const response = await axiosInstance.get('/secret/files');
      const { fileName } = req.query;
  
      // Filtrar archivos si se proporciona un nombre de archivo específico
      const filteredFiles = fileName
        ? response.data.files.filter((file) => file === fileName)
        : response.data.files;
  
      const fileDataPromises = filteredFiles.map(processFile);
      const formattedData = (await Promise.all(fileDataPromises)).filter(Boolean);
  
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(formattedData);
    } catch (error) {
      console.error('Error downloading files');
      res.status(500).json({ error: 'An error occurred' });
    }
  },
  listFiles: async (req, res) => {
    try {
      const response = await axiosInstance.get('/secret/files');
  
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error retrieving file names');
      res.status(500).json({ error: 'An error occurred' });
    }
  }  
}

module.exports = echoService
