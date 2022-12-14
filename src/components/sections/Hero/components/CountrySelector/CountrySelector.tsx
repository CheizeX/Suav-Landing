import React, { FC, useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export const Countries: FC = () => {
  const [country, setCountry] = useState(null);
  const options = useMemo(() => countryList().getData(), []);
  console.log('[SELECTED COUNTRY]', country);

  const handleChange = (selectedCountry: any) => {
    setCountry(selectedCountry);
  };

  const colourStyles = {
    control: (styles: any, { isFocused, isSelected }: any) => {
      return {
        ...styles,
        paddingLeft: '35px',
        marginTop: '20px',
        height: '70px',
        borderRadius: '13px',
        border: '2px solid #D5D5D5',
        fontSize: '14px',
        color: 'red',
        width: '100%',
        outline: 'transparent',
        ...((isFocused || isSelected) && {
          color: '#FFF',
          outline: '1px solid #FF00FF',
          border: '1px solid #FF00FF',
          boxShadow: '0px 0px 0px 1px #FF00FF',
          ':hover': {
            outline: '1px solid #FF00FF',
            border: '1px solid #FF00FF',
            boxShadow: '0px 0px 0px 1px #FF00FF',
          },
        }),
      };
    },
    option: (styles: any, { isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        color: 'black',
        fontSize: '12px',
        cursor: isDisabled ? 'not-allowed' : 'default',
        outline: 'none',
        ...(isSelected && {
          backgroundImage: 'linear-gradient(98deg,#d95aff 0%,#05efff 100%)',
          color: '#FFF',
          opacity: '0.6',
          outline: 'none',
        }),
        ...(isFocused && {
          backgroundImage: 'linear-gradient(98deg,#d95aff 0%,#05efff 100%)',
          color: '#FFF',
          outline: 'none',
        }),
      };
    },
  };
  return (
    <Select
      id="country-select"
      instanceId="country-select"
      placeholder="Select City"
      styles={colourStyles}
      options={options}
      onChange={handleChange}
      value={country}
    />
  );
};
