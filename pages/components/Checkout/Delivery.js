import { css } from '@emotion/react';
import { prependOnceListener } from 'process';
import { useEffect, useState } from 'react';

const deliveryStyles = css`
  & > div {
    padding: 50px 0;
  }

  .information {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;

    div {
      width: 400px;
    }

    & > div > input,
    & > div > div > input {
      padding: 6px 10px;
      margin: 4px 0;
      width: 100%;
    }

    & > div > h3 {
      text-align: center;
    }

    .contactInformation {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      div {
        display: flex;
        gap: 10px;
      }
    }

    .shippingInformation {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      div {
        display: flex;
        gap: 10px;
        align-items: center;

        select {
          height: 32px;
        }
      }
    }
  }

  .deliveryMethod {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
      display: flex;
      flex-wrap: wrap;
      width: 400px;

      h5,
      p {
        margin: 0;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px;
      }
    }
  }
`;

export function getInputStateArray(inputState, index, event) {
  const array = [...inputState];
  array[index] = !(event.target.value === '');

  return array;
}

export default function Delivery(props) {
  const [deliveryMethod, setDeliveryMethod] = useState([true, false]);
  const [inputState, setInputState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    props.setIsFilledOut(inputState.every((element) => element));
  }, [inputState]);

  return (
    <div css={deliveryStyles}>
      <div className="information">
        <div className="contactInformation">
          <h3>Contact Information</h3>
          <div>
            <input
              placeholder="Firstname"
              onChange={(event) => {
                setInputState(getInputStateArray(inputState, 0, event));
              }}
            />
            <input
              placeholder="Lastname"
              onChange={(event) => {
                setInputState(getInputStateArray(inputState, 1, event));
              }}
            />
          </div>
          <input
            placeholder="Email"
            onChange={(event) => {
              setInputState(getInputStateArray(inputState, 2, event));
            }}
          />
        </div>
        <div className="shippingInformation">
          <h3>Shipping Information</h3>
          <div>
            <input
              placeholder="Address"
              onChange={(event) => {
                setInputState(getInputStateArray(inputState, 3, event));
              }}
            />
            <input
              placeholder="Postal Code"
              onChange={(event) => {
                setInputState(getInputStateArray(inputState, 4, event));
              }}
            />
          </div>
          <div>
            <input
              placeholder="City"
              onChange={(event) => {
                setInputState(getInputStateArray(inputState, 5, event));
              }}
            />
            <select placeholder="Select Country">
              {['Austria', 'Germany'].map((country) => (
                <option key={`country-select-${country}`}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="deliveryMethod">
        <h3>Delivery Method</h3>
        <div>
          <div style={deliveryMethod[0] ? { border: '1px solid black' } : {}}>
            <input
              type="radio"
              checked={deliveryMethod[0]}
              onChange={() => {
                setDeliveryMethod([true, false]);
              }}
            />
            <div>
              <h5>Standard</h5>
              <p>
                Oh he decisively impression attachment friendship so if
                everything.
              </p>
            </div>
          </div>
          <div style={deliveryMethod[1] ? { border: '1px solid black' } : {}}>
            <input
              type="radio"
              checked={deliveryMethod[1]}
              onChange={() => {
                setDeliveryMethod([false, true]);
              }}
            />
            <div>
              <h5>Express</h5>
              <p>
                Oh he decisively impression attachment friendship so if
                everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
