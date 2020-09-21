import React from 'react';
import ReactDOM from 'react-dom';
import './stylings/index.css';
import './stylings/OrganisationChart.css';
import OrganisationChart, { OrganisationChartItemContent, OrganisationChartItems, OrganisationChartItem } from './scripts/OrganisationChart';
import { OrganisationChartDefaultItemTemplate, OrganisationChartRoundedItemTemplate } from './scripts/OrganisationChartItemTemplates';
import * as serviceWorker from './scripts/serviceWorker';

const chartData: Array<IOrganisationChartItemData> = [
  {
    props: { title: "CEO", backgroundColor: "lightblue" },
    template: <OrganisationChartDefaultItemTemplate />,
    items: [
      {
        props: { title: "CTO" },
        items: [
          {
            props: { title: "Head of Technology" }
          },
          {
            props: { title: "Technical Lead" }
          }
        ]
      },
      {
        props: { title: "COO" },
        items: [
          {
            props: { title: "COO Assistant" }
          }
        ]
      }
    ]
  }];

ReactDOM.render(
  <React.StrictMode>
    <h2>Rendered by data source and default template(Rounded item template):</h2>
    <OrganisationChart chartData={chartData}>
      <OrganisationChartRoundedItemTemplate backgroundColor="#EEE" />
    </OrganisationChart>

    <h2>Rendered by component tags:</h2>
    <OrganisationChart>
      <OrganisationChartItem>
        <OrganisationChartItemContent><OrganisationChartDefaultItemTemplate title="CEO" backgroundColor="lightblue" /></OrganisationChartItemContent>
        <OrganisationChartItems>
          <OrganisationChartItem>
            <OrganisationChartItemContent><OrganisationChartRoundedItemTemplate title="COO" backgroundColor="#EEE" /></OrganisationChartItemContent>
          </OrganisationChartItem>
          <OrganisationChartItem>
            <OrganisationChartItemContent><OrganisationChartRoundedItemTemplate title="CTO" backgroundColor="#EEE" /></OrganisationChartItemContent>
          </OrganisationChartItem>
        </OrganisationChartItems>
      </OrganisationChartItem>
    </OrganisationChart>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
