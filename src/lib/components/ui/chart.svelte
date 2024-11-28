<script>
    import { onMount } from 'svelte';

    let chartElement;
    const { options, ...props } = $props();

    onMount(async () => {
        const ApexCharts = (await import('apexcharts')).default;

        const chart = new ApexCharts(chartElement, options);
        chart.render();

        return () => {
            chart.destroy();
        }
    });
</script>

<div bind:this={chartElement} {...props}></div>