import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';
import ReactNativeModal from 'react-native-modal';
import ListOption from '../../text/ListOption';

const OPTION_GENDER = [
  {id: 1, name: 'Man'},
  {id: 2, name: 'Women'},
];

const HeaderModal = ({onClose}) => (
  <View style={styles.boxHeader}>
    <IconButton
      color={colour.PRIMARY}
      size={20}
      icon={'close'}
      onPress={onClose}
    />
    <Text style={styles.txtHeader}>Choose Gender</Text>
  </View>
);

const ModalOption = forwardRef(({onClose, data}, ref) => {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const {onSelected, field} = data;
  useImperativeHandle(ref, () => ({open, close}));

  const onModalSelected = item => {
    if (data.hasOwnProperty('onSelected')) onSelected(field, item);
    close();
  };
  return (
    <ReactNativeModal
      style={styles.modalBody}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      isVisible={visible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      swipeDirection={'down'}>
      <View style={styles.body}>
        <HeaderModal onClose={onClose} />
        {OPTION_GENDER.map((el, id) => (
          <ListOption
            key={id}
            index={id}
            name={el.name}
            length={OPTION_GENDER.length}
            onPress={() => onModalSelected(el)}
          />
        ))}
      </View>
    </ReactNativeModal>
  );
});

export default ModalOption;
