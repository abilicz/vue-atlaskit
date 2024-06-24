<template>
    <div class="tooltip">
        <div ref="target" class="target" @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
            <slot />
            <transition name="fade">
                <Popper v-if="show" ref="popper" :transition-delay="0"
                        :boundaries-element="boundariesElement"
                        :target-element="$refs.target" :placement="placement" :offset="offset">
                    <span v-if=label ref="label" class="label no-click" :disabled="disabled">
                       {{ label }}
                    </span>
                    <span v-else ref="label" class="label" :disabled="disabled" @mouseenter="onMouseEnter"
                          @mouseleave="onMouseLeave">
                        <slot name="label"></slot>
                    </span>
                </Popper>
            </transition>
        </div>
    </div>
</template>

<script>
    import Popper from '../Popper/Popper';

    export default {
        name: 'Tooltip',
        components: { Popper },
        props: {
            label: {
                type: String,
            },
            placement: {
                type: String,
                default: 'bottom',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            offset: {
                type: String,
                default: '0,5',
            },
            appendToBody: {
                type: Boolean,
                default: false,
            },
            boundariesElement: {
                type: String,
                default: 'viewport',
            },
            delay: {
                type: Number,
                default: 0,
            },
        },
        data() {
            return {
                timeoutId: undefined,
                show: false,
            };
        },
        methods: {
            onMouseEnter() {
                if (this.timeoutId) clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    this.show = true;
                    if (this.appendToBody) {
                        this.$nextTick(() => {
                            this.append();
                        });
                    }
                }, this.delay);
            },
            onMouseLeave() {
                if (this.timeoutId) clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    if (this.appendToBody) {
                        document.body.removeChild(this.$refs.label);
                    }
                    this.show = false;
                }, this.delay);
            },
            append() {
                document.body.appendChild(this.$refs.label);
                setTimeout(() => {
                    if (this.$refs.popper) {
                        this.$refs.popper.update();
                    }
                }, 0);
            },
        },
    };
</script>

<style scoped>
.tooltip {
    display: inline-block;
}

.label {
    box-sizing: border-box;
    position: absolute;
    z-index: 999999;
    padding: 2px 10px;
    font-size: 12px;
    font-weight: 400;
    box-shadow: 0 1px 2px 1px rgba(0, 1, 0, 0.2);
    white-space: nowrap;
    border-radius: 3px;
    background-color: var(--ds-background-neutral-bold, #172b4d);
    color: var(--ds-text-inverse, #FFF);
}

.no-click {
    pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
