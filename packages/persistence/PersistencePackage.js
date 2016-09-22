'use strict';

import SaveCommand from './SaveCommand'
import Tool from '../tools/Tool'

export default {
  name: 'persistence',
  configure: function(config) {
    config.addCommand('save', SaveCommand);
    config.addTool('save', Tool, {target: 'document'});
    config.addIcon('save', { 'fontawesome': 'fa-save' });
    config.addLabel('save', {
      en: 'Save',
      de: 'Speichern'
    });
  },
  SaveCommand: SaveCommand,
};