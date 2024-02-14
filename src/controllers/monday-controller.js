const mondayService = require('../services/monday-service');
const transformationService = require('../services/transformation-service');
const {  } = require('../constants/transformation');
const axios = require('axios');

async function executeAction(req, res) {

  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    const { inputFields } = payload;
    console.log("inputFields");
    console.log(inputFields);
    const { boardId, itemId, sourceColumnId, targetColumnId } = inputFields;
    console.log("boardId");
    console.log(boardId, itemId, sourceColumnId, targetColumnId,);

      axios.post('https://ix67rnfag5.execute-api.us-east-1.amazonaws.com/default/', {
        update_board:inputFields,
      })
      .then((response) => {
        // console.log(response);
      }, (error) => {
        // console.log(error);
      });

      return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

async function executeActionPoptech(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    const { inputFields } = payload;
    console.log("inputFields");
    console.log(inputFields);
    const { boardId, itemId} = inputFields;
    console.log("boardId");
    console.log(boardId, itemId);

      axios.post('https://xxb6hqyh6j.execute-api.us-east-1.amazonaws.com/default/WebsiteMonday', {
        'event' : {'pulseId' : itemId},
      })
      .then((response) => {
        // console.log(response);
      }, (error) => {
        // console.log(error);
      });

      return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

async function getRemoteListOptions(req, res) {
  try {
    return res.status(200).send(TRANSFORMATION_TYPES);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

module.exports = {
  executeAction,
  getRemoteListOptions,
  executeActionPoptech
};
