import ProgramSelection from "../models/programModel.js";
// Function to calculate the total fee based on selected programs
const calculateFee = async (userId) => {
  try {
    const programSelection = await ProgramSelection.findOne({ userId });

    // Define the fee amount for each program
    const programFees = {
      "Computer Science": 1000,
      "BS Information Technology": 1200,
      "BS Interior Desing": 2000,
      "BS Food Science And Technology": 1000,
      "BS Information Security": 3000,
      "BS Networks And Telecommunication": 1000,
      "BS English Language & Literature": 1000,
      // Add more program fees as needed
    };

    // Calculate the total fee based on selected programs
    let totalFee = 0;
    programSelection.selectedPrograms.forEach((program) => {
      if (programFees[program]) {
        totalFee += programFees[program];
      }
    });

    return totalFee;
  } catch (error) {
    throw new Error("Error calculating fee: " + error.message);
  }
};

export default calculateFee;
