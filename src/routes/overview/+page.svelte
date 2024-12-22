<script lang="ts">
    import type data from "$lib/server/data.json";
    import Analytics from "$lib/components/ui/analytics.svelte";
    import { onMount } from 'svelte';
    import * as Tabs from "$lib/components/ui/tabs";

    let analysis = $state<typeof data[number] | undefined>(undefined);

    onMount(async () => {
        analysis = await (await fetch(`/api/score?location=overall`)).json();
    });
</script>

<h1 class="inline-block text-4xl my-5 w-full text-center">
    Overall Scoring
</h1>
{#if analysis !== undefined}
    <Tabs.Root value="allTime" class="w-full flex flex-col items-center">
        <Tabs.List class="w-fit">
            <Tabs.Trigger value="allTime">All Time</Tabs.Trigger>
            <Tabs.Trigger value="7Days">Last 7 Days</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="allTime"><Analytics {analysis} /></Tabs.Content>
        <Tabs.Content value="7Days"><Analytics {analysis} /></Tabs.Content>
    </Tabs.Root>
{/if}
