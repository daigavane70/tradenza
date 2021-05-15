export const SETCURRENTUSER = "SETCURRENTUSER";
export const USERLOGOUT = 'USERLOGOUT';

export const setCurrentUser = (user) => ({
    type: SETCURRENTUSER,
    user: user,
});

export const userLogout = () => ({
    type: USERLOGOUT
})
