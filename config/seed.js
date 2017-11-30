var Issue = require('../api/issue/issue.model');

//For Seeding admin data
Issue.find({}).remove(function(){
    Issue.create({
            key: '13131312',
            title: 'MongoDB data',
            description: 'This data comes from mongodb',
            severity: 'high',
            assignTo: 'Josh',
            foundBy: 'Junior',
            location: 'Home page',
            status: 'close',
            version: '1',
            progress: 'Handling',
            projectId: '31212311'
        },
        function()
        {
            console.log('Issues data has been seeded!');
        });
});


