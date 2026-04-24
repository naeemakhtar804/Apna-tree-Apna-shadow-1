// 1. Form Validation (Login & Signup)
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // پیج کو ریفریش ہونے سے روکتا ہے
            
            const inputs = form.querySelectorAll("input");
            let isValid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "#ccc";
                }
            });

            if (isValid) {
                alert("شکریہ! آپ کا فارم کامیابی سے جمع ہو گیا ہے۔");
                form.reset();
            } else {
                alert("براہ کرم تمام خانے پُر کریں۔");
            }
        });
    });

    // 2. Simple Image Click Alert (Gallery)
    const galleryImages = document.querySelectorAll(".card img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            alert("یہ تصویر آپ کے لگائے گئے درخت کی خوبصورتی کو ظاہر کر رہی ہے!");
        });
    });

    // 3. Dynamic Greeting (Based on Time)
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = "صبح بخیر! ";
        else if (hour < 18) greeting = "سہ پہر بخیر! ";
        else greeting = "شب بخیر! ";
        
        console.log(greeting + "Apna Tree ویب سائٹ پر خوش آمدید");
    }
});