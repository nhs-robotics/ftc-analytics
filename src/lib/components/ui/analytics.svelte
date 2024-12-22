<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Chart from "$lib/components/ui/chart.svelte";

    import ScoreBreakdown from "$lib/components/ui/scoreBreakdown.svelte";

    import { averageTimeChartOptions, distributionChartOptions } from "$lib/chartUtils";

    const { analysis } = $props();

    let screenWidth = $state(0);

    import { onMount } from "svelte";
    
    onMount(async () => {
        screenWidth = window.innerWidth;
        window.addEventListener("resize", () => {
            screenWidth = window.innerWidth;
        });
    });

    const chartSize = $derived(screenWidth >= 768 ? "1/2" : "full");
</script>

<div class="flex w-full items-center flex-col">
    <div class="w-4/5 flex flex-wrap justify-left">
        <Chart class="w-{chartSize}" options={averageTimeChartOptions(analysis.averagePreFoulTotalOverTime, screenWidth)}/>
        <Chart class="w-{chartSize}" options={distributionChartOptions(analysis.distribution, screenWidth)}/>
        <Separator class="my-2" />
        <h2 class="inline-block text-2xl my-5 w-full text-center">
            Score Breakdown
        </h2>
        <ScoreBreakdown breakdown={analysis.pointBreakdown} columnSize={chartSize} class="mb-10"/>
    </div>
</div>