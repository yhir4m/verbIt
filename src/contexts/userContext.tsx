import React, { createContext, useState, useContext, ReactNode} from 'react';

interface UserContextType {
    userCourse: String;
    setUserCourse: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const URL = import.meta.env.VITE_DJANGO_API_URL;
export const UserProvider = ({ children }: {children:React.ReactNode}) => {
    const [userCourse,setUserCourse] = useState<string>('it')
    
    /*const getGeneralsUser = async () => {
        try {
          const token = localStorage.getItem('token');

          if (!token) {
            console.error('No token found in localStorage');
            return;
          }
      
          const response = await fetch(`${URL}generalUsers`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            return;
          }
          const data = await response.json();
          return data.data;
        } catch (error) {
          console.error('An error occurred while fetching general users:', error);
        }
    };*/
      
    return (
        <UserContext.Provider value={{userCourse,setUserCourse}}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto de autenticación
export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("use general debe usarse dentro de un Userprovider");
    }
    return context;
}