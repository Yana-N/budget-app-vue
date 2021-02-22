<template>
	<ElCard class="form-list-wrap">
		<ElForm
			:model="formData"
			:rules="rules"
			:status-icon="true"
			ref="addFormItem"
		>
			<ElFormItem label="Type" prop="type">
				<ElSelect v-model="formData.type" placeholder="Select type...">
					<ElOption label="Income" value="INCOME"></ElOption>
					<ElOption label="Outcome" value="OUTCOME"></ElOption>
				</ElSelect>
			</ElFormItem>

			<ElFormItem label="Input comment" prop="comment">
				<ElInput v-model="formData.comment" type="textarea" />
			</ElFormItem>

			<ElFormItem label="Input value" prop="value">
				<ElInput v-model.number="formData.value" />
			</ElFormItem>

			<ElButton type="primary" icon="el-icon-finished" @click.enter="submitForm"
				>Send</ElButton
			>
		</ElForm>
	</ElCard>
</template>

<script>
export default {
	name: "Form",
	data() {
		const checkValue = (rule, value, callback) => {
			setTimeout(() => {
				if (!/^[0-9]/g.test(value)) {
					callback(new Error("Please input only digits"));
				} else if (value === 0) {
					callback(new Error("Value must not be equle to 0"));
				} else {
					callback();
				}
			}, 1000);
		};
		return {
			formData: {
				type: "INCOME",
				value: 0,
				comment: "",
			},
			rules: {
				type: [
					{
						required: true,
						message: "Please select type",
						trigger: "change",
					},
				],
				value: [
					{
						validator: checkValue,
						trigger: "change",
					},
				],
				comment: [
					{
						required: true,
						message: "Please input comment",
						trigger: "change",
					},
				],
			},
		};
	},
	methods: {
		submitForm() {
			this.$refs.addFormItem.validate((valid) => {
				if (!valid) return false;

				this.$emit("onSubmitForm", { ...this.formData });
				this.$refs.addFormItem.resetFields();
			});
		},
	},
};
</script>

<style scoped>
.form-list-wrap {
	max-width: 600px;
	margin: auto;
}
</style>