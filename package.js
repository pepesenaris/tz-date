// Meteor package definition.
Package.describe({
  name: 'aramk:tz-date',
  version: '1.0.0',
  summary: 'A Date class in JavaScript with support for time zones.',
  git: 'https://github.com/aramk/tz-date.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'coffeescript@2.2.1_1',
    'underscore',
    'risul:moment-timezone@0.3.0_1'
  ], ['client', 'server']);
  api.export([
    'TimeZoneDate'
  ], ['client', 'server']);
  api.addFiles([
    'src/TimeZoneDate.coffee',
  ], ['client', 'server']);
});
