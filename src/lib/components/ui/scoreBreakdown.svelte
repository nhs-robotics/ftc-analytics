<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Chart from "./chart.svelte";
    import { Separator } from "./separator";

    const { data, ...props } = $props();
</script>

<div class={"flex w-full justify-between " + props.class}>
    <Card.Root class="w-1/2 mr-2">
        <Card.Header>
            <Card.Title>Autonomous</Card.Title>
            <Card.Description>Averages</Card.Description>
        </Card.Header>
        <Card.Content>
            Total: {data.averageAutoPoints} points
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Samples</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>Net: {data.averageAutoSamples.net} samples</p>
                    <p>Low Basket: {data.averageAutoSamples.low} samples</p>
                    <p>High Basket: {data.averageAutoSamples.high} samples</p>
                    <Separator class="my-1"/>
                    <p>Total: {data.averageAutoSamples.points} points</p>
                </Card.Content>
            </Card.Root>
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Specimen</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>Low Bar: {data.averageAutoSpecimen.low} samples</p>
                    <p>High Bar: {data.averageAutoSpecimen.high} samples</p>
                    <Separator class="my-1"/>
                    <p>Total: {data.averageAutoSpecimen.points} points</p>
                </Card.Content>
            </Card.Root>
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Finish</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Chart options={{
                        series: [
                            data.autoEnd.percentObservationZone,
                            data.autoEnd.percentAscent1,
                            data.autoEnd.percentAscent2,
                            data.autoEnd.percentAscent3
                        ],
                        chart: {
                            type: "pie"
                        },
                        labels: [
                            "Observation Zone",
                            "Ascent Zone",
                            "Ascent Height 1",
                            "Ascent Height 2"
                        ]
                    }}/>
                    <Separator class="my-1"/>
                    <p>Total: {data.autoEnd.points} points</p>
                </Card.Content>
            </Card.Root>
        </Card.Content>
    </Card.Root>
    <Card.Root class="w-1/2 ml-2">
        <Card.Header>
            <Card.Title>Teleop</Card.Title>
            <Card.Description>Averages</Card.Description>
        </Card.Header>
        <Card.Content>
            Total: {data.averageTeleopPoints} points
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Samples</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>Net: {data.averageTeleopSamples.net} samples</p>
                    <p>Low Basket: {data.averageTeleopSamples.low} samples</p>
                    <p>High Basket: {data.averageTeleopSamples.high} samples</p>
                    <Separator class="my-1"/>
                    <p>Total: {data.averageTeleopSamples.points} points</p>
                </Card.Content>
            </Card.Root>
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Specimen</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>Low Bar: {data.averageTeleopSpecimen.low} samples</p>
                    <p>High Bar: {data.averageTeleopSpecimen.high} samples</p>
                    <Separator class="my-1"/>
                    <p>Total: {data.averageTeleopSpecimen.points} points</p>
                </Card.Content>
            </Card.Root>
            <Card.Root class="mt-3">
                <Card.Header>
                    <Card.Title>Finish</Card.Title>
                </Card.Header>
                <Card.Content>
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
                        ]
                    }}/>
                    <Separator class="my-1"/>
                    <p>Total: {data.teleopEnd.points} points</p>
                </Card.Content>
            </Card.Root>
        </Card.Content>
    </Card.Root>
</div>