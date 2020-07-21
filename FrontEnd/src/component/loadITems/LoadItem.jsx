import React, { Component } from "react";
import LoadItemSingle from "./LoadItem__descrip";
import LoadItemDesc from "./LoadItem_Single";

export default class LoadItem extends Component {
  loadNonDesc() {
    console.log("test");
    return <LoadItemSingle data="this.props.data" />;
  }

  render() {
    // console.log(this.props.data[0].images.desc ? "Datos" : "No Datos");
    // console.log(this.props.data);
    return (
      <div>
        {
        this.props.data[0].desc ? (
            <LoadItemSingle data={this.props.data} altura={this.props.altura} />
          ) : (
            <LoadItemDesc data={this.props.data} />            
        )}
      </div>
    );
  }
}
