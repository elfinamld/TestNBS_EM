import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {Divider} from 'react-native-paper';
import {colour, fonts} from '../../../../assets/styles';
import styles from './styles';

const ModalConfirmation = forwardRef(
  ({onClose, funcPositive, txtPositive}, ref) => {
    const [visible, setVisible] = useState(false);
    const open = () => setVisible(true);
    const close = () => setVisible(false);

    useImperativeHandle(ref, () => ({open, close}));

    return (
      <ReactNativeModal
        style={styles.modalBody}
        onSwipeComplete={close}
        onBackdropPress={close}
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="fadeOutDownBig"
        swipeDirection={['right', 'left']}>
        <View style={styles.body}>
          <View style={styles.box}>
            <Text
              style={{
                ...fonts.semiBold_14,
                color: colour.TEXT,
                textAlign: 'center',
              }}>
              Sure you want to leave this page?
            </Text>
          </View>
          <Divider
            style={{
              height: 1.5,
              marginTop: 15,
              marginHorizontal: 10,
              backgroundColour: colour.TEXT,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: '100%',
              marginTop: 10,
              //   marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={close}
              activeOpacity={0.5}
              style={{
                width: '48%',
                borderRadius: 8,
                padding: 8,
                borderColor: colour.GREEN[6],
                borderWidth: 1,
                backgroundColor: colour.WHITE,
              }}>
              <Text style={styles.textBtn}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (typeof funcPositive === 'function') funcPositive();
                close();
              }}
              activeOpacity={0.5}
              style={{
                width: '48%',
                borderRadius: 8,
                padding: 8,
                backgroundColor: colour.GREEN[6],
              }}>
              <Text style={[styles.textBtn, {color: colour.WHITE}]}>
                {txtPositive || 'Yes'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    );
  },
);

export default ModalConfirmation;
