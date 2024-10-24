<script lang="ts">
    import { onMount } from "svelte";

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

    }


    onMount(() => {
        searchField.addEventListener("input", () => {
        clearTimeout(searchTimeout) // Clear previous timeout

        // Set a new timeout to call the function after 2 seconds
        searchTimeout = setTimeout(startSearch, 500)
        })
    })

</script>

<div class="w-full h-full flex justify-center flex-col items-center">

    <div class="w-[650px] h-[350px] flex justify-center items-end">

    <div class="w-full h-[75%]">
        <div class="w-full h-[40%] flex justify-center flex-col">

            <h1 class="w-full text-center text-[40px] text-secondary font-mukta font-bold">
                Search Maui Businesses
            </h1>
            <p class="w-full text-center text-[18px] text-darkgray font-semibold">
                Use keywords or select a tag to narrow your search results.
            </p>

        </div>
        <div class="w-full h-[60%] px-12 py-2">
            <div class="w-full h-1/2">
                <div class="w-full h-full bg-white border-[4px] border-secondary rounded-full flex px-[2px] py-[2px] pr-[12px]">
                    <div class="h-full aspect-square flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.7" stroke="currentColor" class="size-[60%] stroke-secondary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>                          
                    </div>
                    <div class="h-full flex-grow">
                        <input bind:this={searchField} bind:value={searchString} placeholder={"Start typing to find businesses"} type="text" class="w-full h-full text-[23px] text-darkgray font-mukta appearance-none border-none bg-transparent focus:outline-none focus:ring-0">
                    </div>
                </div>
            </div>
            <div class="w-full h-1/2 flex items-center">
                <div class=" h-3/4 w-1/4 py-[3px] px-[7px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(retailTag)}}>
                        <div id="retailTag" bind:this={retailTag} class="w-full h-full bg-primary rounded-[13px] text-white text-[20px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Retail
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[3px] px-[7px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(diningTag)}}>
                        <div id="diningTag" bind:this={diningTag} class="w-full h-full bg-primary rounded-[13px] text-white text-[20px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Dining
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[3px] px-[7px] ">
                    <button class="w-full h-full" on:click={() => {updateTags(lodgingTag)}}>
                        <div id="lodgingTag" bind:this={lodgingTag} class="w-full h-full bg-primary rounded-[13px] text-white text-[20px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Lodging
                        </div>
                    </button>
                </div>
                <div class=" h-3/4 w-1/4 py-[3px] px-[7px]">
                    <button class="w-full h-full" on:click={() => {updateTags(experiencesTag)}}>
                        <div id="experiencesTag" bind:this={experiencesTag} class="w-full h-full bg-primary rounded-[13px] text-white text-[20px]  flex items-center justify-center font-mukta transition-all duration-100">
                            Experiences
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>

    </div>

    <div class="w-full flex-grow flex items-end pt-8">
        <div class="flex flex-wrap justify-center items-start">
            {#each businessCardArray as bizCard}
            <div class=" font-mukta w-[450px] h-[390px] m-6 bg-lightgray border-4 border-secondary rounded-[20px] flex flex-col p-2">
                <div class=" w-full h-[20%] flex justify-between items-center px-4 pr-6">
                    <h1 class=" font-mukta font-semibold text-[30px]">{bizCard.name}</h1>
                    <p class=" font-mukta font-bold text-[26px] text-primary">{bizCard.tag}</p>
                </div>
                <div class=" w-full h-[10%] px-4 mb-2">
                    <a class=" hover:underline" href={bizCard.mapLink}>{bizCard.address}</a>
                </div>
                <div class="w-full px-2 mb-2">
                    <div class="w-full border-[2px] border-secondary rounded-full">

                    </div>
                </div>
                <div class=" w-full h-[70%] p-3">
                    <p class="w-full h-full">
                        {bizCard.description}
                    </p>
                </div>
            </div>
            {/each}
          </div>
    </div>

    {#if businessCardArray.length >= 1}
    <div class="w-full h-[200px] flex justify-center items-center">
        <button on:click={nextPage} class="w-[300px] h-[80px] bg-white rounded-[15px] text-[23px] text-darkgray font-mukta font-semibold border-[4px] border-secondary">
            Load More
        </button>
    </div>
    {/if}


</div>