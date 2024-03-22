<template>
    <el-dialog v-model="dialogVisible" width="500">
        <template #header>
            <div v-if="editingTask">
                Edit task <span class="font-bold">{{ form.title }}</span>
            </div>
            <div v-else>Create a new task</div>
        </template>
        <el-form
            ref="formRef"
            :model="form"
            label-position="top"
            size="large"
            :rules="rules"
        >
            <el-form-item label="Title" prop="title">
                <el-input v-model="form.title" autofocus />
            </el-form-item>
            <el-form-item label="Description" prop="description">
                <el-input v-model="form.description" type="textarea" rows="6" />
            </el-form-item>
            <el-form-item label="Due Date" prop="due_date">
                <el-date-picker
                    v-model="form.due_date"
                    type="date"
                    placeholder="Pick a date"
                    class="!w-full"
                />
            </el-form-item>
            <el-form-item label="Status" prop="status">
                <el-select v-model="form.status" placeholder="Select a status">
                    <el-option
                        v-for="(label, value) in allowedStatuses"
                        :key="value"
                        :label="label"
                        :value="value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="Priority" prop="priority">
                <el-select
                    v-model="form.priority"
                    placeholder="Select a priority"
                >
                    <el-option
                        v-for="(label, value) in allowedPriorities"
                        :key="value"
                        :label="label"
                        :value="value"
                    />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button
                    :loading="form.processing"
                    type="primary"
                    @click="handleSubmit"
                >
                    {{ editingTask ? "Update" : "Create" }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

defineProps({
    allowedStatuses: Object,
    allowedPriorities: Object,
});

const dialogVisible = ref(false);

const formRef = ref(null);

const editingTask = ref(false);

const emit = defineEmits(["taskCreated"]);

defineExpose({ createTask, editTask });

const form = ref(useForm({}));

function editTask(task) {
    form.value = useForm(task);
    editingTask.value = true;
    dialogVisible.value = true;
    formRef.value?.clearValidate();
}

function createTask() {
    form.value = useForm({
        title: "",
        description: "",
        due_date: "",
        status: "",
        priority: "",
    });
    editingTask.value = false;
    dialogVisible.value = true;
    formRef.value?.clearValidate();
}

const rules = {
    title: [{ required: true, message: "Title is required", trigger: "blur" }],
    description: [
        { required: true, message: "Description is required", trigger: "blur" },
    ],
    due_date: [
        { required: true, message: "Due date is required", trigger: "change" },
    ],
    status: [
        { required: true, message: "Status is required", trigger: "change" },
    ],
    priority: [
        { required: true, message: "Priority is required", trigger: "change" },
    ],
};

function handleSubmit() {
    formRef.value.validate((valid) => {
        if (!valid) {
            return;
        }

        const url = editingTask.value
            ? route("tasks.update", form.value.id)
            : route("tasks.store");
        const method = editingTask.value ? "put" : "post";

        form.value[method](url, {
            onSuccess: (response) => {
                dialogVisible.value = false;
                form.value.reset();
                editingTask.value = false;

                if (!editingTask.value && getQueryParamValue("newTaskId")) {
                    emit("taskCreated", getQueryParamValue("newTaskId"));
                }
            },
        });
    });
}

function getQueryParamValue(key) {
    const UrlParams = new URLSearchParams(window.location.search);
    return UrlParams.get(key);
}
</script>

<style scoped></style>
