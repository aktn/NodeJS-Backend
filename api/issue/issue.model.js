var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new Schema({
    $key: String,
    title: { type: String,  trim:true},
    description: String,
    severity: String,
    assignTo: String,
    foundBy: String,
    location: String,
    status: String,
    version: String,
    progress: String,
    projectId: String,
}).index({  //backend search will search againt title & description
  	'title': 'text'
	});

module.exports = mongoose.model('issues',IssueSchema);