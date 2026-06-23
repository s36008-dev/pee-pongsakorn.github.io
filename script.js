// รอให้หน้าเว็บโหลดเสร็จสมบูรณ์ก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio ของ พงศกร พร้อมทำงานแล้ว!");

    // 1. ระบบกดคัดลอกโค้ดจากกล่อง Code Preview
    const codeBlocks = document.querySelectorAll('.code-preview');
    
    codeBlocks.forEach((block) => {
        // สร้างปุ่ม Copy เล็กๆ แปะไว้บนกล่องโค้ด
        const copyBtn = document.createElement('button');
        copyBtn.innerText = '📋 คัดลอกโค้ด';
        copyBtn.style.cssText = `
            background: #444;
            color: #fff;
            border: none;
            padding: 4px 8px;
            font-size: 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            float: right;
            margin-bottom: 5px;
            transition: 0.2s;
        `;

        // สลับตำแหน่งให้ปุ่มอยู่ด้านบนข้อความโค้ด
        block.insertBefore(copyBtn, block.firstChild);

        // เมื่อคลิกที่ปุ่มคัดลอก
        copyBtn.addEventListener('click', () => {
            const codeText = block.querySelector('pre').innerText;
            
            // ใช้คำสั่งบันทึกเข้า Clipboard ของคอมพิวเตอร์
            navigator.clipboard.writeText(codeText).then(() => {
                copyBtn.innerText = '✅ คัดลอกแล้ว!';
                copyBtn.style.background = '#28a745';
                
                // เปลี่ยนข้อความกลับเป็นเหมือนเดิมหลังจากผ่านไป 2 วินาที
                setTimeout(() => {
                    copyBtn.innerText = '📋 คัดลอกโค้ด';
                    copyBtn.style.background = '#444';
                }, 2000);
            }).catch(err => {
                console.error('ไม่สามารถคัดลอกโค้ดได้: ', err);
            });
        });
    });

    // 2. ระบบแจ้งเตือนเมื่อกดปุ่มลิงก์ไปดูโค้ดตัวเต็ม
    const githubButtons = document.querySelectorAll('.btn');
    githubButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const projectTitle = button.parentElement.querySelector('h3').innerText;
            console.log(`กำลังเดินทางไปดูโค้ดของโปรเจกต์: ${projectTitle}`);
            // นักเรียนสามารถเพิ่มคำสั่ง Alert หรืออนิเมชันตรงนี้เพิ่มได้ในอนาคตครับ
        });
    });
});
