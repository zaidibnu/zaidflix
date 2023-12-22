<template>
    <div class="row g-0 bgPage">
        <div class="col-6 colA">
            <div class="w-100 d-flex justify-content-left " 
            style="height: 8vh; overflow-y: hidden; margin:0;
            "
            >
                <router-link to="/"  class="btn btn-light m-1">
                    <i class="bx bx-icon bx-left-arrow-circle"></i>
                    Back</router-link>  
            </div>
            <div style="height: 92vh; max-height: 92vh; overflow: hidden;" 
            class="p-2"
            >
                <div class="cardx w-100 p-4" style="
                width: 100%;
                margin-top:10vh;
                max-height: 100%;
                overflow-y: hidden;
                ">
                    <div class="m-3">
                        <h1 class="text-center text-white">Contact me..</h1>
                        <p>
                    Selamat datang di halaman kontak kami! Kami senang dapat berkomunikasi dengan Anda. Sebagai tim yang berdedikasi, kami mengutamakan keterlibatan dan interaksi dengan pelanggan kami.
                </p>
                <p>
                    Apakah Anda memiliki pertanyaan, masukan, atau hanya ingin berbagi pengalaman Anda dengan produk atau layanan kami, tim kami siap membantu. Silakan gunakan formulir kontak di bawah ini atau hubungi kami langsung melalui informasi kontak yang tercantum. Kami percaya bahwa kolaborasi dan komunikasi yang efektif adalah kunci kesuksesan, dan kami berkomitmen untuk memberikan layanan pelanggan terbaik kepada Anda.
                </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6 colB">
                <div class="p-4" style="height: 100%;">
                    <div class="container d-flex justify-content-center">
                <img src="https://www.svgrepo.com/download/530453/mail-reception.svg" style="width: 64px; height: 64px;">
            </div>
                    <div class="row mb-4">
                        <div class="col-12">
                            <input type="text" class="w-100 form-control" placeholder="Your Name"/>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-12">
                            <input type="text" class="w-100 form-control" placeholder="Your Email"/>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-12">
                            <textarea type="text"
                            style="height: 150px;"
                            class="w-100 card p-2 form-control" placeholder="Message"/>
                        </div>
                    </div>
                    <div class="row p-1 form-control">
                        <div class="col-12 btn btn-secondary ">
                           <i class="bx bx-icon bx-mail-send"></i>
                            Send
                        </div>
                    </div>
                </div>
        </div>
</div>
</template>
<script>
export default{
    name:'ContactMe'
}
</script>
<style scoped>
.bgPage{
    background:url('https://unsplash.com/photos/MPKQiDpMyqU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVybWluYWwlMjBjb2Rpbmd8ZW58MHx8fHwxNzAzMjg2Nzc1fDA&force=true&w=640');
    background-size:cover;
    background-position: center;
}
.colA{
    background-size: cover;
    backdrop-filter:blur(4px);
    height: 100vh;
    background-position: center;
    margin: 0;
}
.colB{
    background: rgba(0,0,0,0.8);

}
.cardx{
    background: rgba(0,0,0,0.8);
    border-radius: 6px;
    color: white;
    border:1px solid white; 
    backdrop-filter: blur(8px);
    font-size: 16px;
    text-align: justify;
    font-weight: 500;
}
</style>