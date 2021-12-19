import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Video16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm11.37 10.954c.285.138.63-.05.63-.343V5.39c0-.293-.345-.481-.63-.343L11 6.194v3.613l2.37 1.147zM2 5.99v4.018c0 .54.449.991 1.003.991h4.994A.99.99 0 009 10.01V5.99C9 5.452 8.551 5 7.997 5H3.003A.99.99 0 002 5.99z"/></svg>'  });
    }
};
