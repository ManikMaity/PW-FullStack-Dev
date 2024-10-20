import UserModel from "../Model/user.model.js";

export async function getProfileController(req, res){
    try {
      const email = req.query.email;
      console.log(email);
      const user = await UserModel.findOne({ email });
      if (user) {
        res.json(user);
      } else {
        throw new Error("User Not Found");
      }
    } catch (err) {
      res.json({ msg: err.message });
    }
  }