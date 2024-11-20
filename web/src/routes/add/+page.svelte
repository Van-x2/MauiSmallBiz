<svelte:head>
    <title>
        Maui Biz Showcase - Add Business
    </title>
</svelte:head>

<script>
    import QRcode from '../../media/BizFormQR.png'
    import { onMount } from 'svelte';
    onMount(() => {
        // Enable body scroll again when component is destroyed
        document.body.style.overflow = 'auto';
    });
</script>

<div class="w-full h-full flex justify-center pt-12">
    <div class="w-[450px] h-[600px] -sm:w-full -sm:h-full flex flex-col items-center -sm:p-4">
        <div class="w-[45%] aspect-square rounded-[20px] bg-white mb-2 p-2 border-primary border-[3px]">
            <img src={QRcode} alt="QR code linking to the business application form" class="w-full h-full" />
        </div>

        <div class="w-full flex-grow">
            <h1 class="w-full text-center text-secondary text-[30px] font-mukta font-semibold my-3 mb-4"> Adding Your Business to This Site</h1>
            <p class="w-full text-center text-darkgray text-[18px] font-mukta font-medium my-3">
                If you'd like your business featured on this website, please complete the Google form linked to the QR code above or <a href="https://forms.gle/ULBGdkJwVsj6juLo9" class="text-blue-700 hover:underline" target="_blank">this link</a>. 
                Each application will be reviewed before posting, so please be thoughtful with your submission.
            </p>
        </div>
    </div>
</div>