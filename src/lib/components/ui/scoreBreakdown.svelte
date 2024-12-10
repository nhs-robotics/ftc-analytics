<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Chart from "./chart.svelte";
    import { Separator } from "./separator";
    import { pointBreakdownChartOptions, penaltyBreakdownChartOptions } from "../../chartUtils";

    const { data, columnSize, ...props } = $props();
</script>

<div class={"flex w-full justify-between flex-wrap " + props.class}>
    <div class="flex w-{columnSize} flex-col">
        <Card.Root class="w-full">
            <Card.Header>
                <Card.Title>Scoring Elements</Card.Title>
            </Card.Header>
            <Chart options={pointBreakdownChartOptions(data.averageAutoBreakdown, data.averageTeleopBreakdown)} />
        </Card.Root>
        <Card.Root class="w-full">
            <Card.Header>
                <Card.Title>Penalty Points</Card.Title>
            </Card.Header>
            <Chart options={penaltyBreakdownChartOptions(data.averageFouls.minor, data.averageFouls.major, data.averageFouls.points)} />
        </Card.Root>
    </div>
    <Card.Root class={`w-${columnSize}`}>
        <Card.Header>
            <Card.Title>Endings</Card.Title>
        </Card.Header>
        <Card.Content>
            <Chart options={{
                series: [
                    data.autoEnd.percentObservationZone,
                    data.autoEnd.percentAscent1,
                ],
                chart: {
                    type: "pie"
                },
                labels: [
                    "Observation Zone",
                    "Ascent Zone",
                ],
                title: {
                    text: "Autonomous"
                }
            }}/>
            <p>Average: {data.autoEnd.averagePoints} points</p>
            <Separator class="my-1"/>
            <Chart options={{
                series: [
                    data.teleopEnd.percentObservationZone,
                    data.teleopEnd.percentAscent1,
                    data.teleopEnd.percentAscent2,
                    data.teleopEnd.percentAscent3
                ],
                chart: {
                    type: "pie"
                },
                labels: [
                    "Observation Zone",
                    "Ascent Zone",
                    "Ascent Height 1",
                    "Ascent Height 2"
                ],
                title: {
                    text: "Teleop"
                }
            }}/>
            <Separator class="my-1"/>
            <p>Average: {data.teleopEnd.averagePoints} points</p>
        </Card.Content>
    </Card.Root>
</div>