import {ActivityIndicator, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import fetchCarOptions from '../api/fetchCarOptions';

const CarDropdown = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([{label: 'Loading', value: 'loading'}]);

  const ActivityIndicatorCallback = useCallback(
    ({color, size}: {color: string; size: number}) => (
      <ActivityIndicator color={color} size={size} />
    ),
    [],
  );

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      try {
        const result = await fetchCarOptions();
        if (!ignore && result.data) {
          setItems(result.data);
          setValue(result.data[0].value);
        }
      } catch (err) {
        // error logging
        console.log({err});
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <View style={{gap: 50}}>
      <DropDownPicker
        loading={loading}
        ActivityIndicatorComponent={ActivityIndicatorCallback}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        activityIndicatorColor="red"
        activityIndicatorSize={30}
      />

      <Text style={{color: 'black', fontSize: 12}}>
        Reference Activity Indicator
      </Text>
      {loading ? <ActivityIndicator color="blue" size={30} /> : null}
    </View>
  );
};

export default CarDropdown;
