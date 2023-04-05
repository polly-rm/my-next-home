import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import MyPersonalDataCreate from "./MyPersonalData/MyPersonalDataCreate";
import MyPropertiesList from "./MyPropertiesList/MyPropertiesList";
import MyPersonalDataEdit from "./MyPersonalData/MyPersonalDataEdit";
import Unauthorized from "../Unauthorized/Unauthorized";


const Profile = () => {
    const { user, profile } = useContext(AuthContext);

    return (
        <>
            {
                user.id
                    ?
                    <div>
                        {
                            profile.id
                                ? <MyPersonalDataEdit />
                                : <MyPersonalDataCreate />
                        }
                        < MyPropertiesList />
                    </div>
                    :
                    <Unauthorized />
            }
        </>
    );
}

export default Profile;