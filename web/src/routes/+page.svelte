<svelte:head>
    <title>
        Maui Small Biz - Search
    </title>
</svelte:head>

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import loadingGIF from '../media/loading.gif'

    let loading = false

    //Tags
    let currentTag:any = null
    let lastTag: any = false
    let retailTag: any
    let diningTag: any
    let lodgingTag: any
    let experiencesTag: any

    let currentPage = 1

    //Search field
    let searchField: any
    let searchTimeout: any
    let searchString: string = ''

    //results
    let businessCardArray: any = []

    function updateTags(tag: any) {
        businessCardArray = []
        currentPage = 1
        if(tag === currentTag) {
            currentTag.classList.toggle('bg-green-900')
            currentTag.classList.toggle('bg-primary')
            currentTag.classList.toggle('scale-110')
            currentTag = ''
            lastTag = false
        }
        else {
            if(lastTag) {

                currentTag = tag
                currentTag.classList.toggle('bg-green-900')
                currentTag.classList.toggle('bg-primary')
                currentTag.classList.toggle('scale-110')

                lastTag.classList.toggle('bg-green-900')
                lastTag.classList.toggle('bg-primary')
                lastTag.classList.toggle('scale-110')

                lastTag = currentTag
            }
            else {

                currentTag = tag
                currentTag.classList.toggle('bg-green-900')
                currentTag.classList.toggle('bg-primary')
                currentTag.classList.toggle('scale-110')
                lastTag = currentTag
            }
        }
        startSearch()
    }

    function nextPage() {
        currentPage =  currentPage + 1
        console.log(`current page: #${currentPage}`)
        startSearch()
    }

    async function startSearch() {
        
        loading = true

        if(searchString.length < 1) {
            currentPage = 1
            businessCardArray = []
        }
        else {
            let customURL

            if (typeof currentTag?.id === 'string') {
            customURL = `/api/searchMongo?tag=${encodeURIComponent(currentTag.id)}&searchString=${encodeURIComponent(searchString)}&page=${encodeURIComponent(currentPage)}`;
            }
            else {
                customURL = `/api/searchMongo?tag=${encodeURIComponent('')}&searchString=${encodeURIComponent(searchString)}&page=${encodeURIComponent(currentPage)}`
            }
            //Request Business cards that match the search criteria
            //Each business card should be requested in groups of 12 (pagination)
            const response = await fetch(customURL, {method: 'GET'})
            const data = await response.json(); // Parse the JSON from the response

            businessCardArray = [...businessCardArray, ...(data.searchResults)]
        }
        loading = false
    }


    onMount(() => {
        // Disable body scroll
        document.body.style.overflow = 'hidden';

        searchField.addEventListener("input", () => {
            clearTimeout(searchTimeout); // Clear previous timeout
            searchTimeout = setTimeout(startSearch, 500);
        });
    });

</script>

