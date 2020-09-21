import React, { useState } from 'react';

export default function OrganisationChart(props: IOrganisationChartProps) {

  let defaultItemTemplate: any = null;
  if ((props.chartData?.length || 0) > 0) {
    if (props.children && !Array.isArray(props.children))
      defaultItemTemplate = props.children;
    else if (props.children?.length || 0 > 0)
      return (
        <div className="organisation-chart">
          Cannot render chart. When chartData is provided, only one child as default template can be added.
        </div>
      );
  }

  if (props.chartData?.length || 0 > 0) {

    const getItem = (chartItem: IOrganisationChartItemData, isRoot?: boolean) => {
      let childItems = null;
      let itemComponent = null;

      if (chartItem.template)
        itemComponent = React.cloneElement(chartItem.template, chartItem.props);
      else if (defaultItemTemplate)
        itemComponent = React.cloneElement(defaultItemTemplate, { ...(chartItem.props || {}), ...(defaultItemTemplate.props || {}) });
      else
        itemComponent = <div>Template not provided!</div>

      if (chartItem.items?.length || 0 > 0)
        childItems = <OrganisationChartItems>{chartItem.items?.map(i => getItem(i))}</OrganisationChartItems>;
      return (
        <OrganisationChartItem isRoot={isRoot === true}>
          <OrganisationChartItemContent>{itemComponent}</OrganisationChartItemContent>
          {childItems}
        </OrganisationChartItem>);
    };

    return (
      <div className="organisation-chart">
        {props.chartData?.map(item => getItem(item, true))}
      </div>
    );
  }

  let items = null;
  if (props.children && Array.isArray(props.children))
    items = props.children?.map((item: JSX.Element) => React.cloneElement(item, { isRoot: true }));
  else if (props.children)
    items = React.cloneElement(props.children, { isRoot: true });

  return (
    <div className="organisation-chart">
      {items}
    </div>
  );
}

export function OrganisationChartItem(props: IOrganisationChartItemProps) {

  let beforeLines = null;
  if (props.isRoot !== true)
    beforeLines = (<div className="organisation-chart__item-before-lines">
      <div className="organisation-chart__item-line-left"></div>
      <div className="organisation-chart__item-line-right"></div>
    </div>);

  return (
    <div className="organisation-chart__item-container">
      {beforeLines}
      {props.children}
    </div>
  );
}

export function OrganisationChartItemContent(props: IOrganisationChartItemContentProps) {
  return (
    <div className="organisation-chart__item-content">
      {props.children}
    </div>
  );
}

export function OrganisationChartItems(props: IOrganisationChartItemsProps) {

  let afterLine = null;
  if (props.children?.length || 0 > 0)
    afterLine =
      (<div className="organisation-chart__item-after-lines">
        <div className="organisation-chart__item-line-left"></div>
        <div className="organisation-chart__item-line-right"></div>
      </div>);

  return (
    <>
      {afterLine}
      <div className="organisation-chart__items">
        {props.children}
      </div>
    </>
  );
}