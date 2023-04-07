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
				<lay-button @click="change(1)" style='height: 40px;' disabled='true'>添加信息</lay-button>
				<lay-button @click="change(2)" style='height: 40px;' type="warm">修改信息</lay-button>
			</lay-button-container>


			<el-upload ref="uploadRef"
								 class="upload-demo"
								 action="https://www.duc.university/execl/"
								 accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
								 :auto-upload="false"
								 :limit="1"
								 :on-exceed="handleExceed"
								 :before-upload="beforeAvatarUpload"
								 :on-success="handleAvatarSuccess"
								 :on-error="handleAvatarError">
				<template #trigger>
					<el-button type="primary">选择execl</el-button>
				</template>

				<el-button class="ml-3" type="success" @click="submitUpload">
					上传execl
				</el-button>

			</el-upload>

			<lay-space direction="vertical" fill style='width: 100%;'>
				<span style='font-weight: 600;font-size: large;'>Identity Information</span>
				<lay-line theme="#31BDEC" borderWidth='10px'></lay-line>
			</lay-space>
			<lay-upload text="上传头像图片" @cutdone="getCutDone" acceptMime="images" @cutcancel="getCutCancel" :cut="true"
				:cutOptions="cutOptions" :multiple="false" @done="getFileDone" :auto='false'>
				<template #preview>
					<div class="easy-wrap" v-if="cutUrl">
						<img :src="cutUrl" style='width: 150px;height: 150px;' />
					</div>
				</template>
			</lay-upload>
			<br /><br /><br />
			<lay-form-item label="Name" :label-position="labelPosition" prop="name" class='Input'>
				<lay-input v-model="model.name" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="ID/PassportNo" :label-position="labelPosition" prop="passport" class='Input'>
				<lay-input v-model="model.passport" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Gender" :label-position="labelPosition" prop="Gender" class='Input'>
				<lay-input v-model="model.gender" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Nationality" :label-position="labelPosition" prop="Nationality" class='Input'>
				<lay-input v-model="model.nationality" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Date&nbsp;of&nbsp;Birth" :label-position="labelPosition" prop="DateOfBirth"
				class='Input'>
				<lay-date-picker v-model="model.DateOfBirth" placeholder="click me" allowClear class='Border'>
				</lay-date-picker>
			</lay-form-item>
			<lay-line></lay-line>
			<br /><br /><br />
			<lay-space direction="vertical" fill style='width: 100%;'>
				<span style='font-weight: 600;font-size: large;'>Student's Registration Information</span>
				<lay-line theme="#5FB878" borderWidth='10px'></lay-line>
			</lay-space>

			<lay-form-item label="Registration_Number" :label-position="labelPosition" prop="Registration_Number"
				class='Input'>
				<lay-input v-model="model.Registration_Number" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Degree_awarded" :label-position="labelPosition" prop="Degree_awarded" class='Input'>
				<lay-input v-model="model.Degree_awarded" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Major" :label-position="labelPosition" prop="Major" class='Input'>
				<lay-input v-model="model.Major" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="GPA" :label-position="labelPosition" prop="GPA" class='Input'>
				<lay-input v-model="model.GpA" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Total_Credits" :label-position="labelPosition" prop="totalCre" class='Input'>
				<lay-input v-model="model.totalCre" class='Border'></lay-input>
			</lay-form-item>

			<lay-form-item label="Date&nbsp;of&nbsp;Attendence" :label-position="labelPosition" prop="DateOfAttendence"
				class='Input'>
				<lay-date-picker v-model="model.DateOfAttendence" placeholder="click me" allowClear class='Border'>
				</lay-date-picker>
			</lay-form-item>

			<lay-form-item label="Date&nbsp;of&nbsp;Graduation" :label-position="labelPosition" prop="DateOfGraduation"
				class='Input'>
				<lay-date-picker v-model="model.DateOfGraduation" placeholder="click me" allowClear class='Border'>
				</lay-date-picker>
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
					<lay-input v-model="item.Academic_Year" class='BorderAcademic'></lay-input>
				</lay-form-item>
				<lay-form-item label="请输入statement" :label-position="item.labelPosition" :prop="item.prop"
					class='InputAcademic' style='font-size: 12px;padding-right:0;font-weight: 600'>
					<lay-input v-model="item.statement" class='BorderAcademic' style='width: 600px;'></lay-input>
				</lay-form-item>


				<div>
					<div style="display: flex;flex-flow:wrap;justify-content: center;">
						<div v-for="(itemm,indexx) in item.addInputArr" :key="indexx"
							style="margin-top:5px ;margin-left: 3px;margin-right: 3px;">
							<lay-form-item label="课程编号" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value1" class='Bordercourse'></lay-input>
							</lay-form-item>
							<lay-form-item label="课程名称" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value2" class='Bordercourse'></lay-input>
							</lay-form-item>
							<lay-form-item label="学分" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value3" class='Bordercourse'></lay-input>
							</lay-form-item>
							<lay-form-item label="GPA" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value4" class='Bordercourse'></lay-input>
							</lay-form-item>
							<lay-form-item label="荣誉分" :label-position="itemm.labelPosition" :prop="itemm.prop"
								class='InputClass'>
								<lay-input v-model="itemm.value5" class='Bordercourse'></lay-input>
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


			<lay-button @click="submitClick" class='InputButton'>提交</lay-button>


		</lay-form>
	</div>
