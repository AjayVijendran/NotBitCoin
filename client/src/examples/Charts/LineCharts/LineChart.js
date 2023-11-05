import React from "react";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
      iframeSrc: "https://www.fxempire.com/crypto/bitcoin/advanced-chart?back=/bitcoin/chart",
    };
  }

  componentDidMount() {
    const { lineChartData, lineChartOptions, iframeSrc } = this.props;

    this.setState({
      chartData: lineChartData,
      chartOptions: lineChartOptions,
      iframeSrc,
    });
  }

  render() {
    const iframe = (
      <iframe
        src={this.state.iframeSrc}
        width="100%"
        height="600px"
        frameborder="0"
        scrolling="no"
      ></iframe>
    );

    return (
      <div>
        {iframe}
      </div>
    );
  }
}

export default LineChart;
