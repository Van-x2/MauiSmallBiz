<script lang="ts">
    import "../app.css";
    import { goto } from "$app/navigation";

    let menu: HTMLElement
    let menuTop: HTMLElement

    function toggleMenu() {
      menu.classList.toggle('hidden')
      menu.classList.toggle('pointer-events-auto')
      menuTop.classList.toggle('bg-lightgray')
    }

    function navigate(destination: string) {
      goto(destination)
      setTimeout(() => {toggleMenu()},200)
    }
</script>

<div class="w-screen h-screen flex flex-col overflow-x-hidden relative">

  <div class=" fixed top-0 w-full h-[160px] bg-gradient-to-b from-lightGreen via-lightGreen to-white px-4 py-4 z-10 -sm:absolute -sm:hidden">
    <div class="w-full h-[60%] flex justify-between">
      <div class="w-[420px] h-full flex items-center justify-start pl-8">
        <a href="/" class="font-leckerli text-primary text-[35px]">
          <h1 class=" -lg:absolute -lg:hidden">Maui Business Showcase</h1>
          <h1 class=" lg:absolute lg:hidden">MBS</h1>
        </a>
      </div>
      <div class="w-[600px] h-full flex">
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="add" class=" hover:scale-105 transition duration-100">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">Add Your Business</p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/about" class=" hover:scale-105 transition duration-100">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">About This Site</p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/support" class=" hover:scale-105 transition duration-100">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">Support Me</p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class=" z-40 w-full h-full sm:hidden flex flex-col pointer-events-none fixed">
    <div bind:this={menuTop} class="w-full h-[80px] p-3 pointer-events-auto">
      <div class="w-full h-full flex justify-between items-center">
        <button on:click={() => {navigate('/')}}>
          <p class="font-leckerli text-primary text-[45px]">MBS</p>
        </button>
        <div class="h-full aspect-square flex justify-center items-center">
          <button on:click={toggleMenu} class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-[75%] fill-darkgray stroke-darkgray">
              <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg> 
          </button>       
        </div>
      </div>
    </div>

    <div bind:this={menu} class="w-full flex-grow flex flex-col justify-start items-center bg-lightgray hidden">

      <button on:click={() => {navigate('/add')}} class="text-[18px] my-7 text-darkgray font-semibold font-mukta">
          Add Your Business
      </button>

      <div class="w-[70%] h-[2px] bg-secondary rounded-full">
      </div>

      <button on:click={() => {navigate('/about')}} class="text-[18px] my-7 text-darkgray font-semibold font-mukta">
        About This Site
      </button>

      <div class="w-[70%] h-[2px] bg-secondary rounded-full">
      </div>

      <button on:click={() => {navigate('/support')}} class="text-[18px] my-7 text-darkgray font-semibold font-mukta">
        Support Me
      </button>


    </div>

    

  </div>

  <div class=" z-20 fixed w-full h-[195px] bg-gradient-to-b from-lightGreen via-lightGreen to-white sm:hidden">
  </div>

  <div class="w-full h-[40%] bottom-0 -md:hidden fixed -z-10 flex justify-between">
    <div class="h-full w-[33%] bg-pink-100"></div>
    <div class="h-full w-[33%] bg-pink-100"></div>
  </div>

  <div class=" w-full flex-grow -sm:pt-[170px] sm:pt-[150px]">
    <slot />
  </div>
</div>
