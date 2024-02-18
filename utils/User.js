import axios from "axios";
const getUser = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getUser;
