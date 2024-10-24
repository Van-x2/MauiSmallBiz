<script>
    import "../app.css";
</script>

<div class="w-screen h-screen bg-white flex flex-col overflow-x-hidden overflow-x">
  <div class="absolute top-0 w-full h-[160px] bg-gradient-to-b from-lightGreen via-lightGreen to-white px-4 py-4 z-10">
    <div class="w-full h-[60%] flex justify-between">
      <div class="w-[420px] h-full flex items-center -lg:justify-start lg:justify-center -lg:pl-8">
        <a href="/">
          <h1 class=" -lg:absolute -lg:hidden text-[40px] font-leckerli text-primary">Maui Small Business</h1>
          <h1 class=" lg:absolute lg:hidden text-[40px] font-leckerli text-primary">MSB</h1>
        </a>
      </div>
      <div class="w-[600px] h-full flex">
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/add">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">Add Your Business</p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/about">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">About This Site</p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/support">
            <p class="text-[20px] -lg:text-[15px] text-darkgray font-mukta font-semibold text-nowrap">Support Me</p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex-grow pt-[160px]">
    <slot />
  </div>
</div>
