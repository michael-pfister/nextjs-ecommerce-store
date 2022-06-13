import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getInputStateArray } from './Delivery';

const paymentStyles = css`
  display: flex;
  max-width: 400px;
  justify-content: center;
  flex-wrap: wrap;

  margin: 100px 0 210px 0;

  & > input {
    padding: 6px 10px;
    margin: 4px 0;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;
    gap: 10px;

    input {
      padding: 6px 10px;
      margin: 4px 0;
      width: 171px;
    }
  }
`;

export function getInputStateArrayControlledComponent(
  inputState,
  index,
  state,
) {
  const array = [...inputState];
  array[index] = state !== '';

  return array;
}

export default function Payment(props) {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpirationDate, setCreditCardExpirationDate] = useState('');
  const [creditCardSecurityCode, setCreditCardSecurityCode] = useState('');
  const [inputState, setInputState] = useState([false, false, false, false]);

  useEffect(() => {
    props.setIsFilledOut(false);
  }, []);

  useEffect(() => {
    props.setIsFilledOut(inputState.every((element) => element));
  }, [inputState]);

  return (
    <div css={paymentStyles}>
      <h3>Enter your Payment Details</h3>
      <input
        placeholder="Card Holder"
        onChange={(event) => {
          setInputState(getInputStateArray(inputState, 0, event));
        }}
      />
      <input
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        maxLength="19"
        placeholder="Card Number"
        value={creditCardNumber}
        onChange={(event) => {
          !isNaN(event.target.value.replaceAll(' ', '')) &&
            setCreditCardNumber(
              event.target.value
                .replaceAll(' ', '')
                .split('')
                .reduce((previousValue, currentValue) => {
                  if ('xxxx xxxx xxxx xxxx'[previousValue.length] === ' ') {
                    return previousValue + ' ' + currentValue;
                  }
                  return previousValue + currentValue;
                }, ''),
            );

          if (event.target.value.length === 19) {
            setInputState(getInputStateArray(inputState, 1, event));
          } else {
            setInputState(() => {
              const array = [...inputState];
              array[1] = false;
              return array;
            });
          }
        }}
      />
      <div>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="cc-exp"
          placeholder="Valid Thru"
          maxLength="7"
          value={creditCardExpirationDate}
          onChange={(event) => {
            !isNaN(event.target.value.replaceAll(' / ', '')) &&
              setCreditCardExpirationDate(
                event.target.value
                  .replaceAll(' / ', '')
                  .split('')
                  .reduce((previousValue, currentValue) => {
                    if (
                      ['x', 'x', ' / ', 'x', 'x'][previousValue.length] ===
                      ' / '
                    ) {
                      return previousValue + ' / ' + currentValue;
                    }
                    return previousValue + currentValue;
                  }, ''),
              );

            if (event.target.value.length === 7) {
              setInputState(getInputStateArray(inputState, 2, event));
            } else {
              setInputState(() => {
                const array = [...inputState];
                array[2] = false;
                return array;
              });
            }
          }}
        />
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="cc-csc"
          placeholder="CVC"
          maxLength="3"
          value={creditCardSecurityCode}
          onChange={(event) => {
            !isNaN(event.target.value) &&
              setCreditCardSecurityCode(event.target.value);

            if (event.target.value.length === 3) {
              setInputState(getInputStateArray(inputState, 3, event));
            } else {
              setInputState(() => {
                const array = [...inputState];
                array[3] = false;
                return array;
              });
            }
          }}
        />
      </div>
    </div>
  );
}
