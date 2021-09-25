import {StackActions} from '@react-navigation/routers';
import React from 'react';

export const navigationRef = React.createRef();

export function _goBack() {
  navigationRef?.current?.goBack();
}

export function _push(screen, params) {
  navigationRef?.current?.dispatch(StackActions.push(screen, params));
}

export function _navigate(screen, params) {
  navigationRef?.current?.navigate(screen, params);
}

export function _replace(screen, params) {
  navigationRef?.current?.dispatch(StackActions.replace(screen, params));
}

export function _popToTop() {
  navigationRef?.current?.dispatch(StackActions.popToTop());
}
