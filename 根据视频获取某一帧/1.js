// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

let input = document.querySelector('input')
let img = document.querySelector('img')
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')

// const ffmpeg = createFFmpeg({ log: true });

// async function convertToH264(inputFile) {
//     await ffmpeg.load();
//     ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(inputFile));
//     await ffmpeg.run('-i', 'input.mp4', '-c:v', 'libx264', 'output.mp4');
//     const data = ffmpeg.FS('readFile', 'output.mp4');
//     return URL.createObjectURL(new Blob([data], { type: 'video/mp4' }));
// }

input.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    console.log(file, 'file')

    video.src = URL.createObjectURL(file);
    // video.src = convertToH264(file)
    // video.muted = true
    video.addEventListener("loadedmetadata", function () {
        captureFrame(video, 2);
    });
});


function captureFrame(video, time = 0) {
    video.currentTime = time; // 跳转到指定时间
    let isSeeked = false
    video.addEventListener("seeked", function capture() {
        if (isSeeked) return
        isSeeked = true

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        console.log(canvas.toDataURL("image/png"))
        img.src = canvas.toDataURL("image/png");

        isSeeked = false
        // 解除事件监听，防止多次触发
        video.removeEventListener("seeked", capture);
    });
}