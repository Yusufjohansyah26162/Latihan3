// set variable
nama = "yusuf" 
umur = 18
tempat_tinggal = "New York"
tabungan = 20000000

// pengecekan umur
if(umur > 40) {
    console.log(nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat DON')
}else if (umur <= 40 && umur >= 25){
    console.log(nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat Underboss')
}else if (umur <= 24 && umur >= 18){
    console.log(nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat Capo')
}else {
    console.log (nama + ' tidak mencurigakan')
}
