class eventController {
  getActual = async (req, res) => {
    try {
      const response = await fetch(
        `https://betsetnew.herokuapp.com/express?complete_gte=${new Date()}`
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (e) {
      res.status(404).json({ message: "internal error" });
    }
  };

  getAll = async (req, res) => {
    try {
      const response = await fetch(
        `https://betsetnew.herokuapp.com/express?complete_gte=${new Date()}`
      );
      const data = await response.json();
      res.json(200).json(data);
    } catch (e) {
      res.status(404).json({ message: "internal error" });
    }
  };
}

module.exports = new eventController();
