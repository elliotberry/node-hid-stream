import KeyboardCharacters from './keyboard-characters.js';
import split from 'split';
import KeyboardBase from './keyboard-base.js';

class KeyboardLines extends KeyboardBase {
  constructor(options) {
    super(KeyboardCharacters, options);

    this.device.pipe(split()).on('data', data => this.emit('data', data));
  }
}

export default KeyboardLines;
