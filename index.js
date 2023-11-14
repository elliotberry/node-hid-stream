
import HidKeyboardPacket from './lib/hid-keyboard-packet.js';
import Hidstream from './lib/hidstream.js';
import KeyboardBase from './lib/keyboard-base.js';
import keyboardParser from './lib/keyboard-parser.js';

export default {
  Hidstream: Hidstream,
  HidKeyboardPacket: HidKeyboardPacket,
  KeyboardBase: KeyboardBase,
  keyboardParser: keyboardParser,
};
