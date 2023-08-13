<script lang="ts">
  import { status as weiStatus, registerUpdateCallback } from "./state";

  export let size: number = 11;

  let status = 0;

  let statMapping = ["Missing", "Passed", "Detected"]

  if (weiStatus[0]) {
	status = weiStatus[0];
  } else {
	registerUpdateCallback(()=>{
	  status = weiStatus[0]
	})
  }
</script>

<a href="https://github.com/froxcey/no-wei-svelte/" target="_blank">
  <div id="badge" style={`font-size: ${size}px`}>
	<div id="title" class="badge-content">
	  No-Wei
	</div><div id={"status-"+status} class="badge-content">
	  {statMapping[status]}
	</div>
  </div>
</a>

<style>
	#badge {
		color: white;
		text-shadow: 1px 1px 1px #00000060;
		display: inline-flex;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
		font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	}
	.badge-content {
		display: inline;
		padding: 4px 7px 4px 7px;
	}
	#title {
		background: linear-gradient(to bottom, #966130, #7f5228);
	}
	#status-0 {
		background: linear-gradient(to bottom, #636363, #4c4c4c);	
	}
	#status-1 {
		background: linear-gradient(to bottom, #969430, #7f7e28);
	}
	#status-2 {
		background: linear-gradient(to bottom, #963031, #7f282a);
	}
</style>
