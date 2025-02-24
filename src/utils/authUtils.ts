import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '../firebase';

interface FormElements extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
}

const authUtils = {
  handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as FormElements;
    const email = form.email.value;
    const password = form.password.value;
    const firstName = form.firstName?.value || "";
    const lastName = form.lastName?.value || "";
    const displayName = `${firstName} ${lastName}`.trim(); // Concatenar nombre y apellido

    try {
      // Crear un nuevo usuario con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (displayName) {
        // Actualizar el perfil del usuario con su nombre
        await updateProfile(user, { displayName });
      }

      console.log('Usuario registrado con nombre:', user.displayName);
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  },
  handleLogin: async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso:", userCredential.user);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        console.error("Usuario no encontrado. Regístrate primero.");
      } else if (error.code === "auth/wrong-password") {
        console.error("Contraseña incorrecta. Intenta de nuevo.");
      } else {
        console.error("Error en la autenticación:", error);
      }
    }
  },
};

export default authUtils;
