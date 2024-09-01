import { createUserWithEmailAndPassword, doSignInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
    return auth.signOut(auth);
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password)
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
};


