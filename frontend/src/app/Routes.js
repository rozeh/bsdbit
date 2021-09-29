import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import BusanIt from './BusanIt/BusanIt'
import Consulting from './BusanIt/Consulting'
import Education from './BusanIt/Education'
import Join from './BusanIt/Join'
import Reservation from './BusanIt/Reservation'
import Seminar from './BusanIt/Seminar'
import DetailBoard from './BusanIt/DetailBoard'
import Login from './BusanIt/Login'
import Admin from './BusanIt/admin/Admin'


export function Routes() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Switch>
        <Route path="/" component={BusanIt} exact />
        <Route path="/education" component={Education} />
        <Route path="/seminar" component={Seminar} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/join" component={Join} />
        <Route path="/board/:boardId" component={DetailBoard} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
    </Switch>
  )
}
