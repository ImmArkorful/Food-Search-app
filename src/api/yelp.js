import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer UWVo-bdxLvndr2_t29PT4KAjWqlaUC7qY0QWT92BjUkPH_yeSeDIDkffMjYoYNy5q7CWQXzI3p9XwPqet3FdmQsZDL1uUvZYNUp-COauG8DufvijZZkn0dWLTtZlX3Yx',
  },
});
