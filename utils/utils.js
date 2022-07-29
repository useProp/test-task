const handleParams = param => {
  if (param % 3 === 0 && param % 5 === 0) {
    return 'GN';
  }

  if (param % 3 === 0) {
    return 'G';
  }

  if (param % 5 === 0) {
    return 'N';
  }

  return param;
}

module.exports = {
  handleParams,
}
