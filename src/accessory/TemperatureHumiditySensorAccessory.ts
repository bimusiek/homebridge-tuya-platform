import { PlatformAccessory } from 'homebridge';
import { TuyaPlatform } from '../platform';
import BaseAccessory from './BaseAccessory';
import { configureHumiditySensor } from './TemperatureHumiditySensorAccessory/configureHumiditySensor';
import { configureTemperatureSensor } from './TemperatureHumiditySensorAccessory/configureTemperatureSensor';

const SCHEMA_CODE = {
  SENSOR_STATUS: ['va_temperature', 'va_humidity', 'humidity_value'],
};

export default class TemperatureHumiditySensorAccessory extends BaseAccessory {

  constructor(platform: TuyaPlatform, accessory: PlatformAccessory) {
    super(platform, accessory);

    configureTemperatureSensor(this);
    configureHumiditySensor(this);
  }

  requiredSchema() {
    return [SCHEMA_CODE.SENSOR_STATUS];
  }



}
