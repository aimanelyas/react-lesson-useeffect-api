import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";


export const Profile = () => {
    const { username} = useContext(AppContext);

    return (
        <div>
            <h1> Hi, this page belongs to {username}. You may change the profile to your name below!</h1>
            <ChangeProfile />
        </div>
    );
}