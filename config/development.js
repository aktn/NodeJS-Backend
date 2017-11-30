module.exports = {
    mongo:{
        'database'  : 'mongodb://127.0.0.1/issue-tracking'
    },
    port      	: process.env.PORT || 8080,
    seedDB      : true, 
    secret      : 'Thisissecret'
};
    