<script lang="ts">
	import '../app.css';
	let { children } = $props();

    export const prerender = true;

    import { page } from '$app/stores';
    import { Button } from "$lib/components/ui/button";
    import Github from 'lucide-svelte/icons/github';
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    const pages: {[key: string]: string} = {
        "/": "Home",
        "/overview": "Overview",
        "/regionalScoring": "Regional Scoring",
    }

    let currentPath = $derived($page.url.pathname);

    export const ssr = false;
</script>

<div class="w-full h-10 bg-accent flex px-4 justify-between items-center">
    <Button
		variant="secondary"
		href="/"
        class="text-3xl tracking-tight inline-block flex p-0"
    >
        FTCA
    </Button>
    <nav class="flex items-center justify-between hidden md:block">
        <div class="flex space-x-4">
            <Button variant="secondary" href="/overview" class="text-1xl">Overview</Button>
            <Button variant="secondary" href="/regionalScoring" class="text-1xl">Regional Scoring</Button>
        </div>
    </nav>
    <div class="md:hidden">
        <DropdownMenu.Root >
            <DropdownMenu.Trigger>{pages[currentPath]}</DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {#each Object.entries(pages).filter(page => page[0] !== currentPath) as [path, name]}
                    <DropdownMenu.Item href={path}>{name}</DropdownMenu.Item>
                {/each}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
    <Button href="https://github.com/nhs-robotics/ftc-analytics" target="_blank/" class="rounded-3xl bg-foreground hover:bg-accent-foreground border-none h-8 w-8" size="icon">
        <Github color="white" class="w-6 h-6"/>
    </Button>
</div>

{@render children()}