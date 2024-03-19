import {dayjs} from "element-plus";

export function getStatusType(status) {
    switch (status) {
        case "in_progress":
            return 'primary';
        case "completed":
            return 'success';
        case "cancelled":
            return 'danger';
        default:
            return 'info';
    }
}

export function getPriorityType(priority) {
    switch (priority) {
        case "medium":
            return 'warning';
        case "high":
            return 'danger';
        default:
            return 'info';
    }
}

export function formatDate(date) {
    return dayjs(date).format('DD-MM-YYYY');
}
