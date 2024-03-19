<template>
<div>
    <div class="font-bold text-sm">Notes</div>

    <div v-if="notes.length">
        <div v-for="note in notes" :key="note.id" class="p-2 my-2 rounded border-[1px] relative">
            <div>{{ note.note }}</div>
            <div class="mt-3 text-xs text-gray-400">{{ dayjs(note.created_at).format('DD-MM-YYYY HH:ss') }}</div>
            <el-icon class="!absolute top-2 right-2 cursor-pointer" color="red" size="16" @click="deleteNote(note)">
                <TrashIcon/>
            </el-icon>
        </div>
    </div>
    <div v-else>
        No notes created yet
    </div>

    <el-form label-position="top" class="mt-6">
        <el-form-item label="Add Note">
            <el-input type="textarea" :rows="6" v-model="form.note"/>
        </el-form-item>
        <div class="flex">
            <el-button class="ml-auto" type="primary" @click.prevent="addNote" :loading="form.processing">Add Note</el-button>
        </div>
    </el-form>
</div>
</template>

<script setup>
import {computed} from "vue";
import {useForm} from "@inertiajs/vue3";
import {dayjs} from "element-plus";
import {TrashIcon} from "@heroicons/vue/24/outline/index.js";

const props = defineProps({
    task: Object
})

const notes = computed(() => {
    return props.task.notes
})

const form = useForm({
    note: ''
})

function addNote() {
    if (!form.note) {
        return
    }

    form.post(route('tasks.notes.store', props.task), {
        preserveState: true,
        onSuccess: () => {
            form.reset()
        }
    });
}

function deleteNote(note) {
    if (!confirm('Are you sure you want to delete this note?')) {
        return
    }

    form.delete(route('tasks.notes.destroy', [props.task, note]))
}
</script>

<style scoped>

</style>
