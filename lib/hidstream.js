import hid from 'node-hid';
import {Stream} from 'node:stream';


export function isUndefined(obj) {
  return obj === void 0;
}


class Hidstream extends Stream {
  constructor(opts) {
    super();

    const options = opts || {};

    verify(options);

    this.options = options;
    this.path = options.path;
    this.vendorId = options.vendorId;
    this.productId = options.productId;
    this.device = newHidDevice(options);

    this.device.on('data', data => this.emit('data', data));
    this.device.on('error', error => this.emit('error', error));
    this.device.on('end', end => this.emit('end', end));
  }

  close() {
    this.device.close();
    this.emit('close');
  }
}

function verify({path, vendorId, productId}) {
  if (Array.prototype.every([path, vendorId, productId], isUndefined)) {
    throw new Error('no HID path or vendorId/productId specified');
  }

  if (isUndefined(path)) {
    if (isUndefined(productId)) {
      throw new Error('no HID productId specified');
    }

    if (isUndefined(vendorId)) {
      throw new Error('no HID vendorId specified');
    }
  }
}

function newHidDevice({path, vendorId, productId}) {
  if (path) {
    return new hid.HID(path);
  }

  return new hid.HID(vendorId, productId);
}

export default Hidstream;
