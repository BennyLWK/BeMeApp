import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {appleAuth} from '@invertase/react-native-apple-authentication';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        appleLogin: async () => {
          try {
            console.log('start Apple Sign-In');
            // Start the sign-in request
            const appleAuthRequestResponse = await appleAuth.performRequest({
              requestedOperation: appleAuth.Operation.LOGIN,
              requestedScopes: [
                appleAuth.Scope.EMAIL,
                appleAuth.Scope.FULL_NAME,
              ],
            });

            // Ensure Apple returned a user identityToken
            if (!appleAuthRequestResponse.identityToken) {
              throw 'Apple Sign-In failed - no identify token returned';
            }
            console.log(
              'Apple identityToken => ',
              appleAuthRequestResponse.identityToken,
            );
            // Create a Firebase credential from the response
            const {identityToken, nonce} = appleAuthRequestResponse;
            const appleCredential = auth.AppleAuthProvider.credential(
              identityToken,
              nonce,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(appleCredential)
              // Use it only when user Sign's up,
              // so create different social signup function
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                console.log('current User', auth().currentUser);
                // firestore()
                //   .collection('users')
                //   .doc(auth().currentUser.uid)
                //   .set({
                //     fname: '',
                //     lname: '',
                //     email: auth().currentUser.email,
                //     createdAt: firestore.Timestamp.fromDate(new Date()),
                //     userImg: null,
                //   })
                //   //ensure we catch any errors at this stage to advise us if something does go wrong
                //   .catch((error) => {
                //     console.log(
                //       'Something went wrong with added user to firestore: ',
                //       error,
                //     );
                //   });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch((error) => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
          console.log('Apple login done');
        },
        googleLogin: async () => {
          try {
            console.log('start google login');
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();
            console.log('Google idToken => ', idToken);
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(
              idToken,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)
              // Use it only when user Sign's up,
              // so create different social signup function
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                console.log('current User', auth().currentUser);
                // firestore()
                //   .collection('users')
                //   .doc(auth().currentUser.uid)
                //   .set({
                //     fname: '',
                //     lname: '',
                //     email: auth().currentUser.email,
                //     createdAt: firestore.Timestamp.fromDate(new Date()),
                //     userImg: null,
                //   })
                //   //ensure we catch any errors at this stage to advise us if something does go wrong
                //   .catch((error) => {
                //     console.log(
                //       'Something went wrong with added user to firestore: ',
                //       error,
                //     );
                //   });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch((error) => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
          console.log('google login done');
        },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
              'user_friends',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            console.log('FB idToken => ', data.accessToken);
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(facebookCredential)
              // Use it only when user Sign's up,
              // so create different social signup function
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                console.log('current User', auth().currentUser);
                // firestore().collection('users').doc(auth().currentUser.uid)
                // .set({
                //     fname: '',
                //     lname: '',
                //     email: auth().currentUser.email,
                //     createdAt: firestore.Timestamp.fromDate(new Date()),
                //     userImg: null,
                // })
                // //ensure we catch any errors at this stage to advise us if something does go wrong
                // .catch(error => {
                //     console.log('Something went wrong with added user to firestore: ', error);
                // })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch((error) => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
          console.log('FB login done');
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};