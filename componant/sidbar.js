const { createApp, ref, computed, defineEmits } = Vue;


export default {
    template: `
    <div class="px-2">
        <button @click="toggleSidebar" class="btn  text-black d-md-none" style="text-decoration: none;"  >
            <i :class="[open ? 'fa-chevron-left' : 'fa-chevron-right']" style="text-decoration: none"></i>
        </button>
        <div :class="{ open, closed: !open }" @click="toggleSidebar" style=" text-decoration: none; height: 100vh">
            
            <ul class="list-unstyled components" style=" text-decoration: none; height: 100%">
            <li class="my-2">
                    <button type="button" class="btn text-black " :class="{ 'fw-semibold bg-light': inboxOpen }" style="width: 100%; text-align: left; background-color: #E7F1FF"
                    @click="emitEvent('inbox')">
                        <i :class="['fa', 'fa-inbox', { 'text-primary': inboxOpen }]" style="color: black"></i> Inbox
                    </button>
                </li>
                <li class="my-2">
                    <button type="button" class="btn text-black " :class="{ 'fw-semibold bg-light': ownOpen }" style="width: 100%; text-align: left; background-color: #E7F1FF"
                    @click="emitEvent('own')">
                        <i :class="['fa', 'fa-address-book', { 'text-secondary': ownOpen }]" style="color: black"></i> Own
                    </button>
                </li>
                <li class="my-2">
                    <button type="button" class="btn  text-black" :class="{ 'fw-semibold bg-light': archiveOpen }" style="width: 115%; text-align: left; background-color: #E7F1FF"
                    @click=" emitEvent('archive')">
                        <i :class="['fa', 'fa-archive', { 'text-danger': archiveOpen }]" style="color: black"></i> Archive
                    </button>
                </li>
                <li class="my-2" >
                    <button type="button" class="btn text-black " :class="{ 'fw-semibold bg-light': starOpen }" style=" width: 115%; text-align: left; background-color: #E7F1FF; text-decoration: none"
                    @click="emitEvent('star')">
                        <i :class="['fa', 'fa-star', { 'text-warning': starOpen }]" style="color: black"></i> Starred
                    </button>
                </li>
                <li class="my-2" >
                    <button type="button" class="btn text-black " :class="{ 'fw-semibold bg-light': reviewOpen }" style=" width: 115%; text-align: left; background-color: #E7F1FF; text-decoration: none"
                    @click="emitEvent('review')">
                        <i :class="['fa', 'fa-user-clock', { 'text-warning': reviewOpen }]" style="color: black"></i> Review
                    </button>
                </li>
                <li class="my-2" >
                    <button type="button" class="btn text-black " :class="{ 'fw-semibold bg-light': doneOpen }" style=" width: 115%; text-align: left; background-color: #E7F1FF; text-decoration: none"
                    @click="emitEvent('done')">
                        <i :class="['fa', 'fa-check', { 'text-success': doneOpen }]" style="color: black"></i> Done
                    </button>
                </li>
                <li class="my-2" >
                    <button type="button" class="btn  text-black" :class="{ 'fw-semibold bg-light': labelOpen }" style="width: 100%; text-align: left; background-color: #E7F1FF; text-decoration: none"
                    @click=" emitEvent('label')">
                        <i :class="['fa', 'fa-tag', { 'text-info': labelOpen }]" style="color: black"></i> Label
                    </button>
                </li>
            </ul>
        </div>
    </div>
    `,


    props: {
        oneTasks: Array
    },

    emits: ["filtertask"],

    setup(props, { emit }) {
        console.log(props);
        const open = ref(true);
        const inboxOpen = ref(false);
        const archiveOpen = ref(false);
        const starOpen = ref(false);
        const labelOpen = ref(false);
        const ownOpen = ref(false);
        const doneOpen = ref(false);
        const reviewOpen = ref(false);

        const toggleSidebar = () => {
            open.value = !open.value;
        };

        const toggleCollapse = (e) => {
            console.log(e.target);
            // this[`${target}Open`] = !this[`${target}Open`];
        };



        const emitEvent = (value) => {
            inboxOpen.value = false;
            archiveOpen.value = false;
            starOpen.value = false;
            labelOpen.value = false;
            ownOpen.value = false;
            doneOpen.value = false;
            reviewOpen.value = false;
            switch (value) {
                case 'inbox':
                    inboxOpen.value = true;
                    break;
                case 'own':
                    ownOpen.value = true;
                    break;
                case 'archive':
                    archiveOpen.value = true;
                    break;
                case 'star':
                    starOpen.value = true;
                    break;
                case 'label':
                    labelOpen.value = true;
                    break;
                case 'done':
                    doneOpen.value = true;
                    break;
                case 'review':
                    reviewOpen.value = true;
                    break;
                default:
                    break;
            }
            // this.$emit('filterTask', value);
            emit("filtertask", value)
        }


        return {
            open,
            inboxOpen,
            archiveOpen,
            starOpen,
            labelOpen,
            ownOpen,
            doneOpen,
            reviewOpen,
            toggleSidebar,
            toggleCollapse,
            emitEvent,
        };
    },
};