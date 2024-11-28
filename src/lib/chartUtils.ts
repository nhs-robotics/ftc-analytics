function averageTimeChartOptions(data: number[][], specifier: string, screenWidth: number) {
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
            text: "Average Match Score per Alliance (" + specifier + ")"
        }
    }
};

function distributionChartOptions(data: number[], specifier: string, screenWidth: number) {
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
            text: "Match Score per Alliance Distribution (" + specifier + ")"
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

export { averageTimeChartOptions, distributionChartOptions, getYPadding };