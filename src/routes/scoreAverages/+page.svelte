<script>
    import * as Accordion from "$lib/components/ui/accordion";
    import { Input } from "$lib/components/ui/input/index";
    import ApexCharts from "apexcharts";

    const states = [{name: "MA", average: 46.6, weeklyAverageOverTime: [{time: 0, average:30}, {time: 1, average: 32}, {time: 2, average: 36}, {time: 3, average: 40}, {time: 4, average: 46.6}]}, {name: "CA", average: 57.4, weeklyAverageOverTime: [{time: 0, average:35}, {time: 1, average: 37}, {time: 2, average: 42}, {time: 3, average: 48}, {time: 4, average: 57.4}]}, {name: "MD", average: 30.1, weeklyAverageOverTime: [{time: 0, average:18}, {time: 1, average: 25}, {time: 2, average: 29}, {time: 3, average: 30}, {time: 4, average: 30.1}]}];
    let searchText = $state("");
</script>

<div class="flex w-full items-center flex-col">
    <h1 class="inline-block text-4xl my-5">
        Score Averages
    </h1>
    <Accordion.Root class="w-4/5">
        <Input type="search" placeholder="Search" bind:value={searchText} />
        {#each states.filter(state => state.name.includes(searchText) || searchText === "") as state}
            <Accordion.Item value={state.name}>
                <Accordion.Trigger class="group">
                    <div class="w-full flex justify-left space-x-5">
                        <div class="group-hover:underline">{state.name}</div>
                        <div class="text-primary">{state.average}</div>
                    </div>
                </Accordion.Trigger>
                <Accordion.Content>
                    Chart for state average over time and chart for score distribution
                </Accordion.Content>
            </Accordion.Item>
        {/each}
    </Accordion.Root>
</div>