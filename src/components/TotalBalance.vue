<template>
	<div class="total-value" :class="totalClass">Balance: {{ total }}</div>
</template>

<script>
export default {
	name: "TotalBalance",
	props: {
		total: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		totalClass() {
			return {
				red: this.total < 0,
				green: this.total > 0,
				black: this.total === 0,
			};
		},
	},
};
</script>

<style scoped>
.total-value {
	font-size: 26px;
	padding: 20px;
	text-align: center;
}
.black {
	color: black;
}
</style>