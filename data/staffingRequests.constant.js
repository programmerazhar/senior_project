angular.module('tps').constant('StaffingRequestsConstant', {
    staffingRequests: [
        {
            id: 1000,
            company: 'SpaceX',
            hiringUser: {
                id: 1003,
                username: 'stephenspacex',
                firstName: 'Stephen',
                lastName: 'SpaceX',
                type: 'hiring',
                hiringCompany: 'SpaceX',
                emailAddress: 'stephen@spacex.com',
                password: 'password1234'
            },
            active: true,
            skillKeywords: [ 'c#', 'javascript', 'database'],
            created: new Date(2016, 8, 6, 23, 12, 1, 3)
        },
        {
            id: 1001,
            company: 'ACME Inc.',
            hiringUser: {
                id: 1002,
                username: 'henryhiring',
                firstName: 'Henry',
                lastName: 'Hiring',
                type: 'hiring',
                hiringCompany: 'ACME Inc.',
                emailAddress: 'henry@acmeinc.com',
                password: 'password1234'
            },
            active: true,
            skillKeywords: [ 'secretary', 'microsoft office', 'clerical'],
            created: new Date(2016, 6, 15, 35, 11, 10, 23)
        }
    ]
});