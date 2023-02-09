import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dum123@mail.com",
    }, 
});

UserContext.displayName = "UserContext";

export default UserContext; 