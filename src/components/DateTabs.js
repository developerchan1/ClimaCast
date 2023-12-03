import { useEffect, useState } from 'react'
import {  FlatList } from 'react-native'
import isEmpty from 'lodash/isEmpty'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

import Button, { BUTTON_TYPE } from './Button'

dayjs.extend(isToday)

/**
 * Renders a list of date tabs, which are buttons that allow the user to switch between different dates.
 * 
 * @param {object} props - The properties of the component
 * @param {array} props.data - The list of dates to be displayed as tabs
 * @param {string} props.selectedDateTab - The currently selected date tab
 * @param {function} props.setSelectedDateTab - A function to set the selected date tab
 */
const DateTabs = ({ data, selectedDateTab, setSelectedDateTab }) => {
  const [dateTabs, setDateTabs] = useState([])
  
  useEffect(() => {
    if (!isEmpty(data)) {
      const newDateTabs = []
      data.list.forEach((item) => {
        if (!newDateTabs.includes(dayjs(item.dt * 1000).format('YYYY-MM-DD'))) {
          newDateTabs.push(dayjs(item.dt * 1000).format('YYYY-MM-DD'))
        }
      })
      setDateTabs(newDateTabs)
      setSelectedDateTab(newDateTabs[0])
    }
  }, [data])

  return (
    <FlatList
      horizontal
      data={dateTabs}
      contentContainerStyle={{ padding: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Button
          style={{ padding: 10, marginRight: 8 }}
          buttonText={dayjs(item).isToday() ? 'Today' : dayjs(item).format('DD MMM')}
          buttonType={selectedDateTab === item ? BUTTON_TYPE.SOLID: BUTTON_TYPE.GHOST_PRIMARY}
          onPress={() => setSelectedDateTab(item)}
        />
      )}
    />
  )
}

export default DateTabs
