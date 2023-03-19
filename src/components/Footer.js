import React from "react";
const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.submitThemeColor = this.submitThemeColor.bind(this);
  }
  submitThemeColor(color) {
    // lưu giá trị mã màu theme vào Store - redux
    // Xử lý sau
  }
  render() {
    return (
      <div className="footer">
        <div className="vertical-center">
          <span>Choose Theme </span>
          <button
            onClick={() => this.submitThemeColor(RED)}
            className="dot red"
          />
          <button
            onClick={() => this.submitThemeColor(BLUE)}
            className="dot blue"
          />
          <button
            onClick={() => this.submitThemeColor(GRAY)}
            className="dot gray"
          />
        </div>
      </div>
    );
  }
}
export default Footer;
