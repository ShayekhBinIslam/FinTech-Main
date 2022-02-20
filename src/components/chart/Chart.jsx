import React, { useEffect } from 'react';
// https://stackblitz.com/edit/drop-down-menu-material-ui
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
// https://mui.com/components/menus/
// https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/line/default?from-embed=&file=/App.tsx:236-348
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import Box from '@mui/material/Box';


import ButtonGroup from '@mui/material/ButtonGroup';
// import rd3 from 'react-d3-library';
// import * as d3 from "d3";


import "./chart.css";
// import rd3 from 'react-d3-library';
// import * as d3 from 'd3';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      // position: 'top',
      display: false,
    },
    title: {
      display: false,
      // text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 100000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))
(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function handlePrevious() {
  console.log("Previous clicked");
}

function handleNext() {
  console.log("Next clicked");
}

function handleMonthly() {
  console.log("Monthly clicked");
}

function handleYearly() {
  console.log("Yearly clicked");
}

var incomechartdata = []
var loading = true

export default function Chart() {

  incomechartdata = []
  // loading = true

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch("/getincomechartdata").then(res=> {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     }).then(jsonResponse => console.log(jsonResponse));
  //     // })
  //     // .then(jsonResponse => {incomechartdata.push(jsonResponse);});
  //   }
  //   fetchData();
    
  // }, []);
  // const [items, setItems] = React.useState([]);
  const [items, setItems] = React.useState(null);

  fetch("/getincomechartdata").then(res=> {
    if (res.ok) {
      return res.json();
    }
    // else {
    //   return "error";
    // }
  })
  // .then(jsonResponse => console.log(jsonResponse))
  // .catch(() => {alert('failed to fetch');})
  
  // .then(res => res.json)
  .then(dat => setItems(dat));
  // if (items)
  //   setItems(JSON.parse(items))

  // while (loading);

  console.log("Here")
  // console.log(incomechartdata)
  console.log(items)
  // if (incomechartdata.length === 0) {
  //   return "Loading";
  // }


  // The plot
  // var node = document.createElement('div');

  return (
    <div className='chart'>
      {items &&  <ChartChild items={items}/>}
    </div>
  );
}

function ChartChild({items}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  items = JSON.parse(items)

  console.log(items.length)
  console.log(items[0])
  console.log(items[0].title)
  var amounts = {}
  
  for (var j = 0; j < items.length; ++j) {
    // console.log(items[j].year)
    if (2021 <= items[j].year && items[j].year <= 2022) {
      if (amounts[items[j].year] == undefined) {
        amounts[items[j].year] = {}
      }
      if (amounts[items[j].year][items[j].month] == undefined) {
        amounts[items[j].year][items[j].month] = 0;
      }
    
      if (items[j].year === 2021) {
        if (8 <= items[j].month && items[j].month <=12) {  
          // amounts[items[j].year][items[j].month] +=  items[j].       
        }
      }
      else if (items[j].year === 2022 && items[j].month === 1) {
        
      }
    }
  }

  // items.foreach((element, index, array) => {
  //   console.log(element.title); // 100, 200, 300
  //   console.log(index); // 0, 1, 2
  //   console.log(array); // same myArray object 3 times
  // });


  
  return (
    <div className='chart'>
      {items[0].title}

      <h3 className="chartTitle">Income Graph</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

      
      <Box>
        {/* Monthly or yearly */}
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
        >
          <Button>Monthly</Button>
          <Button>Yearly</Button>
        </ButtonGroup>
      </Box>

      {/* Selected span: monthly: 6 month, yearly: 4-5 years */}
      <Box>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          6 month
        </Button>
        <StyledMenu id="demo-customized-menu" MenuListProps={{'aria-labelledby': 'demo-customized-button',}}
          anchorEl={anchorEl} open={open} onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple> 6 month </MenuItem>
          <MenuItem onClick={handleClose} disableRipple> 10 month </MenuItem>
        </StyledMenu>
      </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'space-around',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
      <Box>
        {/* Monthly or yearly */}
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
        >
          <Button onClick={handlePrevious}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </ButtonGroup>
      </Box>
      <Box>
      </Box>

      </Box>

      {/* Line plot */}
      <Line options={options} data={data} />

    </div>
  );
}

