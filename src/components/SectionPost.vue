<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "SectionPost",
    data() {
        return {
            storie: store.dati,
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
    <div class="container mt-4">
        <div class="row d-flex justify-content-between">
            <div class="col-2">
                <img class="ImgStyle" src="/public/img/profile.jpg" alt="">
            </div>
            <div class="col-7 d-flex flex-column align-items-center ">
                <div class="StyleNameShort text-start">giuseppedeco</div>
                <div class="StyleNameLong ">Giuseppe Del Corso</div>
            </div>
            <div class="col-3 d-flex justify-content-end">
                <a class="StyleLink" href="www.google.com">Passa a</a>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-6">
                <div class="StyleNameLong">Sugerimenti Per Te</div>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <div class="StyleMostraShort fw-bold">Mostra Tutti</div>
            </div>
        </div>
        <div class="row mt-2">
            <div class=" my-3 d-flex flex-row align-items-center justify-content-between"
                    v-for="(dati, index) in storie" :key="index">
                    <img class="ImgStyle" :src="dati.img" alt="">
                    <div class="mt-1 StyleName text-black">
                        {{ dati.name }}
                    </div>
                    <button>Segui</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ImgStyle {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    object-fit: contain;
}
.StyleNameLong{
    font-size: 15px;
    color: rgb(133, 133, 133);
}
.StyleNameShort{
    margin-right: 39px;
    font-size: 15px;
    color: black;
}
.StyleMostraShort{
    font-size: 15px;
    color: black;
}
.StyleLink{
    color: rgb(47, 129, 206);
    font-size: 15px;
}
.StyleName{
    margin-right: 200px;
    font-weight: bold;
    text-align: start;
}
</style>