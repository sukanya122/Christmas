// สร้างหิมะตก
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) { // จำนวนหิมะ
        const snowflake = document.createElement('div');
        snowflake.classList.add('flake');
        snowflake.style.width = `${Math.random() * 10 + 5}px`; // ขนาดของหิมะ
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`; // ตำแหน่งเริ่มต้นจากซ้าย
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // เวลาในการตก
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // เวลาในการเริ่มตก
        snowContainer.appendChild(snowflake);
    }
}

window.onload = createSnowflakes;
