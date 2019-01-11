var mongoose = require('mongoose');
mongoose.connect('mongodb://faizan:tablet23@ds119044.mlab.com:19044/mongodb12', { useNewUrlParser: true }); //<---//ta k warning na de 


module.exports = mongoose;