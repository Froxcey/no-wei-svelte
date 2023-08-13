<script lang="ts">
  import { dispatchCallbacks, status } from "./state";

  export let dismissible = true,
    persistent = true,
    pardonChromebook = true,
    bgStyle: "blur" | "black" = "blur";

  let show = false;
  (() => {
	if (typeof navigator === "undefined") return;
    if (status[0]) return console.warn("NoWei duplicate detected!");
	status[0] = 1;
	//if (navigator) navigator.getEnvironmentIntegrity = true;
    if (!navigator?.getEnvironmentIntegrity) return;
	status[0] = 2;
	if (pardonChromebook && /\bCrOS\b/.test(navigator.userAgent)) return;
	if (persistent && localStorage.getItem("noWeiBypass")) return;
    show = true;
  })();

  dispatchCallbacks();

  function weiDismiss() {
    if (!dismissible) return;
	if (persistent) localStorage.setItem("noWeiBypass", "y")
    show = false;
  }
</script>

{#if show}
  <div id="container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      id="background"
      class={"background-" + bgStyle}
      on:click={weiDismiss}
    />
    <div id="box">
      <div id="title">
        <h1>Your browser supports WEI</h1>
      </div>
      <div id="content">
        The Web Environment Integrity API is a new specification introduced by
        Google. While it may improve the security of some online services, it
        also negatively impact the openness of the internet by making the web
        "whitelisted only" and less accessible for everyone. It allows sevice
        providers (including analytic, advert, and CAPTCHA services used by a
        large portion of the web) to lock out users of "unapproved" browsers,
        operating systems, and older hardware. By using this browser, you are
        fueling Google's attempt to takeover the internet. We suggest you to
        switch to a different browser (for example, <a
          href="https://mozilla.org/firefox/"
          target="_blank"
          style="color: white;">Firefox</a
        >) and save the internet. See
        <a
          href="https://www.fsf.org/blogs/community/web-environment-integrity-is-an-all-out-attack-on-the-free-internet"
          target="_blank"
          style="color: white;">this post</a
        > for more detail.
      </div>
      {#if dismissible}
        <button id="dismiss" on:click={weiDismiss}>x</button>
      {/if}
    </div>
  </div>
{/if}

<style>
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
  #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .background-blur {
    backdrop-filter: blur(4px);
    background-color: #00000069;
  }
  .background-black {
    background-color: #000000;
  }
  #box {
    position: absolute;
    width: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgb(68, 53, 58);
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    font-family: sans-serif;
  }
  #title {
    text-align: center;
    background-color: rgb(241, 196, 66);
    width: 100%;
    border-radius: 5px 5px 0 0;
    color: rgb(68, 53, 58);
  }
  #content {
    padding: 30px;
    font-size: 17px;
  }
  #dismiss {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 20px;
    width: 20px;
    text-align: center;
    border: solid 2px white;
    background-color: black;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    padding: 0;
  }
</style>
