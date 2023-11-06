const MainService = require("../services/MainServices")

exports.getMain = async (req, res, next) => {
  try {
    const mainData = await MainService.mainDataService();
    res.render("index", {
      title : "기본 구조"
    });
  } catch (exception) {
    // 추후 Logger 연결.
    console.log("getMain Error : " + exception);
  }
};
