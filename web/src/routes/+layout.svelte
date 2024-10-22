<script>
    import "../app.css";
</script>

<div class="w-screen h-screen bg-white flex flex-col">

  <div class=" static w-full h-[160px] bg-gradient-to-b from-lightGreen via-lightGreen to-white px-4 py-4">
    <div class="w-full h-[60%] flex justify-between">
      <div class="w-[420px] h-full flex justify-center items-center">
        <a href="/">
          <h1 class=" text-[40px] font-leckerli text-primary">Maui Small Business</h1>
        </a>
      </div>
      <div class="w-[600px] h-full flex">
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/add">
            <p class="text-[20px] text-darkgray font-mukta font-semibold">
              Add Your Business
            </p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/about">
            <p class="text-[20px] text-darkgray font-mukta font-semibold">
              About This Site
            </p>
          </a>
        </div>
        <div class="h-full w-1/3 p-4 flex justify-center items-center">
          <a href="/support">
            <p class="text-[20px] text-darkgray font-mukta font-semibold">
              Support Me
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-w-full flex-grow">
    <slot />
  </div>

</div>