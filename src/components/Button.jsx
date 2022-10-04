import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return (
      <div className="p-3 border rounded-lg bg-white text-black text-center font-bold">
        {this.props.label}
      </div>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <div className="p-3 border rounded-lg bg-slate-100 text-black">
        {this.props.label}
      </div>
    );
  }
}
// export { ButtonPrimary, ButtonSecondary }
