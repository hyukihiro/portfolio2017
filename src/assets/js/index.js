import $ from 'jquery';
import controller from './_module/_controller';
import PageView from './_module/_pageView';
import Fv from './_module/_fv';
import { date, weather } from './_module/_meta';

$(() => {
  new PageView();
  Fv();
  date();
  weather();

  console.log("%cSpecial Thanks K.I","padding:4px; background: #333; color: #fff");
  // console.log("%cTake a look to the code on github : http://github.com/ivandaum/ivandaum","padding:3px; background: #000; color: #fff");
  console.log('');
});
