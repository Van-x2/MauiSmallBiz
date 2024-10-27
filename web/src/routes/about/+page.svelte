<svelte:head>
    <title>
        Maui Small Biz - About
    </title>
</svelte:head>

<script>
    import { onMount } from "svelte";

    onMount(() => {
        // Enable body scroll again when component is destroyed
        document.body.style.overflow = 'auto';
    });
</script>

<div class="w-full h-full flex justify-center pt-12">
    <div class="w-[500px] h-[600px] -sm:w-full -sm:h-full flex flex-col items-center sm:pt-12 -sm:p-6 ">

        <div class="w-full">
            <h1 class="w-full text-center text-secondary text-[40px] font-mukta font-bold my-3 mb-4">About this Site</h1>
            <p class="w-full text-center text-darkgray text-[18px] font-mukta font-medium my-3">
                This website was created to connect visitors and locals with Maui’s diverse small businesses. 
                Many of these businesses don’t have the resources to set up shop near popular tourist spots or to spend heavily on advertising, 
                as larger chains and resorts often do. Instead, they rely on word of mouth, community support, 
                and the occasional visitor willing to venture beyond the usual spots. By featuring them here, I hope to level the playing field a bit, 
                helping people discover these hidden gems that truly reflect the spirit and character of Maui.
            </p>
        </div>
    </div>
</div>