interface IOrganisationChartItemData {
  props?: any;
  template?: JSX.Element;
  items?: Array<IOrganisationChartItemData>
}

interface IOrganisationChartProps {
  children?: any;
  chartData?: Array<IOrganisationChartItemData>;
  defaultTemplate?: JSX.Element;
}
interface IOrganisationChartItemProps {
  children?: any;
  isRoot?: boolean;
}

interface IOrganisationChartItemContentProps {
  children?: any;
}

interface IOrganisationChartItemsProps {
  children?: Array<JSX.Element>;
}

// Item templates

interface IOrganisationChartDefaultItemTemplateProps {
  title?: string;
  backgroundColor?: string;
}

interface OrganisationChartRoundedItemTemplate {
  title?: string;
  backgroundColor?: string;
}