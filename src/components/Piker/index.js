import React, { useState } from "react";

import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

export function Piker(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={props.moedas}
            setOpen={setOpen}
            setValue={setValue}
            listMode="FLATLIST"
            onChangeValue={(valor) => props.onChange(valor)}
            
        // style={zIndex=40}
        />
    );
}