import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: {
      reducer (state, action) {
        state.isAuthenticated = true
        state.user = action.payload
      },
      prepare ({ user, displayName }) {
        return {
          payload: {
            uid: user.uid,
            displayName,
            photoURL: user.photoURL || ''
          }
        }
      }
    },

    loggedOut (state) {
      state.isAuthenticated = false
      state.user = {}
    },

    toggleLoader (state, { payload }) {
      state.isLoading = payload
    }
  }
})

export const { loggedIn, toggleLoader, loggedOut } = userSlice.actions

export default userSlice.reducer