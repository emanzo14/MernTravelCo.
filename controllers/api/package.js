const Package = require('../../models/package')

module.exports = {
   //index,
  show
};

// async function index(req, res) {
//     const Package = await Package.find({}).sort('location').populate('category').exec();
//     // re-sort based upon the sortOrder of the categories
//     package.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//     res.json(items);
//   }

async function show(req, res) {
  const package = await Package.findById(req.params.id);
  res.json(package);
}