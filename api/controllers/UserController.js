function setName(req, res) {
  var name = req.params.name;
  console.log(name);
  req.session.nickname = name;
  res.send({result: 'success'});
}

module.exports = {
  setName: setName
};