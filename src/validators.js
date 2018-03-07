export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const maxNumbers = value =>
/\d{5}/.test(value) && /.*?(\d)[^\d]*/g.test(value) ? undefined : 'Tracking number can only consist of numbers';

// export const maxChars = value =>
//     /\d{5}/.test(value) ? undefined : 'Tracking number must be five numbers';

// export const numbersOnly = value =>
//     /.*?(\d)[^\d]*/g.test(value) ? undefined : 'Tracking number can only consist of numbers';

// export const trackingLength = value => value.length === 5 && /\d{5}/.test(value) ? undefined : 'Tracking number must be 5 numbers';