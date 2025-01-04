import type fullData from "$lib/server/data.json";

function round(number: number, decimals: number = 2) {
    return (Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
}

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
            curve: "smooth",
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
            data: data.map(dataPoint => [dataPoint[0], round(dataPoint[1])]),
        }],
        title: {
            text: "Average Match Score per Alliance"
        }
    }
};

function distributionChartBoxPlotOptions(data: number[]) {
    return {
        chart: {
            type: "boxPlot",
            toolbar: {
                show: false
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

function distributionChartOptions(data: {string: number}) {
    const xValues = Object.keys(data);
    const yValues = Object.values(data);
    const dataFormatted = xValues.map((value, index) => ({x: value, y: yValues[index]}))
    return {
        chart: {
            type: "bar",
        },
        series: [{
            data: dataFormatted,
            name: "Alliances"
        }],
        xaxis: {
            title: {text: "Score"}
        },
        title: {
            text: "Match Score per Alliance Distribution"
        }
    }
};

const pointMutlipliers = {
    "Net": 2,
    "Low Samples": 4,
    "High Samples": 8,
    "Low Specimens": 6,
    "High Specimens": 10
}

function pointBreakdownChartOptions(pointValues: number[], mode: "Autonomous" | "Teleop") {
    const categories = ["Net", "Low Samples", "High Samples", "Low Specimens", "High Specimens"] as const;
    const series = categories.map((category, index) => ({name: category, data: [round(pointValues[index] * pointMutlipliers[category]).toFixed(2)]}));
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
            categories: [mode]
        },
    }
};

const penaltyMultipliers = {
    major: 30,
    minor: 10,
}

function penaltyBreakdownChartOptions(minorPenalties: number, majorPenalties: number, points: number) {
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
            {name: "Minor", data: [round(minorPenalties * penaltyMultipliers.minor).toFixed(2)]},
            {name: "Major", data: [round(majorPenalties * penaltyMultipliers.major).toFixed(2)]}
        ],
        xaxis: {
            categories: [""]
        }
    }
};

type ParkingBreakdown = typeof fullData[number]["pointBreakdown"]["teleopEnd"] | typeof fullData[number]["pointBreakdown"]["autoEnd"];

function parkingBreakdownIsTeleop(parkingBreakdown: ParkingBreakdown): parkingBreakdown is typeof fullData[number]["pointBreakdown"]["teleopEnd"] {
    return Object.keys(parkingBreakdown).includes("percentAscent3");
}

function parkingChartOptions(parkingBreakdown: ParkingBreakdown, label: string) {  
    return {
        series: parkingBreakdownIsTeleop(parkingBreakdown) ? [
            round(parkingBreakdown.percentNone * 100),
            round(parkingBreakdown.percentObservationZone * 100),
            round(parkingBreakdown.percentAscent1 * 100),
            round(parkingBreakdown.percentAscent2 * 100),
            round(parkingBreakdown.percentAscent3 * 100),
        ] : [
            round(parkingBreakdown.percentNone * 100),
            round(parkingBreakdown.percentObservationZone * 100),
            round(parkingBreakdown.percentAscent * 100),
        ],
        chart: {
            type: "pie"
        },
        labels: parkingBreakdownIsTeleop(parkingBreakdown) ? [
            "None",
            "Observation Zone",
            "Ascent Zone",
            "Ascent Height 1",
            "Ascent Height 2",
        ] : [
            "None",
            "Observation Zone",
            "Ascent Zone",
        ],
        title: {
            text: label
        }
    }
}

function getYPadding(data: number[][]) {
    const yValues = data.map(point => point[1]);
    const max = Math.max(...yValues);
    const min = Math.min(...yValues);
    const range = max - min;
    return {min: Math.max(Math.floor(min - range * 0.1), 0), max: Math.ceil(max + range * 0.1)};
}

export { averageTimeChartOptions, distributionChartOptions, pointBreakdownChartOptions, penaltyBreakdownChartOptions, parkingChartOptions, getYPadding, round };