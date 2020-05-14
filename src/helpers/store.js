import React, { createContext, useContext, useReducer } from 'react'
import events from './dummyData/mockedNewsAndEvents.json' // mocking data with https://mockaroo.com/
import chatMessages from './dummyData/dummyMessage.json'
import orderBy from 'lodash/orderBy'

const StoreContext = createContext()
const initialState = {
  region: null,
  numberOfUsers: Math.floor((Math.random() * 100) + 1),
  menuOpened: false,
  events: null, //orderBy(events, (e) => new Date(e.date), 'asc'),
  nextEvent: 0,
  chatMessages: null, //chatMessages,
  topics: null,
  propagandas: null,
}

replace = (state, keyToReplace, value) => {
  let newState = state
  newState[keyToReplace] = value
  return {
    ...newState
  }
}

findNextEventIndex = (eventsInRegion) => {
  const now = new Date
  return eventsInRegion.findIndex((e) => (new Date(e.date) > now))
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRegion':
      // // find & order all events in region:
      // const eventsInRegion = orderBy(
      //   events.filter(
      //     (e) => e.region === action.payload.name
      //   ), (e) => new Date(e.date), 'asc')
      // // add events to the state:
      // let tempState = replace(state, 'events', eventsInRegion)
      // // find and add next coming event
      // tempState = replace(tempState, 'nextEvent', findNextEventIndex(eventsInRegion))
      // tempState = replace(tempState, 'activeSlideIndex', findNextEventIndex(eventsInRegion))
      // return replace(tempState, 'region', action.payload)
      return replace(state, 'region', action.payload)
    case 'setEvents':
      return replace(state, 'events', action.payload)
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
