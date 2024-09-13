<template>
    <div class="wrapper">
        <DatePicker v-model="date" />
        <DatePicker v-model="date" :disabled="true" />
    </div>
</template>

<script>
    import DatePicker from '@/components/Calendar/DatePicker';

    export default {
        name: 'DatePickerStory',
        components: { DatePicker },
        data() {
            return {
                date: ''
            };
        }
    };
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
