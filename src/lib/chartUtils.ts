function averageTimeChartOptions(data: number[][], screenWidth: number) {
    return {
        chart: {
            type: "line",
            toolbar: {
                tools: screenWidth >= 1150 ? {} : {
                    download: false,
                    selection: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                }
            }
        },
        stroke: {
            curve: "monotoneCubic",
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: getYPadding(data).min,
            max: getYPadding(data).max,
        },
        series: [{
            name: "Average Score",
            data,
        }],
        title: {
            text: "Average Match Score per Alliance"
        }
    }
};

function distributionChartOptions(data: number[], screenWidth: number) {
    return {
        chart: {
            type: "boxPlot",
            toolbar: {
                tools: screenWidth >= 1150 ? {} : {
                    download: false,
                    selection: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                }
            }
        },
        series: [
            {
                type: "boxPlot",
                data: [{x: "", y: data}],
            }
        ],
        title: {
            text: "Match Score per Alliance Distribution"
        }
    }
};

function pointBreakdownChartOptions(pointValuesAuto: number[], pointValuesTeleop: number[]) {
    const categories = ["Net", "Low Samples", "High Samples", "Low Specimens", "High Specimens"];
    const series = categories.map((category, index) => ({name: category, data: [pointValuesAuto[index], pointValuesTeleop[index]]}));
    return {
        chart: {
            type: "bar",
            stacked: true,
        },
        plotOptions: {
            bar: {
              horizontal: true,
            }
          },
        series: series,
        xaxis: {
            categories: ["Autonomous", "Teleop"]
        },
    }
};

function penaltyBreakdownChartOptions(minorPenalties: number, majorPenalties: number, points: number) {
    majorPenalties =1
    return {
        chart: {
            type: "bar",
            stacked: true,  
        },
        plotOptions: {
            bar: {
              horizontal: true,
            }
          },
        series: [
            {name: "Minor", data: [minorPenalties * 10]},
            {name: "Major", data: [majorPenalties * 30]}
        ],
        xaxis: {
            categories: [""]
        }
    }
};

function getYPadding(data: number[][]) {
    const yValues = data.map(point => point[1]);
    const max = Math.max(...yValues);
    const min = Math.min(...yValues);
    const range = max - min;
    return {min: Math.floor(min - range * 0.1), max: Math.ceil(max + range * 0.1)};
}

export { averageTimeChartOptions, distributionChartOptions, pointBreakdownChartOptions, penaltyBreakdownChartOptions, getYPadding };