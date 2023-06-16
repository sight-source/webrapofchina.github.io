document.addEventListener('DOMContentLoaded', function () {
    var songList = document.querySelector('.songList'),
        btnPlay = songList.querySelectorAll('.btn-play'),
        fixedSong = document.querySelector('.fixedSong audio'),
        songSrc = [
            'images/xiaohetangshui.mp3',
            'images/chuleshuochang.mp3',
            'images/longlidiansi.mp3',
            'images/xingkongquaiqu.mp3',
            'images/taimeiyisile.mp3'
        ]
    btnPlay.forEach((item, index) => {
        item.songSrc = songSrc[index]
    })
    songList.addEventListener('click', function (e) {
        if (e.target.className != 'btn-play') return
        fixedSong.src = e.target.songSrc
        fixedSong.play()
    })
})