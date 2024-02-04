import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../assets/firebase";
import { errorsList } from "../assets/firebase/errors";
import { useDispatch } from "react-redux";
import { loggedIn, toggleLoader } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function checkIsUserLoggedIn () {
    const loggedUser = JSON.parse(localStorage.getItem('user')) || null

    if (loggedUser) {
      dispatch(loggedIn({ 
        user: { 
          uid: loggedUser.uid, 
          photoURL: loggedUser.photoURL 
        }, 
        displayName: loggedUser.auth.currentUser.displayName 
      }))
      return true
    }

    return false
  }

  async function authenticate ({ e, authType }) {
    e.preventDefault()

    try {
      dispatch(toggleLoader(true))

      if (authType === 'login') {
        await login(e)
      } else {
        await register(e)
      }

      return { success: true }
    } catch (e) {
      return { success: false, message: 'Opa, deu ruim' }
    }
  }

  //logs in user
  async function login (e) {
    const email = e.target.email.value
    const password = e.target.password.value

    return await setPersistence(auth, browserLocalPersistence).then(async () => {
      return await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
        dispatchLogin(userCredential)
      }).catch(error => {
        return { success: false, message: errorsList[error.code] }
      }).finally(() => {
        dispatch(toggleLoader(false))
      })
    })
    
  }

  async function register (e) {
    const email = e.target.email.value
    const password = e.target.password.value
    const displayName = e.target.name.value

    console.log('auth', auth.currentUser)
    return await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
      updateProfile(auth.currentUser, { displayName }).then(() => {
        console.log('profile updated')
      })
      dispatchLogin({ ...userCredential, displayName })
    }).catch((error) => {
      return { success: false, message: errorsList[error.code] }
    }).finally(() => {
      dispatch(toggleLoader(false))
    })
  }

  function dispatchLogin (userCredential) {
    localStorage.setItem('user', JSON.stringify({ ...userCredential.user, displayName: userCredential.displayName }))
    dispatch(loggedIn(userCredential))
    enterApplication()
    return { success: true } 
  }

  async function logout () {
    await signOut(auth);
    localStorage.removeItem("user");
  }

  function enterApplication () {
    return navigate('/')
  }

  //register user
  return { authenticate, login, checkIsUserLoggedIn, logout }
}

