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
    var user: User = {id: 0, username: "", password: "", fname: "", lname: "", email: "", phoneString: "", admin: false};

    var getUser = function () {
        return user;    // Or pull this from cookie/localStorage
    };

    var setUser = function (newUser: User) {
        user = newUser;
    };

    var isAdmin = function () {
        return user.admin;
    };

    var logout = function () {
        user = {id: 0, username: "", password: "", fname: "", lname: "", email: "", phoneString: "", admin: false};
    };

    return {
        getUser: getUser,
        setUser: setUser,
        isAdmin: isAdmin,
        logout: logout
    }

})();

export default CurrentUser;