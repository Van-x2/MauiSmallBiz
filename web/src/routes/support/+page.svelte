<svelte:head>
    <title>
        Maui Biz Showcase - Support Me
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
    <div class="w-[500px] h-[600px] -sm:w-full -sm:h-full flex flex-col items-center sm:pt-12 -sm:p-6">

        <div class="w-full flex flex-col items-center">
            <h1 class="w-full text-center text-secondary text-[40px] font-mukta font-bold my-3 mb-4">Support Me</h1>
            <p class="w-full text-center text-darkgray text-[18px] font-mukta font-medium my-3 mb-5">
                Aloha! I'm Vann, a highschooler who is admittedly broke. Supporting me helps cover the service fees and maintenance costs of this site. 
                If you appreciate what I’m doing and want to see more community-focused projects, please consider donating—every little bit helps. 
                Mahalo for your support!
            </p>
            <a href="https://buymeacoffee.com/vanns" target="_blank" class="hover:scale-95 transition-all duration-50">
                <div class=" h-[45px] bg-[#0f1629] rounded-full flex px-5 items-center justify-center">
                    <p class=" text-white font-mukta font-medium mr-2">
                        Support me here
                    </p>
                    <div class="h-[48%] aspect-square">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-full h-full fill-white">
                            <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                          </svg>
                                                        
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>