</template>

<script setup lang="ts">
	import {
		ref,
		reactive
	} from 'vue'
	import {
		layer
	} from '@layui/layer-vue'
	import axios from 'axios'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import { genFileId,ElMessage } from 'element-plus'
	import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

	axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';


	const total = reactive({
		arr: [],
	});

	const uploadRef = ref<UploadInstance>()

	const handleExceed: UploadProps['onExceed'] = (files) => {
		uploadRef.value!.clearFiles()
		const file = files[0] as UploadRawFile
		file.uid = genFileId()
		uploadRef.value!.handleStart(file)
	}

	const beforeAvatarUpload: UploadProps['beforeUpload'] = (File) => {
		console.log(File.type,'UploadFileType')
		if (File.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
			ElMessage.error('长传文件必须是xlsx格式')
			return false
		}
		return true
	}

	const submitUpload = () => {
		layer.open({
			type: 1,
			title: "上传EXECL",
			content: `<div style="padding: 10px;font-size:45px;font-weight:700;">是否上传该文件</div>`,
			shade: false,
			isHtmlFragment: true,
			btn: [{
				text: '确认',
				callback(index) {
					layer.close(index);
					uploadRef.value!.submit();
				}
			},{
				text: '取消',
				callback(index) {
					layer.close(index);
				}
			}],
			area: '500px'
		});

	}

	const handleAvatarSuccess: UploadProps['onSuccess'] = (
			response,
			uploadFile
	) => {
		if(response.info=='execl上传成功') {
			console.log(response,'uploadresponseSuccess');
			uploadRef.value!.clearFiles();
			layer.open({
				type: 1,
				title: "上传结果",
				content: `<div style="padding: 10px;font-size:45px;font-weight:700;">上传成功</div>`,
				shade: false,
				isHtmlFragment: true,
				btn: [{
					text: '确认',
					callback(index) {
						layer.close(index);
					}
				}],
				area: '500px'
			});
			scrollADD(response.id, getADDTime());
		}
		else {
			console.log(response,'uploadresponseError');
			layer.open({
				type: 1,
				title: "上传结果",
				content: `<div style="padding: 10px;font-size:45px;font-weight:700;">上传失败</div>`,
				shade: false,
				isHtmlFragment: true,
				btn: [{
					text: '确认',
					callback(index) {
						layer.close(index);
					}
				}],
				area: '500px'
			});
		}
	}

	const handleAvatarError: UploadProps['onError'] = (
			error,
			uploadFile
	) => {
		console.log(error,'uploaderror');
		layer.open({
			type: 1,
			title: "上传结果",
			content: `<div style="padding: 10px;font-size:45px;font-weight:700;">上传失败</div>`,
			shade: false,
			isHtmlFragment: true,
			btn: [{
				text: '确认',
				callback(index) {
					layer.close(index);
				}
			}],
			area: '500px'
		});
	}

	const querylog = () => {
		axios.get('/querylog/', {})
			.then(function(response) {
				console.log(response, 'querylog');
				// const obj = {
				// 	ID: response.data.result.get('ID'),
				// 	admin: response.data.result[1],
				// 	ADDTime: response.data.result[2],
				// 	Type: response.data.result[3],
				// }
				total.arr = response.data.result;
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
			Type: '添加'
		}
		total.arr.push(obj);

		axios.post('/addlog/', {
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
	};

	const router = useRouter();

	const route = useRoute();

	const userId = route.query.userId;

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
		console.log(objs, 'inner');
	}

	const addInputOUT = () => {
		let obj = {
			prop: '',
			value: '',
			key: '',
			Academic_Year: '',
			labelPosition: 'right',
			addInputArr: [],
			statement: '',
		}
		console.log(inputArrOUT, 'YUYUYUUUYYUYUY');
		console.log(inputArrOUT, 'IOIOIOIOIOIOIOI');
		inputArrOUT.arr.push(obj);
		console.log(inputArrOUT.arr, 'outoutoutoutoutoutoutoutoutout');
	}

	const deleteinputArrOUT = (index) => {
		console.log(index, '????????????????????');
		let arr = inputArrOUT.arr;
		arr.splice(-1);
		inputArrOUT.arr = arr;
	}

	const deleteaddInputArr = (index, indexx) => {
		console.log(index, '!!!!!!!!!!!!!!!!!');
		console.log(indexx, '++++++++++++++++++');
		let arr = inputArrOUT.arr[index].addInputArr;
		arr.splice(-1);
		inputArrOUT.arr[index].addInputArr = arr;

	}

	const model = reactive({
		name: "",
		passport: "",
		gender: "",
		nationality: '',
		DateOfBirth: '2020-01-01',
		Registration_Number: '',
		Degree_awarded: '',
		Major: '',
		GpA: '',
		DateOfAttendence: '2020-01-01',
		DateOfGraduation: '2020-01-01',
		img: '',
		course: inputArrOUT.arr,
		totalCre: '',
	})

	const submitClick = function() {
		axios.post('/update/', {
				data: JSON.stringify(model),
			})
			.then(function(response) {
				console.log(response);
				scrollADD(model.passport, getADDTime());
				layer.open({
					type: 1,
					title: "上传结果",
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
				clearmodel();
			})
			.catch(function(error) {
				console.log(error);
			});
	};



	const cutUrl = ref("");

	const clearmodel = () => {
		model.name = '';
		model.passport = '';
		model.gender = '';
		model.nationality = '';
		model.DateOfBirth = '2020-01-01';
		model.Registration_Number = '';
		model.Degree_awarded = '';
		model.Major = '';
		model.GpA = '';
		model.DateOfAttendence = '2020-01-01';
		model.DateOfGraduation = '2020-01-01';
		model.img = '';
		model.totalCre = '';
		cutUrl.value = '';
		inputArrOUT.arr = [];

	}

	const cutOptions = {
		copperOption: {
			center: false,
			aspectRatio: 1,
			crop: function(event) {
				// console.log(event.detail.x);
				// console.log(event.detail.y);
				// console.log(event.detail.width);
				// console.log(event.detail.height);
				// console.log(event.detail.rotate);
				// console.log(event.detail.scaleX);
				// console.log(event.detail.scaleY);
			},
		}
	};

	const getCutDone = (res) => {
		console.log("getCutDone", res);
		cutUrl.value = res.cutResult;
		model.img = res.cutResult;
		console.log("getCutDone_cuturl", cutUrl);
		console.log("getCutDone_img", model.img);
		console.log("getCutDone_img", typeof(model.img));
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
		width: 12%;
		height: 40px;
		margin-bottom: 30px;
		border-width: 2px;
		border-color: #8d9699;
	}

	.InputButtonExecl {
		font-size: large;
		font-weight: 1200;
		width: 20%;
		height: 40px;
		margin-bottom: 10px;
		margin-left: 5px;
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

	.Bordercourse {
		width: 100%;
		border-width: 2px;
		margin-left: 30px;
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