<div class="w-full h-full flex justify-center flex-col items-center pointer-events-none">

    <div class="-sm:fixed sm:w-[650px] -sm:w-[95%] sm:h-[300px] -sm:h-[110px] flex justify-center items-end top-[70px] -sm:z-20 pointer-events-auto">

    <div class="w-full h-full sm:px-4 relative">

        <div class="w-full h-[40%] flex justify-center flex-col -sm:hidden">

            <h1 class="w-full text-center text-[35px] text-secondary font-mukta font-bold">
                Search Maui Businesses
            </h1>
            <p class="w-full text-center text-[18px] text-darkgray font-semibold">
                Use keywords or select a tag to narrow your search results.
            </p>

        </div>

        <div class="w-full sm:h-[60%] -sm:h-full sm:px-12 sm:py-2 absolute static">
            <div class="w-full h-[45%]  sm:py-1">
                <div class="w-full h-full bg-white border-[3px] border-secondary rounded-full flex px-[2px] py-[2px] pr-[12px]">
                    <div class="h-full aspect-square flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-[60%] stroke-secondary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>                          
                    </div>
                    <div class="h-full flex-grow">
                        <input bind:this={searchField} bind:value={searchString} placeholder={"Search Maui Businesses"} type="text" class="w-full h-full text-[18px] text-darkgray font-mukta appearance-none border-none bg-transparent focus:outline-none focus:ring-0">
                    </div>
                </div>
            </div>
            <p class="w-full text-center mt-1 font-mukta font-semibold text-darkgray sm:hidden">
                Use keywords or select a tag to narrow results.
            </p>
            <div class="w-full h-[45%] sm:h-[38%] flex items-center">
                <div class=" h-3/4 w-1/4 py-[2px] px-[7px] -sm:px-[5px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(retailTag)}}>
                        <div id="retailTag" bind:this={retailTag} class="w-full h-full bg-primary sm:rounded-[16px] -sm:rounded-[9px] text-white sm:text-[18px] -sm:text-[14px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Retail
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[2px] px-[7px] -sm:px-[5px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(diningTag)}}>
                        <div id="diningTag" bind:this={diningTag} class="w-full h-full bg-primary sm:rounded-[16px] -sm:rounded-[9px] text-white sm:text-[18px] -sm:text-[14px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Dining
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[2px] px-[7px] -sm:px-[5px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(lodgingTag)}}>
                        <div id="lodgingTag" bind:this={lodgingTag} class="w-full h-full bg-primary sm:rounded-[16px] -sm:rounded-[9px] text-white sm:text-[18px] -sm:text-[14px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Lodging
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[2px] px-[7px] -sm:px-[5px]">
                    <button class="w-full h-full" on:click={() => {updateTags(experiencesTag)}}>
                        <div id="experiencesTag" bind:this={experiencesTag} class="w-full h-full bg-primary sm:rounded-[16px] -sm:rounded-[9px] text-white sm:text-[18px] -sm:text-[14px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Experiences
                        </div>
                    </button>
                </div>
            </div>
        </div>

    </div>

    </div>

    <div class="w-full flex-grow flex items-end pt-8 relative pointer-events-auto overflow-y-auto">
        <div class="flex flex-wrap justify-center items-start w-full">
            {#each businessCardArray as bizCard}
            <div class=" font-mukta w-[450px] h-[390px] m-6 bg-lightgray border-[3px] border-secondary rounded-[20px] flex flex-col p-2">
                <div class=" w-full h-[20%] flex justify-between items-center px-4 pr-6">

                    <h1 class=" font-mukta font-semibold text-[25px] -sm:text-[21px] flex-grow text-wrap">{bizCard.name}</h1>

                    <p class=" font-mukta font-bold text-[26px] -sm:text-[20px] text-primary mx-4">{bizCard.tag}</p>
                </div>
                {#if bizCard.website}
                <div class=" w-full h-[10%] px-4 mb-2 overflow-hidden text-nowrap">
                    <a class="hover:underline -sm:text-[13px]" href={bizCard.website}>{bizCard.website}</a>
                </div> 
                {/if}
                {#if bizCard.address}
                <div class=" w-full h-[10%] px-4 mb-2  overflow-hidden text-nowrap">
                    <a class="hover:underline -sm:text-[13px]" href={bizCard.mapLink}>{bizCard.address}</a>
                </div>
                {/if}
                <div class="w-full px-2 mb-2">
                    <div class="w-full border-[1px] border-secondary rounded-full">

                    </div>
                </div>
                <div class=" w-full h-[70%] p-3">
                    <p class="w-full h-full -sm:text-[14px]">
                        {bizCard.description}
                    </p>
                </div>
            </div>
            {/each}
        </div>
    </div>
    

    {#if businessCardArray.length >= 1}
        {#if loading === true}
        <div class="w-full h-[200px] flex justify-center items-center pointer-events-auto">
                <img alt="loading icon" src={loadingGIF} />
        </div>
        {:else}
        <div class="w-full h-[200px] flex justify-center items-center pointer-events-auto">
            <button on:click={nextPage} class="w-[200px] h-[60px] bg-white rounded-[15px] text-[20px] -sm:text-[15px] text-darkgray font-mukta font-semibold border-[3px] -sm:border-[2px] border-secondary">
                Load More
            </button>
        </div>
        {/if}
    {/if}


</div>