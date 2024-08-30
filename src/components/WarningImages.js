import React from 'react';

function WarningImages() {
  return (
    <>
      <div id="images" className="col-xs-12">
        <div className="imgwithcaption col-xs-12 col-md-4 col-sm-4 col-lg-4">
          <img src="images/danger.jpg" className="h" />
          <div className="panel panel-default caption">
            Calling to find out kids' addresses while letting baby drive is a leading cause of car accidents
          </div>
        </div>
        <div className="imgwithcaption col-xs-12 col-md-4 col-sm-4 col-lg-4">
          <img src="images/lookout.jpg" className="v" />
          <div className="panel panel-default caption">
            Grandfather photographed at moment he begins to plan to forget child's address. Also, child cruelly led to believe that he is navigating tricycle
          </div>
        </div>
        <div className="imgwithcaption col-xs-12 col-md-4 col-sm-4 col-lg-4">
          <img src="images/distracted.jpg" className="h" />
          <div className="panel panel-default caption">
            Our scientists have proven it impossible to both dance and recall children's addresses at same time
          </div>
        </div>
      </div>
      {/* // This will clear the float in small size screens only
      <div class="clearfix visible-sm" ng-if="needsClearfixForPeriod($index, 2)"></div>
      // This will clear the float in Med Size screens only
      <div class="clearfix visible-md" ng-if="needsClearfixForPeriod($index, 3)"></div>
      // This will clear the float in Large Size screens only
      <div class="clearfix visible-lg" ng-if="needsClearfixForPeriod($index, 4)"></div> */}
    </>
  );
}

export default WarningImages;
