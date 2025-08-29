const { categorizeData, buildConcatString } = require("../utils/helpers");

const FULL_NAME = process.env.FULL_NAME; 
const DOB = process.env.DOB;       
const EMAIL = process.env.EMAIL;
const ROLL_NUMBER = process.env.ROLL_NUMBER;

const processData = (req, res) => {
  try {
    const data = req.body.data || [];
    console.log("Incoming Request Data:", data);

    const { oddNumbers, evenNumbers, alphabets, specialChars, sum } = categorizeData(data);
    const concatString = buildConcatString(data);

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: concatString
    };

    console.log("Sending Response:", response);
    res.status(200).json(response);

  } catch (err) {
    console.error("Error occurred:", err.message);
    res.status(500).json({ is_success: false, error: err.message });
  }
};

module.exports = { processData };
