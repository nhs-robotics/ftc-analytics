<script lang="ts">
    import Chart from "$lib/components/ui/chart.svelte";
    import { page } from '$app/stores';
    import { averageTimeChartOptions, distributionChartOptions } from "$lib/chartUtils";
    import ScoreBreakdown from "$lib/components/ui/scoreBreakdown.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    const regionName = $page.params.region;

    // START OF TEMP TESTING VARS
    
    const region = {
        name: {regionName},
        average: 48.2,
        weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 42],
            [Date.now() - 86400000 * 5, 45],
            [Date.now() - 86400000 * 4, 47],
            [Date.now() - 86400000 * 3, 48],
            [Date.now() - 86400000 * 2, 49],
            [Date.now() - 86400000, 50],
            [Date.now(), 48.2]
        ],
        scores: [12, 15, 22, 28, 36],
        "breakdown": {
            "averageTeleopPoints": 20,
            "averageAutoPoints": 10,
            "averageEndgamePoints": 12,
            "averageAutoBreakdown": [1, 2, 1, 2, 1],
            "averageTeleopBreakdown": [3, 3, 4, 2, 4],
            "autoEnd": {
                "averagePoints": 4,
                "percentAscent1": 45,
                "percentObservationZone": 50,
                "percentNone": 5,
            },
            "teleopEnd": {
                "averagePoints": 15,
                "percentAscent3": 12,
                "percentAscent2": 25,
                "percentAscent1": 20,
                "percentObservationZone": 21,
                "percentNone": 22,
            },
            "averageFouls": {
                "points": 10,
                "major": 0,
                "minor": 2
            }
        }
    };

    // END OF TEMP TESTING VARS
    
    let screenWidth = $state(0);

    import { onMount } from "svelte";
    onMount(() => {
        screenWidth = window.innerWidth;
        window.addEventListener("resize", () => {
            screenWidth = window.innerWidth;
        });
    });

    const chartSize = $derived(screenWidth >= 768 ? "1/2" : "full");
</script>

<div class="flex w-full items-center flex-col">
    <div class="w-4/5 flex flex-wrap">
        <h1 class="inline-block text-4xl my-5 w-full text-center">
            {regionName} Scoring
        </h1>
        <Chart class="w-{chartSize}" options={averageTimeChartOptions(region.weeklyAverageOverTime, screenWidth)}/>
        <Chart class="w-{chartSize}" options={distributionChartOptions(region.scores, screenWidth)}/>
        <Separator class="my-2" />
        <h2 class="inline-block text-2xl my-5 w-full text-center">
            Score Breakdown
        </h2>
        <ScoreBreakdown data={region.breakdown} columnSize={chartSize} class="mb-10"/>
    </div>
</div>