<template>
	<lay-form :model="model" style='width: 80%;margin-left: 100px;'>
		<lay-form-item label="账户" prop="username">
			<lay-input v-model="model.username"></lay-input>
		</lay-form-item>

		<lay-form-item label="密码" prop="password">
			<lay-input v-model="model.password" type="password"></lay-input>
		</lay-form-item>

		<lay-form-item>
			<LayButton @click="submitClick">提交</LayButton>
		</lay-form-item>
	</lay-form>
</template>

<script setup>

	import {
		ref,
		reactive
	} from 'vue'
	import {
		useRouter
	} from 'vue-router';

	const router = useRouter();


	const model = reactive({
		username: "admin",
		password: "",
	})

	const submitClick = function() {
		if (model.username == 'admin' && model.password == 'nzh278799') {
			router.push({
				path: '/addInfo',
				query: {
					userId: model.username
				}
			})
		} else {
			alert('抱歉用户名或密码输入错误，请重新输入');
			model.password = '';
		}
	};
</script>

<style>
</style>
