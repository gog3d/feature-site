import React from "react";
import {Rnd} from "react-rnd";

class Box extends React.Component {
  render() {
    return (
      <div
        className="box"
        style={{
          margin: 0,
          height: "100%",
          padding: "10px",
          backgroundColor: this.props.color
        }}
      >
        <input
          type="text"
          defaultValue="Hello!"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            color: "red"
          }}
        />
      </div>
    );
  }
}

const RndComponent = () => (
  <div
    style={{
      width: "800px",
      height: "400px"
    }}
  >
    <Rnd
      default={{
        x: 150,
        y: 205,
        width: 500,
        height: 190
      }}
      minWidth={0}
      minHeight={0}
      bounds="parent"
      onDrag={e => {
        e.stopImmediatePropagation();
      }}
    >
      <Box color={"black"} />
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 100,
          height: 90
        }}
        minWidth={0}
        minHeight={0}
        bounds="parent"
        onDrag={e => {
          e.stopImmediatePropagation();
        }}
      >
        <Box color={"yellow"} />
      </Rnd>
    </Rnd>
  </div>
);

export default RndComponent;