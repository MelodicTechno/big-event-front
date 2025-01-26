<script setup>
import { ref } from 'vue';

const password = ref({
    old_pwd: '',
    new_pwd: '',
    re_pwd: ''
})

const rules = {
    old_pwd: [
        { required: true, message: '请输入旧密码', trigger: 'blur' },
        {
            min: 5,
            max: 16,
            message: '密码必须是5-16位字符',
            trigger: 'blur'
        }
    ],
    new_pwd: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        {
            min: 5,
            max: 16,
            message: '密码必须是5-16位字符',
            trigger: 'blur'
        }
    ],
    re_pwd: [
        { required: true, message: '请再次输入新密码', trigger: 'blur' },
        {
            min: 5,
            max: 16,
            message: '密码必须是5-16位字符',
            trigger: 'blur'
        }
    ]
}
// 验证密码

// 修改用户密码
import { userPasswordUpdateService } from '@/api/user';
import { ElMessage } from 'element-plus';
const updateUserPassword = async () => {
    // 调用接口
    let result = await userPasswordUpdateService(password.value)
    ElMessage.success(result.msg ? result.msg : '修改成功')
    // 清空密码数据
    password.value = {
        old_pwd: '',
        new_pwd: '',
        re_pwd: ''
    }
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>重置密码</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form :model="password" :rules="rules" label-width="100px" size="large">
                    <el-form-item label="旧密码" prop="old_pwd">
                        <el-input v-model="password.old_pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="new_pwd">
                        <el-input v-model="password.new_pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="re_pwd">
                        <el-input v-model="password.re_pwd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateUserPassword">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>