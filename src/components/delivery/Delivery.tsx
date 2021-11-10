import { useForm } from 'react-hook-form';
import './delivery.scss';

const Delivery = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className='delivery-container'>
        <div className='route-container'>
          <form data-testid='form'>
            {/*  Route Section Start */}
            <div className='inner-container'>
              <p className='route-container-title'> Route </p>
              <label htmlFor='pickup' className='route-container-select-lable'>
                Pickup
              </label>
              <select
                {...register('pickup', { required: true })}
                className='route-container-select'
                style={{ marginLeft: 15 }}
                data-testid='pickup-dropdown'
              >
                <option data-testid='select-option' value=''>
                  Please select country
                </option>
                <option data-testid='netherland-option' value='netherland'>
                  Netherland
                </option>
                <option data-testid='germany-option' value='germany'>
                  Germany
                </option>
              </select>
              <input
                className={
                  !errors.addressPickup
                    ? 'route-container-address'
                    : 'route-container-address error-input'
                }
                placeholder='Address Pickup'
                {...register('addressPickup', {
                  required: true,
                  maxLength: 20,
                })}
              />

              {errors.pickup && (
                <p className='show-error'> please select pickup location</p>
              )}

              {errors.addressPickup &&
                errors.addressPickup.type === 'maxLength' && (
                  <p className='show-maxLength-error'>
                    please Enter Max 20 characters
                  </p>
                )}

              <label
                htmlFor='delivery'
                className='route-container-select-lable'
              >
                Delivery
              </label>
              <select
                {...register('delivery', { required: true })}
                className='route-container-select'
                style={{ marginLeft: 8 }}
                data-testid='delivery-dropdown'
              >
                <option value=''>please select country</option>
                <option value='netherland'>Netherland</option>
                <option value='germany' data-testid='germany-delivery-option'>
                  Germany
                </option>
              </select>

              <input
                className={
                  !errors.addressDelivery
                    ? 'route-container-address'
                    : 'route-container-address error-input'
                }
                placeholder='Address Delivery'
                {...register('addressDelivery', {
                  required: true,
                  maxLength: 20,
                })}
              />

              {errors.delivery && (
                <p className='show-error'>please select delivery location</p>
              )}

              {errors.addressDelivery &&
                errors.addressDelivery.type === 'maxLength' && (
                  <p className='show-maxLength-error'>
                    Please Enter Max 20 characters
                  </p>
                )}
            </div>
            {/*  Route Section End */}

            {/* freight section start  */}

            <div className='freight-container'>
              <p className='freight-container-title'> Freight Details </p>
              <div className='freight-container-goods'>
                <p> Type of goods</p>
                <div className='freight-container-goods-tabs'>
                  <input
                    name='tabs'
                    type='radio'
                    id='tab-1'
                    value='paper'
                    defaultChecked
                    className='freight-container-goods-tabs-btn'
                  />
                  <label htmlFor='tab-1' className='tabs-label'>
                    Paper
                  </label>
                  <input
                    name='tabs'
                    type='radio'
                    id='tab-2'
                    value='Plastic'
                    className='freight-container-goods-tabs-btn'
                  />
                  <label htmlFor='tab-2' className='tabs-label'>
                    Plastic
                  </label>
                  <input
                    name='tabs'
                    type='radio'
                    id='tab-3'
                    value='Textile'
                    className='freight-container-goods-tabs-btn'
                  />
                  <label htmlFor='tab-3' className='tabs-label'>
                    Textile
                  </label>
                  <input
                    name='tabs'
                    type='radio'
                    value='Other'
                    id='tab-4'
                    className='freight-container-goods-tabs-btn'
                  />
                  <label htmlFor='tab-4' className='tabs-label'>
                    Other
                  </label>
                </div>
              </div>

              <div className='freight-container-volume'>
                <p> Volume </p>
                <select
                  {...register('freightType')}
                  className='freight-container-volume-type'
                  data-testid='volume-dropdown'
                >
                  <option value='pallet'>Pallet</option>
                  <option value='container' data-testid='container'>
                    Container
                  </option>
                  <option value='boxes'>Boxes</option>
                </select>
                <label
                  htmlFor='volumeCount'
                  className='freight-container-volume-label'
                  id='count'
                >
                  Count
                </label>
                <input
                  aria-labelledby='count'
                  type='number'
                  min='0'
                  defaultValue='0'
                  pattern='^-?[0-9]\d*\.?\d*$'
                  className={
                    !errors.volumeCount
                      ? 'freight-container-volume-number'
                      : 'freight-container-volume freight-container-volume-error'
                  }
                  {...register('volumeCount', {
                    required: true,
                  })}
                />
                <div className='dimension-field'>
                  <label htmlFor='length' id='length'>
                    Length(cm)
                  </label>
                  <input
                    aria-labelledby='length'
                    type='number'
                    min='0'
                    pattern='^-?[0-9]\d*\.?\d*$'
                    className='freight-container-volume-dimension'
                    {...register('length')}
                  />
                  X
                </div>
                <div className='dimension-field'>
                  <label htmlFor='width' id='width'>
                    Width(cm)
                  </label>
                  <input
                    aria-labelledby='width'
                    type='number'
                    min='0'
                    pattern='^-?[0-9]\d*\.?\d*$'
                    className='freight-container-volume-dimension'
                    {...register('width')}
                  />
                  X
                </div>
                <div className='dimension-field'>
                  <label htmlFor='height' id='height'>
                    Height(cm)
                  </label>
                  <input
                    aria-labelledby='height'
                    type='number'
                    min='0'
                    pattern='^-?[0-9]\d*\.?\d*$'
                    className='freight-container-volume-dimension'
                    {...register('height')}
                  />
                </div>
              </div>
              <div className='weight-container'>
                <label htmlFor='weight' className='weight-container-label'>
                  Weight
                </label>
                <input
                  className='weight-container-input'
                  placeholder='kg'
                  type='number'
                  min='0'
                  pattern='^-?[0-9]\d*\.?\d*$'
                  {...register('weight')}
                />
              </div>
            </div>
            {/* freight section end  */}

            {/* Date and Time section start */}
            <div className='date-container'>
              <p className='freight-container-title'> Date & Time </p>
              <p className='date-container-pickup'>
                <label htmlFor='pickupDate' className='date-container-label'>
                  Pickup Date
                </label>
                <input
                  data-testid='pickup-date-picker'
                  className={
                    !errors.pickupDate
                      ? 'date-container-input'
                      : 'date-container-input date-container-error'
                  }
                  type='date'
                  id='start'
                  min='2010-01-01'
                  max='3010-12-31'
                  {...register('pickupDate', {
                    required: true,
                  })}
                />
                <label
                  htmlFor='pickupTime'
                  className='date-container-label'
                  id='pickupTime'
                >
                  Time
                </label>
                <input
                  aria-labelledby='pickupTime'
                  className='date-container-input'
                  type='time'
                  {...register('pickupTime')}
                ></input>
              </p>
              <p className='date-container-delivery'>
                <label htmlFor='deliveryDate' className='date-container-label'>
                  Delivery Date
                </label>
                <input
                  data-testid='delivery-date-picker'
                  className={
                    !errors.deliveryDate
                      ? 'date-container-input'
                      : 'date-container-input date-container-error'
                  }
                  type='date'
                  id='start'
                  min='2010-01-01'
                  max='3010-12-31'
                  {...register('deliveryDate', {
                    required: true,
                  })}
                ></input>
                <label
                  htmlFor='deliveryTime'
                  className='date-container-label'
                  aria-labelledby='deliveryTime'
                >
                  Time
                </label>
                <input
                  data-testid='delivery-time-picker'
                  aria-labelledby='deliveryTime'
                  className='date-container-input'
                  type='time'
                  {...register('deliveryTime')}
                />
              </p>
            </div>
            {/* Date and Time section end */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
