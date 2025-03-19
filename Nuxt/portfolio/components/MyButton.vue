<template>
    <button class="btn">{{ label }}</button>
</template>

<script setup>
defineProps({ label: String })
</script>

<style scoped>
.btn {
    background-color: #a6ca58;
    padding: 10px;
    border: none;
    cursor: pointer;
}
</style>
