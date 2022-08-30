function validateZip(req, res, next) {
  const zip = req.params.zip;
  /* Below, we check to see if either zip's length is NOT 5, *OR*
  if Zip's value, as a number, would be NaN */
  if (zip.length !== 5 || isNaN(Number(zip))) {
    next(`Zip (${zip}) is invalid!`);
  } else {
    next();
  }
}

module.exports = validateZip;
