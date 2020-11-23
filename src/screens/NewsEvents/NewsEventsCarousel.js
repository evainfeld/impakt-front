import React from 'react'
import Carousel from 'react-native-snap-carousel'
import {
  Dimensions,
  SafeAreaView,
  View,
} from 'react-native'
import { differenceInSeconds, format } from 'date-fns'
import CountDown from 'react-native-countdown-component'

// helpers:
import { useStore } from 'helpers/store.js'

// components:
import { HeaderRegular, RegularText } from 'components/shared/basic/index.js'

// constants:
import constants from 'constants/general'
const { width: screenWidth } = Dimensions.get('window')

const Counter = ({ event }) => {
  const date = new Date(event.whenDate)
  const timeNow = new Date()
  return (
    <CountDown
      size={16}
      until={differenceInSeconds(date, timeNow)}
      style={{ marginTop: -10 }}
      digitStyle={{ backgroundColor: 'transparent', marginTop: 2, marginLeft: -4, marginRight: -4 }}
      digitTxtStyle={{ color: 'yellow', fontFamily: 'Exo' }}
      timeLabelStyle={{ color: 'yellow', fontFamily: 'Exo', fontSize: 10, marginTop: -15 }}
      separatorStyle={{ color: 'yellow', fontFamily: 'Exo', fontSize: 16 }}
      timeToShow={['D', 'H', 'M', 'S']}
      timeLabels={{ d: 'days', h: 'h', m: 'min', s: 'sec' }}
      showSeparator
    />
  )
}

const CarouselCard = ({ item, index }) => {
  const { state: { activeSlideIndex } } = useStore()
  const isComingEvent = new Date(item.whenDate) > new Date
  isActive = activeSlideIndex === index
  
  return (
    <View style={{
      backgroundColor: isComingEvent ? 'verydarkred' : 'transparent',
      borderColor: 'verydarkred',
      borderWidth: 1,
      flex: 1,
      padding: 10,
      marginLeft: 5,
      marginRight: 5,
      justifyContent: 'center',
    }}>
      {isActive && isComingEvent && <Counter event={item} />}

      <HeaderRegular style={{ fontFamily: 'Exo', marginTop: 0, marginBottom: 5, fontSize: 16 }}>{item.title}</HeaderRegular>
      <RegularText style={{ fontFamily: 'Exo', marginTop: 0, marginBottom: 5, fontSize: 14 }}>{item.content}</RegularText>
      <RegularText style={{ fontFamily: 'Exo', marginTop: 0, marginBottom: 5, fontSize: 12, color: 'transparent' }}>{item.region}</RegularText>
      <RegularText style={{ fontFamily: 'Exo', marginTop: 0, marginBottom: 5, fontSize: 12 }}>{format(new Date(item.whenDate), 'MM/dd/yy (kk:mm)')}</RegularText>
    </View>
  )
}

const NewsEventsCarousel = () => {
  const { state, dispatch } = useStore()
  const events = state.events
  const CAROUSEL_WIDTH = screenWidth - (2 * constants.mainPadding)
  const CARD_WIDTH = (CAROUSEL_WIDTH - 80) // -80 is to make previous & next event's cards visible 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          layout={'default'}
          useScrollView={true} // flatList causes a buggy behavior
          activeSlideOffset={0}
          apparitionDelay={220}
          firstItem={state.activeSlideIndex}
          initialScrollIndex={state.activeSlideIndex}
          getItemLayout={(data, index) => ({
            length: CARD_WIDTH,
            offset: CARD_WIDTH * index,
            index,
          })}
          ref={ref => {
            if (!state.eventCarouselRef) {
              dispatch({ type: 'setEventCarouselRef', payload: ref })
            }
          }}
          data={events}
          containerCustomStyle={{ flexGrow: 0 }}
          sliderWidth={CAROUSEL_WIDTH}
          itemWidth={CARD_WIDTH}
          renderItem={(props) => <CarouselCard {...props} />}
          onBeforeSnapToItem={(slideIndex) => {
            dispatch({
              type: 'setActiveSlideIndex',
              payload: slideIndex,
            })
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default NewsEventsCarousel
