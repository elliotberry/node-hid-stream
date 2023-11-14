import Hidstream from './hidstream.js';
import keyboardParser from './keyboard-parser.js';
import KeyboardBase from './keyboard-base.js';

class Keyboard extends KeyboardBase {
  constructor(options) {
    super(Hidstream, options);

    this.device.on('data', data => this.emit('data', keyboardParser(data)));
  }
}


export default Keyboard;
