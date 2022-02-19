import React from 'react';
import "./featuredinfo.css";

import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
 

export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="button-34">
          <span className="featuredTitle">Yearly Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">100 TK</span>
            <span className='featureRate'>
                +4% <ArrowDownward className='featuredIcon'/>
            </span>
          </div>
          <span className="featureSub">compare to last year</span>
      </div>

      <div className="button-341">
          <span className="featuredTitle">Yearly Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">100 TK</span>
            <span className='featureRate'>
                +4% <ArrowUpward className='featuredIcon'/>
            </span>
          </div>
          <span className="featureSub">compare to last year</span>
      </div>

      <div className="button-342">
          <span className="featuredTitle">Yearly Income</span>
          <div className="featuredMoneyContainer">
            <span className="featureMoney">100 TK</span>
            <span className='featureRate'>
                +4% <ArrowDownward className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featureSub">compare to last year</span>
      </div>



    </div>
  );
}
