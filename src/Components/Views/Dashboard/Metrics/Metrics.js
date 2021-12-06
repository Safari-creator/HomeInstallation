// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function Metrics() {
//   return <Pie data={data} />;
// }
// 
// 
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 1
        }]
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November'];

export const data = {
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
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 14.11 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

const Metrics = () => {
    // return <Bar options={options} data={data} />;
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
            <section className="body-part">
              <div className="body-wrapper">
                <div className="left">
                  <div className="left-one">
                    <Bar options={options} data={data}></Bar>
                  </div>
                  <div className="left-two"></div>
                </div>
                <div className="right">
                  <div className="right-one"></div>
                  <div className="right-two"></div>
                  <div className="right-three"></div>
                </div>
              </div>
            </section>
      </div>
    )
  }

export default Metrics;