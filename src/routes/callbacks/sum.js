const sumTwoNumbers = (req, res) => {
  if (req.body !== null && req.body !== undefined) {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const result = num1 + num2

    res.json({
      result: result
    })
  }
}

module.exports = sumTwoNumbers
