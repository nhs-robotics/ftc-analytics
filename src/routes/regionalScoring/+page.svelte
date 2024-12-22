<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import { Input } from "$lib/components/ui/input/index";
    import Chart from "$lib/components/ui/chart.svelte";
    import { Button } from "$lib/components/ui/button/";
    import { averageTimeChartOptions, distributionChartOptions } from "$lib/chartUtils";

    // START OF TEMP TESTING VARS
    
    const states = [
        {name: "Alabama", average: 48.2, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 42],
            [Date.now() - 86400000 * 5, 45],
            [Date.now() - 86400000 * 4, 47],
            [Date.now() - 86400000 * 3, 48],
            [Date.now() - 86400000 * 2, 49],
            [Date.now() - 86400000, 50],
            [Date.now(), 48.2]
        ]},
        {name: "Alaska", average: 34.9, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 30],
            [Date.now() - 86400000 * 5, 32],
            [Date.now() - 86400000 * 4, 35],
            [Date.now() - 86400000 * 3, 37],
            [Date.now() - 86400000 * 2, 33],
            [Date.now() - 86400000, 36],
            [Date.now(), 34.9]
        ]},
        {name: "Arizona", average: 55.1, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 51],
            [Date.now() - 86400000 * 5, 52],
            [Date.now() - 86400000 * 4, 54],
            [Date.now() - 86400000 * 3, 56],
            [Date.now() - 86400000 * 2, 57],
            [Date.now() - 86400000, 55],
            [Date.now(), 55.1]
        ]},
        {name: "Arkansas", average: 47.3, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 43],
            [Date.now() - 86400000 * 5, 45],
            [Date.now() - 86400000 * 4, 48],
            [Date.now() - 86400000 * 3, 47],
            [Date.now() - 86400000 * 2, 49],
            [Date.now() - 86400000, 46],
            [Date.now(), 47.3]
        ]},
        {name: "California", average: 63.2, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 60],
            [Date.now() - 86400000 * 5, 62],
            [Date.now() - 86400000 * 4, 64],
            [Date.now() - 86400000 * 3, 63],
            [Date.now() - 86400000 * 2, 65],
            [Date.now() - 86400000, 61],
            [Date.now(), 63.2]
        ]},
        {name: "Colorado", average: 53.1, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 50],
            [Date.now() - 86400000 * 5, 52],
            [Date.now() - 86400000 * 4, 54],
            [Date.now() - 86400000 * 3, 55],
            [Date.now() - 86400000 * 2, 52],
            [Date.now() - 86400000, 53],
            [Date.now(), 53.1]
        ]},
        {name: "Connecticut", average: 45.6, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 42],
            [Date.now() - 86400000 * 5, 44],
            [Date.now() - 86400000 * 4, 47],
            [Date.now() - 86400000 * 3, 46],
            [Date.now() - 86400000 * 2, 45],
            [Date.now() - 86400000, 46],
            [Date.now(), 45.6]
        ]},
        {name: "Delaware", average: 47.8, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 45],
            [Date.now() - 86400000 * 5, 48],
            [Date.now() - 86400000 * 4, 50],
            [Date.now() - 86400000 * 3, 49],
            [Date.now() - 86400000 * 2, 47],
            [Date.now() - 86400000, 48],
            [Date.now(), 47.8]
        ]},
        {name: "Florida", average: 61.5, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 58],
            [Date.now() - 86400000 * 5, 60],
            [Date.now() - 86400000 * 4, 62],
            [Date.now() - 86400000 * 3, 63],
            [Date.now() - 86400000 * 2, 60],
            [Date.now() - 86400000, 61],
            [Date.now(), 61.5]
        ]},
        {name: "Georgia", average: 55.9, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 53],
            [Date.now() - 86400000 * 5, 54],
            [Date.now() - 86400000 * 4, 56],
            [Date.now() - 86400000 * 3, 57],
            [Date.now() - 86400000 * 2, 55],
            [Date.now() - 86400000, 56],
            [Date.now(), 55.9]
        ]},
        {name: "Hawaii", average: 47.0, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 44],
            [Date.now() - 86400000 * 5, 45],
            [Date.now() - 86400000 * 4, 46],
            [Date.now() - 86400000 * 3, 47],
            [Date.now() - 86400000 * 2, 48],
            [Date.now() - 86400000, 47],
            [Date.now(), 47.0]
        ]},
        {name: "Idaho", average: 49.4, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 46],
            [Date.now() - 86400000 * 5, 48],
            [Date.now() - 86400000 * 4, 50],
            [Date.now() - 86400000 * 3, 51],
            [Date.now() - 86400000 * 2, 48],
            [Date.now() - 86400000, 49],
            [Date.now(), 49.4]
        ]},
        {name: "Illinois", average: 56.8, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 53],
            [Date.now() - 86400000 * 5, 54],
            [Date.now() - 86400000 * 4, 55],
            [Date.now() - 86400000 * 3, 57],
            [Date.now() - 86400000 * 2, 58],
            [Date.now() - 86400000, 56],
            [Date.now(), 56.8]
        ]},
        {name: "Indiana", average: 52.4, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 49],
            [Date.now() - 86400000 * 5, 51],
            [Date.now() - 86400000 * 4, 53],
            [Date.now() - 86400000 * 3, 54],
            [Date.now() - 86400000 * 2, 52],
            [Date.now() - 86400000, 53],
            [Date.now(), 52.4]
        ]},
        {name: "Iowa", average: 50.5, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 47],
            [Date.now() - 86400000 * 5, 48],
            [Date.now() - 86400000 * 4, 51],
            [Date.now() - 86400000 * 3, 52],
            [Date.now() - 86400000 * 2, 50],
            [Date.now() - 86400000, 51],
            [Date.now(), 50.5]
        ]},
        {name: "Kansas", average: 51.3, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 48],
            [Date.now() - 86400000 * 5, 50],
            [Date.now() - 86400000 * 4, 52],
            [Date.now() - 86400000 * 3, 53],
            [Date.now() - 86400000 * 2, 51],
            [Date.now() - 86400000, 52],
            [Date.now(), 51.3]
        ]},
        {name: "Kentucky", average: 49.7, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 47],
            [Date.now() - 86400000 * 5, 48],
            [Date.now() - 86400000 * 4, 51],
            [Date.now() - 86400000 * 3, 50],
            [Date.now() - 86400000 * 2, 48],
            [Date.now() - 86400000, 49],
            [Date.now(), 49.7]
        ]},
        {name: "Louisiana", average: 57.4, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 54],
            [Date.now() - 86400000 * 5, 56],
            [Date.now() - 86400000 * 4, 58],
            [Date.now() - 86400000 * 3, 59],
            [Date.now() - 86400000 * 2, 56],
            [Date.now() - 86400000, 57],
            [Date.now(), 57.4]
        ]},
        {name: "Maine", average: 46.7, weeklyAverageOverTime: [
            [Date.now() - 86400000 * 6, 43],
            [Date.now() - 86400000 * 5, 44],
            [Date.now() - 86400000 * 4, 46],
            [Date.now() - 86400000 * 3, 47],
            [Date.now() - 86400000 * 2, 45],
            [Date.now() - 86400000, 46],
            [Date.now(), 46.7]
        ]}
    ];
    
    const overall = {
        scores: Object.values({min: 10, q1: 25, median: 36, q3: 40, max: 65})
    };

    // END OF TEMP TESTING VARS
    
    let searchText = $state("");

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
            Regional Scoring
        </h1>
        <Input class="border-foreground" type="search" placeholder="Search" bind:value={searchText} />
        <Accordion.Root class="w-full">
            {#each states.filter(state => state.name.toLowerCase().includes(searchText.toLowerCase()) || searchText === "") as state}
                <Accordion.Item value={state.name}>
                    <Accordion.Trigger class="group">
                        <div class="w-full flex justify-left space-x-5">
                            <div class="group-hover:underline">{state.name}</div>
                            <div class="text-primary">{state.average}</div>
                        </div>
                    </Accordion.Trigger>
                    <Accordion.Content>
                        <div class="flex flex-wrap">
                            <Chart class="w-{chartSize}" options={averageTimeChartOptions(state.weeklyAverageOverTime, screenWidth)}/>
                            <Chart class="w-{chartSize}" options={distributionChartOptions(overall.scores, screenWidth)}/>
                        </div>
                        <Button href={"regionalScoring/" + state.name} class="w-full">See More</Button>
                    </Accordion.Content>
                </Accordion.Item>
            {/each}
        </Accordion.Root>
    </div>
</div>