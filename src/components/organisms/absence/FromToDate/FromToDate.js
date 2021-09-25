import React, {useState} from 'react';
import moment from 'moment';
import {View} from 'react-native';
import RowText from '../../../molecules/row/RowText';

const FromToDate = () => {
  console.log(moment().format('DD MMM YYYY'));
  const [date_1, setDate_1] = useState(new Date());
  const [date_2, setDate_2] = useState(new Date());
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);

  return (
    <View>
      <RowText
        text={'From'}
        startOne={true}
        start={date_1}
        open={open_1}
        setOpen={setOpen_1}
        setDate={setDate_1}
        date={date_1}
      />
      <RowText
        text={'To'}
        open={open_2}
        start={date_2}
        setOpen={setOpen_2}
        setDate={setDate_2}
        date={date_2}
      />
    </View>
  );
};

export default FromToDate;
