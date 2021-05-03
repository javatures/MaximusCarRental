interface Renter {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phoneString: string;
}

var CurrentUser = (function () {
    var renter: Renter;

    var getRenter = function () {
        return renter;    // Or pull this from cookie/localStorage
    };

    var setRenter = function (newRenter: Renter) {
        renter = newRenter;
    };

    return {
        getRenter: getRenter,
        setRenter: setRenter
    }

})();

export default CurrentUser;