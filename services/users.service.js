angular.module('tps').factory('UserService', userService);

function userService(UsersConstants){
    var userService = {};

    userService.getAll = getAll;
    userService.getByUsername = getByUsername;
    userService.getById = getById;
    userService.create = create;

    var users = UsersConstants.users;

    function getAll(){
        return users;
    }

    function getByUsername(username){
        for(var i = 0; i < users.length; i++){
            if(username.toLowerCase() === users[i].username.toLowerCase()){
                return users[i];
            }
        }

        return null;
    }

    function getById(id){
        for(var i = 0; i < users.length; i++){
            if(id.toString() === users[i].id.toString()){
                return users[i];
            }
        }

        return null;
    }

    function create(username, firstName, lastName,
                    type, hiringCompanyObj, emailAddress, password){
        var id = 1000;

        for(var i = 0; i < users.length; i++){
            id = Math.max(id, users[i].id + 1);
        }

        users.push({
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            type: type,
            hiringCompany: hiringCompanyObj,
            emailAddress: emailAddress,
            password: password,
            created: new Date()
        })
    }

    return userService;
}