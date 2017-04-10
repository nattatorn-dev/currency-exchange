import React              from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor         from 'redux-devtools-log-monitor'
import SliderMonitor      from 'redux-slider-monitor'
import DockMonitor        from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-H"
    changePositionKey="ctrl-Q"
    changeMonitorKey="ctrl-m"
    defaultPosition="bottom"
    defaultSize={0.3}
  >
    <SliderMonitor keyboardEnabled />
    <LogMonitor />
  </DockMonitor>,
)
