import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";

// Definir la estructura del contexto
interface UserContextType {
  userCourse: string;
  setUserCourse: React.Dispatch<React.SetStateAction<string>>;
  languagesDict: { [key: string]: string };
}

// Cargar variables de entorno
const ALL_COURSES_FULL = import.meta.env.VITE_ALL_COURSES_FULL.split(",");
const ALL_COURSES = import.meta.env.VITE_ALL_COURSES.split(",");

// Crear el contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userCourse, setUserCourse] = useState<string>("en");

  // Memoizar el diccionario para evitar recomputaciones innecesarias
  const languagesDict = useMemo(() => {
    let dict: { [key: string]: string } = {};
    ALL_COURSES.forEach((item:string, index:number) => {
      dict[item] = ALL_COURSES_FULL[index];
    });
    return dict;
  }, []);

  return (
    <UserContext.Provider value={{ userCourse, setUserCourse, languagesDict }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir el contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de un UserProvider.");
  }
  return context;
};
