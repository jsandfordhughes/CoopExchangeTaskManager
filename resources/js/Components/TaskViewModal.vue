<template>
    <el-dialog v-model="dialogVisible" width="50%">
        <div class="p-4 pt-0">
            <div class="flex items-center">
                <div class="bold text-2xl text-black">title{{ task.title }}</div>
                <el-tag :type="getStatusType(task.status)" class="ml-4">
                    {{ allowedStatuses[task.status] }}
                </el-tag>
            </div>

            <div class="flex items-center mt-4">
                <el-tag :type="getPriorityType(task.priority)">
                    {{ allowedPriorities[task.priority] }}
                </el-tag>
                <el-tag class="ml-3">Due: {{formatDate(task.due_date)}}</el-tag>
            </div>

            <div class="flex">
                <el-link class="ml-auto !text-accent" @click="editTask">Edit Task</el-link>
            </div>

            <hr class="my-6"/>
            <div class="whitespace-pre-line">
                {{ task.description }}
            </div>

            <hr class="my-6"/>

            <task-notes :task />
        </div>
    </el-dialog>
</template>

<script setup>
import {reactive, ref} from "vue";
import {formatDate, getPriorityType, getStatusType} from "@/Composables/TaskHelpers.js";
import TaskNotes from "@/Components/TaskNotes.vue";

const dialogVisible = ref(false);

defineProps({
    allowedStatuses: Object,
    allowedPriorities: Object,
})

const task = defineModel({type: Object})

const emit = defineEmits(['editTask'])

defineExpose({openModal})

function openModal() {
    dialogVisible.value = true;
}

function editTask() {
    dialogVisible.value = false;
    emit('editTask', task.value);
}
</script>

<style scoped>

</style>
