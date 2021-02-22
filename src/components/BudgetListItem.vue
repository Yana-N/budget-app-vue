<template>
	<div class="list-item">
		<span class="budget-comment">{{ item.comment }}</span>

		<div class="budget-value" :class="classValue">
			<span v-if="item.type === 'INCOME'" class="el-icon-caret-top" />
			<span v-else class="el-icon-caret-bottom" />
			<span>{{ item.value }}</span>
		</div>

		<ElButton
			type="danger"
			icon="el-icon-delete"
			@click="deleteItem(item.id)"
		/>
	</div>
</template>

<script>
export default {
	name: "BugetListItem",
	props: {
		item: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		classValue() {
			return this.item.type === "INCOME" ? "green" : "red";
		},
	},
	methods: {
		deleteItem(id) {
			this.$emit("deleteItem", id);
		},
	},
};
</script>

<style scoped>
.list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
.budget-comment {
	font-weight: bold;
}
.budget-value {
	margin-left: auto;
	margin-right: 40px;
}
</style>