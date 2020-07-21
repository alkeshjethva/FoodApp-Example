import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'

import RootReducer from '../Reducers'
import rootReducer from '../Reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(createLogger(),),)

let persistor = persistStore(store)

export { store, persistor }