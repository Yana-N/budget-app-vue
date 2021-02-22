<template>
	<div class="budget-list-wrap">
		<ElCard :header="header">
			<template v-if="!isEmpty">
				<template v-for="(item, prop) in list">
					<BudgetListItem
						@deleteItem="deleteItem"
						:item="item"
						:key="prop"
					></BudgetListItem>
				</template>
			</template>
			<ElAlert
				v-else
				type="info"
				:title="emptyTitle"
				:closable="false"
			></ElAlert>
		</ElCard>
	</div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
	name: "BudgetList",
	components: {
		BudgetListItem,
	},
	props: {
		list: {
			type: Object,
			default: () => ({}),
		},
	},
	data: () => ({
		header: "My Budget",
		emptyTitle: "Empty list",
	}),
	methods: {
		deleteItem(id) {
			this.$emit("deleteItem", id);
		},
	},
	computed: {
		isEmpty() {
			return !Object.keys(this.list).length;
		},
	},
};
</script>

<style scoped>
.budget-list-wrap {
	max-width: 600px;
	margin: auto;
}
</style>
