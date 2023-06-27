// 这是一个示例脚本，你可以根据需要添加自己的脚本代码
console.log('这是我的博客页面');
// 雪花效果
let snowflakeCount = 0;

function createSnowflake() {
    if (snowflakeCount >= 30) {
        return; // 达到雪花数量上限，停止生成新的雪花
    }

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';

    // 雪花随机大小
    const size = Math.random() * 2 + 2;
    snowflake.style.fontSize = `${size}rem`;

    // 选择雪花运动轨迹
    if (Math.random() < 0.5) {
        snowflake.classList.add('vertical');
    } else {
        snowflake.classList.add('diagonal');
    }

    snowflake.style.animationDuration = Math.random() * 6 + 10 + 's'; // 调慢雪花速度

    document.querySelector('.snowflakes').appendChild(snowflake);

    setTimeout(function() {
        snowflake.remove();
        snowflakeCount--;
    }, 12000);
    // 增加雪花持续时间

    snowflakeCount++;
}

setInterval(createSnowflake, 1000); // 增加雪花生成间隔