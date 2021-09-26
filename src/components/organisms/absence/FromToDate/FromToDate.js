import React, {useState} from 'react';
import {View} from 'react-native';
import RowText from '../../../molecules/row/RowText';

const FromToDate = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date2, setDate2] = useState(date);
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);

  return (
    <View>
      <RowText
        text={'From'}
        date={date}
        setDate={setDate}
        setShow={setShow}
        show={show}
        mode={mode}
        setMode={setMode}
      />
      <RowText
        text={'To'}
        date={date2}
        setDate={setDate2}
        setShow={setShow2}
        show={show2}
        mode={mode2}
        setMode={setMode2}
      />
    </View>
  );
};

export default FromToDate;
