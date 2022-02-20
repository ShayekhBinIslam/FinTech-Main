import React from 'react';
import "./featuredinfo.css";

import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
 
import { charttablelabel, charttablevalue, tableitems } from '../../components/chart/Chart'


export default function Featuredinfo() {

  var yi = 0;
  var lmi = 0;
  var rmi = 0;

  for(var i=0; i<tableitems[i].length; i++){
    if(tableitems[i].year===2022 && tableitems[i].month===2){
      rmi = tableitems[i].amount;
    }
    else if(tableitems[i].year===2022 && tableitems[i].month===1){
      lmi = tableitems[i].amount;
    }

    if(tableitems[i].year===2021){
      yi+=tableitems[i].amount;
    }
  }

  return (
    <div className='featured'>
      <div className="button-34">
          <span className="featuredTitle">Yearly Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">yi</span>
            <span className='featureRate'>
                +4% <ArrowDownward className='featuredIcon'/>
            </span>
          </div>
          <span className="featureSub">compare to last year</span>
      </div>

      <div className="button-341">
          <span className="featuredTitle">Last Month Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">lmi</span>
            <span className='featureRate'>
                +2% <ArrowUpward className='featuredIcon'/>
            </span>
          </div>
          <span className="featureSub">compare to prev month</span>
      </div>

      <div className="button-342">
          <span className="featuredTitle">Running Month Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">rmi</span>
            <span className='featureRate'>
                -7% <ArrowDownward className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featureSub">compare to last month</span>
      </div>



    </div>
  );
}
