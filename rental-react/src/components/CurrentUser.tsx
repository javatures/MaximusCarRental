interface User {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phoneString: string;
    admin: boolean;
}

var CurrentUser = (function () {
    var user: User;

    var getUser = function () {
        return user;    // Or pull this from cookie/localStorage
    };

    var setUser = function (newUser: User) {
        user = newUser;
    };

    return {
        getUser: getUser,
        setUser: setUser
    }

})();

export default CurrentUser;