const FIX_VALUE = 4;

export const getConvertedValue = (value) => value.toFixed(FIX_VALUE).replace(/\.0+$/, '');
