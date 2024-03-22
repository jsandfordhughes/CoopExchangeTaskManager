<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TaskModal from "@/Components/TaskModal.vue";
import { computed, ref, watch } from "vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline/index.js";
import { router, usePage } from "@inertiajs/vue3";
import {
    getStatusType,
    getPriorityType,
    formatDate,
} from "@/Composables/TaskHelpers.js";
import TaskViewModal from "@/Components/TaskViewModal.vue";

const props = defineProps({
    tasks: Object,
    allowedStatuses: Object,
    allowedPriorities: Object,
});

const formModal = ref(null);

const viewModal = ref(null);

const taskToView = ref(null);

const user = computed(() => {
    return usePage().props.auth.user;
});

function editTask(task) {
    formModal.value.editTask(task);
}

function deleteTask(task) {
    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }

    router.delete(route("tasks.destroy", task.id));
}

function viewTask(task) {
    taskToView.value = task;
    viewModal.value.openModal();
}

function taskCreated(taskId) {
    viewTask(props.tasks.data.find((task) => task.id === parseInt(taskId)));
}

watch(
    () => props.tasks,
    () => {
        if (taskToView.value) {
            taskToView.value = props.tasks.data.find(
                (task) => task.id === taskToView.value.id,
            );
        }
    },
);
</script>

<template>
    <AppLayout title="Tasks">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Task Manager
            </h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="mb-5">
                    <el-button
                        type="primary"
                        @click="$refs.formModal.createTask()"
                        >Create Task</el-button
                    >
                </div>
                <div
                    class="bg-white overflow-hidden shadow-xl p-8 font-bold text-xl"
                >
                    <el-table
                        :data="tasks.data"
                        :default-sort="{
                            prop: 'due_date',
                            order: 'descending',
                        }"
                        style="width: 100%"
                        class="clickable"
                        @row-click="viewTask"
                    >
                        <el-table-column prop="title" label="Title" sortable />
                        <el-table-column
                            v-slot="data"
                            prop="due_date"
                            label="Due Date"
                            sortable
                        >
                            {{ formatDate(data.row.due_date) }}
                        </el-table-column>
                        <el-table-column
                            v-slot="data"
                            prop="status"
                            label="Status"
                            sortable
                        >
                            <el-tag :type="getStatusType(data.row.status)">
                                {{ allowedStatuses[data.row.status] }}
                            </el-tag>
                        </el-table-column>
                        <el-table-column
                            v-slot="data"
                            prop="priority"
                            label="Priority"
                            sortable
                        >
                            <el-tag :type="getPriorityType(data.row.priority)">
                                {{ allowedPriorities[data.row.priority] }}
                            </el-tag>
                        </el-table-column>
                        <el-table-column v-slot="data" label="">
                            <el-dropdown>
                                <el-icon size="32" @click.prevent.stop>
                                    <EllipsisVerticalIcon />
                                </el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item
                                            @click="editTask(data.row)"
                                            >Edit</el-dropdown-item
                                        >
                                        <el-dropdown-item
                                            class="!text-red-500"
                                            @click="deleteTask(data.row)"
                                            >Delete
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>

        <TaskModal
            ref="formModal"
            :allowed-priorities
            :allowed-statuses
            @task-created="taskCreated"
        />
        <TaskViewModal
            ref="viewModal"
            v-model="taskToView"
            :allowed-statuses
            :allowed-priorities
            @edit-task="editTask"
        />
    </AppLayout>
</template>
