<script>
    import { fade } from 'svelte/transition'; 
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    let navMenu = false;

    let isLogin = false;

    onMount(() => {
        if (localStorage.username) {
            isLogin = true;
        }
    });
</script>
<!--Nav bar-->
<div class="flex justify-between items-center py-2 border-b-2 max-w-screen-md bg-white z-30">
    <button on:click={() =>goto(`/`)}>
        <svg class="ml-8 h-8 hover:fill-black fill-pink" viewBox="0 0 1787 687" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="fill-inherit" cx="343.5" cy="343.5" r="343.5"/>
            <path d="M178.283 517H95.8963L221.429 153.364H320.506L445.861 517H363.474L272.388 236.46H269.547L178.283 517ZM173.134 374.067H367.736V434.081H173.134V374.067ZM566.511 153.364V517H489.629V153.364H566.511Z" fill="white"/>
            <path class="fill-black" d="M874.394 517H745.488V153.364H875.46C912.036 153.364 943.523 160.643 969.92 175.203C996.317 189.644 1016.62 210.419 1030.82 237.526C1045.14 264.633 1052.31 297.066 1052.31 334.827C1052.31 372.705 1045.14 405.258 1030.82 432.483C1016.62 459.708 996.198 480.601 969.565 495.161C943.049 509.72 911.326 517 874.394 517ZM822.37 451.126H871.198C893.925 451.126 913.042 447.102 928.549 439.053C944.174 430.885 955.893 418.278 963.705 401.233C971.636 384.069 975.602 361.934 975.602 334.827C975.602 307.956 971.636 285.999 963.705 268.953C955.893 251.908 944.233 239.36 928.727 231.311C913.22 223.262 894.103 219.237 871.376 219.237H822.37V451.126ZM1443.42 335.182C1443.42 374.836 1435.9 408.572 1420.87 436.389C1405.95 464.206 1385.6 485.454 1359.79 500.132C1334.1 514.692 1305.22 521.972 1273.14 521.972C1240.83 521.972 1211.83 514.633 1186.14 499.955C1160.45 485.277 1140.15 464.029 1125.24 436.212C1110.32 408.394 1102.87 374.718 1102.87 335.182C1102.87 295.527 1110.32 261.792 1125.24 233.974C1140.15 206.157 1160.45 184.969 1186.14 170.409C1211.83 155.731 1240.83 148.392 1273.14 148.392C1305.22 148.392 1334.1 155.731 1359.79 170.409C1385.6 184.969 1405.95 206.157 1420.87 233.974C1435.9 261.792 1443.42 295.527 1443.42 335.182ZM1365.47 335.182C1365.47 309.495 1361.62 287.833 1353.93 270.196C1346.35 252.559 1335.64 239.183 1321.79 230.068C1307.94 220.954 1291.73 216.396 1273.14 216.396C1254.56 216.396 1238.34 220.954 1224.49 230.068C1210.64 239.183 1199.87 252.559 1192.18 270.196C1184.6 287.833 1180.81 309.495 1180.81 335.182C1180.81 360.868 1184.6 382.53 1192.18 400.168C1199.87 417.805 1210.64 431.181 1224.49 440.295C1238.34 449.41 1254.56 453.967 1273.14 453.967C1291.73 453.967 1307.94 449.41 1321.79 440.295C1335.64 431.181 1346.35 417.805 1353.93 400.168C1361.62 382.53 1365.47 360.868 1365.47 335.182ZM1469.92 216.751V153.364H1768.57V216.751H1657.24V517H1581.25V216.751H1469.92Z" />
        </svg>
    </button>
    <!--Toggle button only display on sm-->
    <button class="sm:hidden flex mr-[20px]" on:click={()=>{navMenu = !navMenu}}>
        <svg class="h-6"  viewBox="0 -2 28 28">
            <path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
        </svg>
    </button>
    <!--Other-->
    <div class="sm:flex hidden gap-10 mx-4">
        <button class="sm:flex hidden font-semibold hover:text-pink"  on:click={() =>window.open(`/test`)}>
            Try demo
        </button>
        <button class="sm:flex hidden font-semibold hover:text-pink" on:click={() =>goto(`/pricing`)}>
            Pricing
        </button>
        {#if isLogin}
            <button class="sm:flex hidden font-semibold hover:text-pink" on:click={() =>goto(`/control`)}>
                Account
            </button>
        {:else}
            <button class="sm:flex hidden font-semibold hover:text-pink" on:click={() =>goto(`/login`)}>
                Login
            </button>
        {/if}
    </div>
</div>

<!--Mobile Nav menu-->
{#if navMenu}
    <div class="absolute fixed font-semibold flex flex-col inset-0 bg-black bg-opacity-60 z-20" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
        <div class="flex flex-col ">   
            <button class="bg-white px-2 flex text-xl py-1 mt-[50px] flex justify-center "  on:click={() =>window.open(`/test`)} in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
                Try demo
            </button>
            <button class="bg-white flex text-xl py-1 bg-black flex justify-center " on:click={() =>goto(`/pricing`)} in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
                Pricing
            </button>
            {#if isLogin}
                <button class="bg-white text-pink flex text-xl py-1 bg-black flex justify-center " on:click={() =>goto(`/control`)} in:fade={{ duration: 600 }} out:fade={{ duration: 600 }}>
                    Account
                </button>
            {:else}
                <button class="bg-white text-pink flex text-xl py-1 bg-black flex justify-center " on:click={() =>goto(`/login`)} in:fade={{ duration: 600 }} out:fade={{ duration: 600 }}>
                    Login
                </button>
            {/if}
        </div> 
    </div>
{/if}