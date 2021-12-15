import React from 'react';
import Select from 'react-select';

function CustomSelect ({options, onChange,defaultValue}){
    return(
        <Select styles={{display:"inline"}} option={options} onChange={onChange} defaultValue={defaultValue}/>
    );
}

export default CustomSelect