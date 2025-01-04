<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import type data from "$lib/server/data.json";
    import { Input } from "$lib/components/ui/input/index";
    import Chart from "$lib/components/ui/chart.svelte";
    import { Button } from "$lib/components/ui/button/";
    import { averageTimeChartOptions, distributionChartOptions } from "$lib/chartUtils";
    
    let regions = $state<typeof data | undefined>(undefined);

    onMount(async () => {
        regions = await (await fetch(`/api/regions`)).json();
    });
    
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
            {#each (regions ?? []).filter(region => (region.collectionName.toLowerCase().includes(searchText.toLowerCase()) || searchText === "") && region.collectionName !== "overall") as region}
                <Accordion.Item value={region.collectionName}>
                    <Accordion.Trigger class="group">
                        <div class="w-full flex justify-left space-x-5">
                            <div class="group-hover:underline">{region.collectionName}</div>
                            <div class="text-primary">{region.averagePreFoulTotal}</div>
                        </div>
                    </Accordion.Trigger>
                    <Accordion.Content>
                        <div class="flex flex-wrap">
                            <Chart class="w-{chartSize}" options={averageTimeChartOptions(region.averagePreFoulTotalOverTime, screenWidth)}/>
                            <Chart class="w-{chartSize}" options={distributionChartOptions(region.distribution)}/>
                        </div>
                        <Button href={"regionalScoring/" + region.collectionName} class="w-full">See More</Button>
                    </Accordion.Content>
                </Accordion.Item>
            {/each}
        </Accordion.Root>
    </div>
</div>