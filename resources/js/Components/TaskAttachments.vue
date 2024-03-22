<template>
    <el-upload
        drag
        :action="route('tasks.media.store', task)"
        multiple
        :headers="{ 'X-XSRF-TOKEN': csrf }"
        :file-list="task.media"
        :on-preview="previewFile"
        :on-remove="removeFile"
    >
        <el-icon size="48">
            <CloudArrowUpIcon />
        </el-icon>
        <div class="font-medium">
            Drop file here or <em class="text-accent">Click to upload</em>
        </div>
    </el-upload>
</template>

<script setup>
import { CloudArrowUpIcon } from "@heroicons/vue/24/outline/index.js";
import { computed } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import { router } from "@inertiajs/vue3";

const props = defineProps({
    task: Object,
});

const cookies = useCookies();
const csrf = computed(() => cookies.get("XSRF-TOKEN"));

function previewFile(file) {
    window.open(file.url ?? file.response.url, "_blank");
}

function removeFile(file) {
    router.delete(
        route("tasks.media.delete", {
            task: props.task,
            media: file.id ?? file.response.id,
        }),
        {
            preserveState: true,
        },
    );
}
</script>

<style scoped></style>
