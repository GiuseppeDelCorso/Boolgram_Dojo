<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "SectionStories",
    data() {
        return {
            store,
            dati: [
            {
                img: 'https://picsum.photos/50/50',
                name: 'Alessio'
            },
            {
                img: 'https://picsum.photos/id/237/50/50',
                name: 'Marco'
            },
            {
                img: 'https://picsum.photos/id/64/50/50',
                name: 'Francesca'
            },
            {
                img: 'https://picsum.photos/id/111/50/50',
                name: 'Marika'
            },
            {
                img: 'https://picsum.photos/id/319/50/50',
                name: 'Lorenzo'
            },
            {
                img: 'https://picsum.photos/id/331/50/50',
                name: 'Giuseppe'
            },
            {
                img: 'https://picsum.photos/id/19/50/50',
                name: 'Sara'
            },
            {
                img: 'https://picsum.photos/id/39/50/50',
                name: 'Ganni'
            },
            {
                img: 'https://picsum.photos/id/9/50/50',
                name: 'Luciano'
            },
            ]
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div>
        <div class="container Radius mt-4">
            <div class="row bgWhite">
                <div class="row d-flex justify-content-between flex-nowrap scrollable-container" ref="scrollableContainer">
                    <div class="col-1 my-3 d-flex flex-column align-items-center" v-for="storie in dati">
                        <img class="ImgStyle" :src="storie.img" alt="">
                        <div class="mt-1 text-black">{{ storie.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ImgStyle { 
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: contain;
    border: 2px solid rgb(252, 72, 18);
    padding: 2px;
}
.bgWhite {
    background-color: white;
}
.Radius{
    border: 1px solid rgb(206, 204, 204);
}
.scrollable-container::-webkit-scrollbar {
    display: none;
    /* Nasconde la scrollbar solo per Chrome, Safari, e altri browser basati su WebKit */
}
</style>