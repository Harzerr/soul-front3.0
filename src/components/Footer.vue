<template>
	<div class="footer-wrap">
		<div class="footer">
			<a href="">帮助</a>
			<a href="">隐私</a>
			<a href="">条款</a>
		</div>
		<div class="footer">
			<a href="" style="white-space: pre;">copyright ©    soul项目团队</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	.footer-wrap{
		width: 100%;
		height: 60px;
		min-width: 1200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
	}
	.footer a{
		color: grey;
		display: inline-block;
		height: 100%;
		font-size: 12px;
	}
	.footer a:nth-child(2){
		margin-left: 20px;
		margin-right: 20px;
	}
</style>