<template>
	<div id="app">
		<TotalBalance :total="totalBalance" />
		<BudgetList :list="list" @deleteItem="onDeleteItem" />
		<Form @onSubmitForm="onSubmitForm" />

		<ElDialog title="Delete item" :visible.sync="dialogVisible" width="30%">
			<span slot="footer" class="dialog-footer">
				<ElButton @click="dialogVisible = false">Cancel</ElButton>
				<ElButton type="primary" @click="onDeleteItem">Confirm</ElButton>
			</span>
		</ElDialog>
	</div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";

export default {
	name: "App",
	components: {
		BudgetList,
		TotalBalance,
		Form,
	},
	data: () => ({
		list: {
			1: {
				type: "INCOME",
				value: 100,
				comment: "Some comments",
				id: 1,
			},
			2: {
				type: "OUTCOME",
				value: -50,
				comment: "Some outcome comments",
				id: 2,
			},
		},
		dialogVisible: false,
	}),
	methods: {
		onDeleteItem(id) {
			this.$confirm(
				`Are you sure to delete this item ${this.list[id].comment}?`
			)
				.then(() => {
					this.$delete(this.list, id);
				})
				.catch(() => {});
		},
		onSubmitForm(data) {
			if (data.type === "OUTCOME") {
				data.value = -parseInt(data.value);
			}

			const newObj = {
				...data,
				id: String(Math.random()),
			};

			this.$set(this.list, newObj.id, newObj);
		},
	},
	computed: {
		totalBalance() {
			return Object.values(this.list).reduce(
				(acc, item) => acc + item.value,
				0
			);
		},
	},
};
</script>

<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#app {
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.red {
	color: red;
}
.green {
	color: green;
}
</style>
