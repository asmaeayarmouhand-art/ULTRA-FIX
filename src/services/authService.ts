import { auth, db } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const signUp = async (email: string, pass: string, displayName: string) => {
  const userCredential = await userActionWrapper(() => createUserWithEmailAndPassword(auth, email, pass));
  const user = userCredential.user;
  
  // Create user profile in Firestore
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    displayName,
    createdAt: new Date().toISOString()
  });
  
  return user;
};

export const login = async (email: string, pass: string) => {
  const userCredential = await userActionWrapper(() => signInWithEmailAndPassword(auth, email, pass));
  return userCredential.user;
};

export const logout = () => signOut(auth);

export const subscribeToAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Wrapper to handle errors and future SMTP/Logging
const userActionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {
  try {
    return await action();
  } catch (error) {
    console.error("Auth Error:", error);
    throw error;
  }
};

// Placeholder for future SMTP integration
export const sendWelcomeEmail = async (email: string) => {
  console.log(`Future SMTP: Sending welcome email to ${email}`);
  // This will be linked to an API endpoint that uses SMTP
  // await fetch('/api/send-welcome', { method: 'POST', body: JSON.stringify({ email }) });
};
