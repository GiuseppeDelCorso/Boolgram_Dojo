<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
    data() {
        return {
            store
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
        <div class="container bgWhite">
            <div class="row">
                <div class="col-4 mt-3">
                    <img class="LogoStyle" src="/public/img/logo.png" alt="">
                </div>
                <div class="col-4 mt-3">
                    <nav class="navbar navbar-light bgWhite ms-5 mb-2">
                        <div class="container-fluid">
                            <form class="d-flex">
                                <input class="form-control me-2 text-center" type="search" placeholder="Cerca" aria-label="Search">
                            </form>
                        </div>
                    </nav>
                </div>
                <div class="col-4 d-flex justify-content-end mt-3">
                    <div>
                        <i class="fa-regular fa-heart text-black px-2"></i>
                        <i class="fa-solid fa-house text-black px-2"></i>
                        <img class="ImgStyle ms-2" src="/public/img/profile.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr0">
    </div>
</template>

<style scoped lang="scss">
.ImgStyle{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    object-fit: contain;
}
.LogoStyle{
    width: 100px;
    object-fit: contain;
    height: 100%;
}
.bgWhite{
    background-color: rgb(248, 248, 248);
}
.hr0{
    margin: 0;
    height: 3px;
    color: rgb(138, 138, 138);
}
</style>