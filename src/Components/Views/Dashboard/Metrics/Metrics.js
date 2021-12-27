import React from 'react';
import './Metrics.css';
import headerClock from "../../../Software/assets/headerClock.png"
import headerProfile from "../../../Software/assets/headerProfile.png"
import headerIconOne from "../../../Software/assets/headerIconOne.png"
import headerIconTwo from "../../../Software/assets/headerIconTwo.png"
import sidebarImage from "../../../Software/assets/sidebar-logo.png"
import textbox from "../../../Software/assets/textbox.png"
import { useHistory } from 'react-router-dom';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { PieChart, Pie} from 'recharts';
import {LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid} from 'recharts';

// for bar chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options_bar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 1
        }]
    }
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov'];

export const data_bar = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   barPercentage: 0,
      categoryPercentage: 0.1,
      barThickness: 14.11,
      maxBarThickness: 14.11,
      minBarLength: 1,
    },
  ],
};

// for pie chart

const data_pie = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];

const data_line = [
  {
      name: 'Jan',
      data_one: 11,
      data_two: 120,
      data_y: 0
  },
  {
      name: 'Feb',
      data_one: 15,
      data_two: 12,
      data_y: 0
  },
  {
      name: 'Mar',
      data_one: 5,
      data_two: 10,
      data_y: 0
  },
  {
      name: 'Apr',
      data_one: 10,
      data_two: 5
  },
  {
      name: 'May',
      data_one: 9,
      data_two: 4
  },
  {
      name: 'Jun',
      data_one: 10,
      data_two: 8
  },
  {
      name: 'Jul',
      data_one: 11,
      data_two: 120
  },
  {
      name: 'Aug',
      data_one: 15,
      data_two: 12
  },
  {
      name: 'Sep',
      data_one: 5,
      data_two: 10
  },
  {
      name: 'Oct',
      data_one: 10,
      data_two: 5
  },
  {
      name: 'Nov',
      data_one: 9,
      data_two: 4
  },
];

const Metrics = () => {
    return(
      <div className="metrics-section">
        {/* <section className="header-part">
                <div class="header-part-left">
                    <p className="header-name">Settings</p>
                </div>
                <div class="header-part-right">
                    <img className="header-clock" src={headerClock} alt="headerClock"></img>
                    <p className="header-time">14:20 PM Friday April, 21</p>
                    <img className="header-icon-one" src={headerIconOne} alt="headerIconOne"></img>
                    <img className="header-icon-two" src={headerIconTwo} alt="headerIconTwo"></img>
                    <img className="header-icon-profile" src={headerProfile} alt="headerProfile"></img>
                </div>
            </section> */}
            <section className="metrics-body">
              <div className='metrics-left'>
                <div className="left-one">
                  <div className='heading'>
                    <p>INSPECTIONS</p>
                  </div>
                  <div className='body'>
                    <Bar options={options_bar} data={data_bar}></Bar>
                  </div>
                </div>
                <div className="left-two">
                    <div className='heading'>
                      <p>REVENUE</p>
                    </div>
                    <div className='body'>
                      <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart data={data_line} margin={{ right: 300 }}>
                            <CartesianGrid />
                            <XAxis dataKey="name" 
                                interval={'preserveStartEnd'} />
                            <YAxis dataKey="data_one"></YAxis>
                            <Legend />
                            <Tooltip />
                            <Line dataKey="data_one"
                                stroke="black" activeDot={{ r: 8 }} />
                            <Line dataKey="data_two"
                                stroke="red" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                </div>
              </div>
              <div className='metrics-right'>
                <div className="right-one">
                  <div className='heading'>
                    <p>REFERRAL SOURCES</p>
                  </div>
                  <div className='body'>
                    <PieChart width={200} height={200}>
                      <Pie data={data_pie} dataKey="students" outerRadius={100} fill="green" />
                    </PieChart>
                  </div>
                </div>
                <div className="right-two">
                  <div className='heading'>
                    <p>TOP AGENT</p>
                  </div>
                  <div className='body'>
                  </div>
                </div>
                <div className="right-three">
                  <div className='heading'>
                    <p>INSPECTIONS LOCATION</p>
                  </div>
                  <div className='body'> 
                  </div>
                </div>
                <div className="right-four">
                  <div className='body'>
                    <p>NEED HELP?</p>
                    <button>Call Us</button>
                  </div>
                </div>
              </div>    
            </section>
      </div>
    )
  }

export default Metrics;