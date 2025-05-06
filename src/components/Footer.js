import React from 'react';
import BirthdayList from '../controllers/BirthdayList';

const Footer = () => (
  <div>
    <div class="col-xs-12 col-sm-6">
      <BirthdayList />
    </div>
    <div class="col-xs-12 col-sm-5 col-sm-offset-1">
      <h1>Other useful info</h1>
      <a href="https://www.youtube.com/watch?v=GZQe_dysK5U">
      How to reenable a Google Calendar&nbsp;</a>
      that you have been invited to in the past, but which you have somehow lost track of, and
      are too embarrassed to ask your grandchildren to help you find
    </div>
    <div class="hidden-xs col-sm-4 col-sm-12 col-lg-4">
      &nbsp;
    </div>
    <div class="col-xs-12">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
  </div>
);

export default Footer;
