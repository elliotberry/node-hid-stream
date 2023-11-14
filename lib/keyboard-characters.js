import Keyboard from './keyboard.js';
import KeyboardBase from './keyboard-base.js';

class KeyboardCharacters extends KeyboardBase {
  constructor(options) {
    super(Keyboard, options);

    this.device.on('data', ({charCodes}) => this.emit('data', charCodes.join('')));
  }
}

export default KeyboardCharacters;
