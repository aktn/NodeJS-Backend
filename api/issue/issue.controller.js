var Issue = require('./issue.model');
var path = require('path'); // For creating paths

//Returning all issues
exports.index = function(req, res){
    Issue.find({}, function(err, issues) {
        if (err) res.send(err);
        res.json(issues);
    });
};

//Returning particular issue
exports.show = function(req, res) {
    Issue.findById(req.params.id, function(err, issue) {
        if (err) res.send(err);
        res.json(issue);
    });
};

//Backend search
exports.search = function(req, res) {
    Issue
        //search against keywords provided by the user
       .find({'$text':{'$search':req.params.term}}) 
       .exec(function (err, issues) {
         if(err) { return handleError(res, err); }
         return res.status(200).json(issues);
       });
};