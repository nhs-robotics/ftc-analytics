<script lang="ts">
    import Chart from "$lib/components/ui/chart.svelte";
    import { averageTimeChartOptions, distributionChartOptions } from "$lib/chartUtils";
    import { Separator } from "$lib/components/ui/separator/";

    // START OF TEMP TESTING VARS
    
    const overall = {
        weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 48.75],
            [Date.now() - 86400000 * 5, 49.12],
            [Date.now() - 86400000 * 4, 50.05],
            [Date.now() - 86400000 * 3, 50.23],
            [Date.now() - 86400000 * 2, 49.89],
            [Date.now() - 86400000, 49.91],
            [Date.now(), 50.08]
        ],
        scores: Object.values({min: 10, q1: 25, median: 36, q3: 40, max: 65}),
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
    import ScoreBreakdown from "$lib/components/ui/scoreBreakdown.svelte";

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
            Overall Scoring
        </h1>
        <Chart class="w-{chartSize}" options={averageTimeChartOptions(overall.weeklyAverageOverTime, screenWidth)}/>
        <Chart class="w-{chartSize}" options={distributionChartOptions(overall.scores, screenWidth)}/>
        <Separator class="my-2" />
        <h2 class="inline-block text-2xl my-5 w-full text-center">
            Score Breakdown
        </h2>
        <ScoreBreakdown data={overall.breakdown} columnSize={chartSize} class="mb-10"/>
    </div>
</div>