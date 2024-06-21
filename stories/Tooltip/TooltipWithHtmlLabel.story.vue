<template>
    <div class="buttons-group">
        <Tooltip
            v-for="placement in placements"
            :key="placement"
            delay=500
            :placement="placement">
            <template #label>
                <b>I support html elements </b> &#128540;
            </template>
            <Button>Hover over me!</Button>
        </Tooltip>
    </div>
</template>

<script>
    import Tooltip from '@/components/Tooltip/Tooltip';
    import Button from '@/components/Button/Button';

    export default {
        name: 'TooltipWithHtmlLabelStory',
        components: { Tooltip, Button },
        data() {
            return {
                placements: ['top', 'right', 'bottom', 'left']
            };
        }
    };
</script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
