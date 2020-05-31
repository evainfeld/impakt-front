import React, { createContext, useContext, useReducer } from 'react'
import orderBy from 'lodash/orderBy'

const StoreContext = createContext()
const initialState = {
  region: null,
  numberOfUsers: Math.floor((Math.random() * 100) + 1), // TODO on backend
  menuOpened: false,
  events: [],
  chatMessages: [],
  topics: [],
  propagandas: [],
  // events carousel:
  nextEvent: 0,
  eventCarouselRef: null,
  activeSlideIndex: 0,
}

replace = (state, keyToReplace, value) => {
  let newState = state
  newState[keyToReplace] = value
  return {
    ...newState
  }
}

findNextEventIndex = (events) => {
  const now = new Date
  const orderedEvents = orderBy(events, (e) => new Date(e.whenDate), 'asc')
  const index = orderedEvents.findIndex((e) => {
    return (new Date(e.whenDate)) > now 
  })
  return (index > 0) ? index : 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRegion':
      return replace(state, 'region', action.payload)
    case 'setEvents':
      const nextEvent = findNextEventIndex(action.payload)
      let tempState = replace(state, 'nextEvent', nextEvent)
      tempState = replace(tempState, 'activeSlideIndex', nextEvent)
      return replace(tempState, 'events', orderBy(action.payload, (e) => new Date(e.whenDate), 'asc'))
    case 'toggleMenu':
      return replace(state, 'menuOpened', !state.menuOpened)
    case 'setEventCarouselRef':
      return replace(state, 'eventCarouselRef', action.payload)
    case 'scrollToSlide':
      state.eventCarouselRef.snapToItem(action.payload)
      return state
    case 'setActiveSlideIndex':
      return replace(state, 'activeSlideIndex', action.payload)
    case 'setChatMessages':
      return replace(state, 'chatMessages', action.payload)
    case 'addChatMessage':
      return replace(state, 'chatMessages', state.chatMessages.concat(action.payload))
    case 'setTopics':
      return replace(state, 'topics', action.payload)
    case 'setPropagandas':
      return replace(state, 'propagandas', action.payload)
    case 'reset':
      return initialState
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
