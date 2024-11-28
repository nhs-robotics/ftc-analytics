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
        breakdown: {
            "averageTeleopPoints": 32,
            "averageAutoPoints": 18,
            "averageEndgamePoints": 6,
            "averageAutoSamples": {
                "low": 3,
                "high": 1,
                "net": 5,
                "points": 15
            },
            "averageAutoSpecimen": {
                "low": 1,
                "high": 0,
                "points": 5
            },
            "autoEnd": {
                "points": 12,
                "percentAscent3": 10,
                "percentAscent2": 40,
                "percentAscent1": 20,
                "percentObservationZone": 20,
                "percentNone": 10,
            },
            "averageTeleopSamples": {
                "low": 2,
                "high": 5,
                "net": 12,
                "points": 17
            },
            "averageTeleopSpecimen": {
                "low": 2,
                "high": 5,
                "points": 20
            },
            "teleopEnd": {
                "points": 30,
                "percentAscent3": 20,
                "percentAscent2": 20,
                "percentAscent1": 20,
                "percentObservationZone": 20,
                "percentNone": 20,
            },
            "averageFouls": {
                "points": 5,
                "major": 0,
                "minor": 1
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
        <Chart class="w-{chartSize}" options={averageTimeChartOptions(region.weeklyAverageOverTime, regionName, screenWidth)}/>
        <Chart class="w-{chartSize}" options={distributionChartOptions(region.scores, regionName, screenWidth)}/>
        <Separator class="my-2" />
        <h2 class="inline-block text-2xl my-5 w-full text-center">
            Score Breakdown
        </h2>
        <ScoreBreakdown data={region.breakdown} class="mb-10"/>
    </div>
</div>