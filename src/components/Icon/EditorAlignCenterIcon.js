import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorAlignCenterIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 010 2H7a1 1 0 010-2zm2.5 4h5a1 1 0 010 2h-5a1 1 0 010-2zm0-8h5a1 1 0 010 2h-5a1 1 0 110-2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
