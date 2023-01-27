module.exports = function (req, res, next) {
  if (req.url.endsWith('/') && req.url !== '/') {
    res.writeHead(301, {
      Location: req.url.slice(0, -1)
    })
    res.end()
  } else { next() }
}
