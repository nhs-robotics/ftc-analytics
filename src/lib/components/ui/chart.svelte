<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    let chartElement: Element | undefined = $state();
    const { options, ...props } = $props();

    let chart: ApexCharts | undefined = undefined;
    onMount(async () => {
        const ApexCharts = (await import('apexcharts')).default;

        chart = new ApexCharts(chartElement, options);
        chart.render();
    });

    onDestroy(() => {
        if (chart !== undefined) {
            chart.destroy();
        }
    });
    
    $effect(() => {
        chart?.updateOptions(options);
    });
</script>

<div bind:this={chartElement} {...props}>{@render props.children?.()}</div>
