<script lang="ts">
	import '../app.css';
	let { children } = $props();

    import { Button } from "$lib/components/ui/button";
</script>

<div class="w-full h-10 bg-accent flex px-4 justify-between items-center">
    <Button
		variant="secondary"
		href="/"
        class="text-3xl tracking-tight inline-block flex p-0"
    >
        FTC+
    </Button>
    <nav class="flex items-center justify-between">
		<div class="flex space-x-4">
			<Button variant="secondary" href="/scoreAverages">Score Averages</Button>
			<Button variant="secondary" href="/pointBreakdown">Point Breakdown</Button>
		</div>
	</nav>
    <h2
        class="text-3xl tracking-tight inline-block"
    >
        2024
    </h2>
</div>

{@render children()}
