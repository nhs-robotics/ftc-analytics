<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Chart from "./chart.svelte";
    import { Separator } from "./separator";
    import { pointBreakdownChartOptions, penaltyBreakdownChartOptions, parkingChartOptions, round } from "../../chartUtils";
    import type data from "$lib/server/data.json";

    const { breakdown, columnSize, ...props }: {
        breakdown: typeof data[number]["pointBreakdown"],
        columnSize: string,
        [key: string]: any
    } = $props();
</script>

<div class={"flex w-full justify-between flex-wrap " + props.class}>
    <div class="flex w-{columnSize} flex-col">
        <Card.Root class="w-full">
            <Card.Header>
                <Card.Title>Scoring Elements Points</Card.Title>
            </Card.Header>
            <Chart options={pointBreakdownChartOptions([breakdown.averageAutoSamples.net, breakdown.averageAutoSamples.low, breakdown.averageAutoSamples.high, breakdown.averageAutoSpecimen.low, breakdown.averageAutoSpecimen.high], "Autonomous")} />
            <Chart options={pointBreakdownChartOptions([breakdown.averageTeleopSamples.net, breakdown.averageTeleopSamples.low, breakdown.averageTeleopSamples.high, breakdown.averageTeleopSpecimen.low, breakdown.averageTeleopSpecimen.high], "Teleop")} />
        </Card.Root>
        <Card.Root class="w-full">
            <Card.Header>
                <Card.Title>Penalty Points</Card.Title>
            </Card.Header>
            <Chart options={penaltyBreakdownChartOptions(breakdown.averageFouls.minor, breakdown.averageFouls.major, breakdown.averageFouls.points)} />
        </Card.Root>
    </div>
    <Card.Root class={`w-${columnSize}`}>
        <Card.Header>
            <Card.Title>Endings</Card.Title>
        </Card.Header>
        <Card.Content>
            <Chart options={parkingChartOptions(breakdown.autoEnd, "Auto")}/>
            <p>Average: {round(breakdown.autoEnd.averagePoints)} points</p>
            <Separator class="my-1"/>
            <Chart options={parkingChartOptions(breakdown.teleopEnd, "Teleop")}/>
            <p>Average: {round(breakdown.teleopEnd.averagePoints)} points</p>
            <Separator class="my-1"/>
        </Card.Content>
    </Card.Root>
</div>