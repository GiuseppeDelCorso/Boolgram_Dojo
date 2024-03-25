
<script>
import { store } from "../store.js"
export default {
    name: "SectionStories",
    data() {
        return {

           storie: store.dati,
        }
    },
    methods: {
        handleMouseWheel(event) {
            const scrollableContainer = this.$refs.scrollableContainer;
            scrollableContainer.scrollLeft += event.deltaY;
        }
    },
    mounted() {
        const scrollableContainer = this.$refs.scrollableContainer;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        scrollableContainer.addEventListener('mousedown', (event) => {
            isDragging = true;
            startX = event.clientX;
            scrollLeft = scrollableContainer.scrollLeft;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', (event) => {
            if (isDragging) {
                const deltaX = event.clientX - startX;
                const newScrollLeft = scrollLeft - deltaX;
                scrollableContainer.scrollLeft = Math.max(0, Math.min(scrollableContainer.scrollWidth - scrollableContainer.clientWidth, newScrollLeft));
            }
        });
    },
};
</script>

<template>
    <div>
        <div class="container Radius mt-4">
            <div class="row bgWhite justify-content-center">
                <div class="row d-flex justify-content-between flex-nowrap scrollable-container"
                    ref="scrollableContainer" @wheel="handleMouseWheel">
                    <div class="col-1 my-3 d-flex flex-column align-items-center" v-for="(dati, index) in storie"
                        :key="index">
                        <img class="ImgStyle" :src="dati.img" alt="">
                        <div class="mt-1 StyleName text-black">{{ dati.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.overflow-x-auto {
    overflow-x: auto;
    white-space: nowrap;
}

.scrollable-container {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
}

.scrollable-container::-webkit-scrollbar {
    width: 0;
}

.ImgStyle {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: contain;
    border: 2px solid rgb(252, 72, 18);
    padding: 2px;
}
.StyleName{
    font-size: 12px;
}

.bgWhite {
    background-color: white;
}

.Radius {
    border: 1px solid rgb(206, 204, 204);
}
</style>
