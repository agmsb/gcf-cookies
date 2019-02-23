const escapeHtml = require('escape-html');

/**
 * Responds to an HTTP request with Cookie value by parsing headers
 * req GCF request context
 * res GCF response context.
 */

exports.helloCookie = (req, res) => {
  let cookie;

  switch (req.get('content-type')) {
    // if application/json
    case 'application/json':
      cookie = req.headers.cookie;
      break;

    // if text/plain
    case 'text/plain':
      name = req.headers.cookie;
      break;

    // if POST
    case 'application/x-www-form-urlencoded':
      name = req.headers.cookie;
      break;
  }

  res.status(200).send(`Hello ${escapeHtml(cookie || 'Cookie')}!`);
};