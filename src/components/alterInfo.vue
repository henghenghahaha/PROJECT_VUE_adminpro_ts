/* eslint-disable */
<template>

	<lay-scroll height="300px" style="background-color: whitesmoke" thumbColor="#000000" class='scroll'>
		<lay-container>
			<lay-row>
				<lay-col span="1">
					<lay-panel v-for="(item, index) in total.arr" :key="index" style="margin: 5px; padding: 5px">
						记录ID:{{item.ID}}&nbsp;&nbsp;&nbsp;上传人员:{{item.admin}}&nbsp;&nbsp;&nbsp;上传时间:{{item.ADDTime}}&nbsp;&nbsp;&nbsp;操作:{{item.Type}}
					</lay-panel>
				</lay-col>
			</lay-row>
		</lay-container>
	</lay-scroll>

	<div class="main-page" style='display: flex; align-items: center; justify-content: center;'>
		<lay-form :model="model" style='width: 80%;'>
			<br /><br /><br />
			<lay-button-container class='change'>
				<lay-button @click="change(1)" style='height: 40px;' type="warm">添加信息</lay-button>
				<lay-button @click="change(2)" style='height: 40px;' disabled='true'>修改信息</lay-button>
			</lay-button-container>
			<lay-input v-model="searchID" style="width:30%;margin-top:20px;margin-bottom:20px;" size="lg"
				placeholder="ID">
				<template #append>
					<lay-button border-style="none" @click="searchClick">
						<lay-icon type="layui-icon-search"></lay-icon>
					</lay-button>
				</template>
			</lay-input>

			<lay-space direction="vertical" fill style='width: 100%;'>
				<span style='font-weight: 600;font-size: large;'>Identity Information</span>
				<lay-line theme="#31BDEC" borderWidth='10px'></lay-line>
			</lay-space>

			<lay-upload text='重新上传头像图片' @cutdone="getCutDone" :allow-clear="false" acceptMime="images"
				@cutcancel="getCutCancel" :cut="true" :cutOptions="cutOptions" :multiple="false" @done="getFileDone"
				:auto='false'>
				<template #preview>
					<div class="easy-wrap" v-if="cutUrl">
						<img :src="cutUrl" style='width: 150px;height: 150px;' />
					</div>
				</template>
			</lay-upload>

			<lay-form-item label="name" :label-position="labelPosition" prop="name" class='Input'>
				<lay-input v-model="model.name" class='Border' :allow-clear="false"></lay-input>
			</lay-form-item>

			<lay-form-item label="ID/PassportNo" :label-position="labelPosition" prop="passport" class='Input'>
				<lay-input v-model="model.passport" class='Border' :allow-clear="false"></lay-input>
			</lay-form-item>

			<lay-form-item label="Gender" :label-position="labelPosition" prop="Gender" class='Input'>
				<lay-input v-model="model.gender" class='Border' :allow-clear="false"></lay-input>
			</lay-form-item>

			<lay-form-item label="Nationality" :label-position="labelPosition" prop="Nationality" class='Input'>
				<lay-input v-model="model.nationality" class='Border' :allow-clear="false"></lay-input>
			</lay-form-item>

			<lay-form-item label="DateOfBirth" :label-position="labelPosition" prop="DateOfBirth" class='Input'>
				<lay-date-picker v-model="model.DateOfBirth" :allow-clear="false" placeholder="click me" allowClear
					class='Border'></lay-date-picker>
			</lay-form-item>

			<lay-space direction="vertical" fill style='width: 100%;'>
				<span style='font-weight: 600;font-size: large;'>Student's Registration Information</span>
				<lay-line theme="#5FB878" borderWidth='10px'></lay-line>
			</lay-space>

			<lay-form-item label="Registration_Number" :label-position="labelPosition" prop="Registration_Number"
				class='Input'>
				<lay-input v-model="model.Registration_Number" :allow-clear="false" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Degree_awarded" :label-position="labelPosition" prop="Degree_awarded" class='Input'>
				<lay-input v-model="model.Degree_awarded" :allow-clear="false" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Major" :label-position="labelPosition" prop="Major" class='Input'>
				<lay-input v-model="model.Major" :allow-clear="false" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="GPA" :label-position="labelPosition" prop="GPA" class='Input'>
				<lay-input v-model="model.GpA" :allow-clear="false" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Total_Credits" :label-position="labelPosition" prop="totalCre" class='Input'>
				<lay-input v-model="model.totalCre" :allow-clear="false" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Date&nbsp;of&nbsp;Attendence" :label-position="labelPosition" prop="DateOfAttendence"
				class='Input'>
				<lay-date-picker v-model="model.DateOfAttendence" :allow-clear="false" placeholder="click me" allowClear
					class='Border'></lay-date-picker>
			</lay-form-item>

			<lay-form-item label="Date&nbsp;of&nbsp;Graduation" :label-position="labelPosition" prop="DateOfGraduation"
				class='Input'>
				<lay-date-picker v-model="model.DateOfGraduation" :allow-clear="false" placeholder="click me" allowClear
					class='Border'></lay-date-picker>
			</lay-form-item>
			<lay-line></lay-line>

			<br /><br /><br />
			<lay-space direction="vertical" fill style='width: 100%;'>
				<div style="dispaly:flex;">
					<span style='font-weight: 600;font-size: large;'>Student's transcript of academic record</span>
					<lay-space style="width:50%"></lay-space>
					<lay-button @click="addInputOUT" border="green">增加学年</lay-button>
					<lay-button @click="deleteinputArrOUT(index)" border="red">删除学年</lay-button>
				</div>
				<lay-line theme="#FFB800" borderWidth='10px'></lay-line>
			</lay-space>

			<div v-for="(item,index) in inputArrOUT.arr" :key="index"
				style="margin-top:5px; margin-bottom: 5px; margin-left: 3px; margin-right: 3px; border: 2px dotted #8D9699;">

				<lay-form-item label="请输入学年" :label-position="item.labelPosition" :prop="item.prop"
					class='InputAcademic'>
					<lay-input v-model="item.Academic_Year" allow-clear="false" class='BorderAcademic'></lay-input>
				</lay-form-item>

				<lay-form-item label="请输入statement" :label-position="item.labelPosition" :prop="item.prop"
					class='InputAcademic' style='font-size: 12px;padding-right:0;font-weight: 600'>
					<lay-input v-model="item.statement" class='BorderAcademic' style='width: 600px;'></lay-input>
				</lay-form-item>

				<div>
					<div style="display: flex;flex-flow:wrap;justify-content: center;">
						<div v-for="(itemm,indexx) in item.addInputArr" :key="indexx"
							style="margin-top:5px ;margin-left: 2px;margin-right: 2px; width: 23.5625rem!important;">
							<lay-form-item label="课程编号" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value1" allow-clear="false" class='Border1'></lay-input>
							</lay-form-item>
							<lay-form-item label="课程名称" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value2" allow-clear="false" class='Border1'></lay-input>
							</lay-form-item>
							<lay-form-item label="学分" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value3" allow-clear="false" class='Border1'></lay-input>
							</lay-form-item>
							<lay-form-item label="GPA" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value4" allow-clear="false" class='Border1'></lay-input>
							</lay-form-item>
							<lay-form-item label="荣誉分" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value5" allow-clear="false" class='Border1'></lay-input>
							</lay-form-item>
							<lay-space direction="vertical" fill style='width: 100%;'>
								<lay-line theme="#858e88" borderWidth='1px'></lay-line>
							</lay-space>
						</div>
					</div>
					<lay-button @click="addInput(index)" class='BorderButton' style='margin-bottom: 10px;'>增加学科
					</lay-button>
					<lay-button @click="deleteaddInputArr(index,indexx)" class='BorderButton'
						style='margin-bottom: 10px;'>删除学科</lay-button>
				</div>


			</div>


			<lay-space direction="vertical" fill style='width: 100%;'>
				<lay-line theme="#FF5722" borderWidth='10px'></lay-line>
			</lay-space>


			<lay-button @click="modifyClick" class='InputButton'>确认修改</lay-button>


		</lay-form>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		layer
	} from '@layui/layer-vue'
	import axios from 'axios'
	//axios.defaults.baseURL = 'http://127.0.0.1:5000';
	// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=UTF-8';
	axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
	import {
		useRouter,
		useRoute
	} from 'vue-router';

	const router = useRouter();

	const route = useRoute();

	let userId = route.query.userId;

	const total = reactive({
		arr: [],
	});

	const querylog = () => {
		axios.get('/querylog/', {})
			.then(function(response) {
				console.log(response, 'querylogquerylogquerylogquerylogquerylog');
				// const obj = {
				// 	ID: response.data.result.get('ID'),
				// 	admin: response.data.result[1],
				// 	ADDTime: response.data.result[2],
				// 	Type: response.data.result[3],
				// }
				total.arr = response.data.result;
				console.log(total);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	querylog();

	const scrollADD = (ID, ADDTime) => {
		let obj = {
			ID: ID,
			admin: userId,
			ADDTime: ADDTime,
			Type: '修改'
		}
		total.arr.push(obj);

		axios.post('/modifylog/', {
				data: JSON.stringify(obj),
			})
			.then(function(response) {
				console.log(response, 'errorerrorerrorerrorerrorerrorerrorerror');
			})
			.catch(function(error) {
				console.log(error);
			});

	};

	function getADDTime() {
		var a = new Date().getTime(); //获取到当前时间戳
		var b = new Date(a); //创建一个指定的日期对象
		// console.log(b);
		// console.log(nowDate(b));
		function nowDate(now) {
			var year = now.getFullYear(); //年份
			var month = now.getMonth() + 1; //月份（0-11）
			var date = now.getDate(); //天数（1到31）
			var hour = now.getHours(); //小时数（0到23）
			var minute = now.getMinutes(); //分钟数（0到59）
			// var second = now.getSeconds(); //秒数（0到59） 
			return (
				year + "-" + month + "-" + date + " " + hour + ":" + minute
			)
		}
		return nowDate(b)
	}

	const change = (number) => {
		if (number == 1) {
			router.push({
				path: '/addInfo',
				query: {
					userId: route.query.userId
				}
			})
		} else {
			router.push({
				path: '/alterInfo',
				query: {
					userId: route.query.userId
				}
			})
		}
	}

	const labelPosition = ref('right');
	const forbidden = ref(true);
	// const inputArr=reactive({
	// 	arr:[]
	// });
	const inputArrOUT = reactive({
		arr: [],
	});
	const addInput = (index) => {
		let objs = inputArrOUT.arr[index];
		let obj = {
			prop: '',
			value1: '',
			value2: '',
			value3: '',
			value4: '',
			value5: '',
			key: '',
			labelPosition: 'right'
		}
		objs.addInputArr.push(obj);
	}

	const addInputOUT = () => {
		let obj = {
			prop: '',
			value: '',
			key: '',
			Academic_Year: '',
			statement: '',
			labelPosition: 'right',
			addInputArr: []
		}
		inputArrOUT.arr.push(obj);
	}

	const deleteinputArrOUT = (index) => {
		let arr = inputArrOUT.arr;
		arr.splice(-1);
		inputArrOUT.arr = arr;
	}

	const deleteaddInputArr = (index, indexx) => {
		let arr = inputArrOUT.arr[index].addInputArr;
		arr.splice(-1);
		inputArrOUT.arr[index].addInputArr = arr;

	}
	const model = reactive({
		name: "",
		passport: "",
		gender: "",
		nationality: '',
		DateOfBirth: '',
		Registration_Number: '',
		Degree_awarded: '',
		Major: '',
		GpA: '',
		DateOfAttendence: '',
		DateOfGraduation: '',
		img: '',
		course: inputArrOUT.arr,
		totalCre: '',
	})

	const searchID = ref("");

	const serchAxios = () => {
		return axios.post('/alter/', {
			data: JSON.stringify(searchID),
		})
	}

	const searchClick = async () => {
		// debugger;
		let response = await serchAxios();
		// debugger;
		console.log(response, '212121');
		// console.log(typeof(response.data.result.course.key),'NMNMMNMNMNMNMMNM')
		model.DateOfAttendence = response.data.result.DateOfAttendance
		model.DateOfGraduation = response.data.result.DateOfGraduation
		model.GpA = response.data.result.GPA
		model.passport = response.data.result.ID
		model.Major = response.data.result.Major
		model.nationality = response.data.result.Nationality
		model.Registration_Number = response.data.result.Registration
		model.gender = response.data.result.gender
		model.name = response.data.result.name
		model.Degree_awarded = response.data.result.Degree
		model.DateOfBirth = response.data.result.DateOfBirth
		model.img = response.data.result.image
		model.totalCre = response.data.result.totalCre
		cutUrl.value = response.data.result.image
		if (response.data.course.key == 'not') {
			cleararr();
		} else {
			inputArrOUT.arr = response.data.course;
			model.course = inputArrOUT.arr
		}

		console.log(response);
		console.log(inputArrOUT.arr, 'UIUIUIIUIUIUIUIUIU');
		// console.log(response.data.course,'^^^^^^^^^^^^^^^^');
		// console.log(typeof(response.data.course),'%%%%%%%%%%%%%%%%%%%%');
		// console.log(cutUrl.value,'@@@@@@@@@@@@@');
		// console.log(typeof(cutUrl.value),'++++++++++++++++++');
		layer.open({
			type: 1,
			title: "搜索结果",
			content: `<div style="padding: 10px;font-size:45px;font-weight:700;">${response.data.info}</div>`,
			shade: false,
			isHtmlFragment: true,
			btn: [{
				text: '确认',
				callback(index) {
					layer.close(index)
				}
			}],
			area: '500px'
		});
	}

	const modifyClick = function() {
		console.log(model, '%^5^%^^^%^^%^%^%^%^%^%');
		axios.post('/changeInfo/', {
				data: JSON.stringify(model),
			})
			.then(function(response) {
				console.log(response);
				layer.open({
					type: 1,
					title: "修改结果",
					content: `<div style="padding: 10px;font-size:45px;font-weight:700;">${response.data.info}</div>`,
					shade: false,
					isHtmlFragment: true,
					btn: [{
						text: '确认',
						callback(index) {
							layer.close(index)
						}
					}],
					area: '500px'
				});
				scrollADD(model.passport, getADDTime());
				clearmodel();

			})
			.catch(function(error) {
				console.log(error);
			});

	}

	const cutUrl = ref("");
	const clearmodel = () => {
		model.name = '';
		model.passport = '';
		model.gender = '';
		model.nationality = '';
		model.DateOfBirth = '';
		model.Registration_Number = '';
		model.Degree_awarded = '';
		model.Major = '';
		model.GpA = '';
		model.DateOfAttendence = '';
		model.DateOfGraduation = '';
		model.img = '';
		model.totalCre = '';
		cutUrl.value = '';
		inputArrOUT.arr = [];

	}
	const cleararr = () => {
		inputArrOUT.arr = [];
	}

	const cutOptions = {
		copperOption: {
			center: false,
			aspectRatio: 1,
			crop: function(event) {},
		}
	};

	const getCutDone = (res) => {
		console.log("getCutDone", res);
		cutUrl.value = res.cutResult;
		model.img = res.cutResult;
		console.log("getCutDone_cuturl", cutUrl);
		console.log("getCutDone_img", model.img);
	};

	const getCutCancel = (res) => {
		console.log("getCutCancel", res);
	};

	const getFileDone = (res) => {
		console.log("getFileDone", res);
	};
</script>

<style scoped>
	.Input {
		font-size: large;
		font-weight: 1200;
		width: 95%;
	}

	.InputButton {
		font-size: large;
		font-weight: 1200;
		width: 15%;
		height: 40px;
		margin-bottom: 30px;
		border-width: 2px;
		border-color: #8d9699;
	}

	.InputClass {
		font-size: large;
		font-weight: 1200;
		width: 60%;
		margin-top: 10px;
	}

	.InputAcademic {
		font-size: large;
		font-weight: 1200;
		width: 40%;
		margin-top: 10px;
		margin-left: 20px;
	}

	.Border {
		width: 50%;
		border-width: 2px;
		margin-left: 70px;
		border-color: #8d9699;
	}

	.Border1 {
		width: 80%;
		border-width: 2px;
		margin-left: 70px;
		border-color: #8d9699;
	}

	.BorderAcademic {
		border-width: 2px;
		margin-left: 30px;
		border-color: #8d9699;
	}

	.BorderButton {
		border-width: 2px;
		/* margin-left: 70px; */
		border-color: #8d9699;
	}

	.change {
		margin-bottom: 40px;
	}

	.scroll {
		width: 20%;
		position: absolute;
		margin-left: 10px;
		top: 200px;
	}
</style>
