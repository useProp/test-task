const { handleParams } = require('../utils/utils');

class GetParamsController {
  get(req, res) {
    const { param } = req.params;

    const message = handleParams(Number(param));

    return res
      .status(200)
      .json({ message })
  }

}

module.exports = new GetParamsController();
