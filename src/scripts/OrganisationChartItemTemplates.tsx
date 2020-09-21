import React from "react"

export function OrganisationChartDefaultItemTemplate(props: IOrganisationChartDefaultItemTemplateProps) {

    const cssStyle: any = {};
    if (props.backgroundColor)
        cssStyle["backgroundColor"] = props.backgroundColor;

    return (
        <div className="organisation-chart__default-item-template" style={cssStyle}>
            {props.title}
        </div >)
}

export function OrganisationChartRoundedItemTemplate(props: OrganisationChartRoundedItemTemplate) {

    const cssStyle: any = {};
    if (props.backgroundColor)
        cssStyle["backgroundColor"] = props.backgroundColor;

    return (
        <div className="organisation-chart__rounded-item-template" style={cssStyle}>
            {props.title}
        </div>)
}
